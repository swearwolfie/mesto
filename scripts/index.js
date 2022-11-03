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

import { Card } from './Card.js'
import { FormValidator } from './FormValidator.js';

const popupEditValidation = new FormValidator({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'}, popupEdit);
popupEditValidation.enableValidation();

const popupAddValidation = new FormValidator({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'}, popupAdd);
popupAddValidation.enableValidation();

// ↓ ф-ции открытия и закрытия

export function openPopup(popupBase) {
  popupBase.classList.add('popup_opened');
  document.addEventListener('keydown', keyHandler)
}

export function closePopup(popupBase) {
  popupBase.classList.remove('popup_opened');
  document.removeEventListener('keydown', keyHandler);
}

// ↓ закрытие через esc

 function keyHandler(evt) {
  if (evt.key === 'Escape') {
    const popupEscClose = document.querySelector('.popup_opened');
    closePopup(popupEscClose);
  }
};

// ↓ закрытие при щелчке на оверлей

const popupBaseArr = Array.from(document.querySelectorAll('.popup'));
popupBaseArr.forEach((item) => { item.addEventListener('click', closePopupWithOverlay)
} );


function closePopupWithOverlay(evt) {
  if (evt.target.classList.contains ('popup')) {
    closePopup(evt.target);
  } else {
    return console.log('не та область!');
}
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
const popupAddForm = document.querySelector('.popup__form_add');

function render(item) {
  const newCard = new Card (item.name, item.link, '.cards__item-template');
  const cardElementOG = newCard.generateCard();

  cards.prepend(cardElementOG);
}


// ↓ отключение кнопки

function buttonDisabled() {
  const buttonSubmit = document.querySelector('.popup__submit_add');
  buttonSubmit.setAttribute('disabled', 'true');
  buttonSubmit.classList.add('popup__submit_disabled');
};

// ↓ сабмит добавления карточки

popupAddForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const submittedInfo = { 
  name: cardNameInput.value,
  link: cardPicInput.value
}

  render(submittedInfo);

  closePopup(popupAdd);
  buttonDisabled()
  cardNameInput.value = '';
  cardPicInput.value = '';

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

initialCards.forEach((item) => {
  render(item);
});