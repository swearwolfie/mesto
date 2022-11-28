export class Card {
  constructor(title, link, templateSelector, handleCardClick) {
    this._title = title;
    this._link = link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
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
    this._currentCardItem = this._element.closest('.cards__item');
    this._currentCardItem.remove();
  }

  // ↓ лайки

  _handleLike() {
    this._likeButton.classList.toggle('cards__like-button_active');
  }

  // ↓ ф-ция слушателей лайка, корзины и фулла

  _setEventListeners() {
    this._deleteButton = this._element.querySelector('.cards__bin');
    this._deleteButton.addEventListener('click', () => { this._handleDelete() });

    this._likeButton = this._element.querySelector('.cards__like-button');
    this._likeButton.addEventListener('click', () => { this._handleLike() });

    this._cardImg = this._element.querySelector('.cards__pic');
    this._cardImg.addEventListener('click', () => { this._handleCardClick(this._title, this._link)});
  }

  // ↓ создание карточки 

  generateCard() {
    this._element = this._getTemplate();
    this._cardTitle = this._element.querySelector('.cards__name');
    this._setEventListeners();

    this._cardImg.src = this._link;
    this._cardImg.alt = this._title;
    this._cardTitle.textContent = this._title;

    return this._element;
  }

}