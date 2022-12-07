/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Api.js":
/*!*******************************!*\
  !*** ./src/components/Api.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Api)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Api = /*#__PURE__*/function () {
  function Api(_ref) {
    var url = _ref.url,
      headers = _ref.headers;
    _classCallCheck(this, Api);
    this._url = url; // https://mesto.nomoreparties.co/v1/cohort-54/
    this._headers = headers;
  }
  _createClass(Api, [{
    key: "getCards",
    value: function getCards() {
      return fetch(this.url, {
        method: "GET",
        headers: this._headers
      }).then(function (response) {
        if (response.ok) {
          return response.json(); // Promise.resolve
        } else {
          Promise.reject("\u041E\u0448\u0438\u0431\u043A\u0430: ".concat(response.status, " ").concat(response.statusText));
        }
      });
    }
  }, {
    key: "deleteCard",
    value: function deleteCard() {}
  }, {
    key: "addNewCard",
    value: function addNewCard() {}
  }]);
  return Api;
}();


/***/ }),

/***/ "./src/components/Card.js":
/*!********************************!*\
  !*** ./src/components/Card.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Card": () => (/* binding */ Card)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Card = /*#__PURE__*/function () {
  function Card(title, link, templateSelector, handleCardClick) {
    _classCallCheck(this, Card);
    this._title = title;
    this._link = link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
  }
  _createClass(Card, [{
    key: "_getTemplate",
    value: function _getTemplate() {
      var cardElement = document.querySelector(this._templateSelector).content.querySelector(".cards__item").cloneNode(true);
      return cardElement;
    }

    // ↓ удаление карточек
  }, {
    key: "_handleDelete",
    value: function _handleDelete() {
      this._element.remove();
      this._element = null;
    }

    // ↓ лайки
  }, {
    key: "_handleLike",
    value: function _handleLike() {
      this._likeButton.classList.toggle("cards__like-button_active");
    }

    // ↓ ф-ция слушателей лайка, корзины и фулла
  }, {
    key: "_setEventListeners",
    value: function _setEventListeners() {
      var _this = this;
      this._deleteButton = this._element.querySelector(".cards__bin");
      this._deleteButton.addEventListener("click", function () {
        _this._handleDelete();
      });
      this._likeButton = this._element.querySelector(".cards__like-button");
      this._likeButton.addEventListener("click", function () {
        _this._handleLike();
      });
      this._cardImg = this._element.querySelector(".cards__pic");
      this._cardImg.addEventListener("click", function () {
        _this._handleCardClick(_this._title, _this._link);
      });
    }

    // ↓ создание карточки
  }, {
    key: "generateCard",
    value: function generateCard() {
      this._element = this._getTemplate();
      this._cardTitle = this._element.querySelector(".cards__name");
      this._setEventListeners();
      this._cardImg.src = this._link;
      this._cardImg.alt = this._title;
      this._cardTitle.textContent = this._title;
      return this._element;
    }
  }]);
  return Card;
}();

/***/ }),

/***/ "./src/components/FormValidator.js":
/*!*****************************************!*\
  !*** ./src/components/FormValidator.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormValidator": () => (/* binding */ FormValidator)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var FormValidator = /*#__PURE__*/function () {
  function FormValidator(settings, formElement) {
    var _this = this;
    _classCallCheck(this, FormValidator);
    _defineProperty(this, "_showInputError", function (inputElement, errorMessage) {
      // Находим элемент ошибки внутри самой функции
      _this._errorElement = _this._formElement.querySelector(".".concat(inputElement.id, "-error"));
      inputElement.classList.add(_this._inputErrorClass);
      _this._errorElement.textContent = errorMessage;
      _this._errorElement.classList.add(_this._errorClass);
    });
    _defineProperty(this, "_hideInputError", function (inputElement) {
      // Находим элемент ошибки
      _this._errorElement = _this._formElement.querySelector(".".concat(inputElement.id, "-error"));
      inputElement.classList.remove(_this._inputErrorClass);
      _this._errorElement.classList.remove(_this._errorClass);
      _this._errorElement.textContent = "";
    });
    _defineProperty(this, "toggleButtonState", function () {
      if (_this._hasInvalidInput(_this._inputList)) {
        // делаем кнопку неактивной
        _this._buttonElement.classList.add(_this._inactiveButtonClass);
        _this._buttonElement.setAttribute("disabled", "true");
      } else {
        // иначе активна
        _this._buttonElement.classList.remove(_this._inactiveButtonClass);
        _this._buttonElement.removeAttribute("disabled", "true");
      }
    });
    _defineProperty(this, "_hasInvalidInput", function () {
      // проходим по этому массиву методом some
      return _this._inputList.some(function (item) {
        // Если поле не валидно, колбэк вернёт true
        // Обход массива прекратится и вся функция
        // hasInvalidInput вернёт true

        return !item.validity.valid;
      });
    });
    _defineProperty(this, "_checkInputValidity", function (inputElement) {
      if (!inputElement.validity.valid) {
        _this._showInputError(inputElement, inputElement.validationMessage);
      } else {
        _this._hideInputError(inputElement);
      }
    });
    _defineProperty(this, "_setValidationEventListeners", function () {
      _this.toggleButtonState();

      // Обойдём все элементы полученной коллекции
      _this._inputList.forEach(function (inputElement) {
        // каждому полю добавим обработчик события input
        inputElement.addEventListener("input", function () {
          // Внутри колбэка вызовем checkInputValidity,
          // передав ей форму и проверяемый элемент
          _this._checkInputValidity(inputElement);
          // передаем ф-ции массив полей формы и элемент кнопки
          _this.toggleButtonState();
        });
      });
    });
    _defineProperty(this, "enableValidation", function () {
      _this._setValidationEventListeners();
    });
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
  _createClass(FormValidator, [{
    key: "resetValidation",
    value: function resetValidation() {
      var _this2 = this;
      this.toggleButtonState();
      this._inputList.forEach(function (inputElement) {
        _this2._hideInputError(inputElement);
      });
    }

    // обработчики для всех полей формы
  }]);
  return FormValidator;
}();

/***/ }),

/***/ "./src/components/PicturePopup.js":
/*!****************************************!*\
  !*** ./src/components/PicturePopup.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PicturePopup)
/* harmony export */ });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ "./src/components/Popup.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var PicturePopup = /*#__PURE__*/function (_Popup) {
  _inherits(PicturePopup, _Popup);
  var _super = _createSuper(PicturePopup);
  function PicturePopup(popupSelector) {
    var _this;
    _classCallCheck(this, PicturePopup);
    _this = _super.call(this, popupSelector);
    _this._picPopupImage = _this._popup.querySelector(".popup__image");
    _this._picPopupName = _this._popup.querySelector(".popup__description");
    return _this;
  }
  _createClass(PicturePopup, [{
    key: "openPopup",
    value: function openPopup(title, link) {
      this._picPopupImage.src = link;
      this._picPopupName.textContent = title;
      this._picPopupName.alt = title;
      _get(_getPrototypeOf(PicturePopup.prototype), "openPopup", this).call(this);
    }
  }]);
  return PicturePopup;
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/components/Popup.js":
/*!*********************************!*\
  !*** ./src/components/Popup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Popup)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Popup = /*#__PURE__*/function () {
  function Popup(popupSelector) {
    _classCallCheck(this, Popup);
    this._popup = document.querySelector(popupSelector);
    this._handleEscCloseRef = this._handleEscClose.bind(this);
  }

  // ↓ ф-ции /методы/ открытия и закрытия
  _createClass(Popup, [{
    key: "openPopup",
    value: function openPopup() {
      this._popup.classList.add("popup_opened");
      document.addEventListener("keydown", this._handleEscCloseRef);
    }
  }, {
    key: "closePopup",
    value: function closePopup() {
      this._popup.classList.remove("popup_opened");
      document.removeEventListener("keydown", this._handleEscCloseRef);
    }

    // ↓ закрытие через esc
  }, {
    key: "_handleEscClose",
    value: function _handleEscClose(evt) {
      if (evt.key === "Escape") {
        this.closePopup();
      }
    }

    // ↓ закрытие при щелчке на крестик или оверлей
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this = this;
      this._popup.addEventListener("mousedown", function (evt) {
        if (evt.target.classList.contains("popup_opened")) {
          _this.closePopup();
        }
        if (evt.target.classList.contains("popup__close-icon")) {
          _this.closePopup();
        }
      });
    }
  }]);
  return Popup;
}();


