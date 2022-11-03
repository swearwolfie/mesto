import { openPopup } from './index.js'
import { closePopup } from './index.js'

const popupPicImage = document.querySelector('.popup__image');
const popupPicName = document.querySelector('.popup__description');
const buttonClosePicPopup = document.querySelector('.popup__close-icon_pic');
const popupPic = document.querySelector('.popup_pic');

export class Card {
  constructor(title, link, templateSelector) {
    this._title = title;
    this._link = link;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    const cardElement = document
    .querySelector(this._templateSelector)
    .content
    .querySelector('.cards__item')
    .cloneNode(true);

    return cardElement;
  }

  // ↓ удаление карточек

  _handleDelete() {
    const currentCardItem = this._element.closest('.cards__item');
    console.log(currentCardItem);
    currentCardItem.remove();
  }

  // ↓ лайки

  _handleLike() {
    const likeButtonClosest = this._element.querySelector('.cards__like-button');
    likeButtonClosest.classList.toggle('cards__like-button_active');
  }

  // ↓ попап картинки

  _handleFullPic() {
    popupPicImage.src = this._element.querySelector('.cards__pic').src;
    popupPicName.textContent = this._element.querySelector('.cards__name').textContent;
    popupPicImage.alt = this._element.querySelector('.cards__name').textContent;
    openPopup(popupPic);

  }

  // ↓ ф-ция слушателей лайка, корзины и фулла

  _setEventListeners() {
    const deleteButton = this._element.querySelector('.cards__bin');
    deleteButton.addEventListener('click', () => { this._handleDelete() });

    const likeButton = this._element.querySelector('.cards__like-button');
    likeButton.addEventListener('click', () => { this._handleLike() });

    const img = this._element.querySelector('.cards__pic');
    img.addEventListener('click', () => { this._handleFullPic() });

    buttonClosePicPopup.addEventListener('click', () => { closePopup(popupPic) });
  }

  // ↓ создание карточки 

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector('.cards__pic').src = this._link;
    this._element.querySelector('.cards__pic').alt = this._title;
    this._element.querySelector('.cards__name').textContent = this._title;

    return this._element;
  }

}