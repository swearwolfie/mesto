import "./index.css";

// _id: '80f1ef482b84886f3d501767'

const buttonEditProfile = document.querySelector(".profile__edit-button");
const nameInput = document.querySelector(".popup__input_line_name");
const jobInput = document.querySelector(".popup__input_line_description");
const popupEdit = document.querySelector(".popup_edit");
const popupAdd = document.querySelector(".popup_add");
const popupAvatar = document.querySelector(".popup_avatar");
const buttonAddCard = document.querySelector(".profile__add-button");
const buttonChangeAvatar = document.querySelector(".profile__photo-edit-button");

import { Card } from "../components/Card.js";
import Section from "../components/Section.js";
import { FormValidator } from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import { config } from "../utils/constants";
import Api from "../components/Api";
import PopupWithConfirmation from "../components/PopupWithConfirmation";


// ↓  конфиг API

const apiConfig = {
  url: 'https://mesto.nomoreparties.co/v1/cohort-54/',
  headers: {
    authorization: 'e005a204-1370-46e1-93c7-d7d1a162ac21',
    "Content-type": 'application/json'
  } 
}

const apiNew = new Api(apiConfig);

const popupEditValidation = new FormValidator(config, popupEdit);
const popupAddValidation = new FormValidator(config, popupAdd);
const popupChangeAvatarValidation = new FormValidator(config, popupAvatar);

popupEditValidation.enableValidation();

// ↓ новая фигулина про юзера

let userId // получаем ниже ↓↓↓

/*
apiNew.getProfileInfo()
.then((profileUserInfo) => {
  userInfo.setUserInfo(profileUserInfo.name, profileUserInfo.about);
  userInfo.setUserAvatar(profileUserInfo.avatar);
  userId = profileUserInfo._id; // я родился
}).catch((error) => {
  console.log(error)
}) */

// КАРТОЧКИ

// ↓ новая фигулина про картинки

const picturePopup = new PopupWithImage(".popup_pic");
picturePopup.setEventListeners();

// ↓ функция попапа картинки

function handleCardClick(title, link) {
  picturePopup.openPopup(title, link);
}

// ↓ новая форма для подтверждения удаления карточки 

const confirmDeleteForm = new PopupWithConfirmation({
  popupSelector: '.popup_make-sure'
})

confirmDeleteForm.setEventListeners();

// ↓  новый экземпляр карточки

function addCard(data) { 
  const cardItem = new Card({
    title: data.name,
    link: data.link,
    likes: data.likes,
    id: data._id,
    userId: userId,
    ownerId: data.owner._id,
  },
  ".cards__item-template",
  handleCardClick,
  (id) => {
    confirmDeleteForm.openPopup();
    confirmDeleteForm.setDeleteConfirmation(() => {
      confirmDeleteForm.renderLoading(true);
      apiNew.deleteCard(id)
      .then((res) => {
        cardItem.handleDelete()
        confirmDeleteForm.closePopup()
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        confirmDeleteForm.renderLoading(false);
      }) 
      });
  },
  (id) => {
    if (cardItem.isLiked()) {
      apiNew.deleteLike(id)
      .then((res) => {
        cardItem.countLikes(res.likes);
      })
      .catch((error) => {
        console.log(error);
      })
    } else {
    apiNew.putLike(id)
    .then((res) => {
      cardItem.countLikes(res.likes);
    })
    .catch((error) => {
      console.log(error)
    })
  }}
);

return cardItem.generateCard();
}


// ↓  блок с картинками

const cardsList = new Section(
  {
    renderer: (data) => {
      cardsList.addItem(addCard(data));
    },
  },
  ".cards"
);

// ↓  приключения с отрисовкой карточек через API 
// ↓  отрисовка
/*
apiNew.getCards() // result - готовые данные
  .then((cards) => {
    cardsList.renderItems(cards);
}).catch((error) => {
  console.log(error);
});*/

// ↓  объединенные API: отрисовка карточек и профиля

Promise.all([ //в Promise.all передаем массив промисов которые нужно выполнить

  apiNew.getProfileInfo(),
  apiNew.getCards()

])

.then((values)=>{ //попадаем сюда когда оба промиса будут выполнены

  const userInfoValues = values[0];
  const cards = values[1];
  userInfo.setUserInfo(userInfoValues.name, userInfoValues.about);
  userInfo.setUserAvatar(userInfoValues.avatar);
  userId = userInfoValues._id; // я родился

  cardsList.renderItems(cards);

})

.catch((err)=>{ 
      console.log(err);

})

const userInfo = new UserInfo({
  userName: ".profile__name",
  userDescription: ".profile__description",
  userAvatar: ".profile__photo"
});


// ↓ новая форма edit

const editForm = new PopupWithForm({
  popupSelector: ".popup_edit",
  handleSubmit: (data) => {
    editForm.renderLoading(true);
    apiNew.editProfile(data.profile, data.description) // data – содержимое инпутов, profile/description – name'ы инпутов из индекс.хтмл
    .then((submittedInfo) => {
      userInfo.setUserInfo(submittedInfo.name, submittedInfo.about);
      editForm.closePopup();
    }).catch((error) => {
      console.log(error);
    }).finally(() => {
      editForm.renderLoading(false);
    })
  },
});

editForm.setEventListeners();

// ↓ активация кнопки edit

buttonEditProfile.addEventListener("click", () => {
  const gottenInfo = userInfo.getUserInfo();
  nameInput.value = gottenInfo.userName;
  jobInput.value = gottenInfo.userDescription;
  editForm.openPopup();
});

// ↓ новая форма редактирования аватара

const avatarPopup = new PopupWithForm({
  popupSelector: '.popup_avatar',
  handleSubmit: (data) => {
    avatarPopup.renderLoading(true)
    apiNew.changeAvatar(data.avatar)
    .then((res) => {
      userInfo.setUserAvatar(res.avatar);
      avatarPopup.closePopup();
    })
    .catch((error) => { console.log(error) })
    .finally(() => {
      avatarPopup.renderLoading(false);
    })
  }
  });

avatarPopup.setEventListeners();
popupChangeAvatarValidation.enableValidation();

// ↓ активация кнопки editAvatar

buttonChangeAvatar.addEventListener("click", () => {
  avatarPopup.openPopup();
})


// ↓  новая форма add

const addForm = new PopupWithForm({
  popupSelector: ".popup_add",
  handleSubmit: (data) => {
    addForm.renderLoading(true);
    apiNew.addNewCard(data.title, data.picture)
    .then((newCard) => {
      cardsList.addItem(addCard(newCard));
      addForm.closePopup();
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      addForm.renderLoading(false);
    })
  },
});

addForm.setEventListeners();

// ↓ активация кнопки add

buttonAddCard.addEventListener("click", () => {
  popupAddValidation.resetValidation();
  addForm.openPopup();
});

popupAddValidation.enableValidation();