/***/ }),

/***/ "./src/components/PopupWithForm.js":
/*!*****************************************!*\
  !*** ./src/components/PopupWithForm.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PopupWithForm)
/* harmony export */ });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ "./src/components/Popup.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var PopupWithForm = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithForm, _Popup);
  var _super = _createSuper(PopupWithForm);
  function PopupWithForm(_ref) {
    var _this;
    var popupSelector = _ref.popupSelector,
      handleSubmit = _ref.handleSubmit;
    _classCallCheck(this, PopupWithForm);
    _this = _super.call(this, popupSelector);
    _this._handleSubmit = handleSubmit;
    _this._form = _this._popup.querySelector(".popup__form");
    // достаём все элементы полей
    _this._inputList = _this._popup.querySelectorAll(".popup__input");
    return _this;
  }
  _createClass(PopupWithForm, [{
    key: "_getInputValues",
    value: function _getInputValues() {
      var _this2 = this;
      // создаём пустой объект
      this._formValues = {};

      // добавляем в этот объект значения всех полей
      this._inputList.forEach(function (input) {
        _this2._formValues[input.name] = input.value;
      });

      // возвращаем объект значений
      return this._formValues;
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this3 = this;
      _get(_getPrototypeOf(PopupWithForm.prototype), "setEventListeners", this).call(this);
      this._form.addEventListener("submit", function (evt) {
        evt.preventDefault();
        _this3._handleSubmit(_this3._getInputValues());
        /* this.closePopup(); */
      });
    }
  }, {
    key: "closePopup",
    value: function closePopup() {
      _get(_getPrototypeOf(PopupWithForm.prototype), "closePopup", this).call(this);
      this._form.reset();
    }
  }]);
  return PopupWithForm;
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/components/Section.js":
/*!***********************************!*\
  !*** ./src/components/Section.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Section)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Section = /*#__PURE__*/function () {
  function Section(_ref, containerSelector) {
    var renderer = _ref.renderer;
    _classCallCheck(this, Section);
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }
  _createClass(Section, [{
    key: "renderItems",
    value: function renderItems(data) {
      var _this = this;
      this._items = data;
      this._items.forEach(function (item) {
        _this._renderer(item);
      });
    }
  }, {
    key: "addItem",
    value: function addItem(element) {
      this._container.prepend(element);
    }
  }]);
  return Section;
}();


/***/ }),

/***/ "./src/components/UserInfo.js":
/*!************************************!*\
  !*** ./src/components/UserInfo.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserInfo)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var UserInfo = /*#__PURE__*/function () {
  function UserInfo(_ref) {
    var userName = _ref.userName,
      userDescription = _ref.userDescription;
    _classCallCheck(this, UserInfo);
    this._profileName = document.querySelector(userName);
    this._profileJob = document.querySelector(userDescription);
  }
  _createClass(UserInfo, [{
    key: "getUserInfo",
    value: function getUserInfo() {
      var gottenInfo = {
        userName: this._profileName.textContent,
        userDescription: this._profileJob.textContent
      };
      return gottenInfo;
    }
  }, {
    key: "setUserInfo",
    value: function setUserInfo(data) {
      this._profileName.textContent = data.profile;
      this._profileJob.textContent = data.description;
    }
  }]);
  return UserInfo;
}();


/***/ }),

/***/ "./src/utils/constants.js":
/*!********************************!*\
  !*** ./src/utils/constants.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "config": () => (/* binding */ config)
/* harmony export */ });
var config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
};

/***/ }),

/***/ "./src/utils/initialCards.js":
/*!***********************************!*\
  !*** ./src/utils/initialCards.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialCards": () => (/* binding */ initialCards)
/* harmony export */ });
var initialCards = [{
  title: 'Национальный Парк Бэдлэндс',
  picture: 'https://i.ibb.co/JQGZ504/Badlands-National-Park-South-Dakota-USA.jpg'
}, {
  title: 'Горы Блу Ридж',
  picture: 'https://i.ibb.co/489mTQx/Blue-Ridge-Mountains.jpg'
}, {
  title: 'Йеллоустоун',
  picture: 'https://i.ibb.co/6B6JPFK/Yellowstone.jpg'
}, {
  title: 'Тропа Дяди Тома',
  picture: 'https://i.ibb.co/0qgDbNV/Uncle-Toms-Trail.jpg'
}, {
  title: 'Водопад Малтнома',
  picture: 'https://i.ibb.co/Jv9jMpW/Multnomah-Falls.jpg'
}, {
  title: 'Остров Оаху',
  picture: 'https://i.ibb.co/TkPqyZH/Oahu.jpg'
}];

/***/ }),

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/pages/index.css");
/* harmony import */ var _components_Card_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Card.js */ "./src/components/Card.js");
/* harmony import */ var _components_Section_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Section.js */ "./src/components/Section.js");
/* harmony import */ var _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/FormValidator.js */ "./src/components/FormValidator.js");
/* harmony import */ var _components_PicturePopup_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PicturePopup.js */ "./src/components/PicturePopup.js");
/* harmony import */ var _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/PopupWithForm.js */ "./src/components/PopupWithForm.js");
/* harmony import */ var _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/UserInfo.js */ "./src/components/UserInfo.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/constants */ "./src/utils/constants.js");
/* harmony import */ var _utils_initialCards__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/initialCards */ "./src/utils/initialCards.js");
/* harmony import */ var _components_Api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Api */ "./src/components/Api.js");

var buttonEditProfile = document.querySelector(".profile__edit-button");
var nameInput = document.querySelector(".popup__input_line_name");
var jobInput = document.querySelector(".popup__input_line_description");
var popupEdit = document.querySelector(".popup_edit");
var popupAdd = document.querySelector(".popup_add");
var buttonAddCard = document.querySelector(".profile__add-button");









var popupEditValidation = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_3__.FormValidator(_utils_constants__WEBPACK_IMPORTED_MODULE_7__.config, popupEdit);
var popupAddValidation = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_3__.FormValidator(_utils_constants__WEBPACK_IMPORTED_MODULE_7__.config, popupAdd);
popupEditValidation.enableValidation();

// ↓ новая фигулина про юзера

var userInfo = new _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_6__["default"]({
  userName: ".profile__name",
  userDescription: ".profile__description"
});

// ↓ новая форма edit

var editForm = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_5__["default"]({
  popupSelector: ".popup_edit",
  handleSubmit: function handleSubmit(data) {
    userInfo.setUserInfo(data);
    editForm.closePopup();
  }
});
editForm.setEventListeners();

// ↓ активация кнопки edit

buttonEditProfile.addEventListener("click", function () {
  var gottenInfo = userInfo.getUserInfo();
  nameInput.value = gottenInfo.userName;
  jobInput.value = gottenInfo.userDescription;
  editForm.openPopup();
});

// ↓ новая фигулина про картинки

var picturePopup = new _components_PicturePopup_js__WEBPACK_IMPORTED_MODULE_4__["default"](".popup_pic");
picturePopup.setEventListeners();

// ↓ и так понятно

function handleCardClick(title, link) {
  picturePopup.openPopup(title, link);
}

// ↓  новый экземпляр карточки

