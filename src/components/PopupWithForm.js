import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({ popupElement, handleSubmit }) {
    super(popupElement);
    this._handleSubmit = handleSubmit;
    this._form = this._popup.querySelector(".popup__form");
    // достаём все элементы полей
    this._inputList = this._popup.querySelectorAll(".popup__input");
  }

  _getInputValues() {
    // создаём пустой объект
    this._formValues = {};

    // добавляем в этот объект значения всех полей
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
      console.log(this._formValues);
    });

    // возвращаем объект значений
    return this._formValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();

      this._handleSubmit(this._getInputValues());
      this.closePopup();
    });
  }

  closePopup() {
    super.closePopup();
    this._form.reset();
  }
}
