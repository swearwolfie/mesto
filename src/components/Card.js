export class Card {
  constructor(title, link, likes, id, templateSelector, handleCardClick, handleBinClick) {
    this._title = title;
    this._link = link;
    this._likes = likes;
    this._id = id;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleBinClick = handleBinClick;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(".cards__item")
      .cloneNode(true);

    return cardElement;
  }

  
  // ↓ удаление карточек

  handleDelete() {
    this._element.remove();
    this._element = null;
  }

  // ↓ кнопка лайка

  _handleLike() {
    this._likeButton.classList.toggle("cards__like-button_active");
  }

  // ↓ счетчик лайков

  _countLikes() {
    this._likesNumber = this._element.querySelector('.cards__likes-number');
    this._likesNumber.textContent = this._likes.length;
  }


  // ↓ ф-ция слушателей лайка, корзины и фулла

  _setEventListeners() {
    this._deleteButton = this._element.querySelector(".cards__bin");
    this._deleteButton.addEventListener("click", () => {
      this._handleBinClick(this._id);
    });

    this._likeButton = this._element.querySelector(".cards__like-button");
    this._likeButton.addEventListener("click", () => {
      this._handleLike();
    });

    this._cardImg = this._element.querySelector(".cards__pic");
    this._cardImg.addEventListener("click", () => {
      this._handleCardClick(this._title, this._link);
    });

    this._countLikes();
  }

  // ↓ создание карточки

  generateCard() {
    this._element = this._getTemplate();
    this._cardTitle = this._element.querySelector(".cards__name");
    this._setEventListeners();

    this._cardImg.src = this._link;
    this._cardImg.alt = this._title;
    this._cardTitle.textContent = this._title;

    return this._element;
  }
}
