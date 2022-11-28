export default class Popup {
  constructor(popupElement) {
    this._popup = document.querySelector(popupElement);
    this._popupOpened = document.querySelector('.popup_opened');
    this._handleEscCloseRef = this._handleEscClose.bind(this);
    this._closeButton = document.querySelector('.popup__close-icon');
  }

  // ↓ ф-ции /методы/ открытия и закрытия

openPopup() {
  this._popup.classList.add('popup_opened');
  document.addEventListener('keydown', this._handleEscCloseRef)
}

closePopup() {
  this._popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', this._handleEscCloseRef);
}

// ↓ закрытие через esc

_handleEscClose(evt) {
  if (evt.key === 'Escape') {
    this.closePopup();
  }
};

// ↓ закрытие при щелчке на крестик или оверлей

setEventListeners() {
  this._popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
        this.closePopup()
    } if (evt.target.classList.contains('popup__close-icon')) {
      this.closePopup()
  }
})
}

}
