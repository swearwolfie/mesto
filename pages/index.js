const buttonEditProfile = document.querySelector('.profile__edit-button');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__description');
const nameInput = document.querySelector('.popup__input_line_name');
const jobInput = document.querySelector('.popup__input_line_description');
const popupEdit = document.querySelector('.popup_edit');
const popupAdd = document.querySelector('.popup_add');
const buttonAddCard = document.querySelector('.profile__add-button');
const cardNameInput = document.querySelector('.popup__input_add_name');
const cardPicInput = document.querySelector('.popup__input_add_pic');
const popups = document.querySelectorAll('.popup');
const popupPicImage = document.querySelector('.popup__image');
const popupPicName = document.querySelector('.popup__description');
const popupPic = document.querySelector('.popup_pic');
const cards = document.querySelector('.cards');
const popupAddForm = document.querySelector('.popup__form_add');

import { Card } from '../components/Card.js'
import Section from '../components/Section.js';
import { FormValidator } from '../components/FormValidator.js';
import Popup from '../components/Popup.js';
import PicturePopup from '../components/PicturePopup.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

const popupEditValidation = new FormValidator({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'}, popupEdit);

const popupAddValidation = new FormValidator({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'}, popupAdd);


popupEditValidation.enableValidation();

// ↓ новая фигулина про юзера

const userInfo = new UserInfo({
  userName: '.popup__input_line_name',
  userDescription: '.popup__input_line_description'
})

// ↓ новая форма edit

const editForm = new PopupWithForm({
  popupElement: '.popup_edit', 
  handleSubmit: (formData) => {
    userInfo.setUserInfo(formData);
  }
});

editForm.setEventListeners();

// ↓ активация кнопки edit

buttonEditProfile.addEventListener('click', () => {  
  nameInput.value = userInfo.getUserInfo().userName;
  jobInput.value = userInfo.getUserInfo().userDescription;
  editForm.openPopup();
});

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


// ↓ новая фигулина про картинки

const picturePopup = new PicturePopup('.popup_pic');


// ↓ и так понятно 

function handleCardClick(title, link) {
  picturePopup.openPopup(title, link);
  picturePopup.setEventListeners();
}


// ↓  блок с картинками

const cardsList = new Section({
  data: initialCards,
  renderer:(item) => {
    const cardThing = new Card(item.name, item.link, '.cards__item-template', handleCardClick);
    const cardElement = cardThing.generateCard();
    cardsList.addItem(cardElement);
  }
}, 
'.cards'
);

cardsList.renderItems();

// ↓  новая форма add

const addForm = new PopupWithForm({
  popupElement: '.popup_add',
  handleSubmit: (data) => { 
    console.log(data);
    const addedCard = new Card(data.title, data.picture, '.cards__item-template', handleCardClick);
    cardsList.addItem(addedCard.generateCard());
  }
})

addForm.setEventListeners();


// ↓ активация кнопки add

buttonAddCard.addEventListener('click', () => {
  popupAddValidation.toggleButtonState();
  addForm.openPopup();
});

popupAddValidation.enableValidation();