function addCard(data) {
  var cardItem = new _components_Card_js__WEBPACK_IMPORTED_MODULE_1__.Card(data.title, data.picture, ".cards__item-template", handleCardClick);
  return cardItem.generateCard();
}

// ↓  блок с картинками

var cardsList = new _components_Section_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
  renderer: function renderer(data) {
    cardsList.addItem(addCard(data));
  }
}, ".cards");

/* cardsList.renderItems(initialCards); */ // !!!!

// ↓  приключения с отрисовкой карточек через API 
// ↓  конфиг

var apiConfig = {
  url: "https://mesto.nomoreparties.co/v1/cohort-54/",
  headers: {
    "Content-type": 'application/json'
  }
};

// ↓  отрисовка

var apiNew = new _components_Api__WEBPACK_IMPORTED_MODULE_9__["default"](apiConfig);
apiNew.getCards() // result - готовые данные
.then(function (result) {
  cardsList.renderItems(result);
})["catch"](function (error) {});

// ↓  новая форма add

var addForm = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_5__["default"]({
  popupSelector: ".popup_add",
  handleSubmit: function handleSubmit(data) {
    cardsList.addItem(addCard(data));
    addForm.closePopup();
  }
});
addForm.setEventListeners();

// ↓ активация кнопки add

buttonAddCard.addEventListener("click", function () {
  popupAddValidation.resetValidation();
  addForm.openPopup();
});
popupAddValidation.enableValidation();

