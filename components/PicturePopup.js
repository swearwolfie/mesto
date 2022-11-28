import Popup from "./Popup.js";

export default class PicturePopup extends Popup {
  constructor(popupElement) {
    super(popupElement);
    this._picPopupImage = this._popup.querySelector('.popup__image');
    this._picPopupName = this._popup.querySelector('.popup__description');
  }

  openPopup(title, link) {
    this._picPopupImage.src = link;
    this._picPopupName.textContent = title;
    this._picPopupName.alt = title;
    super.openPopup();
}
}