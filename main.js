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
  url: "https://mesto.nomoreparties.co/v1/cohort-54/cards",
  headers: {
    authorization: 'e005a204-1370-46e1-93c7-d7d1a162ac21',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBRUEsSUFBTW9DLFNBQVMsR0FBRztFQUNoQnZKLEdBQUcsRUFBRSxtREFBbUQ7RUFDeERDLE9BQU8sRUFBRTtJQUNQdUosYUFBYSxFQUFFLHNDQUFzQztJQUNyRCxjQUFjLEVBQUU7RUFDbEI7QUFDRixDQUFDOztBQUVEOztBQUVBLElBQU1DLE1BQU0sR0FBRyxJQUFJMUosdURBQUcsQ0FBQ3dKLFNBQVMsQ0FBQztBQUNqQ0UsTUFBTSxDQUFDQyxRQUFRLEVBQUUsQ0FBQztBQUFBLENBQ2ZwSixJQUFJLENBQUMsVUFBQ3FKLE1BQU0sRUFBSztFQUNoQk4sU0FBUyxDQUFDTyxXQUFXLENBQUNELE1BQU0sQ0FBQztBQUNqQyxDQUFDLENBQUMsU0FBTSxDQUFDLFVBQUNFLEtBQUssRUFBSyxDQUFDLENBQUMsQ0FBQzs7QUFHdkI7O0FBRUEsSUFBTUMsT0FBTyxHQUFHLElBQUkzRCxvRUFBYSxDQUFDO0VBQ2hDYixhQUFhLEVBQUUsWUFBWTtFQUMzQmMsWUFBWSxFQUFFLHNCQUFDZSxJQUFJLEVBQUs7SUFDdEJrQyxTQUFTLENBQUNDLE9BQU8sQ0FBQ0osT0FBTyxDQUFDL0IsSUFBSSxDQUFDLENBQUM7SUFDaEMyQyxPQUFPLENBQUM5RCxVQUFVLEVBQUU7RUFDdEI7QUFDRixDQUFDLENBQUM7QUFFRjhELE9BQU8sQ0FBQ2hCLGlCQUFpQixFQUFFOztBQUUzQjs7QUFFQVAsYUFBYSxDQUFDckcsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07RUFDNUN1RyxrQkFBa0IsQ0FBQ3NCLGVBQWUsRUFBRTtFQUNwQ0QsT0FBTyxDQUFDZCxTQUFTLEVBQUU7QUFDckIsQ0FBQyxDQUFDO0FBRUZQLGtCQUFrQixDQUFDQyxnQkFBZ0IsRUFBRTs7QUFHckMsTSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0FwaS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9DYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUGljdHVyZVBvcHVwLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1BvcHVwLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1BvcHVwV2l0aEZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Vc2VySW5mby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9pbml0aWFsQ2FyZHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBpIHtcbiAgY29uc3RydWN0b3IoeyB1cmwsIGhlYWRlcnMgfSkge1xuICAgIHRoaXMuX3VybCA9IHVybDsgLy8gaHR0cHM6Ly9tZXN0by5ub21vcmVwYXJ0aWVzLmNvL3YxL2NvaG9ydC01NC9cbiAgICB0aGlzLl9oZWFkZXJzID0gaGVhZGVycztcbiAgfVxuXG4gIGdldENhcmRzKCkge1xuICAgIHJldHVybiBmZXRjaCh0aGlzLnVybCwge1xuICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVycyxcbiAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7IC8vIFByb21pc2UucmVzb2x2ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgUHJvbWlzZS5yZWplY3QoYNCe0YjQuNCx0LrQsDogJHtyZXNwb25zZS5zdGF0dXN9ICR7cmVzcG9uc2Uuc3RhdHVzVGV4dH1gKTtcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgZGVsZXRlQ2FyZCgpIHt9XG4gIGFkZE5ld0NhcmQoKSB7fVxufSIsImV4cG9ydCBjbGFzcyBDYXJkIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGxpbmssIHRlbXBsYXRlU2VsZWN0b3IsIGhhbmRsZUNhcmRDbGljaykge1xuICAgIHRoaXMuX3RpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5fbGluayA9IGxpbms7XG4gICAgdGhpcy5fdGVtcGxhdGVTZWxlY3RvciA9IHRlbXBsYXRlU2VsZWN0b3I7XG4gICAgdGhpcy5faGFuZGxlQ2FyZENsaWNrID0gaGFuZGxlQ2FyZENsaWNrO1xuICB9XG5cbiAgX2dldFRlbXBsYXRlKCkge1xuICAgIGNvbnN0IGNhcmRFbGVtZW50ID0gZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKHRoaXMuX3RlbXBsYXRlU2VsZWN0b3IpXG4gICAgICAuY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRzX19pdGVtXCIpXG4gICAgICAuY2xvbmVOb2RlKHRydWUpO1xuXG4gICAgcmV0dXJuIGNhcmRFbGVtZW50O1xuICB9XG5cbiAgLy8g4oaTINGD0LTQsNC70LXQvdC40LUg0LrQsNGA0YLQvtGH0LXQulxuXG4gIF9oYW5kbGVEZWxldGUoKSB7XG4gICAgdGhpcy5fZWxlbWVudC5yZW1vdmUoKTtcbiAgICB0aGlzLl9lbGVtZW50ID0gbnVsbDtcbiAgfVxuXG4gIC8vIOKGkyDQu9Cw0LnQutC4XG5cbiAgX2hhbmRsZUxpa2UoKSB7XG4gICAgdGhpcy5fbGlrZUJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwiY2FyZHNfX2xpa2UtYnV0dG9uX2FjdGl2ZVwiKTtcbiAgfVxuXG4gIC8vIOKGkyDRhC3RhtC40Y8g0YHQu9GD0YjQsNGC0LXQu9C10Lkg0LvQsNC50LrQsCwg0LrQvtGA0LfQuNC90Ysg0Lgg0YTRg9C70LvQsFxuXG4gIF9zZXRFdmVudExpc3RlbmVycygpIHtcbiAgICB0aGlzLl9kZWxldGVCdXR0b24gPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZHNfX2JpblwiKTtcbiAgICB0aGlzLl9kZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHRoaXMuX2hhbmRsZURlbGV0ZSgpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5fbGlrZUJ1dHRvbiA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkc19fbGlrZS1idXR0b25cIik7XG4gICAgdGhpcy5fbGlrZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5faGFuZGxlTGlrZSgpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5fY2FyZEltZyA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkc19fcGljXCIpO1xuICAgIHRoaXMuX2NhcmRJbWcuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHRoaXMuX2hhbmRsZUNhcmRDbGljayh0aGlzLl90aXRsZSwgdGhpcy5fbGluayk7XG4gICAgfSk7XG4gIH1cblxuICAvLyDihpMg0YHQvtC30LTQsNC90LjQtSDQutCw0YDRgtC+0YfQutC4XG5cbiAgZ2VuZXJhdGVDYXJkKCkge1xuICAgIHRoaXMuX2VsZW1lbnQgPSB0aGlzLl9nZXRUZW1wbGF0ZSgpO1xuICAgIHRoaXMuX2NhcmRUaXRsZSA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkc19fbmFtZVwiKTtcbiAgICB0aGlzLl9zZXRFdmVudExpc3RlbmVycygpO1xuXG4gICAgdGhpcy5fY2FyZEltZy5zcmMgPSB0aGlzLl9saW5rO1xuICAgIHRoaXMuX2NhcmRJbWcuYWx0ID0gdGhpcy5fdGl0bGU7XG4gICAgdGhpcy5fY2FyZFRpdGxlLnRleHRDb250ZW50ID0gdGhpcy5fdGl0bGU7XG5cbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudDtcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIEZvcm1WYWxpZGF0b3Ige1xuICBjb25zdHJ1Y3RvcihzZXR0aW5ncywgZm9ybUVsZW1lbnQpIHtcbiAgICB0aGlzLl9mb3JtU2VsZWN0b3IgPSBzZXR0aW5ncy5mb3JtU2VsZWN0b3I7XG4gICAgdGhpcy5faW5wdXRTZWxlY3RvciA9IHNldHRpbmdzLmlucHV0U2VsZWN0b3I7XG4gICAgdGhpcy5fc3VibWl0QnV0dG9uU2VsZWN0b3IgPSBzZXR0aW5ncy5zdWJtaXRCdXR0b25TZWxlY3RvcjtcbiAgICB0aGlzLl9pbmFjdGl2ZUJ1dHRvbkNsYXNzID0gc2V0dGluZ3MuaW5hY3RpdmVCdXR0b25DbGFzcztcbiAgICB0aGlzLl9pbnB1dEVycm9yQ2xhc3MgPSBzZXR0aW5ncy5pbnB1dEVycm9yQ2xhc3M7XG4gICAgdGhpcy5fZXJyb3JDbGFzcyA9IHNldHRpbmdzLmVycm9yQ2xhc3M7XG4gICAgdGhpcy5fZm9ybUVsZW1lbnQgPSBmb3JtRWxlbWVudDtcbiAgICB0aGlzLl9idXR0b25FbGVtZW50ID0gdGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIHRoaXMuX3N1Ym1pdEJ1dHRvblNlbGVjdG9yXG4gICAgKTtcbiAgICB0aGlzLl9pbnB1dExpc3QgPSBBcnJheS5mcm9tKFxuICAgICAgdGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLl9pbnB1dFNlbGVjdG9yKVxuICAgICk7XG4gIH1cblxuICAvLyDQv9C+0LrQsNC30LDRgtGMINC+0YjQuNCx0LrRg1xuICBfc2hvd0lucHV0RXJyb3IgPSAoaW5wdXRFbGVtZW50LCBlcnJvck1lc3NhZ2UpID0+IHtcbiAgICAvLyDQndCw0YXQvtC00LjQvCDRjdC70LXQvNC10L3RgiDQvtGI0LjQsdC60Lgg0LLQvdGD0YLRgNC4INGB0LDQvNC+0Lkg0YTRg9C90LrRhtC40LhcbiAgICB0aGlzLl9lcnJvckVsZW1lbnQgPSB0aGlzLl9mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYC4ke2lucHV0RWxlbWVudC5pZH0tZXJyb3JgXG4gICAgKTtcbiAgICBpbnB1dEVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLl9pbnB1dEVycm9yQ2xhc3MpO1xuICAgIHRoaXMuX2Vycm9yRWxlbWVudC50ZXh0Q29udGVudCA9IGVycm9yTWVzc2FnZTtcbiAgICB0aGlzLl9lcnJvckVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLl9lcnJvckNsYXNzKTtcbiAgfTtcblxuICAvLyDRgdC60YDRi9GC0Ywg0L7RiNC40LHQutGDXG4gIF9oaWRlSW5wdXRFcnJvciA9IChpbnB1dEVsZW1lbnQpID0+IHtcbiAgICAvLyDQndCw0YXQvtC00LjQvCDRjdC70LXQvNC10L3RgiDQvtGI0LjQsdC60LhcbiAgICB0aGlzLl9lcnJvckVsZW1lbnQgPSB0aGlzLl9mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYC4ke2lucHV0RWxlbWVudC5pZH0tZXJyb3JgXG4gICAgKTtcbiAgICBpbnB1dEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9pbnB1dEVycm9yQ2xhc3MpO1xuICAgIHRoaXMuX2Vycm9yRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2Vycm9yQ2xhc3MpO1xuICAgIHRoaXMuX2Vycm9yRWxlbWVudC50ZXh0Q29udGVudCA9IFwiXCI7XG4gIH07XG5cbiAgLy8g0LrQvdC+0L/QutCwXG4gIHRvZ2dsZUJ1dHRvblN0YXRlID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLl9oYXNJbnZhbGlkSW5wdXQodGhpcy5faW5wdXRMaXN0KSkge1xuICAgICAgLy8g0LTQtdC70LDQtdC8INC60L3QvtC/0LrRgyDQvdC10LDQutGC0LjQstC90L7QuVxuICAgICAgdGhpcy5fYnV0dG9uRWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MpO1xuICAgICAgdGhpcy5fYnV0dG9uRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcInRydWVcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vINC40L3QsNGH0LUg0LDQutGC0LjQstC90LBcbiAgICAgIHRoaXMuX2J1dHRvbkVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9pbmFjdGl2ZUJ1dHRvbkNsYXNzKTtcbiAgICAgIHRoaXMuX2J1dHRvbkVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJ0cnVlXCIpO1xuICAgIH1cbiAgfTtcblxuICAvLyDQv9GA0L7QstC10YDQuNGC0Ywg0LjQvdC/0YPRgtGLINC00LvRjyDQsNC60YLQuNCy0LDRhtC40Lgg0LrQvdC+0L/QutC4XG4gIF9oYXNJbnZhbGlkSW5wdXQgPSAoKSA9PiB7XG4gICAgLy8g0L/RgNC+0YXQvtC00LjQvCDQv9C+INGN0YLQvtC80YMg0LzQsNGB0YHQuNCy0YMg0LzQtdGC0L7QtNC+0Lwgc29tZVxuICAgIHJldHVybiB0aGlzLl9pbnB1dExpc3Quc29tZSgoaXRlbSkgPT4ge1xuICAgICAgLy8g0JXRgdC70Lgg0L/QvtC70LUg0L3QtSDQstCw0LvQuNC00L3Qviwg0LrQvtC70LHRjdC6INCy0LXRgNC90ZHRgiB0cnVlXG4gICAgICAvLyDQntCx0YXQvtC0INC80LDRgdGB0LjQstCwINC/0YDQtdC60YDQsNGC0LjRgtGB0Y8g0Lgg0LLRgdGPINGE0YPQvdC60YbQuNGPXG4gICAgICAvLyBoYXNJbnZhbGlkSW5wdXQg0LLQtdGA0L3RkdGCIHRydWVcblxuICAgICAgcmV0dXJuICFpdGVtLnZhbGlkaXR5LnZhbGlkO1xuICAgIH0pO1xuICB9O1xuXG4gIC8vINC/0YDQvtCy0LXRgNGP0LXQvCDQstGB0Y4g0Y3RgtGDINC10LHQsNC70LDQudC60YMt0LHQsNC70LDQu9Cw0LnQutGDXG4gIF9jaGVja0lucHV0VmFsaWRpdHkgPSAoaW5wdXRFbGVtZW50KSA9PiB7XG4gICAgaWYgKCFpbnB1dEVsZW1lbnQudmFsaWRpdHkudmFsaWQpIHtcbiAgICAgIHRoaXMuX3Nob3dJbnB1dEVycm9yKGlucHV0RWxlbWVudCwgaW5wdXRFbGVtZW50LnZhbGlkYXRpb25NZXNzYWdlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5faGlkZUlucHV0RXJyb3IoaW5wdXRFbGVtZW50KTtcbiAgICB9XG4gIH07XG5cbiAgcmVzZXRWYWxpZGF0aW9uKCkge1xuICAgIHRoaXMudG9nZ2xlQnV0dG9uU3RhdGUoKTtcblxuICAgIHRoaXMuX2lucHV0TGlzdC5mb3JFYWNoKChpbnB1dEVsZW1lbnQpID0+IHtcbiAgICAgIHRoaXMuX2hpZGVJbnB1dEVycm9yKGlucHV0RWxlbWVudCk7XG4gICAgfSk7XG4gIH1cblxuICAvLyDQvtCx0YDQsNCx0L7RgtGH0LjQutC4INC00LvRjyDQstGB0LXRhSDQv9C+0LvQtdC5INGE0L7RgNC80YtcbiAgX3NldFZhbGlkYXRpb25FdmVudExpc3RlbmVycyA9ICgpID0+IHtcbiAgICB0aGlzLnRvZ2dsZUJ1dHRvblN0YXRlKCk7XG5cbiAgICAvLyDQntCx0L7QudC00ZHQvCDQstGB0LUg0Y3Qu9C10LzQtdC90YLRiyDQv9C+0LvRg9GH0LXQvdC90L7QuSDQutC+0LvQu9C10LrRhtC40LhcbiAgICB0aGlzLl9pbnB1dExpc3QuZm9yRWFjaCgoaW5wdXRFbGVtZW50KSA9PiB7XG4gICAgICAvLyDQutCw0LbQtNC+0LzRgyDQv9C+0LvRjiDQtNC+0LHQsNCy0LjQvCDQvtCx0YDQsNCx0L7RgtGH0LjQuiDRgdC+0LHRi9GC0LjRjyBpbnB1dFxuICAgICAgaW5wdXRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XG4gICAgICAgIC8vINCS0L3Rg9GC0YDQuCDQutC+0LvQsdGN0LrQsCDQstGL0LfQvtCy0LXQvCBjaGVja0lucHV0VmFsaWRpdHksXG4gICAgICAgIC8vINC/0LXRgNC10LTQsNCyINC10Lkg0YTQvtGA0LzRgyDQuCDQv9GA0L7QstC10YDRj9C10LzRi9C5INGN0LvQtdC80LXQvdGCXG4gICAgICAgIHRoaXMuX2NoZWNrSW5wdXRWYWxpZGl0eShpbnB1dEVsZW1lbnQpO1xuICAgICAgICAvLyDQv9C10YDQtdC00LDQtdC8INGELdGG0LjQuCDQvNCw0YHRgdC40LIg0L/QvtC70LXQuSDRhNC+0YDQvNGLINC4INGN0LvQtdC80LXQvdGCINC60L3QvtC/0LrQuFxuICAgICAgICB0aGlzLnRvZ2dsZUJ1dHRvblN0YXRlKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICAvLyDQvtCx0YDQsNCx0L7RgtGH0LjQutC4INCy0YHQtdC8INGE0L7RgNC80LDQvFxuICBlbmFibGVWYWxpZGF0aW9uID0gKCkgPT4ge1xuICAgIHRoaXMuX3NldFZhbGlkYXRpb25FdmVudExpc3RlbmVycygpO1xuICB9O1xufVxuIiwiaW1wb3J0IFBvcHVwIGZyb20gXCIuL1BvcHVwLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBpY3R1cmVQb3B1cCBleHRlbmRzIFBvcHVwIHtcbiAgY29uc3RydWN0b3IocG9wdXBTZWxlY3Rvcikge1xuICAgIHN1cGVyKHBvcHVwU2VsZWN0b3IpO1xuICAgIHRoaXMuX3BpY1BvcHVwSW1hZ2UgPSB0aGlzLl9wb3B1cC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19pbWFnZVwiKTtcbiAgICB0aGlzLl9waWNQb3B1cE5hbWUgPSB0aGlzLl9wb3B1cC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19kZXNjcmlwdGlvblwiKTtcbiAgfVxuXG4gIG9wZW5Qb3B1cCh0aXRsZSwgbGluaykge1xuICAgIHRoaXMuX3BpY1BvcHVwSW1hZ2Uuc3JjID0gbGluaztcbiAgICB0aGlzLl9waWNQb3B1cE5hbWUudGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgICB0aGlzLl9waWNQb3B1cE5hbWUuYWx0ID0gdGl0bGU7XG4gICAgc3VwZXIub3BlblBvcHVwKCk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwIHtcbiAgY29uc3RydWN0b3IocG9wdXBTZWxlY3Rvcikge1xuICAgIHRoaXMuX3BvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihwb3B1cFNlbGVjdG9yKTtcbiAgICB0aGlzLl9oYW5kbGVFc2NDbG9zZVJlZiA9IHRoaXMuX2hhbmRsZUVzY0Nsb3NlLmJpbmQodGhpcyk7XG4gIH1cblxuICAvLyDihpMg0YQt0YbQuNC4IC/QvNC10YLQvtC00YsvINC+0YLQutGA0YvRgtC40Y8g0Lgg0LfQsNC60YDRi9GC0LjRj1xuXG4gIG9wZW5Qb3B1cCgpIHtcbiAgICB0aGlzLl9wb3B1cC5jbGFzc0xpc3QuYWRkKFwicG9wdXBfb3BlbmVkXCIpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuX2hhbmRsZUVzY0Nsb3NlUmVmKTtcbiAgfVxuXG4gIGNsb3NlUG9wdXAoKSB7XG4gICAgdGhpcy5fcG9wdXAuY2xhc3NMaXN0LnJlbW92ZShcInBvcHVwX29wZW5lZFwiKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLl9oYW5kbGVFc2NDbG9zZVJlZik7XG4gIH1cblxuICAvLyDihpMg0LfQsNC60YDRi9GC0LjQtSDRh9C10YDQtdC3IGVzY1xuXG4gIF9oYW5kbGVFc2NDbG9zZShldnQpIHtcbiAgICBpZiAoZXZ0LmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgdGhpcy5jbG9zZVBvcHVwKCk7XG4gICAgfVxuICB9XG5cbiAgLy8g4oaTINC30LDQutGA0YvRgtC40LUg0L/RgNC4INGJ0LXQu9GH0LrQtSDQvdCwINC60YDQtdGB0YLQuNC6INC40LvQuCDQvtCy0LXRgNC70LXQuVxuXG4gIHNldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHRoaXMuX3BvcHVwLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKGV2dCkgPT4ge1xuICAgICAgaWYgKGV2dC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicG9wdXBfb3BlbmVkXCIpKSB7XG4gICAgICAgIHRoaXMuY2xvc2VQb3B1cCgpO1xuICAgICAgfVxuICAgICAgaWYgKGV2dC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicG9wdXBfX2Nsb3NlLWljb25cIikpIHtcbiAgICAgICAgdGhpcy5jbG9zZVBvcHVwKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCBQb3B1cCBmcm9tIFwiLi9Qb3B1cC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cFdpdGhGb3JtIGV4dGVuZHMgUG9wdXAge1xuICBjb25zdHJ1Y3Rvcih7IHBvcHVwU2VsZWN0b3IsIGhhbmRsZVN1Ym1pdCB9KSB7XG4gICAgc3VwZXIocG9wdXBTZWxlY3Rvcik7XG4gICAgdGhpcy5faGFuZGxlU3VibWl0ID0gaGFuZGxlU3VibWl0O1xuICAgIHRoaXMuX2Zvcm0gPSB0aGlzLl9wb3B1cC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19mb3JtXCIpO1xuICAgIC8vINC00L7RgdGC0LDRkdC8INCy0YHQtSDRjdC70LXQvNC10L3RgtGLINC/0L7Qu9C10LlcbiAgICB0aGlzLl9pbnB1dExpc3QgPSB0aGlzLl9wb3B1cC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBvcHVwX19pbnB1dFwiKTtcbiAgfVxuXG4gIF9nZXRJbnB1dFZhbHVlcygpIHtcbiAgICAvLyDRgdC+0LfQtNCw0ZHQvCDQv9GD0YHRgtC+0Lkg0L7QsdGK0LXQutGCXG4gICAgdGhpcy5fZm9ybVZhbHVlcyA9IHt9O1xuXG4gICAgLy8g0LTQvtCx0LDQstC70Y/QtdC8INCyINGN0YLQvtGCINC+0LHRitC10LrRgiDQt9C90LDRh9C10L3QuNGPINCy0YHQtdGFINC/0L7Qu9C10LlcbiAgICB0aGlzLl9pbnB1dExpc3QuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICAgIHRoaXMuX2Zvcm1WYWx1ZXNbaW5wdXQubmFtZV0gPSBpbnB1dC52YWx1ZTtcbiAgICB9KTtcblxuICAgIC8vINCy0L7Qt9Cy0YDQsNGJ0LDQtdC8INC+0LHRitC10LrRgiDQt9C90LDRh9C10L3QuNC5XG4gICAgcmV0dXJuIHRoaXMuX2Zvcm1WYWx1ZXM7XG4gIH1cblxuICBzZXRFdmVudExpc3RlbmVycygpIHtcbiAgICBzdXBlci5zZXRFdmVudExpc3RlbmVycygpO1xuICAgIHRoaXMuX2Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZ0KSA9PiB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgdGhpcy5faGFuZGxlU3VibWl0KHRoaXMuX2dldElucHV0VmFsdWVzKCkpO1xuICAgICAgLyogdGhpcy5jbG9zZVBvcHVwKCk7ICovXG4gICAgfSk7XG4gIH1cblxuICBjbG9zZVBvcHVwKCkge1xuICAgIHN1cGVyLmNsb3NlUG9wdXAoKTtcbiAgICB0aGlzLl9mb3JtLnJlc2V0KCk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlY3Rpb24ge1xuICBjb25zdHJ1Y3Rvcih7IHJlbmRlcmVyIH0sIGNvbnRhaW5lclNlbGVjdG9yKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIgPSByZW5kZXJlcjtcbiAgICB0aGlzLl9jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnRhaW5lclNlbGVjdG9yKTtcbiAgfVxuXG4gIHJlbmRlckl0ZW1zKGRhdGEpIHtcbiAgICB0aGlzLl9pdGVtcyA9IGRhdGE7XG4gICAgdGhpcy5faXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgdGhpcy5fcmVuZGVyZXIoaXRlbSk7XG4gICAgfSk7XG4gIH1cblxuICBhZGRJdGVtKGVsZW1lbnQpIHtcbiAgICB0aGlzLl9jb250YWluZXIucHJlcGVuZChlbGVtZW50KTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlckluZm8ge1xuICBjb25zdHJ1Y3Rvcih7IHVzZXJOYW1lLCB1c2VyRGVzY3JpcHRpb24gfSkge1xuICAgIHRoaXMuX3Byb2ZpbGVOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih1c2VyTmFtZSk7XG4gICAgdGhpcy5fcHJvZmlsZUpvYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodXNlckRlc2NyaXB0aW9uKTtcbiAgfVxuXG4gIGdldFVzZXJJbmZvKCkge1xuICAgIGNvbnN0IGdvdHRlbkluZm8gPSB7XG4gICAgICB1c2VyTmFtZTogdGhpcy5fcHJvZmlsZU5hbWUudGV4dENvbnRlbnQsXG4gICAgICB1c2VyRGVzY3JpcHRpb246IHRoaXMuX3Byb2ZpbGVKb2IudGV4dENvbnRlbnQsXG4gICAgfTtcblxuICAgIHJldHVybiBnb3R0ZW5JbmZvO1xuICB9XG5cbiAgc2V0VXNlckluZm8oZGF0YSkge1xuICAgIHRoaXMuX3Byb2ZpbGVOYW1lLnRleHRDb250ZW50ID0gZGF0YS5wcm9maWxlO1xuICAgIHRoaXMuX3Byb2ZpbGVKb2IudGV4dENvbnRlbnQgPSBkYXRhLmRlc2NyaXB0aW9uO1xuICB9XG59XG4iLCJleHBvcnQgY29uc3QgY29uZmlnID0ge1xuICBmb3JtU2VsZWN0b3I6ICcucG9wdXBfX2Zvcm0nLFxuICBpbnB1dFNlbGVjdG9yOiAnLnBvcHVwX19pbnB1dCcsXG4gIHN1Ym1pdEJ1dHRvblNlbGVjdG9yOiAnLnBvcHVwX19zdWJtaXQnLFxuICBpbmFjdGl2ZUJ1dHRvbkNsYXNzOiAncG9wdXBfX3N1Ym1pdF9kaXNhYmxlZCcsXG4gIGlucHV0RXJyb3JDbGFzczogJ3BvcHVwX19pbnB1dF90eXBlX2Vycm9yJyxcbiAgZXJyb3JDbGFzczogJ3BvcHVwX19pbnB1dC1lcnJvcl9hY3RpdmUnfTsiLCJleHBvcnQgY29uc3QgaW5pdGlhbENhcmRzID0gW1xuICB7XG4gICAgdGl0bGU6ICfQndCw0YbQuNC+0L3QsNC70YzQvdGL0Lkg0J/QsNGA0Log0JHRjdC00LvRjdC90LTRgScsXG4gICAgcGljdHVyZTogJ2h0dHBzOi8vaS5pYmIuY28vSlFHWjUwNC9CYWRsYW5kcy1OYXRpb25hbC1QYXJrLVNvdXRoLURha290YS1VU0EuanBnJ1xuICB9LFxuICB7XG4gICAgdGl0bGU6ICfQk9C+0YDRiyDQkdC70YMg0KDQuNC00LYnLFxuICAgIHBpY3R1cmU6ICdodHRwczovL2kuaWJiLmNvLzQ4OW1UUXgvQmx1ZS1SaWRnZS1Nb3VudGFpbnMuanBnJ1xuICB9LFxuICB7XG4gICAgdGl0bGU6ICfQmdC10LvQu9C+0YPRgdGC0L7Rg9C9JyxcbiAgICBwaWN0dXJlOiAnaHR0cHM6Ly9pLmliYi5jby82QjZKUEZLL1llbGxvd3N0b25lLmpwZydcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAn0KLRgNC+0L/QsCDQlNGP0LTQuCDQotC+0LzQsCcsXG4gICAgcGljdHVyZTogJ2h0dHBzOi8vaS5pYmIuY28vMHFnRGJOVi9VbmNsZS1Ub21zLVRyYWlsLmpwZydcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAn0JLQvtC00L7Qv9Cw0LQg0JzQsNC70YLQvdC+0LzQsCcsXG4gICAgcGljdHVyZTogJ2h0dHBzOi8vaS5pYmIuY28vSnY5ak1wVy9NdWx0bm9tYWgtRmFsbHMuanBnJ1xuICB9LFxuICB7XG4gICAgdGl0bGU6ICfQntGB0YLRgNC+0LIg0J7QsNGF0YMnLFxuICAgIHBpY3R1cmU6ICdodHRwczovL2kuaWJiLmNvL1RrUHF5WkgvT2FodS5qcGcnXG4gIH1cbl07IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xuXG5jb25zdCBidXR0b25FZGl0UHJvZmlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fZWRpdC1idXR0b25cIik7XG5jb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19pbnB1dF9saW5lX25hbWVcIik7XG5jb25zdCBqb2JJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2lucHV0X2xpbmVfZGVzY3JpcHRpb25cIik7XG5jb25zdCBwb3B1cEVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX2VkaXRcIik7XG5jb25zdCBwb3B1cEFkZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfYWRkXCIpO1xuY29uc3QgYnV0dG9uQWRkQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fYWRkLWJ1dHRvblwiKTtcblxuaW1wb3J0IHsgQ2FyZCB9IGZyb20gXCIuLi9jb21wb25lbnRzL0NhcmQuanNcIjtcbmltcG9ydCBTZWN0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL1NlY3Rpb24uanNcIjtcbmltcG9ydCB7IEZvcm1WYWxpZGF0b3IgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzXCI7XG5pbXBvcnQgUGljdHVyZVBvcHVwIGZyb20gXCIuLi9jb21wb25lbnRzL1BpY3R1cmVQb3B1cC5qc1wiO1xuaW1wb3J0IFBvcHVwV2l0aEZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9wdXBXaXRoRm9ybS5qc1wiO1xuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCIuLi9jb21wb25lbnRzL1VzZXJJbmZvLmpzXCI7XG5pbXBvcnQgeyBjb25maWcgfSBmcm9tIFwiLi4vdXRpbHMvY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBpbml0aWFsQ2FyZHMgfSBmcm9tIFwiLi4vdXRpbHMvaW5pdGlhbENhcmRzXCI7XG5pbXBvcnQgQXBpIGZyb20gXCIuLi9jb21wb25lbnRzL0FwaVwiO1xuXG5jb25zdCBwb3B1cEVkaXRWYWxpZGF0aW9uID0gbmV3IEZvcm1WYWxpZGF0b3IoY29uZmlnLCBwb3B1cEVkaXQpO1xuY29uc3QgcG9wdXBBZGRWYWxpZGF0aW9uID0gbmV3IEZvcm1WYWxpZGF0b3IoY29uZmlnLCBwb3B1cEFkZCk7XG5cbnBvcHVwRWRpdFZhbGlkYXRpb24uZW5hYmxlVmFsaWRhdGlvbigpO1xuXG4vLyDihpMg0L3QvtCy0LDRjyDRhNC40LPRg9C70LjQvdCwINC/0YDQviDRjtC30LXRgNCwXG5cbmNvbnN0IHVzZXJJbmZvID0gbmV3IFVzZXJJbmZvKHtcbiAgdXNlck5hbWU6IFwiLnByb2ZpbGVfX25hbWVcIixcbiAgdXNlckRlc2NyaXB0aW9uOiBcIi5wcm9maWxlX19kZXNjcmlwdGlvblwiLFxufSk7XG5cbi8vIOKGkyDQvdC+0LLQsNGPINGE0L7RgNC80LAgZWRpdFxuXG5jb25zdCBlZGl0Rm9ybSA9IG5ldyBQb3B1cFdpdGhGb3JtKHtcbiAgcG9wdXBTZWxlY3RvcjogXCIucG9wdXBfZWRpdFwiLFxuICBoYW5kbGVTdWJtaXQ6IChkYXRhKSA9PiB7XG4gICAgdXNlckluZm8uc2V0VXNlckluZm8oZGF0YSk7XG4gICAgZWRpdEZvcm0uY2xvc2VQb3B1cCgpO1xuICB9LFxufSk7XG5cbmVkaXRGb3JtLnNldEV2ZW50TGlzdGVuZXJzKCk7XG5cbi8vIOKGkyDQsNC60YLQuNCy0LDRhtC40Y8g0LrQvdC+0L/QutC4IGVkaXRcblxuYnV0dG9uRWRpdFByb2ZpbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY29uc3QgZ290dGVuSW5mbyA9IHVzZXJJbmZvLmdldFVzZXJJbmZvKCk7XG4gIG5hbWVJbnB1dC52YWx1ZSA9IGdvdHRlbkluZm8udXNlck5hbWU7XG4gIGpvYklucHV0LnZhbHVlID0gZ290dGVuSW5mby51c2VyRGVzY3JpcHRpb247XG4gIGVkaXRGb3JtLm9wZW5Qb3B1cCgpO1xufSk7XG5cbi8vIOKGkyDQvdC+0LLQsNGPINGE0LjQs9GD0LvQuNC90LAg0L/RgNC+INC60LDRgNGC0LjQvdC60LhcblxuY29uc3QgcGljdHVyZVBvcHVwID0gbmV3IFBpY3R1cmVQb3B1cChcIi5wb3B1cF9waWNcIik7XG5waWN0dXJlUG9wdXAuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcblxuLy8g4oaTINC4INGC0LDQuiDQv9C+0L3Rj9GC0L3QvlxuXG5mdW5jdGlvbiBoYW5kbGVDYXJkQ2xpY2sodGl0bGUsIGxpbmspIHtcbiAgcGljdHVyZVBvcHVwLm9wZW5Qb3B1cCh0aXRsZSwgbGluayk7XG59XG5cbi8vIOKGkyAg0L3QvtCy0YvQuSDRjdC60LfQtdC80L/Qu9GP0YAg0LrQsNGA0YLQvtGH0LrQuFxuXG5mdW5jdGlvbiBhZGRDYXJkKGRhdGEpIHsgXG4gIGNvbnN0IGNhcmRJdGVtID0gbmV3IENhcmQoXG4gIGRhdGEudGl0bGUsXG4gIGRhdGEucGljdHVyZSxcbiAgXCIuY2FyZHNfX2l0ZW0tdGVtcGxhdGVcIixcbiAgaGFuZGxlQ2FyZENsaWNrXG4pO1xuXG5yZXR1cm4gY2FyZEl0ZW0uZ2VuZXJhdGVDYXJkKCk7XG59XG5cbi8vIOKGkyAg0LHQu9C+0Log0YEg0LrQsNGA0YLQuNC90LrQsNC80LhcblxuY29uc3QgY2FyZHNMaXN0ID0gbmV3IFNlY3Rpb24oXG4gIHtcbiAgICByZW5kZXJlcjogKGRhdGEpID0+IHtcbiAgICAgIGNhcmRzTGlzdC5hZGRJdGVtKGFkZENhcmQoZGF0YSkpO1xuICAgIH0sXG4gIH0sXG4gIFwiLmNhcmRzXCJcbik7XG5cbi8qIGNhcmRzTGlzdC5yZW5kZXJJdGVtcyhpbml0aWFsQ2FyZHMpOyAqLyAvLyAhISEhXG5cbi8vIOKGkyAg0L/RgNC40LrQu9GO0YfQtdC90LjRjyDRgSDQvtGC0YDQuNGB0L7QstC60L7QuSDQutCw0YDRgtC+0YfQtdC6INGH0LXRgNC10LcgQVBJIFxuLy8g4oaTICDQutC+0L3RhNC40LNcblxuY29uc3QgYXBpQ29uZmlnID0ge1xuICB1cmw6IFwiaHR0cHM6Ly9tZXN0by5ub21vcmVwYXJ0aWVzLmNvL3YxL2NvaG9ydC01NC9jYXJkc1wiLFxuICBoZWFkZXJzOiB7XG4gICAgYXV0aG9yaXphdGlvbjogJ2UwMDVhMjA0LTEzNzAtNDZlMS05M2M3LWQ3ZDFhMTYyYWMyMScsXG4gICAgXCJDb250ZW50LXR5cGVcIjogJ2FwcGxpY2F0aW9uL2pzb24nXG4gIH0gXG59XG5cbi8vIOKGkyAg0L7RgtGA0LjRgdC+0LLQutCwXG5cbmNvbnN0IGFwaU5ldyA9IG5ldyBBcGkoYXBpQ29uZmlnKTtcbmFwaU5ldy5nZXRDYXJkcygpIC8vIHJlc3VsdCAtINCz0L7RgtC+0LLRi9C1INC00LDQvdC90YvQtVxuICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgY2FyZHNMaXN0LnJlbmRlckl0ZW1zKHJlc3VsdCk7XG59KS5jYXRjaCgoZXJyb3IpID0+IHt9KVxuXG5cbi8vIOKGkyAg0L3QvtCy0LDRjyDRhNC+0YDQvNCwIGFkZFxuXG5jb25zdCBhZGRGb3JtID0gbmV3IFBvcHVwV2l0aEZvcm0oe1xuICBwb3B1cFNlbGVjdG9yOiBcIi5wb3B1cF9hZGRcIixcbiAgaGFuZGxlU3VibWl0OiAoZGF0YSkgPT4ge1xuICAgIGNhcmRzTGlzdC5hZGRJdGVtKGFkZENhcmQoZGF0YSkpO1xuICAgIGFkZEZvcm0uY2xvc2VQb3B1cCgpO1xuICB9LFxufSk7XG5cbmFkZEZvcm0uc2V0RXZlbnRMaXN0ZW5lcnMoKTtcblxuLy8g4oaTINCw0LrRgtC40LLQsNGG0LjRjyDQutC90L7Qv9C60LggYWRkXG5cbmJ1dHRvbkFkZENhcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgcG9wdXBBZGRWYWxpZGF0aW9uLnJlc2V0VmFsaWRhdGlvbigpO1xuICBhZGRGb3JtLm9wZW5Qb3B1cCgpO1xufSk7XG5cbnBvcHVwQWRkVmFsaWRhdGlvbi5lbmFibGVWYWxpZGF0aW9uKCk7XG5cblxuLy8g0KLQo9CiXG5cbiJdLCJuYW1lcyI6WyJBcGkiLCJ1cmwiLCJoZWFkZXJzIiwiX3VybCIsIl9oZWFkZXJzIiwiZmV0Y2giLCJtZXRob2QiLCJ0aGVuIiwicmVzcG9uc2UiLCJvayIsImpzb24iLCJQcm9taXNlIiwicmVqZWN0Iiwic3RhdHVzIiwic3RhdHVzVGV4dCIsIkNhcmQiLCJ0aXRsZSIsImxpbmsiLCJ0ZW1wbGF0ZVNlbGVjdG9yIiwiaGFuZGxlQ2FyZENsaWNrIiwiX3RpdGxlIiwiX2xpbmsiLCJfdGVtcGxhdGVTZWxlY3RvciIsIl9oYW5kbGVDYXJkQ2xpY2siLCJjYXJkRWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNvbnRlbnQiLCJjbG9uZU5vZGUiLCJfZWxlbWVudCIsInJlbW92ZSIsIl9saWtlQnV0dG9uIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiX2RlbGV0ZUJ1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJfaGFuZGxlRGVsZXRlIiwiX2hhbmRsZUxpa2UiLCJfY2FyZEltZyIsIl9nZXRUZW1wbGF0ZSIsIl9jYXJkVGl0bGUiLCJfc2V0RXZlbnRMaXN0ZW5lcnMiLCJzcmMiLCJhbHQiLCJ0ZXh0Q29udGVudCIsIkZvcm1WYWxpZGF0b3IiLCJzZXR0aW5ncyIsImZvcm1FbGVtZW50IiwiaW5wdXRFbGVtZW50IiwiZXJyb3JNZXNzYWdlIiwiX2Vycm9yRWxlbWVudCIsIl9mb3JtRWxlbWVudCIsImlkIiwiYWRkIiwiX2lucHV0RXJyb3JDbGFzcyIsIl9lcnJvckNsYXNzIiwiX2hhc0ludmFsaWRJbnB1dCIsIl9pbnB1dExpc3QiLCJfYnV0dG9uRWxlbWVudCIsIl9pbmFjdGl2ZUJ1dHRvbkNsYXNzIiwic2V0QXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwic29tZSIsIml0ZW0iLCJ2YWxpZGl0eSIsInZhbGlkIiwiX3Nob3dJbnB1dEVycm9yIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJfaGlkZUlucHV0RXJyb3IiLCJ0b2dnbGVCdXR0b25TdGF0ZSIsImZvckVhY2giLCJfY2hlY2tJbnB1dFZhbGlkaXR5IiwiX3NldFZhbGlkYXRpb25FdmVudExpc3RlbmVycyIsIl9mb3JtU2VsZWN0b3IiLCJmb3JtU2VsZWN0b3IiLCJfaW5wdXRTZWxlY3RvciIsImlucHV0U2VsZWN0b3IiLCJfc3VibWl0QnV0dG9uU2VsZWN0b3IiLCJzdWJtaXRCdXR0b25TZWxlY3RvciIsImluYWN0aXZlQnV0dG9uQ2xhc3MiLCJpbnB1dEVycm9yQ2xhc3MiLCJlcnJvckNsYXNzIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsIlBvcHVwIiwiUGljdHVyZVBvcHVwIiwicG9wdXBTZWxlY3RvciIsIl9waWNQb3B1cEltYWdlIiwiX3BvcHVwIiwiX3BpY1BvcHVwTmFtZSIsIl9oYW5kbGVFc2NDbG9zZVJlZiIsIl9oYW5kbGVFc2NDbG9zZSIsImJpbmQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZXZ0Iiwia2V5IiwiY2xvc2VQb3B1cCIsInRhcmdldCIsImNvbnRhaW5zIiwiUG9wdXBXaXRoRm9ybSIsImhhbmRsZVN1Ym1pdCIsIl9oYW5kbGVTdWJtaXQiLCJfZm9ybSIsIl9mb3JtVmFsdWVzIiwiaW5wdXQiLCJuYW1lIiwidmFsdWUiLCJwcmV2ZW50RGVmYXVsdCIsIl9nZXRJbnB1dFZhbHVlcyIsInJlc2V0IiwiU2VjdGlvbiIsImNvbnRhaW5lclNlbGVjdG9yIiwicmVuZGVyZXIiLCJfcmVuZGVyZXIiLCJfY29udGFpbmVyIiwiZGF0YSIsIl9pdGVtcyIsImVsZW1lbnQiLCJwcmVwZW5kIiwiVXNlckluZm8iLCJ1c2VyTmFtZSIsInVzZXJEZXNjcmlwdGlvbiIsIl9wcm9maWxlTmFtZSIsIl9wcm9maWxlSm9iIiwiZ290dGVuSW5mbyIsInByb2ZpbGUiLCJkZXNjcmlwdGlvbiIsImNvbmZpZyIsImluaXRpYWxDYXJkcyIsInBpY3R1cmUiLCJidXR0b25FZGl0UHJvZmlsZSIsIm5hbWVJbnB1dCIsImpvYklucHV0IiwicG9wdXBFZGl0IiwicG9wdXBBZGQiLCJidXR0b25BZGRDYXJkIiwicG9wdXBFZGl0VmFsaWRhdGlvbiIsInBvcHVwQWRkVmFsaWRhdGlvbiIsImVuYWJsZVZhbGlkYXRpb24iLCJ1c2VySW5mbyIsImVkaXRGb3JtIiwic2V0VXNlckluZm8iLCJzZXRFdmVudExpc3RlbmVycyIsImdldFVzZXJJbmZvIiwib3BlblBvcHVwIiwicGljdHVyZVBvcHVwIiwiYWRkQ2FyZCIsImNhcmRJdGVtIiwiZ2VuZXJhdGVDYXJkIiwiY2FyZHNMaXN0IiwiYWRkSXRlbSIsImFwaUNvbmZpZyIsImF1dGhvcml6YXRpb24iLCJhcGlOZXciLCJnZXRDYXJkcyIsInJlc3VsdCIsInJlbmRlckl0ZW1zIiwiZXJyb3IiLCJhZGRGb3JtIiwicmVzZXRWYWxpZGF0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==