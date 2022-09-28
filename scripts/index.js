const popupBase = document.querySelector('.popup');
const buttonEditProfile = document.querySelector('.profile__edit-button');
const buttonClosePopup = document.querySelector('.popup__close-icon');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__description');
const nameInput = document.querySelector('.popup__input_line_name');
const jobInput = document.querySelector('.popup__input_line_description');
const popupEdit = document.querySelector('.popup_edit');
const popupAdd = document.querySelector('.popup_add');
const buttonAddCard = document.querySelector('.profile__add-button');
const buttonClosePopupAdd = document.querySelector('.popup__close-icon_add')
const cardNameInput = document.querySelector('.popup__input_add_name');
const cardPicInput = document.querySelector('.popup__input_add_pic');

// ↓ ф-ции открытия и закрытия

function openPopup(popupBase) {
  popupBase.classList.add('popup_opened');
}

function closePopup(popupBase) {
  popupBase.classList.remove('popup_opened');
}

// ↓ выскакивание окошка edit

buttonEditProfile.addEventListener('click', () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;

openPopup(popupEdit);
});

buttonClosePopup.addEventListener('click', () => {
  closePopup(popupEdit);
});

// ↓ выскакивание окошка add

 buttonAddCard.addEventListener('click', () => {
  openPopup(popupAdd);
});
 buttonClosePopupAdd.addEventListener('click', () => {
  closePopup(popupAdd);
});

// ↓ сабмит для редактирования профиля

const popupForm = document.querySelector('.popup__form') // элементы, куда должны быть вставлены значения полей

function handleFormSubmit (evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;  // новые значения

  closePopup(popupEdit);

}

popupForm.addEventListener('submit', handleFormSubmit); // прикрепляем обработчик к форме:

// ↓ сабмит для добавления карточек

const cards = document.querySelector('.cards');
const cardsItemTemplate = document.querySelector('.cards__item-template').content;
const cardItemFaux = cardsItemTemplate.querySelector('.cards__item_template')
const popupAddForm = document.querySelector('.popup__form_add');
const cardName = cardItemFaux.querySelector('.cards__name');
const cardPic = cardItemFaux.querySelector('.cards__pic');

// ↓ ф-ция добавления карточки

function addNewCard() {
  const addedCardItem = cardItemFaux.cloneNode(true);
  setEventListeners(addedCardItem);
  cards.prepend(addedCardItem);
  
}

// ↓ ф-ция слушателей лайка и корзины

function setEventListeners(element) {
  const deleteButton = element.querySelector('.cards__bin');
  deleteButton.addEventListener('click', handleDelete);

  const likeButton = element.querySelector('.cards__like-button');
  likeButton.addEventListener('click', handleLike);
} 

// ↓ удаление карточек

function handleDelete(event) {
  const currentCardItem = event.target.closest('.cards__item');
  currentCardItem.remove();
}

// ↓ лайки

function handleLike(event) {
  const currentCardItem = event.target.closest('.cards__item');
  const likeButtonClosest = currentCardItem.querySelector('.cards__like-button');
  likeButtonClosest.classList.toggle('cards__like-button_active');

}

// ↓ сабмит добавления карточки

popupAddForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  cardName.textContent = cardNameInput.value;
  cardPic.src = cardPicInput.value;
  cardPic.alt = cardNameInput.value;

  addNewCard();

  closePopup(popupAdd);
});

// ↓ лайки и корзина для оригинальных карточек

const cardItemArr = Array.from(document.querySelectorAll('.cards__item'));
cardItemArr.forEach(setEventListeners);

// ↓ добавляем свои карточки

const initialCards = [
  {
    name: 'Национальный Парк Бэдлэндс',
    link: 'https://i.ibb.co/x6YS8s3/Badlands-National-Park-South-Dakota-USA.jpg'
  },
  {
    name: 'Горы Блу Ридж',
    link: 'https://i.ibb.co/pj5KYMy/Blue-Ridge-Mountains.jpg'
  },
  {
    name: 'Йеллоустоун',
    link: 'https://i.ibb.co/MZB5HMW/Yellowstone.jpg'
  },
  {
    name: 'Тропа Дяди Тома',
    link: 'https://i.ibb.co/0jBFndg/Uncle-Toms-Trail.jpg'
  },
  {
    name: 'Водопад Малтнома',
    link: 'https://i.ibb.co/QDjSfWy/Multnomah-Falls.jpg'
  },
  {
    name: 'Остров Оаху',
    link: 'https://i.ibb.co/TkPqyZH/Oahu.jpg'
  }
];

initialCards.forEach(function (element) {
  cardName.textContent = element.name;
  cardPic.src = element.link;;
  cardPic.alt = element.name;

  addNewCard();

  closePopup(popupAdd);
});


// ↓ попап картинки

const cardsPic = document.querySelectorAll('.cards__pic');
const cardsPicNameA = document.querySelectorAll('.cards__name');
const popupPic = document.querySelector('.popup_pic');
const popupPicImage = document.querySelector('.popup__image');
const popupPicName = document.querySelector('.popup__description');
const buttonClosePicPopup = document.querySelector('.popup__close-icon_pic');

cards.addEventListener('click', function(evt) {
  const eventTarget = evt.target;
  popupPicImage.src = eventTarget.src;
  const container = eventTarget.closest('.cards__item');
  popupPicName.textContent = container.querySelector('.cards__name').textContent; 
  popupPicImage.alt = container.querySelector('.cards__name').textContent;
  
  if (evt.target.classList != 'cards__pic') {
    return console.log('не та область!')
  };
  
  openPopup(popupPic);
  
  });

buttonClosePicPopup.addEventListener('click', () => {
  closePopup(popupPic);
});