import "./index.css";

const buttonEditProfile = document.querySelector(".profile__edit-button");
const nameInput = document.querySelector(".popup__input_line_name");
const jobInput = document.querySelector(".popup__input_line_description");
const popupEdit = document.querySelector(".popup_edit");
const popupAdd = document.querySelector(".popup_add");
const buttonAddCard = document.querySelector(".profile__add-button");

import { Card } from "../components/Card.js";
import Section from "../components/Section.js";
import { FormValidator } from "../components/FormValidator.js";
import PicturePopup from "../components/PicturePopup.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import { config } from "../utils/constants";
import { initialCards } from "../utils/initialCards";

const popupEditValidation = new FormValidator(config, popupEdit);
const popupAddValidation = new FormValidator(config, popupAdd);

popupEditValidation.enableValidation();

// ↓ новая фигулина про юзера

const userInfo = new UserInfo({
  userName: ".profile__name",
  userDescription: ".profile__description",
});

// ↓ новая форма edit

const editForm = new PopupWithForm({
  popupSelector: ".popup_edit",
  handleSubmit: (data) => {
    userInfo.setUserInfo(data);
    editForm.closePopup();
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

// ↓ новая фигулина про картинки

const picturePopup = new PicturePopup(".popup_pic");
picturePopup.setEventListeners();

// ↓ и так понятно

function handleCardClick(title, link) {
  picturePopup.openPopup(title, link);
}

// ↓  новый экземпляр карточки

function addCard(data) { 
  const cardItem = new Card(
  data.title,
  data.picture,
  ".cards__item-template",
  handleCardClick
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

cardsList.renderItems(initialCards);

// ↓  новая форма add

const addForm = new PopupWithForm({
  popupSelector: ".popup_add",
  handleSubmit: (data) => {
    cardsList.addItem(addCard(data));
    addForm.closePopup();
  },
});

addForm.setEventListeners();

// ↓ активация кнопки add

buttonAddCard.addEventListener("click", () => {
  popupAddValidation.resetValidation();
  addForm.openPopup();
});

popupAddValidation.enableValidation();
