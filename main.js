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
      return fetch('https://mesto.nomoreparties.co/v1/cohort-54/cards', {
        headers: {
          authorization: 'e005a204-1370-46e1-93c7-d7d1a162ac21',
          "Content-type": 'application/json'
        }
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

/*
const apiConfig = {
  url: "https://mesto.nomoreparties.co/v1/cohort-54/cards",
  headers: {
    authorization: 'e005a204-1370-46e1-93c7-d7d1a162ac21',
    "Content-type": 'application/json'
  } 
} */

// ↓  отрисовка

var apiNew = new _components_Api__WEBPACK_IMPORTED_MODULE_9__["default"]();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxJQUFNb0MsTUFBTSxHQUFHLElBQUl4Six1REFBRyxFQUFFO0FBQ3hCd0osTUFBTSxDQUFDQyxRQUFRLEVBQUUsQ0FBQztBQUFBLENBQ2ZsSixJQUFJLENBQUMsVUFBQ21KLE1BQU0sRUFBSztFQUNoQkosU0FBUyxDQUFDSyxXQUFXLENBQUNELE1BQU0sQ0FBQztBQUNqQyxDQUFDLENBQUMsU0FBTSxDQUFDLFVBQUNFLEtBQUssRUFBSyxDQUFDLENBQUMsQ0FBQzs7QUFHdkI7O0FBRUEsSUFBTUMsT0FBTyxHQUFHLElBQUl6RCxvRUFBYSxDQUFDO0VBQ2hDYixhQUFhLEVBQUUsWUFBWTtFQUMzQmMsWUFBWSxFQUFFLHNCQUFDZSxJQUFJLEVBQUs7SUFDdEJrQyxTQUFTLENBQUNDLE9BQU8sQ0FBQ0osT0FBTyxDQUFDL0IsSUFBSSxDQUFDLENBQUM7SUFDaEN5QyxPQUFPLENBQUM1RCxVQUFVLEVBQUU7RUFDdEI7QUFDRixDQUFDLENBQUM7QUFFRjRELE9BQU8sQ0FBQ2QsaUJBQWlCLEVBQUU7O0FBRTNCOztBQUVBUCxhQUFhLENBQUNyRyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtFQUM1Q3VHLGtCQUFrQixDQUFDb0IsZUFBZSxFQUFFO0VBQ3BDRCxPQUFPLENBQUNaLFNBQVMsRUFBRTtBQUNyQixDQUFDLENBQUM7QUFFRlAsa0JBQWtCLENBQUNDLGdCQUFnQixFQUFFOztBQUdyQyxNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQXBpLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRm9ybVZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9QaWN0dXJlUG9wdXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUG9wdXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUG9wdXBXaXRoRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TZWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1VzZXJJbmZvLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2luaXRpYWxDYXJkcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXguY3NzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBBcGkge1xuICBjb25zdHJ1Y3Rvcih7IHVybCwgaGVhZGVycyB9KSB7XG4gICAgdGhpcy5fdXJsID0gdXJsOyAvLyBodHRwczovL21lc3RvLm5vbW9yZXBhcnRpZXMuY28vdjEvY29ob3J0LTU0L1xuICAgIHRoaXMuX2hlYWRlcnMgPSBoZWFkZXJzO1xuICB9XG5cbiAgZ2V0Q2FyZHMoKSB7XG4gICAgcmV0dXJuIGZldGNoKCdodHRwczovL21lc3RvLm5vbW9yZXBhcnRpZXMuY28vdjEvY29ob3J0LTU0L2NhcmRzJywge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICBhdXRob3JpemF0aW9uOiAnZTAwNWEyMDQtMTM3MC00NmUxLTkzYzctZDdkMWExNjJhYzIxJyxcbiAgICAgICAgXCJDb250ZW50LXR5cGVcIjogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9XG4gICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpOyAvLyBQcm9taXNlLnJlc29sdmVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIFByb21pc2UucmVqZWN0KGDQntGI0LjQsdC60LA6ICR7cmVzcG9uc2Uuc3RhdHVzfSAke3Jlc3BvbnNlLnN0YXR1c1RleHR9YCk7XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGRlbGV0ZUNhcmQoKSB7fVxuICBhZGROZXdDYXJkKCkge31cbn0iLCJleHBvcnQgY2xhc3MgQ2FyZCB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBsaW5rLCB0ZW1wbGF0ZVNlbGVjdG9yLCBoYW5kbGVDYXJkQ2xpY2spIHtcbiAgICB0aGlzLl90aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuX2xpbmsgPSBsaW5rO1xuICAgIHRoaXMuX3RlbXBsYXRlU2VsZWN0b3IgPSB0ZW1wbGF0ZVNlbGVjdG9yO1xuICAgIHRoaXMuX2hhbmRsZUNhcmRDbGljayA9IGhhbmRsZUNhcmRDbGljaztcbiAgfVxuXG4gIF9nZXRUZW1wbGF0ZSgpIHtcbiAgICBjb25zdCBjYXJkRWxlbWVudCA9IGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3Rvcih0aGlzLl90ZW1wbGF0ZVNlbGVjdG9yKVxuICAgICAgLmNvbnRlbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkc19faXRlbVwiKVxuICAgICAgLmNsb25lTm9kZSh0cnVlKTtcblxuICAgIHJldHVybiBjYXJkRWxlbWVudDtcbiAgfVxuXG4gIC8vIOKGkyDRg9C00LDQu9C10L3QuNC1INC60LDRgNGC0L7Rh9C10LpcblxuICBfaGFuZGxlRGVsZXRlKCkge1xuICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlKCk7XG4gICAgdGhpcy5fZWxlbWVudCA9IG51bGw7XG4gIH1cblxuICAvLyDihpMg0LvQsNC50LrQuFxuXG4gIF9oYW5kbGVMaWtlKCkge1xuICAgIHRoaXMuX2xpa2VCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZShcImNhcmRzX19saWtlLWJ1dHRvbl9hY3RpdmVcIik7XG4gIH1cblxuICAvLyDihpMg0YQt0YbQuNGPINGB0LvRg9GI0LDRgtC10LvQtdC5INC70LDQudC60LAsINC60L7RgNC30LjQvdGLINC4INGE0YPQu9C70LBcblxuICBfc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgdGhpcy5fZGVsZXRlQnV0dG9uID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRzX19iaW5cIik7XG4gICAgdGhpcy5fZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB0aGlzLl9oYW5kbGVEZWxldGUoKTtcbiAgICB9KTtcblxuICAgIHRoaXMuX2xpa2VCdXR0b24gPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZHNfX2xpa2UtYnV0dG9uXCIpO1xuICAgIHRoaXMuX2xpa2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHRoaXMuX2hhbmRsZUxpa2UoKTtcbiAgICB9KTtcblxuICAgIHRoaXMuX2NhcmRJbWcgPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZHNfX3BpY1wiKTtcbiAgICB0aGlzLl9jYXJkSW1nLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB0aGlzLl9oYW5kbGVDYXJkQ2xpY2sodGhpcy5fdGl0bGUsIHRoaXMuX2xpbmspO1xuICAgIH0pO1xuICB9XG5cbiAgLy8g4oaTINGB0L7Qt9C00LDQvdC40LUg0LrQsNGA0YLQvtGH0LrQuFxuXG4gIGdlbmVyYXRlQ2FyZCgpIHtcbiAgICB0aGlzLl9lbGVtZW50ID0gdGhpcy5fZ2V0VGVtcGxhdGUoKTtcbiAgICB0aGlzLl9jYXJkVGl0bGUgPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZHNfX25hbWVcIik7XG4gICAgdGhpcy5fc2V0RXZlbnRMaXN0ZW5lcnMoKTtcblxuICAgIHRoaXMuX2NhcmRJbWcuc3JjID0gdGhpcy5fbGluaztcbiAgICB0aGlzLl9jYXJkSW1nLmFsdCA9IHRoaXMuX3RpdGxlO1xuICAgIHRoaXMuX2NhcmRUaXRsZS50ZXh0Q29udGVudCA9IHRoaXMuX3RpdGxlO1xuXG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQ7XG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBGb3JtVmFsaWRhdG9yIHtcbiAgY29uc3RydWN0b3Ioc2V0dGluZ3MsIGZvcm1FbGVtZW50KSB7XG4gICAgdGhpcy5fZm9ybVNlbGVjdG9yID0gc2V0dGluZ3MuZm9ybVNlbGVjdG9yO1xuICAgIHRoaXMuX2lucHV0U2VsZWN0b3IgPSBzZXR0aW5ncy5pbnB1dFNlbGVjdG9yO1xuICAgIHRoaXMuX3N1Ym1pdEJ1dHRvblNlbGVjdG9yID0gc2V0dGluZ3Muc3VibWl0QnV0dG9uU2VsZWN0b3I7XG4gICAgdGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyA9IHNldHRpbmdzLmluYWN0aXZlQnV0dG9uQ2xhc3M7XG4gICAgdGhpcy5faW5wdXRFcnJvckNsYXNzID0gc2V0dGluZ3MuaW5wdXRFcnJvckNsYXNzO1xuICAgIHRoaXMuX2Vycm9yQ2xhc3MgPSBzZXR0aW5ncy5lcnJvckNsYXNzO1xuICAgIHRoaXMuX2Zvcm1FbGVtZW50ID0gZm9ybUVsZW1lbnQ7XG4gICAgdGhpcy5fYnV0dG9uRWxlbWVudCA9IHRoaXMuX2Zvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICB0aGlzLl9zdWJtaXRCdXR0b25TZWxlY3RvclxuICAgICk7XG4gICAgdGhpcy5faW5wdXRMaXN0ID0gQXJyYXkuZnJvbShcbiAgICAgIHRoaXMuX2Zvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5faW5wdXRTZWxlY3RvcilcbiAgICApO1xuICB9XG5cbiAgLy8g0L/QvtC60LDQt9Cw0YLRjCDQvtGI0LjQsdC60YNcbiAgX3Nob3dJbnB1dEVycm9yID0gKGlucHV0RWxlbWVudCwgZXJyb3JNZXNzYWdlKSA9PiB7XG4gICAgLy8g0J3QsNGF0L7QtNC40Lwg0Y3Qu9C10LzQtdC90YIg0L7RiNC40LHQutC4INCy0L3Rg9GC0YDQuCDRgdCw0LzQvtC5INGE0YPQvdC60YbQuNC4XG4gICAgdGhpcy5fZXJyb3JFbGVtZW50ID0gdGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGAuJHtpbnB1dEVsZW1lbnQuaWR9LWVycm9yYFxuICAgICk7XG4gICAgaW5wdXRFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5faW5wdXRFcnJvckNsYXNzKTtcbiAgICB0aGlzLl9lcnJvckVsZW1lbnQudGV4dENvbnRlbnQgPSBlcnJvck1lc3NhZ2U7XG4gICAgdGhpcy5fZXJyb3JFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5fZXJyb3JDbGFzcyk7XG4gIH07XG5cbiAgLy8g0YHQutGA0YvRgtGMINC+0YjQuNCx0LrRg1xuICBfaGlkZUlucHV0RXJyb3IgPSAoaW5wdXRFbGVtZW50KSA9PiB7XG4gICAgLy8g0J3QsNGF0L7QtNC40Lwg0Y3Qu9C10LzQtdC90YIg0L7RiNC40LHQutC4XG4gICAgdGhpcy5fZXJyb3JFbGVtZW50ID0gdGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGAuJHtpbnB1dEVsZW1lbnQuaWR9LWVycm9yYFxuICAgICk7XG4gICAgaW5wdXRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5faW5wdXRFcnJvckNsYXNzKTtcbiAgICB0aGlzLl9lcnJvckVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9lcnJvckNsYXNzKTtcbiAgICB0aGlzLl9lcnJvckVsZW1lbnQudGV4dENvbnRlbnQgPSBcIlwiO1xuICB9O1xuXG4gIC8vINC60L3QvtC/0LrQsFxuICB0b2dnbGVCdXR0b25TdGF0ZSA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5faGFzSW52YWxpZElucHV0KHRoaXMuX2lucHV0TGlzdCkpIHtcbiAgICAgIC8vINC00LXQu9Cw0LXQvCDQutC90L7Qv9C60YMg0L3QtdCw0LrRgtC40LLQvdC+0LlcbiAgICAgIHRoaXMuX2J1dHRvbkVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLl9pbmFjdGl2ZUJ1dHRvbkNsYXNzKTtcbiAgICAgIHRoaXMuX2J1dHRvbkVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJ0cnVlXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyDQuNC90LDRh9C1INCw0LrRgtC40LLQvdCwXG4gICAgICB0aGlzLl9idXR0b25FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyk7XG4gICAgICB0aGlzLl9idXR0b25FbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwidHJ1ZVwiKTtcbiAgICB9XG4gIH07XG5cbiAgLy8g0L/RgNC+0LLQtdGA0LjRgtGMINC40L3Qv9GD0YLRiyDQtNC70Y8g0LDQutGC0LjQstCw0YbQuNC4INC60L3QvtC/0LrQuFxuICBfaGFzSW52YWxpZElucHV0ID0gKCkgPT4ge1xuICAgIC8vINC/0YDQvtGF0L7QtNC40Lwg0L/QviDRjdGC0L7QvNGDINC80LDRgdGB0LjQstGDINC80LXRgtC+0LTQvtC8IHNvbWVcbiAgICByZXR1cm4gdGhpcy5faW5wdXRMaXN0LnNvbWUoKGl0ZW0pID0+IHtcbiAgICAgIC8vINCV0YHQu9C4INC/0L7Qu9C1INC90LUg0LLQsNC70LjQtNC90L4sINC60L7Qu9Cx0Y3QuiDQstC10YDQvdGR0YIgdHJ1ZVxuICAgICAgLy8g0J7QsdGF0L7QtCDQvNCw0YHRgdC40LLQsCDQv9GA0LXQutGA0LDRgtC40YLRgdGPINC4INCy0YHRjyDRhNGD0L3QutGG0LjRj1xuICAgICAgLy8gaGFzSW52YWxpZElucHV0INCy0LXRgNC90ZHRgiB0cnVlXG5cbiAgICAgIHJldHVybiAhaXRlbS52YWxpZGl0eS52YWxpZDtcbiAgICB9KTtcbiAgfTtcblxuICAvLyDQv9GA0L7QstC10YDRj9C10Lwg0LLRgdGOINGN0YLRgyDQtdCx0LDQu9Cw0LnQutGDLdCx0LDQu9Cw0LvQsNC50LrRg1xuICBfY2hlY2tJbnB1dFZhbGlkaXR5ID0gKGlucHV0RWxlbWVudCkgPT4ge1xuICAgIGlmICghaW5wdXRFbGVtZW50LnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgICB0aGlzLl9zaG93SW5wdXRFcnJvcihpbnB1dEVsZW1lbnQsIGlucHV0RWxlbWVudC52YWxpZGF0aW9uTWVzc2FnZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2hpZGVJbnB1dEVycm9yKGlucHV0RWxlbWVudCk7XG4gICAgfVxuICB9O1xuXG4gIHJlc2V0VmFsaWRhdGlvbigpIHtcbiAgICB0aGlzLnRvZ2dsZUJ1dHRvblN0YXRlKCk7XG5cbiAgICB0aGlzLl9pbnB1dExpc3QuZm9yRWFjaCgoaW5wdXRFbGVtZW50KSA9PiB7XG4gICAgICB0aGlzLl9oaWRlSW5wdXRFcnJvcihpbnB1dEVsZW1lbnQpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8g0L7QsdGA0LDQsdC+0YLRh9C40LrQuCDQtNC70Y8g0LLRgdC10YUg0L/QvtC70LXQuSDRhNC+0YDQvNGLXG4gIF9zZXRWYWxpZGF0aW9uRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgdGhpcy50b2dnbGVCdXR0b25TdGF0ZSgpO1xuXG4gICAgLy8g0J7QsdC+0LnQtNGR0Lwg0LLRgdC1INGN0LvQtdC80LXQvdGC0Ysg0L/QvtC70YPRh9C10L3QvdC+0Lkg0LrQvtC70LvQtdC60YbQuNC4XG4gICAgdGhpcy5faW5wdXRMaXN0LmZvckVhY2goKGlucHV0RWxlbWVudCkgPT4ge1xuICAgICAgLy8g0LrQsNC20LTQvtC80YMg0L/QvtC70Y4g0LTQvtCx0LDQstC40Lwg0L7QsdGA0LDQsdC+0YLRh9C40Log0YHQvtCx0YvRgtC40Y8gaW5wdXRcbiAgICAgIGlucHV0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xuICAgICAgICAvLyDQktC90YPRgtGA0Lgg0LrQvtC70LHRjdC60LAg0LLRi9C30L7QstC10LwgY2hlY2tJbnB1dFZhbGlkaXR5LFxuICAgICAgICAvLyDQv9C10YDQtdC00LDQsiDQtdC5INGE0L7RgNC80YMg0Lgg0L/RgNC+0LLQtdGA0Y/QtdC80YvQuSDRjdC70LXQvNC10L3RglxuICAgICAgICB0aGlzLl9jaGVja0lucHV0VmFsaWRpdHkoaW5wdXRFbGVtZW50KTtcbiAgICAgICAgLy8g0L/QtdGA0LXQtNCw0LXQvCDRhC3RhtC40Lgg0LzQsNGB0YHQuNCyINC/0L7Qu9C10Lkg0YTQvtGA0LzRiyDQuCDRjdC70LXQvNC10L3RgiDQutC90L7Qv9C60LhcbiAgICAgICAgdGhpcy50b2dnbGVCdXR0b25TdGF0ZSgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgLy8g0L7QsdGA0LDQsdC+0YLRh9C40LrQuCDQstGB0LXQvCDRhNC+0YDQvNCw0LxcbiAgZW5hYmxlVmFsaWRhdGlvbiA9ICgpID0+IHtcbiAgICB0aGlzLl9zZXRWYWxpZGF0aW9uRXZlbnRMaXN0ZW5lcnMoKTtcbiAgfTtcbn1cbiIsImltcG9ydCBQb3B1cCBmcm9tIFwiLi9Qb3B1cC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQaWN0dXJlUG9wdXAgZXh0ZW5kcyBQb3B1cCB7XG4gIGNvbnN0cnVjdG9yKHBvcHVwU2VsZWN0b3IpIHtcbiAgICBzdXBlcihwb3B1cFNlbGVjdG9yKTtcbiAgICB0aGlzLl9waWNQb3B1cEltYWdlID0gdGhpcy5fcG9wdXAucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9faW1hZ2VcIik7XG4gICAgdGhpcy5fcGljUG9wdXBOYW1lID0gdGhpcy5fcG9wdXAucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9fZGVzY3JpcHRpb25cIik7XG4gIH1cblxuICBvcGVuUG9wdXAodGl0bGUsIGxpbmspIHtcbiAgICB0aGlzLl9waWNQb3B1cEltYWdlLnNyYyA9IGxpbms7XG4gICAgdGhpcy5fcGljUG9wdXBOYW1lLnRleHRDb250ZW50ID0gdGl0bGU7XG4gICAgdGhpcy5fcGljUG9wdXBOYW1lLmFsdCA9IHRpdGxlO1xuICAgIHN1cGVyLm9wZW5Qb3B1cCgpO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cCB7XG4gIGNvbnN0cnVjdG9yKHBvcHVwU2VsZWN0b3IpIHtcbiAgICB0aGlzLl9wb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocG9wdXBTZWxlY3Rvcik7XG4gICAgdGhpcy5faGFuZGxlRXNjQ2xvc2VSZWYgPSB0aGlzLl9oYW5kbGVFc2NDbG9zZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgLy8g4oaTINGELdGG0LjQuCAv0LzQtdGC0L7QtNGLLyDQvtGC0LrRgNGL0YLQuNGPINC4INC30LDQutGA0YvRgtC40Y9cblxuICBvcGVuUG9wdXAoKSB7XG4gICAgdGhpcy5fcG9wdXAuY2xhc3NMaXN0LmFkZChcInBvcHVwX29wZW5lZFwiKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLl9oYW5kbGVFc2NDbG9zZVJlZik7XG4gIH1cblxuICBjbG9zZVBvcHVwKCkge1xuICAgIHRoaXMuX3BvcHVwLmNsYXNzTGlzdC5yZW1vdmUoXCJwb3B1cF9vcGVuZWRcIik7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5faGFuZGxlRXNjQ2xvc2VSZWYpO1xuICB9XG5cbiAgLy8g4oaTINC30LDQutGA0YvRgtC40LUg0YfQtdGA0LXQtyBlc2NcblxuICBfaGFuZGxlRXNjQ2xvc2UoZXZ0KSB7XG4gICAgaWYgKGV2dC5rZXkgPT09IFwiRXNjYXBlXCIpIHtcbiAgICAgIHRoaXMuY2xvc2VQb3B1cCgpO1xuICAgIH1cbiAgfVxuXG4gIC8vIOKGkyDQt9Cw0LrRgNGL0YLQuNC1INC/0YDQuCDRidC10LvRh9C60LUg0L3QsCDQutGA0LXRgdGC0LjQuiDQuNC70Lgg0L7QstC10YDQu9C10LlcblxuICBzZXRFdmVudExpc3RlbmVycygpIHtcbiAgICB0aGlzLl9wb3B1cC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIChldnQpID0+IHtcbiAgICAgIGlmIChldnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInBvcHVwX29wZW5lZFwiKSkge1xuICAgICAgICB0aGlzLmNsb3NlUG9wdXAoKTtcbiAgICAgIH1cbiAgICAgIGlmIChldnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInBvcHVwX19jbG9zZS1pY29uXCIpKSB7XG4gICAgICAgIHRoaXMuY2xvc2VQb3B1cCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgUG9wdXAgZnJvbSBcIi4vUG9wdXAuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBXaXRoRm9ybSBleHRlbmRzIFBvcHVwIHtcbiAgY29uc3RydWN0b3IoeyBwb3B1cFNlbGVjdG9yLCBoYW5kbGVTdWJtaXQgfSkge1xuICAgIHN1cGVyKHBvcHVwU2VsZWN0b3IpO1xuICAgIHRoaXMuX2hhbmRsZVN1Ym1pdCA9IGhhbmRsZVN1Ym1pdDtcbiAgICB0aGlzLl9mb3JtID0gdGhpcy5fcG9wdXAucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9fZm9ybVwiKTtcbiAgICAvLyDQtNC+0YHRgtCw0ZHQvCDQstGB0LUg0Y3Qu9C10LzQtdC90YLRiyDQv9C+0LvQtdC5XG4gICAgdGhpcy5faW5wdXRMaXN0ID0gdGhpcy5fcG9wdXAucXVlcnlTZWxlY3RvckFsbChcIi5wb3B1cF9faW5wdXRcIik7XG4gIH1cblxuICBfZ2V0SW5wdXRWYWx1ZXMoKSB7XG4gICAgLy8g0YHQvtC30LTQsNGR0Lwg0L/Rg9GB0YLQvtC5INC+0LHRitC10LrRglxuICAgIHRoaXMuX2Zvcm1WYWx1ZXMgPSB7fTtcblxuICAgIC8vINC00L7QsdCw0LLQu9GP0LXQvCDQsiDRjdGC0L7RgiDQvtCx0YrQtdC60YIg0LfQvdCw0YfQtdC90LjRjyDQstGB0LXRhSDQv9C+0LvQtdC5XG4gICAgdGhpcy5faW5wdXRMaXN0LmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICB0aGlzLl9mb3JtVmFsdWVzW2lucHV0Lm5hbWVdID0gaW5wdXQudmFsdWU7XG4gICAgfSk7XG5cbiAgICAvLyDQstC+0LfQstGA0LDRidCw0LXQvCDQvtCx0YrQtdC60YIg0LfQvdCw0YfQtdC90LjQuVxuICAgIHJldHVybiB0aGlzLl9mb3JtVmFsdWVzO1xuICB9XG5cbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgc3VwZXIuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB0aGlzLl9mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2dCkgPT4ge1xuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIHRoaXMuX2hhbmRsZVN1Ym1pdCh0aGlzLl9nZXRJbnB1dFZhbHVlcygpKTtcbiAgICAgIC8qIHRoaXMuY2xvc2VQb3B1cCgpOyAqL1xuICAgIH0pO1xuICB9XG5cbiAgY2xvc2VQb3B1cCgpIHtcbiAgICBzdXBlci5jbG9zZVBvcHVwKCk7XG4gICAgdGhpcy5fZm9ybS5yZXNldCgpO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTZWN0aW9uIHtcbiAgY29uc3RydWN0b3IoeyByZW5kZXJlciB9LCBjb250YWluZXJTZWxlY3Rvcikge1xuICAgIHRoaXMuX3JlbmRlcmVyID0gcmVuZGVyZXI7XG4gICAgdGhpcy5fY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb250YWluZXJTZWxlY3Rvcik7XG4gIH1cblxuICByZW5kZXJJdGVtcyhkYXRhKSB7XG4gICAgdGhpcy5faXRlbXMgPSBkYXRhO1xuICAgIHRoaXMuX2l0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyKGl0ZW0pO1xuICAgIH0pO1xuICB9XG5cbiAgYWRkSXRlbShlbGVtZW50KSB7XG4gICAgdGhpcy5fY29udGFpbmVyLnByZXBlbmQoZWxlbWVudCk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJJbmZvIHtcbiAgY29uc3RydWN0b3IoeyB1c2VyTmFtZSwgdXNlckRlc2NyaXB0aW9uIH0pIHtcbiAgICB0aGlzLl9wcm9maWxlTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodXNlck5hbWUpO1xuICAgIHRoaXMuX3Byb2ZpbGVKb2IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHVzZXJEZXNjcmlwdGlvbik7XG4gIH1cblxuICBnZXRVc2VySW5mbygpIHtcbiAgICBjb25zdCBnb3R0ZW5JbmZvID0ge1xuICAgICAgdXNlck5hbWU6IHRoaXMuX3Byb2ZpbGVOYW1lLnRleHRDb250ZW50LFxuICAgICAgdXNlckRlc2NyaXB0aW9uOiB0aGlzLl9wcm9maWxlSm9iLnRleHRDb250ZW50LFxuICAgIH07XG5cbiAgICByZXR1cm4gZ290dGVuSW5mbztcbiAgfVxuXG4gIHNldFVzZXJJbmZvKGRhdGEpIHtcbiAgICB0aGlzLl9wcm9maWxlTmFtZS50ZXh0Q29udGVudCA9IGRhdGEucHJvZmlsZTtcbiAgICB0aGlzLl9wcm9maWxlSm9iLnRleHRDb250ZW50ID0gZGF0YS5kZXNjcmlwdGlvbjtcbiAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcbiAgZm9ybVNlbGVjdG9yOiAnLnBvcHVwX19mb3JtJyxcbiAgaW5wdXRTZWxlY3RvcjogJy5wb3B1cF9faW5wdXQnLFxuICBzdWJtaXRCdXR0b25TZWxlY3RvcjogJy5wb3B1cF9fc3VibWl0JyxcbiAgaW5hY3RpdmVCdXR0b25DbGFzczogJ3BvcHVwX19zdWJtaXRfZGlzYWJsZWQnLFxuICBpbnB1dEVycm9yQ2xhc3M6ICdwb3B1cF9faW5wdXRfdHlwZV9lcnJvcicsXG4gIGVycm9yQ2xhc3M6ICdwb3B1cF9faW5wdXQtZXJyb3JfYWN0aXZlJ307IiwiZXhwb3J0IGNvbnN0IGluaXRpYWxDYXJkcyA9IFtcbiAge1xuICAgIHRpdGxlOiAn0J3QsNGG0LjQvtC90LDQu9GM0L3Ri9C5INCf0LDRgNC6INCR0Y3QtNC70Y3QvdC00YEnLFxuICAgIHBpY3R1cmU6ICdodHRwczovL2kuaWJiLmNvL0pRR1o1MDQvQmFkbGFuZHMtTmF0aW9uYWwtUGFyay1Tb3V0aC1EYWtvdGEtVVNBLmpwZydcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAn0JPQvtGA0Ysg0JHQu9GDINCg0LjQtNC2JyxcbiAgICBwaWN0dXJlOiAnaHR0cHM6Ly9pLmliYi5jby80ODltVFF4L0JsdWUtUmlkZ2UtTW91bnRhaW5zLmpwZydcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAn0JnQtdC70LvQvtGD0YHRgtC+0YPQvScsXG4gICAgcGljdHVyZTogJ2h0dHBzOi8vaS5pYmIuY28vNkI2SlBGSy9ZZWxsb3dzdG9uZS5qcGcnXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ9Ci0YDQvtC/0LAg0JTRj9C00Lgg0KLQvtC80LAnLFxuICAgIHBpY3R1cmU6ICdodHRwczovL2kuaWJiLmNvLzBxZ0RiTlYvVW5jbGUtVG9tcy1UcmFpbC5qcGcnXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ9CS0L7QtNC+0L/QsNC0INCc0LDQu9GC0L3QvtC80LAnLFxuICAgIHBpY3R1cmU6ICdodHRwczovL2kuaWJiLmNvL0p2OWpNcFcvTXVsdG5vbWFoLUZhbGxzLmpwZydcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAn0J7RgdGC0YDQvtCyINCe0LDRhdGDJyxcbiAgICBwaWN0dXJlOiAnaHR0cHM6Ly9pLmliYi5jby9Ua1BxeVpIL09haHUuanBnJ1xuICB9XG5dOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi9pbmRleC5jc3NcIjtcblxuY29uc3QgYnV0dG9uRWRpdFByb2ZpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2VkaXQtYnV0dG9uXCIpO1xuY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9faW5wdXRfbGluZV9uYW1lXCIpO1xuY29uc3Qgam9iSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19pbnB1dF9saW5lX2Rlc2NyaXB0aW9uXCIpO1xuY29uc3QgcG9wdXBFZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9lZGl0XCIpO1xuY29uc3QgcG9wdXBBZGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX2FkZFwiKTtcbmNvbnN0IGJ1dHRvbkFkZENhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2FkZC1idXR0b25cIik7XG5cbmltcG9ydCB7IENhcmQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJkLmpzXCI7XG5pbXBvcnQgU2VjdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWN0aW9uLmpzXCI7XG5pbXBvcnQgeyBGb3JtVmFsaWRhdG9yIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9ybVZhbGlkYXRvci5qc1wiO1xuaW1wb3J0IFBpY3R1cmVQb3B1cCBmcm9tIFwiLi4vY29tcG9uZW50cy9QaWN0dXJlUG9wdXAuanNcIjtcbmltcG9ydCBQb3B1cFdpdGhGb3JtIGZyb20gXCIuLi9jb21wb25lbnRzL1BvcHVwV2l0aEZvcm0uanNcIjtcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwiLi4vY29tcG9uZW50cy9Vc2VySW5mby5qc1wiO1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSBcIi4uL3V0aWxzL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgaW5pdGlhbENhcmRzIH0gZnJvbSBcIi4uL3V0aWxzL2luaXRpYWxDYXJkc1wiO1xuaW1wb3J0IEFwaSBmcm9tIFwiLi4vY29tcG9uZW50cy9BcGlcIjtcblxuY29uc3QgcG9wdXBFZGl0VmFsaWRhdGlvbiA9IG5ldyBGb3JtVmFsaWRhdG9yKGNvbmZpZywgcG9wdXBFZGl0KTtcbmNvbnN0IHBvcHVwQWRkVmFsaWRhdGlvbiA9IG5ldyBGb3JtVmFsaWRhdG9yKGNvbmZpZywgcG9wdXBBZGQpO1xuXG5wb3B1cEVkaXRWYWxpZGF0aW9uLmVuYWJsZVZhbGlkYXRpb24oKTtcblxuLy8g4oaTINC90L7QstCw0Y8g0YTQuNCz0YPQu9C40L3QsCDQv9GA0L4g0Y7Qt9C10YDQsFxuXG5jb25zdCB1c2VySW5mbyA9IG5ldyBVc2VySW5mbyh7XG4gIHVzZXJOYW1lOiBcIi5wcm9maWxlX19uYW1lXCIsXG4gIHVzZXJEZXNjcmlwdGlvbjogXCIucHJvZmlsZV9fZGVzY3JpcHRpb25cIixcbn0pO1xuXG4vLyDihpMg0L3QvtCy0LDRjyDRhNC+0YDQvNCwIGVkaXRcblxuY29uc3QgZWRpdEZvcm0gPSBuZXcgUG9wdXBXaXRoRm9ybSh7XG4gIHBvcHVwU2VsZWN0b3I6IFwiLnBvcHVwX2VkaXRcIixcbiAgaGFuZGxlU3VibWl0OiAoZGF0YSkgPT4ge1xuICAgIHVzZXJJbmZvLnNldFVzZXJJbmZvKGRhdGEpO1xuICAgIGVkaXRGb3JtLmNsb3NlUG9wdXAoKTtcbiAgfSxcbn0pO1xuXG5lZGl0Rm9ybS5zZXRFdmVudExpc3RlbmVycygpO1xuXG4vLyDihpMg0LDQutGC0LjQstCw0YbQuNGPINC60L3QvtC/0LrQuCBlZGl0XG5cbmJ1dHRvbkVkaXRQcm9maWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNvbnN0IGdvdHRlbkluZm8gPSB1c2VySW5mby5nZXRVc2VySW5mbygpO1xuICBuYW1lSW5wdXQudmFsdWUgPSBnb3R0ZW5JbmZvLnVzZXJOYW1lO1xuICBqb2JJbnB1dC52YWx1ZSA9IGdvdHRlbkluZm8udXNlckRlc2NyaXB0aW9uO1xuICBlZGl0Rm9ybS5vcGVuUG9wdXAoKTtcbn0pO1xuXG4vLyDihpMg0L3QvtCy0LDRjyDRhNC40LPRg9C70LjQvdCwINC/0YDQviDQutCw0YDRgtC40L3QutC4XG5cbmNvbnN0IHBpY3R1cmVQb3B1cCA9IG5ldyBQaWN0dXJlUG9wdXAoXCIucG9wdXBfcGljXCIpO1xucGljdHVyZVBvcHVwLnNldEV2ZW50TGlzdGVuZXJzKCk7XG5cbi8vIOKGkyDQuCDRgtCw0Log0L/QvtC90Y/RgtC90L5cblxuZnVuY3Rpb24gaGFuZGxlQ2FyZENsaWNrKHRpdGxlLCBsaW5rKSB7XG4gIHBpY3R1cmVQb3B1cC5vcGVuUG9wdXAodGl0bGUsIGxpbmspO1xufVxuXG4vLyDihpMgINC90L7QstGL0Lkg0Y3QutC30LXQvNC/0LvRj9GAINC60LDRgNGC0L7Rh9C60LhcblxuZnVuY3Rpb24gYWRkQ2FyZChkYXRhKSB7IFxuICBjb25zdCBjYXJkSXRlbSA9IG5ldyBDYXJkKFxuICBkYXRhLnRpdGxlLFxuICBkYXRhLnBpY3R1cmUsXG4gIFwiLmNhcmRzX19pdGVtLXRlbXBsYXRlXCIsXG4gIGhhbmRsZUNhcmRDbGlja1xuKTtcblxucmV0dXJuIGNhcmRJdGVtLmdlbmVyYXRlQ2FyZCgpO1xufVxuXG4vLyDihpMgINCx0LvQvtC6INGBINC60LDRgNGC0LjQvdC60LDQvNC4XG5cbmNvbnN0IGNhcmRzTGlzdCA9IG5ldyBTZWN0aW9uKFxuICB7XG4gICAgcmVuZGVyZXI6IChkYXRhKSA9PiB7XG4gICAgICBjYXJkc0xpc3QuYWRkSXRlbShhZGRDYXJkKGRhdGEpKTtcbiAgICB9LFxuICB9LFxuICBcIi5jYXJkc1wiXG4pO1xuXG4vKiBjYXJkc0xpc3QucmVuZGVySXRlbXMoaW5pdGlhbENhcmRzKTsgKi8gLy8gISEhIVxuXG4vLyDihpMgINC/0YDQuNC60LvRjtGH0LXQvdC40Y8g0YEg0L7RgtGA0LjRgdC+0LLQutC+0Lkg0LrQsNGA0YLQvtGH0LXQuiDRh9C10YDQtdC3IEFQSSBcbi8vIOKGkyAg0LrQvtC90YTQuNCzXG5cbi8qXG5jb25zdCBhcGlDb25maWcgPSB7XG4gIHVybDogXCJodHRwczovL21lc3RvLm5vbW9yZXBhcnRpZXMuY28vdjEvY29ob3J0LTU0L2NhcmRzXCIsXG4gIGhlYWRlcnM6IHtcbiAgICBhdXRob3JpemF0aW9uOiAnZTAwNWEyMDQtMTM3MC00NmUxLTkzYzctZDdkMWExNjJhYzIxJyxcbiAgICBcIkNvbnRlbnQtdHlwZVwiOiAnYXBwbGljYXRpb24vanNvbidcbiAgfSBcbn0gKi9cblxuLy8g4oaTICDQvtGC0YDQuNGB0L7QstC60LBcblxuY29uc3QgYXBpTmV3ID0gbmV3IEFwaSgpO1xuYXBpTmV3LmdldENhcmRzKCkgLy8gcmVzdWx0IC0g0LPQvtGC0L7QstGL0LUg0LTQsNC90L3Ri9C1XG4gIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICBjYXJkc0xpc3QucmVuZGVySXRlbXMocmVzdWx0KTtcbn0pLmNhdGNoKChlcnJvcikgPT4ge30pXG5cblxuLy8g4oaTICDQvdC+0LLQsNGPINGE0L7RgNC80LAgYWRkXG5cbmNvbnN0IGFkZEZvcm0gPSBuZXcgUG9wdXBXaXRoRm9ybSh7XG4gIHBvcHVwU2VsZWN0b3I6IFwiLnBvcHVwX2FkZFwiLFxuICBoYW5kbGVTdWJtaXQ6IChkYXRhKSA9PiB7XG4gICAgY2FyZHNMaXN0LmFkZEl0ZW0oYWRkQ2FyZChkYXRhKSk7XG4gICAgYWRkRm9ybS5jbG9zZVBvcHVwKCk7XG4gIH0sXG59KTtcblxuYWRkRm9ybS5zZXRFdmVudExpc3RlbmVycygpO1xuXG4vLyDihpMg0LDQutGC0LjQstCw0YbQuNGPINC60L3QvtC/0LrQuCBhZGRcblxuYnV0dG9uQWRkQ2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBwb3B1cEFkZFZhbGlkYXRpb24ucmVzZXRWYWxpZGF0aW9uKCk7XG4gIGFkZEZvcm0ub3BlblBvcHVwKCk7XG59KTtcblxucG9wdXBBZGRWYWxpZGF0aW9uLmVuYWJsZVZhbGlkYXRpb24oKTtcblxuXG4vLyDQotCj0KJcblxuIl0sIm5hbWVzIjpbIkFwaSIsInVybCIsImhlYWRlcnMiLCJfdXJsIiwiX2hlYWRlcnMiLCJmZXRjaCIsImF1dGhvcml6YXRpb24iLCJ0aGVuIiwicmVzcG9uc2UiLCJvayIsImpzb24iLCJQcm9taXNlIiwicmVqZWN0Iiwic3RhdHVzIiwic3RhdHVzVGV4dCIsIkNhcmQiLCJ0aXRsZSIsImxpbmsiLCJ0ZW1wbGF0ZVNlbGVjdG9yIiwiaGFuZGxlQ2FyZENsaWNrIiwiX3RpdGxlIiwiX2xpbmsiLCJfdGVtcGxhdGVTZWxlY3RvciIsIl9oYW5kbGVDYXJkQ2xpY2siLCJjYXJkRWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNvbnRlbnQiLCJjbG9uZU5vZGUiLCJfZWxlbWVudCIsInJlbW92ZSIsIl9saWtlQnV0dG9uIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiX2RlbGV0ZUJ1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJfaGFuZGxlRGVsZXRlIiwiX2hhbmRsZUxpa2UiLCJfY2FyZEltZyIsIl9nZXRUZW1wbGF0ZSIsIl9jYXJkVGl0bGUiLCJfc2V0RXZlbnRMaXN0ZW5lcnMiLCJzcmMiLCJhbHQiLCJ0ZXh0Q29udGVudCIsIkZvcm1WYWxpZGF0b3IiLCJzZXR0aW5ncyIsImZvcm1FbGVtZW50IiwiaW5wdXRFbGVtZW50IiwiZXJyb3JNZXNzYWdlIiwiX2Vycm9yRWxlbWVudCIsIl9mb3JtRWxlbWVudCIsImlkIiwiYWRkIiwiX2lucHV0RXJyb3JDbGFzcyIsIl9lcnJvckNsYXNzIiwiX2hhc0ludmFsaWRJbnB1dCIsIl9pbnB1dExpc3QiLCJfYnV0dG9uRWxlbWVudCIsIl9pbmFjdGl2ZUJ1dHRvbkNsYXNzIiwic2V0QXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwic29tZSIsIml0ZW0iLCJ2YWxpZGl0eSIsInZhbGlkIiwiX3Nob3dJbnB1dEVycm9yIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJfaGlkZUlucHV0RXJyb3IiLCJ0b2dnbGVCdXR0b25TdGF0ZSIsImZvckVhY2giLCJfY2hlY2tJbnB1dFZhbGlkaXR5IiwiX3NldFZhbGlkYXRpb25FdmVudExpc3RlbmVycyIsIl9mb3JtU2VsZWN0b3IiLCJmb3JtU2VsZWN0b3IiLCJfaW5wdXRTZWxlY3RvciIsImlucHV0U2VsZWN0b3IiLCJfc3VibWl0QnV0dG9uU2VsZWN0b3IiLCJzdWJtaXRCdXR0b25TZWxlY3RvciIsImluYWN0aXZlQnV0dG9uQ2xhc3MiLCJpbnB1dEVycm9yQ2xhc3MiLCJlcnJvckNsYXNzIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsIlBvcHVwIiwiUGljdHVyZVBvcHVwIiwicG9wdXBTZWxlY3RvciIsIl9waWNQb3B1cEltYWdlIiwiX3BvcHVwIiwiX3BpY1BvcHVwTmFtZSIsIl9oYW5kbGVFc2NDbG9zZVJlZiIsIl9oYW5kbGVFc2NDbG9zZSIsImJpbmQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZXZ0Iiwia2V5IiwiY2xvc2VQb3B1cCIsInRhcmdldCIsImNvbnRhaW5zIiwiUG9wdXBXaXRoRm9ybSIsImhhbmRsZVN1Ym1pdCIsIl9oYW5kbGVTdWJtaXQiLCJfZm9ybSIsIl9mb3JtVmFsdWVzIiwiaW5wdXQiLCJuYW1lIiwidmFsdWUiLCJwcmV2ZW50RGVmYXVsdCIsIl9nZXRJbnB1dFZhbHVlcyIsInJlc2V0IiwiU2VjdGlvbiIsImNvbnRhaW5lclNlbGVjdG9yIiwicmVuZGVyZXIiLCJfcmVuZGVyZXIiLCJfY29udGFpbmVyIiwiZGF0YSIsIl9pdGVtcyIsImVsZW1lbnQiLCJwcmVwZW5kIiwiVXNlckluZm8iLCJ1c2VyTmFtZSIsInVzZXJEZXNjcmlwdGlvbiIsIl9wcm9maWxlTmFtZSIsIl9wcm9maWxlSm9iIiwiZ290dGVuSW5mbyIsInByb2ZpbGUiLCJkZXNjcmlwdGlvbiIsImNvbmZpZyIsImluaXRpYWxDYXJkcyIsInBpY3R1cmUiLCJidXR0b25FZGl0UHJvZmlsZSIsIm5hbWVJbnB1dCIsImpvYklucHV0IiwicG9wdXBFZGl0IiwicG9wdXBBZGQiLCJidXR0b25BZGRDYXJkIiwicG9wdXBFZGl0VmFsaWRhdGlvbiIsInBvcHVwQWRkVmFsaWRhdGlvbiIsImVuYWJsZVZhbGlkYXRpb24iLCJ1c2VySW5mbyIsImVkaXRGb3JtIiwic2V0VXNlckluZm8iLCJzZXRFdmVudExpc3RlbmVycyIsImdldFVzZXJJbmZvIiwib3BlblBvcHVwIiwicGljdHVyZVBvcHVwIiwiYWRkQ2FyZCIsImNhcmRJdGVtIiwiZ2VuZXJhdGVDYXJkIiwiY2FyZHNMaXN0IiwiYWRkSXRlbSIsImFwaU5ldyIsImdldENhcmRzIiwicmVzdWx0IiwicmVuZGVySXRlbXMiLCJlcnJvciIsImFkZEZvcm0iLCJyZXNldFZhbGlkYXRpb24iXSwic291cmNlUm9vdCI6IiJ9