// ТУТ
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBRUEsSUFBTW9DLFNBQVMsR0FBRztFQUNoQnZKLEdBQUcsRUFBRSw4Q0FBOEM7RUFDbkRDLE9BQU8sRUFBRTtJQUNQLGNBQWMsRUFBRTtFQUNsQjtBQUNGLENBQUM7O0FBRUQ7O0FBRUEsSUFBTXVKLE1BQU0sR0FBRyxJQUFJekosdURBQUcsQ0FBQ3dKLFNBQVMsQ0FBQztBQUNqQ0MsTUFBTSxDQUFDQyxRQUFRLEVBQUUsQ0FBQztBQUFBLENBQ2ZuSixJQUFJLENBQUMsVUFBQ29KLE1BQU0sRUFBSztFQUNoQkwsU0FBUyxDQUFDTSxXQUFXLENBQUNELE1BQU0sQ0FBQztBQUNqQyxDQUFDLENBQUMsU0FBTSxDQUFDLFVBQUNFLEtBQUssRUFBSyxDQUFDLENBQUMsQ0FBQzs7QUFHdkI7O0FBRUEsSUFBTUMsT0FBTyxHQUFHLElBQUkxRCxvRUFBYSxDQUFDO0VBQ2hDYixhQUFhLEVBQUUsWUFBWTtFQUMzQmMsWUFBWSxFQUFFLHNCQUFDZSxJQUFJLEVBQUs7SUFDdEJrQyxTQUFTLENBQUNDLE9BQU8sQ0FBQ0osT0FBTyxDQUFDL0IsSUFBSSxDQUFDLENBQUM7SUFDaEMwQyxPQUFPLENBQUM3RCxVQUFVLEVBQUU7RUFDdEI7QUFDRixDQUFDLENBQUM7QUFFRjZELE9BQU8sQ0FBQ2YsaUJBQWlCLEVBQUU7O0FBRTNCOztBQUVBUCxhQUFhLENBQUNyRyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtFQUM1Q3VHLGtCQUFrQixDQUFDcUIsZUFBZSxFQUFFO0VBQ3BDRCxPQUFPLENBQUNiLFNBQVMsRUFBRTtBQUNyQixDQUFDLENBQUM7QUFFRlAsa0JBQWtCLENBQUNDLGdCQUFnQixFQUFFOztBQUdyQyxNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQXBpLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRm9ybVZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9QaWN0dXJlUG9wdXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUG9wdXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUG9wdXBXaXRoRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TZWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1VzZXJJbmZvLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2luaXRpYWxDYXJkcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXguY3NzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBBcGkge1xuICBjb25zdHJ1Y3Rvcih7IHVybCwgaGVhZGVycyB9KSB7XG4gICAgdGhpcy5fdXJsID0gdXJsOyAvLyBodHRwczovL21lc3RvLm5vbW9yZXBhcnRpZXMuY28vdjEvY29ob3J0LTU0L1xuICAgIHRoaXMuX2hlYWRlcnMgPSBoZWFkZXJzO1xuICB9XG5cbiAgZ2V0Q2FyZHMoKSB7XG4gICAgcmV0dXJuIGZldGNoKHRoaXMudXJsLCB7XG4gICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICBoZWFkZXJzOiB0aGlzLl9oZWFkZXJzLFxuICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTsgLy8gUHJvbWlzZS5yZXNvbHZlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBQcm9taXNlLnJlamVjdChg0J7RiNC40LHQutCwOiAke3Jlc3BvbnNlLnN0YXR1c30gJHtyZXNwb25zZS5zdGF0dXNUZXh0fWApO1xuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBkZWxldGVDYXJkKCkge31cbiAgYWRkTmV3Q2FyZCgpIHt9XG59IiwiZXhwb3J0IGNsYXNzIENhcmQge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgbGluaywgdGVtcGxhdGVTZWxlY3RvciwgaGFuZGxlQ2FyZENsaWNrKSB7XG4gICAgdGhpcy5fdGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLl9saW5rID0gbGluaztcbiAgICB0aGlzLl90ZW1wbGF0ZVNlbGVjdG9yID0gdGVtcGxhdGVTZWxlY3RvcjtcbiAgICB0aGlzLl9oYW5kbGVDYXJkQ2xpY2sgPSBoYW5kbGVDYXJkQ2xpY2s7XG4gIH1cblxuICBfZ2V0VGVtcGxhdGUoKSB7XG4gICAgY29uc3QgY2FyZEVsZW1lbnQgPSBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IodGhpcy5fdGVtcGxhdGVTZWxlY3RvcilcbiAgICAgIC5jb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZHNfX2l0ZW1cIilcbiAgICAgIC5jbG9uZU5vZGUodHJ1ZSk7XG5cbiAgICByZXR1cm4gY2FyZEVsZW1lbnQ7XG4gIH1cblxuICAvLyDihpMg0YPQtNCw0LvQtdC90LjQtSDQutCw0YDRgtC+0YfQtdC6XG5cbiAgX2hhbmRsZURlbGV0ZSgpIHtcbiAgICB0aGlzLl9lbGVtZW50LnJlbW92ZSgpO1xuICAgIHRoaXMuX2VsZW1lbnQgPSBudWxsO1xuICB9XG5cbiAgLy8g4oaTINC70LDQudC60LhcblxuICBfaGFuZGxlTGlrZSgpIHtcbiAgICB0aGlzLl9saWtlQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoXCJjYXJkc19fbGlrZS1idXR0b25fYWN0aXZlXCIpO1xuICB9XG5cbiAgLy8g4oaTINGELdGG0LjRjyDRgdC70YPRiNCw0YLQtdC70LXQuSDQu9Cw0LnQutCwLCDQutC+0YDQt9C40L3RiyDQuCDRhNGD0LvQu9CwXG5cbiAgX3NldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHRoaXMuX2RlbGV0ZUJ1dHRvbiA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkc19fYmluXCIpO1xuICAgIHRoaXMuX2RlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5faGFuZGxlRGVsZXRlKCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLl9saWtlQnV0dG9uID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRzX19saWtlLWJ1dHRvblwiKTtcbiAgICB0aGlzLl9saWtlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB0aGlzLl9oYW5kbGVMaWtlKCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLl9jYXJkSW1nID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRzX19waWNcIik7XG4gICAgdGhpcy5fY2FyZEltZy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5faGFuZGxlQ2FyZENsaWNrKHRoaXMuX3RpdGxlLCB0aGlzLl9saW5rKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIOKGkyDRgdC+0LfQtNCw0L3QuNC1INC60LDRgNGC0L7Rh9C60LhcblxuICBnZW5lcmF0ZUNhcmQoKSB7XG4gICAgdGhpcy5fZWxlbWVudCA9IHRoaXMuX2dldFRlbXBsYXRlKCk7XG4gICAgdGhpcy5fY2FyZFRpdGxlID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRzX19uYW1lXCIpO1xuICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXJzKCk7XG5cbiAgICB0aGlzLl9jYXJkSW1nLnNyYyA9IHRoaXMuX2xpbms7XG4gICAgdGhpcy5fY2FyZEltZy5hbHQgPSB0aGlzLl90aXRsZTtcbiAgICB0aGlzLl9jYXJkVGl0bGUudGV4dENvbnRlbnQgPSB0aGlzLl90aXRsZTtcblxuICAgIHJldHVybiB0aGlzLl9lbGVtZW50O1xuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgRm9ybVZhbGlkYXRvciB7XG4gIGNvbnN0cnVjdG9yKHNldHRpbmdzLCBmb3JtRWxlbWVudCkge1xuICAgIHRoaXMuX2Zvcm1TZWxlY3RvciA9IHNldHRpbmdzLmZvcm1TZWxlY3RvcjtcbiAgICB0aGlzLl9pbnB1dFNlbGVjdG9yID0gc2V0dGluZ3MuaW5wdXRTZWxlY3RvcjtcbiAgICB0aGlzLl9zdWJtaXRCdXR0b25TZWxlY3RvciA9IHNldHRpbmdzLnN1Ym1pdEJ1dHRvblNlbGVjdG9yO1xuICAgIHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MgPSBzZXR0aW5ncy5pbmFjdGl2ZUJ1dHRvbkNsYXNzO1xuICAgIHRoaXMuX2lucHV0RXJyb3JDbGFzcyA9IHNldHRpbmdzLmlucHV0RXJyb3JDbGFzcztcbiAgICB0aGlzLl9lcnJvckNsYXNzID0gc2V0dGluZ3MuZXJyb3JDbGFzcztcbiAgICB0aGlzLl9mb3JtRWxlbWVudCA9IGZvcm1FbGVtZW50O1xuICAgIHRoaXMuX2J1dHRvbkVsZW1lbnQgPSB0aGlzLl9mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgdGhpcy5fc3VibWl0QnV0dG9uU2VsZWN0b3JcbiAgICApO1xuICAgIHRoaXMuX2lucHV0TGlzdCA9IEFycmF5LmZyb20oXG4gICAgICB0aGlzLl9mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuX2lucHV0U2VsZWN0b3IpXG4gICAgKTtcbiAgfVxuXG4gIC8vINC/0L7QutCw0LfQsNGC0Ywg0L7RiNC40LHQutGDXG4gIF9zaG93SW5wdXRFcnJvciA9IChpbnB1dEVsZW1lbnQsIGVycm9yTWVzc2FnZSkgPT4ge1xuICAgIC8vINCd0LDRhdC+0LTQuNC8INGN0LvQtdC80LXQvdGCINC+0YjQuNCx0LrQuCDQstC90YPRgtGA0Lgg0YHQsNC80L7QuSDRhNGD0L3QutGG0LjQuFxuICAgIHRoaXMuX2Vycm9yRWxlbWVudCA9IHRoaXMuX2Zvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgLiR7aW5wdXRFbGVtZW50LmlkfS1lcnJvcmBcbiAgICApO1xuICAgIGlucHV0RWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuX2lucHV0RXJyb3JDbGFzcyk7XG4gICAgdGhpcy5fZXJyb3JFbGVtZW50LnRleHRDb250ZW50ID0gZXJyb3JNZXNzYWdlO1xuICAgIHRoaXMuX2Vycm9yRWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuX2Vycm9yQ2xhc3MpO1xuICB9O1xuXG4gIC8vINGB0LrRgNGL0YLRjCDQvtGI0LjQsdC60YNcbiAgX2hpZGVJbnB1dEVycm9yID0gKGlucHV0RWxlbWVudCkgPT4ge1xuICAgIC8vINCd0LDRhdC+0LTQuNC8INGN0LvQtdC80LXQvdGCINC+0YjQuNCx0LrQuFxuICAgIHRoaXMuX2Vycm9yRWxlbWVudCA9IHRoaXMuX2Zvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgLiR7aW5wdXRFbGVtZW50LmlkfS1lcnJvcmBcbiAgICApO1xuICAgIGlucHV0RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2lucHV0RXJyb3JDbGFzcyk7XG4gICAgdGhpcy5fZXJyb3JFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fZXJyb3JDbGFzcyk7XG4gICAgdGhpcy5fZXJyb3JFbGVtZW50LnRleHRDb250ZW50ID0gXCJcIjtcbiAgfTtcblxuICAvLyDQutC90L7Qv9C60LBcbiAgdG9nZ2xlQnV0dG9uU3RhdGUgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuX2hhc0ludmFsaWRJbnB1dCh0aGlzLl9pbnB1dExpc3QpKSB7XG4gICAgICAvLyDQtNC10LvQsNC10Lwg0LrQvdC+0L/QutGDINC90LXQsNC60YLQuNCy0L3QvtC5XG4gICAgICB0aGlzLl9idXR0b25FbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyk7XG4gICAgICB0aGlzLl9idXR0b25FbGVtZW50LnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwidHJ1ZVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8g0LjQvdCw0YfQtSDQsNC60YLQuNCy0L3QsFxuICAgICAgdGhpcy5fYnV0dG9uRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MpO1xuICAgICAgdGhpcy5fYnV0dG9uRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcInRydWVcIik7XG4gICAgfVxuICB9O1xuXG4gIC8vINC/0YDQvtCy0LXRgNC40YLRjCDQuNC90L/Rg9GC0Ysg0LTQu9GPINCw0LrRgtC40LLQsNGG0LjQuCDQutC90L7Qv9C60LhcbiAgX2hhc0ludmFsaWRJbnB1dCA9ICgpID0+IHtcbiAgICAvLyDQv9GA0L7RhdC+0LTQuNC8INC/0L4g0Y3RgtC+0LzRgyDQvNCw0YHRgdC40LLRgyDQvNC10YLQvtC00L7QvCBzb21lXG4gICAgcmV0dXJuIHRoaXMuX2lucHV0TGlzdC5zb21lKChpdGVtKSA9PiB7XG4gICAgICAvLyDQldGB0LvQuCDQv9C+0LvQtSDQvdC1INCy0LDQu9C40LTQvdC+LCDQutC+0LvQsdGN0Log0LLQtdGA0L3RkdGCIHRydWVcbiAgICAgIC8vINCe0LHRhdC+0LQg0LzQsNGB0YHQuNCy0LAg0L/RgNC10LrRgNCw0YLQuNGC0YHRjyDQuCDQstGB0Y8g0YTRg9C90LrRhtC40Y9cbiAgICAgIC8vIGhhc0ludmFsaWRJbnB1dCDQstC10YDQvdGR0YIgdHJ1ZVxuXG4gICAgICByZXR1cm4gIWl0ZW0udmFsaWRpdHkudmFsaWQ7XG4gICAgfSk7XG4gIH07XG5cbiAgLy8g0L/RgNC+0LLQtdGA0Y/QtdC8INCy0YHRjiDRjdGC0YMg0LXQsdCw0LvQsNC50LrRgy3QsdCw0LvQsNC70LDQudC60YNcbiAgX2NoZWNrSW5wdXRWYWxpZGl0eSA9IChpbnB1dEVsZW1lbnQpID0+IHtcbiAgICBpZiAoIWlucHV0RWxlbWVudC52YWxpZGl0eS52YWxpZCkge1xuICAgICAgdGhpcy5fc2hvd0lucHV0RXJyb3IoaW5wdXRFbGVtZW50LCBpbnB1dEVsZW1lbnQudmFsaWRhdGlvbk1lc3NhZ2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9oaWRlSW5wdXRFcnJvcihpbnB1dEVsZW1lbnQpO1xuICAgIH1cbiAgfTtcblxuICByZXNldFZhbGlkYXRpb24oKSB7XG4gICAgdGhpcy50b2dnbGVCdXR0b25TdGF0ZSgpO1xuXG4gICAgdGhpcy5faW5wdXRMaXN0LmZvckVhY2goKGlucHV0RWxlbWVudCkgPT4ge1xuICAgICAgdGhpcy5faGlkZUlucHV0RXJyb3IoaW5wdXRFbGVtZW50KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vINC+0LHRgNCw0LHQvtGC0YfQuNC60Lgg0LTQu9GPINCy0YHQtdGFINC/0L7Qu9C10Lkg0YTQvtGA0LzRi1xuICBfc2V0VmFsaWRhdGlvbkV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xuICAgIHRoaXMudG9nZ2xlQnV0dG9uU3RhdGUoKTtcblxuICAgIC8vINCe0LHQvtC50LTRkdC8INCy0YHQtSDRjdC70LXQvNC10L3RgtGLINC/0L7Qu9GD0YfQtdC90L3QvtC5INC60L7Qu9C70LXQutGG0LjQuFxuICAgIHRoaXMuX2lucHV0TGlzdC5mb3JFYWNoKChpbnB1dEVsZW1lbnQpID0+IHtcbiAgICAgIC8vINC60LDQttC00L7QvNGDINC/0L7Qu9GOINC00L7QsdCw0LLQuNC8INC+0LHRgNCw0LHQvtGC0YfQuNC6INGB0L7QsdGL0YLQuNGPIGlucHV0XG4gICAgICBpbnB1dEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcbiAgICAgICAgLy8g0JLQvdGD0YLRgNC4INC60L7Qu9Cx0Y3QutCwINCy0YvQt9C+0LLQtdC8IGNoZWNrSW5wdXRWYWxpZGl0eSxcbiAgICAgICAgLy8g0L/QtdGA0LXQtNCw0LIg0LXQuSDRhNC+0YDQvNGDINC4INC/0YDQvtCy0LXRgNGP0LXQvNGL0Lkg0Y3Qu9C10LzQtdC90YJcbiAgICAgICAgdGhpcy5fY2hlY2tJbnB1dFZhbGlkaXR5KGlucHV0RWxlbWVudCk7XG4gICAgICAgIC8vINC/0LXRgNC10LTQsNC10Lwg0YQt0YbQuNC4INC80LDRgdGB0LjQsiDQv9C+0LvQtdC5INGE0L7RgNC80Ysg0Lgg0Y3Qu9C10LzQtdC90YIg0LrQvdC+0L/QutC4XG4gICAgICAgIHRoaXMudG9nZ2xlQnV0dG9uU3RhdGUoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIC8vINC+0LHRgNCw0LHQvtGC0YfQuNC60Lgg0LLRgdC10Lwg0YTQvtGA0LzQsNC8XG4gIGVuYWJsZVZhbGlkYXRpb24gPSAoKSA9PiB7XG4gICAgdGhpcy5fc2V0VmFsaWRhdGlvbkV2ZW50TGlzdGVuZXJzKCk7XG4gIH07XG59XG4iLCJpbXBvcnQgUG9wdXAgZnJvbSBcIi4vUG9wdXAuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGljdHVyZVBvcHVwIGV4dGVuZHMgUG9wdXAge1xuICBjb25zdHJ1Y3Rvcihwb3B1cFNlbGVjdG9yKSB7XG4gICAgc3VwZXIocG9wdXBTZWxlY3Rvcik7XG4gICAgdGhpcy5fcGljUG9wdXBJbWFnZSA9IHRoaXMuX3BvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2ltYWdlXCIpO1xuICAgIHRoaXMuX3BpY1BvcHVwTmFtZSA9IHRoaXMuX3BvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2Rlc2NyaXB0aW9uXCIpO1xuICB9XG5cbiAgb3BlblBvcHVwKHRpdGxlLCBsaW5rKSB7XG4gICAgdGhpcy5fcGljUG9wdXBJbWFnZS5zcmMgPSBsaW5rO1xuICAgIHRoaXMuX3BpY1BvcHVwTmFtZS50ZXh0Q29udGVudCA9IHRpdGxlO1xuICAgIHRoaXMuX3BpY1BvcHVwTmFtZS5hbHQgPSB0aXRsZTtcbiAgICBzdXBlci5vcGVuUG9wdXAoKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXAge1xuICBjb25zdHJ1Y3Rvcihwb3B1cFNlbGVjdG9yKSB7XG4gICAgdGhpcy5fcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBvcHVwU2VsZWN0b3IpO1xuICAgIHRoaXMuX2hhbmRsZUVzY0Nsb3NlUmVmID0gdGhpcy5faGFuZGxlRXNjQ2xvc2UuYmluZCh0aGlzKTtcbiAgfVxuXG4gIC8vIOKGkyDRhC3RhtC40LggL9C80LXRgtC+0LTRiy8g0L7RgtC60YDRi9GC0LjRjyDQuCDQt9Cw0LrRgNGL0YLQuNGPXG5cbiAgb3BlblBvcHVwKCkge1xuICAgIHRoaXMuX3BvcHVwLmNsYXNzTGlzdC5hZGQoXCJwb3B1cF9vcGVuZWRcIik7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5faGFuZGxlRXNjQ2xvc2VSZWYpO1xuICB9XG5cbiAgY2xvc2VQb3B1cCgpIHtcbiAgICB0aGlzLl9wb3B1cC5jbGFzc0xpc3QucmVtb3ZlKFwicG9wdXBfb3BlbmVkXCIpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuX2hhbmRsZUVzY0Nsb3NlUmVmKTtcbiAgfVxuXG4gIC8vIOKGkyDQt9Cw0LrRgNGL0YLQuNC1INGH0LXRgNC10LcgZXNjXG5cbiAgX2hhbmRsZUVzY0Nsb3NlKGV2dCkge1xuICAgIGlmIChldnQua2V5ID09PSBcIkVzY2FwZVwiKSB7XG4gICAgICB0aGlzLmNsb3NlUG9wdXAoKTtcbiAgICB9XG4gIH1cblxuICAvLyDihpMg0LfQsNC60YDRi9GC0LjQtSDQv9GA0Lgg0YnQtdC70YfQutC1INC90LAg0LrRgNC10YHRgtC40Log0LjQu9C4INC+0LLQtdGA0LvQtdC5XG5cbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgdGhpcy5fcG9wdXAuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoZXZ0KSA9PiB7XG4gICAgICBpZiAoZXZ0LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJwb3B1cF9vcGVuZWRcIikpIHtcbiAgICAgICAgdGhpcy5jbG9zZVBvcHVwKCk7XG4gICAgICB9XG4gICAgICBpZiAoZXZ0LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJwb3B1cF9fY2xvc2UtaWNvblwiKSkge1xuICAgICAgICB0aGlzLmNsb3NlUG9wdXAoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IFBvcHVwIGZyb20gXCIuL1BvcHVwLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwV2l0aEZvcm0gZXh0ZW5kcyBQb3B1cCB7XG4gIGNvbnN0cnVjdG9yKHsgcG9wdXBTZWxlY3RvciwgaGFuZGxlU3VibWl0IH0pIHtcbiAgICBzdXBlcihwb3B1cFNlbGVjdG9yKTtcbiAgICB0aGlzLl9oYW5kbGVTdWJtaXQgPSBoYW5kbGVTdWJtaXQ7XG4gICAgdGhpcy5fZm9ybSA9IHRoaXMuX3BvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2Zvcm1cIik7XG4gICAgLy8g0LTQvtGB0YLQsNGR0Lwg0LLRgdC1INGN0LvQtdC80LXQvdGC0Ysg0L/QvtC70LXQuVxuICAgIHRoaXMuX2lucHV0TGlzdCA9IHRoaXMuX3BvcHVwLnF1ZXJ5U2VsZWN0b3JBbGwoXCIucG9wdXBfX2lucHV0XCIpO1xuICB9XG5cbiAgX2dldElucHV0VmFsdWVzKCkge1xuICAgIC8vINGB0L7Qt9C00LDRkdC8INC/0YPRgdGC0L7QuSDQvtCx0YrQtdC60YJcbiAgICB0aGlzLl9mb3JtVmFsdWVzID0ge307XG5cbiAgICAvLyDQtNC+0LHQsNCy0LvRj9C10Lwg0LIg0Y3RgtC+0YIg0L7QsdGK0LXQutGCINC30L3QsNGH0LXQvdC40Y8g0LLRgdC10YUg0L/QvtC70LXQuVxuICAgIHRoaXMuX2lucHV0TGlzdC5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgICAgdGhpcy5fZm9ybVZhbHVlc1tpbnB1dC5uYW1lXSA9IGlucHV0LnZhbHVlO1xuICAgIH0pO1xuXG4gICAgLy8g0LLQvtC30LLRgNCw0YnQsNC10Lwg0L7QsdGK0LXQutGCINC30L3QsNGH0LXQvdC40LlcbiAgICByZXR1cm4gdGhpcy5fZm9ybVZhbHVlcztcbiAgfVxuXG4gIHNldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHN1cGVyLnNldEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgdGhpcy5fZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldnQpID0+IHtcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICB0aGlzLl9oYW5kbGVTdWJtaXQodGhpcy5fZ2V0SW5wdXRWYWx1ZXMoKSk7XG4gICAgICAvKiB0aGlzLmNsb3NlUG9wdXAoKTsgKi9cbiAgICB9KTtcbiAgfVxuXG4gIGNsb3NlUG9wdXAoKSB7XG4gICAgc3VwZXIuY2xvc2VQb3B1cCgpO1xuICAgIHRoaXMuX2Zvcm0ucmVzZXQoKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHsgcmVuZGVyZXIgfSwgY29udGFpbmVyU2VsZWN0b3IpIHtcbiAgICB0aGlzLl9yZW5kZXJlciA9IHJlbmRlcmVyO1xuICAgIHRoaXMuX2NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGFpbmVyU2VsZWN0b3IpO1xuICB9XG5cbiAgcmVuZGVySXRlbXMoZGF0YSkge1xuICAgIHRoaXMuX2l0ZW1zID0gZGF0YTtcbiAgICB0aGlzLl9pdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICB0aGlzLl9yZW5kZXJlcihpdGVtKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZEl0ZW0oZWxlbWVudCkge1xuICAgIHRoaXMuX2NvbnRhaW5lci5wcmVwZW5kKGVsZW1lbnQpO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VySW5mbyB7XG4gIGNvbnN0cnVjdG9yKHsgdXNlck5hbWUsIHVzZXJEZXNjcmlwdGlvbiB9KSB7XG4gICAgdGhpcy5fcHJvZmlsZU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHVzZXJOYW1lKTtcbiAgICB0aGlzLl9wcm9maWxlSm9iID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih1c2VyRGVzY3JpcHRpb24pO1xuICB9XG5cbiAgZ2V0VXNlckluZm8oKSB7XG4gICAgY29uc3QgZ290dGVuSW5mbyA9IHtcbiAgICAgIHVzZXJOYW1lOiB0aGlzLl9wcm9maWxlTmFtZS50ZXh0Q29udGVudCxcbiAgICAgIHVzZXJEZXNjcmlwdGlvbjogdGhpcy5fcHJvZmlsZUpvYi50ZXh0Q29udGVudCxcbiAgICB9O1xuXG4gICAgcmV0dXJuIGdvdHRlbkluZm87XG4gIH1cblxuICBzZXRVc2VySW5mbyhkYXRhKSB7XG4gICAgdGhpcy5fcHJvZmlsZU5hbWUudGV4dENvbnRlbnQgPSBkYXRhLnByb2ZpbGU7XG4gICAgdGhpcy5fcHJvZmlsZUpvYi50ZXh0Q29udGVudCA9IGRhdGEuZGVzY3JpcHRpb247XG4gIH1cbn1cbiIsImV4cG9ydCBjb25zdCBjb25maWcgPSB7XG4gIGZvcm1TZWxlY3RvcjogJy5wb3B1cF9fZm9ybScsXG4gIGlucHV0U2VsZWN0b3I6ICcucG9wdXBfX2lucHV0JyxcbiAgc3VibWl0QnV0dG9uU2VsZWN0b3I6ICcucG9wdXBfX3N1Ym1pdCcsXG4gIGluYWN0aXZlQnV0dG9uQ2xhc3M6ICdwb3B1cF9fc3VibWl0X2Rpc2FibGVkJyxcbiAgaW5wdXRFcnJvckNsYXNzOiAncG9wdXBfX2lucHV0X3R5cGVfZXJyb3InLFxuICBlcnJvckNsYXNzOiAncG9wdXBfX2lucHV0LWVycm9yX2FjdGl2ZSd9OyIsImV4cG9ydCBjb25zdCBpbml0aWFsQ2FyZHMgPSBbXG4gIHtcbiAgICB0aXRsZTogJ9Cd0LDRhtC40L7QvdCw0LvRjNC90YvQuSDQn9Cw0YDQuiDQkdGN0LTQu9GN0L3QtNGBJyxcbiAgICBwaWN0dXJlOiAnaHR0cHM6Ly9pLmliYi5jby9KUUdaNTA0L0JhZGxhbmRzLU5hdGlvbmFsLVBhcmstU291dGgtRGFrb3RhLVVTQS5qcGcnXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ9CT0L7RgNGLINCR0LvRgyDQoNC40LTQticsXG4gICAgcGljdHVyZTogJ2h0dHBzOi8vaS5pYmIuY28vNDg5bVRReC9CbHVlLVJpZGdlLU1vdW50YWlucy5qcGcnXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ9CZ0LXQu9C70L7Rg9GB0YLQvtGD0L0nLFxuICAgIHBpY3R1cmU6ICdodHRwczovL2kuaWJiLmNvLzZCNkpQRksvWWVsbG93c3RvbmUuanBnJ1xuICB9LFxuICB7XG4gICAgdGl0bGU6ICfQotGA0L7Qv9CwINCU0Y/QtNC4INCi0L7QvNCwJyxcbiAgICBwaWN0dXJlOiAnaHR0cHM6Ly9pLmliYi5jby8wcWdEYk5WL1VuY2xlLVRvbXMtVHJhaWwuanBnJ1xuICB9LFxuICB7XG4gICAgdGl0bGU6ICfQktC+0LTQvtC/0LDQtCDQnNCw0LvRgtC90L7QvNCwJyxcbiAgICBwaWN0dXJlOiAnaHR0cHM6Ly9pLmliYi5jby9KdjlqTXBXL011bHRub21haC1GYWxscy5qcGcnXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ9Ce0YHRgtGA0L7QsiDQntCw0YXRgycsXG4gICAgcGljdHVyZTogJ2h0dHBzOi8vaS5pYmIuY28vVGtQcXlaSC9PYWh1LmpwZydcbiAgfVxuXTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vaW5kZXguY3NzXCI7XG5cbmNvbnN0IGJ1dHRvbkVkaXRQcm9maWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19lZGl0LWJ1dHRvblwiKTtcbmNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2lucHV0X2xpbmVfbmFtZVwiKTtcbmNvbnN0IGpvYklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9faW5wdXRfbGluZV9kZXNjcmlwdGlvblwiKTtcbmNvbnN0IHBvcHVwRWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfZWRpdFwiKTtcbmNvbnN0IHBvcHVwQWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9hZGRcIik7XG5jb25zdCBidXR0b25BZGRDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19hZGQtYnV0dG9uXCIpO1xuXG5pbXBvcnQgeyBDYXJkIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FyZC5qc1wiO1xuaW1wb3J0IFNlY3Rpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VjdGlvbi5qc1wiO1xuaW1wb3J0IHsgRm9ybVZhbGlkYXRvciB9IGZyb20gXCIuLi9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanNcIjtcbmltcG9ydCBQaWN0dXJlUG9wdXAgZnJvbSBcIi4uL2NvbXBvbmVudHMvUGljdHVyZVBvcHVwLmpzXCI7XG5pbXBvcnQgUG9wdXBXaXRoRm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3B1cFdpdGhGb3JtLmpzXCI7XG5pbXBvcnQgVXNlckluZm8gZnJvbSBcIi4uL2NvbXBvbmVudHMvVXNlckluZm8uanNcIjtcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gXCIuLi91dGlscy9jb25zdGFudHNcIjtcbmltcG9ydCB7IGluaXRpYWxDYXJkcyB9IGZyb20gXCIuLi91dGlscy9pbml0aWFsQ2FyZHNcIjtcbmltcG9ydCBBcGkgZnJvbSBcIi4uL2NvbXBvbmVudHMvQXBpXCI7XG5cbmNvbnN0IHBvcHVwRWRpdFZhbGlkYXRpb24gPSBuZXcgRm9ybVZhbGlkYXRvcihjb25maWcsIHBvcHVwRWRpdCk7XG5jb25zdCBwb3B1cEFkZFZhbGlkYXRpb24gPSBuZXcgRm9ybVZhbGlkYXRvcihjb25maWcsIHBvcHVwQWRkKTtcblxucG9wdXBFZGl0VmFsaWRhdGlvbi5lbmFibGVWYWxpZGF0aW9uKCk7XG5cbi8vIOKGkyDQvdC+0LLQsNGPINGE0LjQs9GD0LvQuNC90LAg0L/RgNC+INGO0LfQtdGA0LBcblxuY29uc3QgdXNlckluZm8gPSBuZXcgVXNlckluZm8oe1xuICB1c2VyTmFtZTogXCIucHJvZmlsZV9fbmFtZVwiLFxuICB1c2VyRGVzY3JpcHRpb246IFwiLnByb2ZpbGVfX2Rlc2NyaXB0aW9uXCIsXG59KTtcblxuLy8g4oaTINC90L7QstCw0Y8g0YTQvtGA0LzQsCBlZGl0XG5cbmNvbnN0IGVkaXRGb3JtID0gbmV3IFBvcHVwV2l0aEZvcm0oe1xuICBwb3B1cFNlbGVjdG9yOiBcIi5wb3B1cF9lZGl0XCIsXG4gIGhhbmRsZVN1Ym1pdDogKGRhdGEpID0+IHtcbiAgICB1c2VySW5mby5zZXRVc2VySW5mbyhkYXRhKTtcbiAgICBlZGl0Rm9ybS5jbG9zZVBvcHVwKCk7XG4gIH0sXG59KTtcblxuZWRpdEZvcm0uc2V0RXZlbnRMaXN0ZW5lcnMoKTtcblxuLy8g4oaTINCw0LrRgtC40LLQsNGG0LjRjyDQutC90L7Qv9C60LggZWRpdFxuXG5idXR0b25FZGl0UHJvZmlsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjb25zdCBnb3R0ZW5JbmZvID0gdXNlckluZm8uZ2V0VXNlckluZm8oKTtcbiAgbmFtZUlucHV0LnZhbHVlID0gZ290dGVuSW5mby51c2VyTmFtZTtcbiAgam9iSW5wdXQudmFsdWUgPSBnb3R0ZW5JbmZvLnVzZXJEZXNjcmlwdGlvbjtcbiAgZWRpdEZvcm0ub3BlblBvcHVwKCk7XG59KTtcblxuLy8g4oaTINC90L7QstCw0Y8g0YTQuNCz0YPQu9C40L3QsCDQv9GA0L4g0LrQsNGA0YLQuNC90LrQuFxuXG5jb25zdCBwaWN0dXJlUG9wdXAgPSBuZXcgUGljdHVyZVBvcHVwKFwiLnBvcHVwX3BpY1wiKTtcbnBpY3R1cmVQb3B1cC5zZXRFdmVudExpc3RlbmVycygpO1xuXG4vLyDihpMg0Lgg0YLQsNC6INC/0L7QvdGP0YLQvdC+XG5cbmZ1bmN0aW9uIGhhbmRsZUNhcmRDbGljayh0aXRsZSwgbGluaykge1xuICBwaWN0dXJlUG9wdXAub3BlblBvcHVwKHRpdGxlLCBsaW5rKTtcbn1cblxuLy8g4oaTICDQvdC+0LLRi9C5INGN0LrQt9C10LzQv9C70Y/RgCDQutCw0YDRgtC+0YfQutC4XG5cbmZ1bmN0aW9uIGFkZENhcmQoZGF0YSkgeyBcbiAgY29uc3QgY2FyZEl0ZW0gPSBuZXcgQ2FyZChcbiAgZGF0YS50aXRsZSxcbiAgZGF0YS5waWN0dXJlLFxuICBcIi5jYXJkc19faXRlbS10ZW1wbGF0ZVwiLFxuICBoYW5kbGVDYXJkQ2xpY2tcbik7XG5cbnJldHVybiBjYXJkSXRlbS5nZW5lcmF0ZUNhcmQoKTtcbn1cblxuLy8g4oaTICDQsdC70L7QuiDRgSDQutCw0YDRgtC40L3QutCw0LzQuFxuXG5jb25zdCBjYXJkc0xpc3QgPSBuZXcgU2VjdGlvbihcbiAge1xuICAgIHJlbmRlcmVyOiAoZGF0YSkgPT4ge1xuICAgICAgY2FyZHNMaXN0LmFkZEl0ZW0oYWRkQ2FyZChkYXRhKSk7XG4gICAgfSxcbiAgfSxcbiAgXCIuY2FyZHNcIlxuKTtcblxuLyogY2FyZHNMaXN0LnJlbmRlckl0ZW1zKGluaXRpYWxDYXJkcyk7ICovIC8vICEhISFcblxuLy8g4oaTICDQv9GA0LjQutC70Y7Rh9C10L3QuNGPINGBINC+0YLRgNC40YHQvtCy0LrQvtC5INC60LDRgNGC0L7Rh9C10Log0YfQtdGA0LXQtyBBUEkgXG4vLyDihpMgINC60L7QvdGE0LjQs1xuXG5jb25zdCBhcGlDb25maWcgPSB7XG4gIHVybDogXCJodHRwczovL21lc3RvLm5vbW9yZXBhcnRpZXMuY28vdjEvY29ob3J0LTU0L1wiLFxuICBoZWFkZXJzOiB7XG4gICAgXCJDb250ZW50LXR5cGVcIjogJ2FwcGxpY2F0aW9uL2pzb24nXG4gIH0gXG59XG5cbi8vIOKGkyAg0L7RgtGA0LjRgdC+0LLQutCwXG5cbmNvbnN0IGFwaU5ldyA9IG5ldyBBcGkoYXBpQ29uZmlnKTtcbmFwaU5ldy5nZXRDYXJkcygpIC8vIHJlc3VsdCAtINCz0L7RgtC+0LLRi9C1INC00LDQvdC90YvQtVxuICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgY2FyZHNMaXN0LnJlbmRlckl0ZW1zKHJlc3VsdCk7XG59KS5jYXRjaCgoZXJyb3IpID0+IHt9KVxuXG5cbi8vIOKGkyAg0L3QvtCy0LDRjyDRhNC+0YDQvNCwIGFkZFxuXG5jb25zdCBhZGRGb3JtID0gbmV3IFBvcHVwV2l0aEZvcm0oe1xuICBwb3B1cFNlbGVjdG9yOiBcIi5wb3B1cF9hZGRcIixcbiAgaGFuZGxlU3VibWl0OiAoZGF0YSkgPT4ge1xuICAgIGNhcmRzTGlzdC5hZGRJdGVtKGFkZENhcmQoZGF0YSkpO1xuICAgIGFkZEZvcm0uY2xvc2VQb3B1cCgpO1xuICB9LFxufSk7XG5cbmFkZEZvcm0uc2V0RXZlbnRMaXN0ZW5lcnMoKTtcblxuLy8g4oaTINCw0LrRgtC40LLQsNGG0LjRjyDQutC90L7Qv9C60LggYWRkXG5cbmJ1dHRvbkFkZENhcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgcG9wdXBBZGRWYWxpZGF0aW9uLnJlc2V0VmFsaWRhdGlvbigpO1xuICBhZGRGb3JtLm9wZW5Qb3B1cCgpO1xufSk7XG5cbnBvcHVwQWRkVmFsaWRhdGlvbi5lbmFibGVWYWxpZGF0aW9uKCk7XG5cblxuLy8g0KLQo9CiXG5cbiJdLCJuYW1lcyI6WyJBcGkiLCJ1cmwiLCJoZWFkZXJzIiwiX3VybCIsIl9oZWFkZXJzIiwiZmV0Y2giLCJtZXRob2QiLCJ0aGVuIiwicmVzcG9uc2UiLCJvayIsImpzb24iLCJQcm9taXNlIiwicmVqZWN0Iiwic3RhdHVzIiwic3RhdHVzVGV4dCIsIkNhcmQiLCJ0aXRsZSIsImxpbmsiLCJ0ZW1wbGF0ZVNlbGVjdG9yIiwiaGFuZGxlQ2FyZENsaWNrIiwiX3RpdGxlIiwiX2xpbmsiLCJfdGVtcGxhdGVTZWxlY3RvciIsIl9oYW5kbGVDYXJkQ2xpY2siLCJjYXJkRWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNvbnRlbnQiLCJjbG9uZU5vZGUiLCJfZWxlbWVudCIsInJlbW92ZSIsIl9saWtlQnV0dG9uIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiX2RlbGV0ZUJ1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJfaGFuZGxlRGVsZXRlIiwiX2hhbmRsZUxpa2UiLCJfY2FyZEltZyIsIl9nZXRUZW1wbGF0ZSIsIl9jYXJkVGl0bGUiLCJfc2V0RXZlbnRMaXN0ZW5lcnMiLCJzcmMiLCJhbHQiLCJ0ZXh0Q29udGVudCIsIkZvcm1WYWxpZGF0b3IiLCJzZXR0aW5ncyIsImZvcm1FbGVtZW50IiwiaW5wdXRFbGVtZW50IiwiZXJyb3JNZXNzYWdlIiwiX2Vycm9yRWxlbWVudCIsIl9mb3JtRWxlbWVudCIsImlkIiwiYWRkIiwiX2lucHV0RXJyb3JDbGFzcyIsIl9lcnJvckNsYXNzIiwiX2hhc0ludmFsaWRJbnB1dCIsIl9pbnB1dExpc3QiLCJfYnV0dG9uRWxlbWVudCIsIl9pbmFjdGl2ZUJ1dHRvbkNsYXNzIiwic2V0QXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwic29tZSIsIml0ZW0iLCJ2YWxpZGl0eSIsInZhbGlkIiwiX3Nob3dJbnB1dEVycm9yIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJfaGlkZUlucHV0RXJyb3IiLCJ0b2dnbGVCdXR0b25TdGF0ZSIsImZvckVhY2giLCJfY2hlY2tJbnB1dFZhbGlkaXR5IiwiX3NldFZhbGlkYXRpb25FdmVudExpc3RlbmVycyIsIl9mb3JtU2VsZWN0b3IiLCJmb3JtU2VsZWN0b3IiLCJfaW5wdXRTZWxlY3RvciIsImlucHV0U2VsZWN0b3IiLCJfc3VibWl0QnV0dG9uU2VsZWN0b3IiLCJzdWJtaXRCdXR0b25TZWxlY3RvciIsImluYWN0aXZlQnV0dG9uQ2xhc3MiLCJpbnB1dEVycm9yQ2xhc3MiLCJlcnJvckNsYXNzIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsIlBvcHVwIiwiUGljdHVyZVBvcHVwIiwicG9wdXBTZWxlY3RvciIsIl9waWNQb3B1cEltYWdlIiwiX3BvcHVwIiwiX3BpY1BvcHVwTmFtZSIsIl9oYW5kbGVFc2NDbG9zZVJlZiIsIl9oYW5kbGVFc2NDbG9zZSIsImJpbmQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZXZ0Iiwia2V5IiwiY2xvc2VQb3B1cCIsInRhcmdldCIsImNvbnRhaW5zIiwiUG9wdXBXaXRoRm9ybSIsImhhbmRsZVN1Ym1pdCIsIl9oYW5kbGVTdWJtaXQiLCJfZm9ybSIsIl9mb3JtVmFsdWVzIiwiaW5wdXQiLCJuYW1lIiwidmFsdWUiLCJwcmV2ZW50RGVmYXVsdCIsIl9nZXRJbnB1dFZhbHVlcyIsInJlc2V0IiwiU2VjdGlvbiIsImNvbnRhaW5lclNlbGVjdG9yIiwicmVuZGVyZXIiLCJfcmVuZGVyZXIiLCJfY29udGFpbmVyIiwiZGF0YSIsIl9pdGVtcyIsImVsZW1lbnQiLCJwcmVwZW5kIiwiVXNlckluZm8iLCJ1c2VyTmFtZSIsInVzZXJEZXNjcmlwdGlvbiIsIl9wcm9maWxlTmFtZSIsIl9wcm9maWxlSm9iIiwiZ290dGVuSW5mbyIsInByb2ZpbGUiLCJkZXNjcmlwdGlvbiIsImNvbmZpZyIsImluaXRpYWxDYXJkcyIsInBpY3R1cmUiLCJidXR0b25FZGl0UHJvZmlsZSIsIm5hbWVJbnB1dCIsImpvYklucHV0IiwicG9wdXBFZGl0IiwicG9wdXBBZGQiLCJidXR0b25BZGRDYXJkIiwicG9wdXBFZGl0VmFsaWRhdGlvbiIsInBvcHVwQWRkVmFsaWRhdGlvbiIsImVuYWJsZVZhbGlkYXRpb24iLCJ1c2VySW5mbyIsImVkaXRGb3JtIiwic2V0VXNlckluZm8iLCJzZXRFdmVudExpc3RlbmVycyIsImdldFVzZXJJbmZvIiwib3BlblBvcHVwIiwicGljdHVyZVBvcHVwIiwiYWRkQ2FyZCIsImNhcmRJdGVtIiwiZ2VuZXJhdGVDYXJkIiwiY2FyZHNMaXN0IiwiYWRkSXRlbSIsImFwaUNvbmZpZyIsImFwaU5ldyIsImdldENhcmRzIiwicmVzdWx0IiwicmVuZGVySXRlbXMiLCJlcnJvciIsImFkZEZvcm0iLCJyZXNldFZhbGlkYXRpb24iXSwic291cmNlUm9vdCI6IiJ9