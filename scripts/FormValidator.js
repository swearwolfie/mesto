

export class FormValidator {
  constructor(settings, formElement) {
    this._formSelector = settings.formSelector;
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;
    this._formElement = formElement;
    this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
  }

  // показать ошибку
  _showInputError = (inputElement, errorMessage) => {
    // Находим элемент ошибки внутри самой функции
    this._errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    this._errorElement.textContent = errorMessage;
    this._errorElement.classList.add(this._errorClass);
  };


  // скрыть ошибку
  _hideInputError = (inputElement) => {
    // Находим элемент ошибки
    this._errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    this._errorElement.classList.remove(this._errorClass);
    this._errorElement.textContent = '';
  };

  // кнопка
  _toggleButtonState = () => {
    if (this._hasInvalidInput(this._inputList)) {
      // делаем кнопку неактивной
      this._buttonElement.classList.add(this._inactiveButtonClass);
      this._buttonElement.setAttribute('disabled', 'true');
    } else {
      // иначе активна
      this._buttonElement.classList.remove(this._inactiveButtonClass);
      this._buttonElement.removeAttribute('disabled', 'true');
    }
  };

  // проверить инпуты для активации кнопки
  _hasInvalidInput = () => {
    // проходим по этому массиву методом some
    return this._inputList.some((item) => {
      // Если поле не валидно, колбэк вернёт true
      // Обход массива прекратится и вся функция
      // hasInvalidInput вернёт true

      return !item.validity.valid;
    })
  };

  // проверяем всю эту ебалайку-балалайку
  _checkInputValidity = (inputElement) => {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  };

  resetValidation() {
    this._popupAddForm = document.querySelector('.popup__form_add');
    this._popupAddForm.reset();
    this._toggleButtonState();

    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement)
    });

  }

  // обработчики для всех полей формы
  _setValidationEventListeners = () => {
    this._toggleButtonState();

    // Обойдём все элементы полученной коллекции
    this._inputList.forEach((inputElement) => {
      // каждому полю добавим обработчик события input
      inputElement.addEventListener('input', () => {
        // Внутри колбэка вызовем checkInputValidity,
        // передав ей форму и проверяемый элемент
        this._checkInputValidity(inputElement);
        // передаем ф-ции массив полей формы и элемент кнопки
        this._toggleButtonState();
      });
    });
  };

  // обработчики всем формам
  enableValidation = () => {
      this._setValidationEventListeners();
  };
}

