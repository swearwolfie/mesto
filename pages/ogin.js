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
import { FormValidator } from '../components/FormValidator.js';

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
  document.addEventListener('keydown', closeByEscape)
}

export function closePopup(popupBase) {
  popupBase.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape);
}

// ↓ закрытие при щелчке на крестик или оверлей

popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_opened')) {
          closePopup(popup)
      } if (evt.target.classList.contains('popup__close-icon')) {
        closePopup(popup)
    }
  })
})


// ↓ закрытие через esc

 function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const popupEscClose = document.querySelector('.popup_opened');
    closePopup(popupEscClose);
  }
};

// ↓ выскакивание окошка edit

buttonEditProfile.addEventListener('click', () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;

  openPopup(popupEdit);
});

// ↓ выскакивание окошка add

 buttonAddCard.addEventListener('click', () => {
  popupAddValidation.resetValidation();
  openPopup(popupAdd);
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

// ↓ ф-ции создания карточек

function createCard(item) {
  const newCard = new Card (item.name, item.link, '.cards__item-template', handleCardClick);
  const cardElement = newCard.generateCard();
  return cardElement
}

function handleCardClick(title, link) {
  popupPicImage.src = link;
  popupPicName.textContent = title;
  popupPicImage.alt = title;
  openPopup(popupPic);
}

function render(item) {
  const card = createCard(item, '.cards__item-template')
  cards.prepend(card);
}
// ↓ сабмит добавления карточки

popupAddForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const submittedInfo = { 
  name: cardNameInput.value,
  link: cardPicInput.value
}
  render(submittedInfo);

  closePopup(popupAdd);
  popupAddValidation.resetValidation();
  evt.target.reset();

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