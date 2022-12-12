export class Card {
  constructor(data, templateSelector, handleCardClick, handleBinClick, handleLikeClick) {
    this._title = data.title;
    this._link = data.link;
    this._likes = data.likes;
    this._id = data.id;
    this._userId = data.userId;
    this._ownerId = data.ownerId;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleBinClick = handleBinClick;
    this._handleLikeClick = handleLikeClick;
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

  _putLike() {
    this._likeButton.classList.add("cards__like-button_active");
  }

  _omitLike() {
    this._likeButton.classList.remove("cards__like-button_active");
  }

  isLiked() {
    this._userHasLiked = this._likes.find(user => user._id === this._userId) // проверяем, есть ли в массиве лайков я
    return this._userHasLiked;
  }

  // ↓ счетчик лайков

  countLikes(newLikes) {
    this._likes = newLikes;
    this._likesNumber = this._element.querySelector('.cards__likes-number');
    this._likesNumber.textContent = this._likes.length;

    if (this.isLiked()) {
      this._putLike();
    } else {
      this._omitLike();
    }
  }

   // ↓ скрыть корзину на чужих карточках
   _hideBin() {
    if (this._ownerId !== this._userId) {
      this._deleteButton.style.display = 'none';
    }
   }


  // ↓ ф-ция слушателей лайка, корзины и фулла

  _setEventListeners() {
    this._deleteButton = this._element.querySelector(".cards__bin");
    this._deleteButton.addEventListener("click", () => {
      this._handleBinClick(this._id);
    });
    this._hideBin();

    this._likeButton = this._element.querySelector(".cards__like-button");
    this._likeButton.addEventListener("click", () => {
      this._handleLikeClick(this._id);
    });

    this._cardImg = this._element.querySelector(".cards__pic");
    this._cardImg.addEventListener("click", () => {
      this._handleCardClick(this._title, this._link);
    });
  }

  // ↓ создание карточки

  generateCard() {
    this._element = this._getTemplate();
    this._cardTitle = this._element.querySelector(".cards__name");
    this._setEventListeners();

    this._cardImg.src = this._link;
    this._cardImg.alt = this._title;
    this._cardTitle.textContent = this._title;

    this.countLikes(this._likes);

    return this._element;
  }
}
