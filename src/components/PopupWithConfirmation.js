import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor({ popupSelector }) {
    super(popupSelector);
    this._form = this._popup.querySelector(".popup__form");
    this._popupButton = this._popup.querySelector('.popup__submit');
    this._popupButtonTextContent = this._popup.querySelector('.popup__submit').textContent;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();

      this._handleDeleteConfirmation();
      /* this.closePopup(); */
    });
  }

  setDeleteConfirmation(handleDeleteConfirmation) {
    this._handleDeleteConfirmation = handleDeleteConfirmation;
  }

  renderLoading(isLoading) {
    if(isLoading) {
      this._popupButton.textContent = 'Сохранение...'
    } else {
      this._popupButton.textContent = this._popupButtonTextContent;
    }
  }
}