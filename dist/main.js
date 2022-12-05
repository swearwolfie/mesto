/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
cardsList.renderItems(_utils_initialCards__WEBPACK_IMPORTED_MODULE_8__.initialCards);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBSSxDQUFDYyxPQUFPLEVBQ1osdUJBQXVCLEVBQ3ZCL0csZUFBZSxDQUNoQjtFQUVELE9BQU9pSSxRQUFRLENBQUNDLFlBQVksRUFBRTtBQUM5Qjs7QUFFQTs7QUFFQSxJQUFNQyxTQUFTLEdBQUcsSUFBSXZDLDhEQUFPLENBQzNCO0VBQ0VFLFFBQVEsRUFBRSxrQkFBQ0csSUFBSSxFQUFLO0lBQ2xCa0MsU0FBUyxDQUFDQyxPQUFPLENBQUNKLE9BQU8sQ0FBQy9CLElBQUksQ0FBQyxDQUFDO0VBQ2xDO0FBQ0YsQ0FBQyxFQUNELFFBQVEsQ0FDVDtBQUVEa0MsU0FBUyxDQUFDRSxXQUFXLENBQUN2Qiw2REFBWSxDQUFDOztBQUVuQzs7QUFFQSxJQUFNd0IsT0FBTyxHQUFHLElBQUlyRCxvRUFBYSxDQUFDO0VBQ2hDYixhQUFhLEVBQUUsWUFBWTtFQUMzQmMsWUFBWSxFQUFFLHNCQUFDZSxJQUFJLEVBQUs7SUFDdEJrQyxTQUFTLENBQUNDLE9BQU8sQ0FBQ0osT0FBTyxDQUFDL0IsSUFBSSxDQUFDLENBQUM7SUFDaENxQyxPQUFPLENBQUN4RCxVQUFVLEVBQUU7RUFDdEI7QUFDRixDQUFDLENBQUM7QUFFRndELE9BQU8sQ0FBQ1YsaUJBQWlCLEVBQUU7O0FBRTNCOztBQUVBUCxhQUFhLENBQUNyRyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtFQUM1Q3VHLGtCQUFrQixDQUFDZ0IsZUFBZSxFQUFFO0VBQ3BDRCxPQUFPLENBQUNSLFNBQVMsRUFBRTtBQUNyQixDQUFDLENBQUM7QUFFRlAsa0JBQWtCLENBQUNDLGdCQUFnQixFQUFFOztBQUdyQyxNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1BpY3R1cmVQb3B1cC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qb3B1cC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qb3B1cFdpdGhGb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVXNlckluZm8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvaW5pdGlhbENhcmRzLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBDYXJkIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGxpbmssIHRlbXBsYXRlU2VsZWN0b3IsIGhhbmRsZUNhcmRDbGljaykge1xuICAgIHRoaXMuX3RpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5fbGluayA9IGxpbms7XG4gICAgdGhpcy5fdGVtcGxhdGVTZWxlY3RvciA9IHRlbXBsYXRlU2VsZWN0b3I7XG4gICAgdGhpcy5faGFuZGxlQ2FyZENsaWNrID0gaGFuZGxlQ2FyZENsaWNrO1xuICB9XG5cbiAgX2dldFRlbXBsYXRlKCkge1xuICAgIGNvbnN0IGNhcmRFbGVtZW50ID0gZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKHRoaXMuX3RlbXBsYXRlU2VsZWN0b3IpXG4gICAgICAuY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRzX19pdGVtXCIpXG4gICAgICAuY2xvbmVOb2RlKHRydWUpO1xuXG4gICAgcmV0dXJuIGNhcmRFbGVtZW50O1xuICB9XG5cbiAgLy8g4oaTINGD0LTQsNC70LXQvdC40LUg0LrQsNGA0YLQvtGH0LXQulxuXG4gIF9oYW5kbGVEZWxldGUoKSB7XG4gICAgdGhpcy5fZWxlbWVudC5yZW1vdmUoKTtcbiAgICB0aGlzLl9lbGVtZW50ID0gbnVsbDtcbiAgfVxuXG4gIC8vIOKGkyDQu9Cw0LnQutC4XG5cbiAgX2hhbmRsZUxpa2UoKSB7XG4gICAgdGhpcy5fbGlrZUJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwiY2FyZHNfX2xpa2UtYnV0dG9uX2FjdGl2ZVwiKTtcbiAgfVxuXG4gIC8vIOKGkyDRhC3RhtC40Y8g0YHQu9GD0YjQsNGC0LXQu9C10Lkg0LvQsNC50LrQsCwg0LrQvtGA0LfQuNC90Ysg0Lgg0YTRg9C70LvQsFxuXG4gIF9zZXRFdmVudExpc3RlbmVycygpIHtcbiAgICB0aGlzLl9kZWxldGVCdXR0b24gPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZHNfX2JpblwiKTtcbiAgICB0aGlzLl9kZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHRoaXMuX2hhbmRsZURlbGV0ZSgpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5fbGlrZUJ1dHRvbiA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkc19fbGlrZS1idXR0b25cIik7XG4gICAgdGhpcy5fbGlrZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5faGFuZGxlTGlrZSgpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5fY2FyZEltZyA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkc19fcGljXCIpO1xuICAgIHRoaXMuX2NhcmRJbWcuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHRoaXMuX2hhbmRsZUNhcmRDbGljayh0aGlzLl90aXRsZSwgdGhpcy5fbGluayk7XG4gICAgfSk7XG4gIH1cblxuICAvLyDihpMg0YHQvtC30LTQsNC90LjQtSDQutCw0YDRgtC+0YfQutC4XG5cbiAgZ2VuZXJhdGVDYXJkKCkge1xuICAgIHRoaXMuX2VsZW1lbnQgPSB0aGlzLl9nZXRUZW1wbGF0ZSgpO1xuICAgIHRoaXMuX2NhcmRUaXRsZSA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkc19fbmFtZVwiKTtcbiAgICB0aGlzLl9zZXRFdmVudExpc3RlbmVycygpO1xuXG4gICAgdGhpcy5fY2FyZEltZy5zcmMgPSB0aGlzLl9saW5rO1xuICAgIHRoaXMuX2NhcmRJbWcuYWx0ID0gdGhpcy5fdGl0bGU7XG4gICAgdGhpcy5fY2FyZFRpdGxlLnRleHRDb250ZW50ID0gdGhpcy5fdGl0bGU7XG5cbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudDtcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIEZvcm1WYWxpZGF0b3Ige1xuICBjb25zdHJ1Y3RvcihzZXR0aW5ncywgZm9ybUVsZW1lbnQpIHtcbiAgICB0aGlzLl9mb3JtU2VsZWN0b3IgPSBzZXR0aW5ncy5mb3JtU2VsZWN0b3I7XG4gICAgdGhpcy5faW5wdXRTZWxlY3RvciA9IHNldHRpbmdzLmlucHV0U2VsZWN0b3I7XG4gICAgdGhpcy5fc3VibWl0QnV0dG9uU2VsZWN0b3IgPSBzZXR0aW5ncy5zdWJtaXRCdXR0b25TZWxlY3RvcjtcbiAgICB0aGlzLl9pbmFjdGl2ZUJ1dHRvbkNsYXNzID0gc2V0dGluZ3MuaW5hY3RpdmVCdXR0b25DbGFzcztcbiAgICB0aGlzLl9pbnB1dEVycm9yQ2xhc3MgPSBzZXR0aW5ncy5pbnB1dEVycm9yQ2xhc3M7XG4gICAgdGhpcy5fZXJyb3JDbGFzcyA9IHNldHRpbmdzLmVycm9yQ2xhc3M7XG4gICAgdGhpcy5fZm9ybUVsZW1lbnQgPSBmb3JtRWxlbWVudDtcbiAgICB0aGlzLl9idXR0b25FbGVtZW50ID0gdGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIHRoaXMuX3N1Ym1pdEJ1dHRvblNlbGVjdG9yXG4gICAgKTtcbiAgICB0aGlzLl9pbnB1dExpc3QgPSBBcnJheS5mcm9tKFxuICAgICAgdGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLl9pbnB1dFNlbGVjdG9yKVxuICAgICk7XG4gIH1cblxuICAvLyDQv9C+0LrQsNC30LDRgtGMINC+0YjQuNCx0LrRg1xuICBfc2hvd0lucHV0RXJyb3IgPSAoaW5wdXRFbGVtZW50LCBlcnJvck1lc3NhZ2UpID0+IHtcbiAgICAvLyDQndCw0YXQvtC00LjQvCDRjdC70LXQvNC10L3RgiDQvtGI0LjQsdC60Lgg0LLQvdGD0YLRgNC4INGB0LDQvNC+0Lkg0YTRg9C90LrRhtC40LhcbiAgICB0aGlzLl9lcnJvckVsZW1lbnQgPSB0aGlzLl9mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYC4ke2lucHV0RWxlbWVudC5pZH0tZXJyb3JgXG4gICAgKTtcbiAgICBpbnB1dEVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLl9pbnB1dEVycm9yQ2xhc3MpO1xuICAgIHRoaXMuX2Vycm9yRWxlbWVudC50ZXh0Q29udGVudCA9IGVycm9yTWVzc2FnZTtcbiAgICB0aGlzLl9lcnJvckVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLl9lcnJvckNsYXNzKTtcbiAgfTtcblxuICAvLyDRgdC60YDRi9GC0Ywg0L7RiNC40LHQutGDXG4gIF9oaWRlSW5wdXRFcnJvciA9IChpbnB1dEVsZW1lbnQpID0+IHtcbiAgICAvLyDQndCw0YXQvtC00LjQvCDRjdC70LXQvNC10L3RgiDQvtGI0LjQsdC60LhcbiAgICB0aGlzLl9lcnJvckVsZW1lbnQgPSB0aGlzLl9mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYC4ke2lucHV0RWxlbWVudC5pZH0tZXJyb3JgXG4gICAgKTtcbiAgICBpbnB1dEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9pbnB1dEVycm9yQ2xhc3MpO1xuICAgIHRoaXMuX2Vycm9yRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2Vycm9yQ2xhc3MpO1xuICAgIHRoaXMuX2Vycm9yRWxlbWVudC50ZXh0Q29udGVudCA9IFwiXCI7XG4gIH07XG5cbiAgLy8g0LrQvdC+0L/QutCwXG4gIHRvZ2dsZUJ1dHRvblN0YXRlID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLl9oYXNJbnZhbGlkSW5wdXQodGhpcy5faW5wdXRMaXN0KSkge1xuICAgICAgLy8g0LTQtdC70LDQtdC8INC60L3QvtC/0LrRgyDQvdC10LDQutGC0LjQstC90L7QuVxuICAgICAgdGhpcy5fYnV0dG9uRWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MpO1xuICAgICAgdGhpcy5fYnV0dG9uRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcInRydWVcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vINC40L3QsNGH0LUg0LDQutGC0LjQstC90LBcbiAgICAgIHRoaXMuX2J1dHRvbkVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9pbmFjdGl2ZUJ1dHRvbkNsYXNzKTtcbiAgICAgIHRoaXMuX2J1dHRvbkVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJ0cnVlXCIpO1xuICAgIH1cbiAgfTtcblxuICAvLyDQv9GA0L7QstC10YDQuNGC0Ywg0LjQvdC/0YPRgtGLINC00LvRjyDQsNC60YLQuNCy0LDRhtC40Lgg0LrQvdC+0L/QutC4XG4gIF9oYXNJbnZhbGlkSW5wdXQgPSAoKSA9PiB7XG4gICAgLy8g0L/RgNC+0YXQvtC00LjQvCDQv9C+INGN0YLQvtC80YMg0LzQsNGB0YHQuNCy0YMg0LzQtdGC0L7QtNC+0Lwgc29tZVxuICAgIHJldHVybiB0aGlzLl9pbnB1dExpc3Quc29tZSgoaXRlbSkgPT4ge1xuICAgICAgLy8g0JXRgdC70Lgg0L/QvtC70LUg0L3QtSDQstCw0LvQuNC00L3Qviwg0LrQvtC70LHRjdC6INCy0LXRgNC90ZHRgiB0cnVlXG4gICAgICAvLyDQntCx0YXQvtC0INC80LDRgdGB0LjQstCwINC/0YDQtdC60YDQsNGC0LjRgtGB0Y8g0Lgg0LLRgdGPINGE0YPQvdC60YbQuNGPXG4gICAgICAvLyBoYXNJbnZhbGlkSW5wdXQg0LLQtdGA0L3RkdGCIHRydWVcblxuICAgICAgcmV0dXJuICFpdGVtLnZhbGlkaXR5LnZhbGlkO1xuICAgIH0pO1xuICB9O1xuXG4gIC8vINC/0YDQvtCy0LXRgNGP0LXQvCDQstGB0Y4g0Y3RgtGDINC10LHQsNC70LDQudC60YMt0LHQsNC70LDQu9Cw0LnQutGDXG4gIF9jaGVja0lucHV0VmFsaWRpdHkgPSAoaW5wdXRFbGVtZW50KSA9PiB7XG4gICAgaWYgKCFpbnB1dEVsZW1lbnQudmFsaWRpdHkudmFsaWQpIHtcbiAgICAgIHRoaXMuX3Nob3dJbnB1dEVycm9yKGlucHV0RWxlbWVudCwgaW5wdXRFbGVtZW50LnZhbGlkYXRpb25NZXNzYWdlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5faGlkZUlucHV0RXJyb3IoaW5wdXRFbGVtZW50KTtcbiAgICB9XG4gIH07XG5cbiAgcmVzZXRWYWxpZGF0aW9uKCkge1xuICAgIHRoaXMudG9nZ2xlQnV0dG9uU3RhdGUoKTtcblxuICAgIHRoaXMuX2lucHV0TGlzdC5mb3JFYWNoKChpbnB1dEVsZW1lbnQpID0+IHtcbiAgICAgIHRoaXMuX2hpZGVJbnB1dEVycm9yKGlucHV0RWxlbWVudCk7XG4gICAgfSk7XG4gIH1cblxuICAvLyDQvtCx0YDQsNCx0L7RgtGH0LjQutC4INC00LvRjyDQstGB0LXRhSDQv9C+0LvQtdC5INGE0L7RgNC80YtcbiAgX3NldFZhbGlkYXRpb25FdmVudExpc3RlbmVycyA9ICgpID0+IHtcbiAgICB0aGlzLnRvZ2dsZUJ1dHRvblN0YXRlKCk7XG5cbiAgICAvLyDQntCx0L7QudC00ZHQvCDQstGB0LUg0Y3Qu9C10LzQtdC90YLRiyDQv9C+0LvRg9GH0LXQvdC90L7QuSDQutC+0LvQu9C10LrRhtC40LhcbiAgICB0aGlzLl9pbnB1dExpc3QuZm9yRWFjaCgoaW5wdXRFbGVtZW50KSA9PiB7XG4gICAgICAvLyDQutCw0LbQtNC+0LzRgyDQv9C+0LvRjiDQtNC+0LHQsNCy0LjQvCDQvtCx0YDQsNCx0L7RgtGH0LjQuiDRgdC+0LHRi9GC0LjRjyBpbnB1dFxuICAgICAgaW5wdXRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XG4gICAgICAgIC8vINCS0L3Rg9GC0YDQuCDQutC+0LvQsdGN0LrQsCDQstGL0LfQvtCy0LXQvCBjaGVja0lucHV0VmFsaWRpdHksXG4gICAgICAgIC8vINC/0LXRgNC10LTQsNCyINC10Lkg0YTQvtGA0LzRgyDQuCDQv9GA0L7QstC10YDRj9C10LzRi9C5INGN0LvQtdC80LXQvdGCXG4gICAgICAgIHRoaXMuX2NoZWNrSW5wdXRWYWxpZGl0eShpbnB1dEVsZW1lbnQpO1xuICAgICAgICAvLyDQv9C10YDQtdC00LDQtdC8INGELdGG0LjQuCDQvNCw0YHRgdC40LIg0L/QvtC70LXQuSDRhNC+0YDQvNGLINC4INGN0LvQtdC80LXQvdGCINC60L3QvtC/0LrQuFxuICAgICAgICB0aGlzLnRvZ2dsZUJ1dHRvblN0YXRlKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICAvLyDQvtCx0YDQsNCx0L7RgtGH0LjQutC4INCy0YHQtdC8INGE0L7RgNC80LDQvFxuICBlbmFibGVWYWxpZGF0aW9uID0gKCkgPT4ge1xuICAgIHRoaXMuX3NldFZhbGlkYXRpb25FdmVudExpc3RlbmVycygpO1xuICB9O1xufVxuIiwiaW1wb3J0IFBvcHVwIGZyb20gXCIuL1BvcHVwLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBpY3R1cmVQb3B1cCBleHRlbmRzIFBvcHVwIHtcbiAgY29uc3RydWN0b3IocG9wdXBTZWxlY3Rvcikge1xuICAgIHN1cGVyKHBvcHVwU2VsZWN0b3IpO1xuICAgIHRoaXMuX3BpY1BvcHVwSW1hZ2UgPSB0aGlzLl9wb3B1cC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19pbWFnZVwiKTtcbiAgICB0aGlzLl9waWNQb3B1cE5hbWUgPSB0aGlzLl9wb3B1cC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19kZXNjcmlwdGlvblwiKTtcbiAgfVxuXG4gIG9wZW5Qb3B1cCh0aXRsZSwgbGluaykge1xuICAgIHRoaXMuX3BpY1BvcHVwSW1hZ2Uuc3JjID0gbGluaztcbiAgICB0aGlzLl9waWNQb3B1cE5hbWUudGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgICB0aGlzLl9waWNQb3B1cE5hbWUuYWx0ID0gdGl0bGU7XG4gICAgc3VwZXIub3BlblBvcHVwKCk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwIHtcbiAgY29uc3RydWN0b3IocG9wdXBTZWxlY3Rvcikge1xuICAgIHRoaXMuX3BvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihwb3B1cFNlbGVjdG9yKTtcbiAgICB0aGlzLl9oYW5kbGVFc2NDbG9zZVJlZiA9IHRoaXMuX2hhbmRsZUVzY0Nsb3NlLmJpbmQodGhpcyk7XG4gIH1cblxuICAvLyDihpMg0YQt0YbQuNC4IC/QvNC10YLQvtC00YsvINC+0YLQutGA0YvRgtC40Y8g0Lgg0LfQsNC60YDRi9GC0LjRj1xuXG4gIG9wZW5Qb3B1cCgpIHtcbiAgICB0aGlzLl9wb3B1cC5jbGFzc0xpc3QuYWRkKFwicG9wdXBfb3BlbmVkXCIpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuX2hhbmRsZUVzY0Nsb3NlUmVmKTtcbiAgfVxuXG4gIGNsb3NlUG9wdXAoKSB7XG4gICAgdGhpcy5fcG9wdXAuY2xhc3NMaXN0LnJlbW92ZShcInBvcHVwX29wZW5lZFwiKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLl9oYW5kbGVFc2NDbG9zZVJlZik7XG4gIH1cblxuICAvLyDihpMg0LfQsNC60YDRi9GC0LjQtSDRh9C10YDQtdC3IGVzY1xuXG4gIF9oYW5kbGVFc2NDbG9zZShldnQpIHtcbiAgICBpZiAoZXZ0LmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgdGhpcy5jbG9zZVBvcHVwKCk7XG4gICAgfVxuICB9XG5cbiAgLy8g4oaTINC30LDQutGA0YvRgtC40LUg0L/RgNC4INGJ0LXQu9GH0LrQtSDQvdCwINC60YDQtdGB0YLQuNC6INC40LvQuCDQvtCy0LXRgNC70LXQuVxuXG4gIHNldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHRoaXMuX3BvcHVwLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKGV2dCkgPT4ge1xuICAgICAgaWYgKGV2dC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicG9wdXBfb3BlbmVkXCIpKSB7XG4gICAgICAgIHRoaXMuY2xvc2VQb3B1cCgpO1xuICAgICAgfVxuICAgICAgaWYgKGV2dC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicG9wdXBfX2Nsb3NlLWljb25cIikpIHtcbiAgICAgICAgdGhpcy5jbG9zZVBvcHVwKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCBQb3B1cCBmcm9tIFwiLi9Qb3B1cC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cFdpdGhGb3JtIGV4dGVuZHMgUG9wdXAge1xuICBjb25zdHJ1Y3Rvcih7IHBvcHVwU2VsZWN0b3IsIGhhbmRsZVN1Ym1pdCB9KSB7XG4gICAgc3VwZXIocG9wdXBTZWxlY3Rvcik7XG4gICAgdGhpcy5faGFuZGxlU3VibWl0ID0gaGFuZGxlU3VibWl0O1xuICAgIHRoaXMuX2Zvcm0gPSB0aGlzLl9wb3B1cC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19mb3JtXCIpO1xuICAgIC8vINC00L7RgdGC0LDRkdC8INCy0YHQtSDRjdC70LXQvNC10L3RgtGLINC/0L7Qu9C10LlcbiAgICB0aGlzLl9pbnB1dExpc3QgPSB0aGlzLl9wb3B1cC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBvcHVwX19pbnB1dFwiKTtcbiAgfVxuXG4gIF9nZXRJbnB1dFZhbHVlcygpIHtcbiAgICAvLyDRgdC+0LfQtNCw0ZHQvCDQv9GD0YHRgtC+0Lkg0L7QsdGK0LXQutGCXG4gICAgdGhpcy5fZm9ybVZhbHVlcyA9IHt9O1xuXG4gICAgLy8g0LTQvtCx0LDQstC70Y/QtdC8INCyINGN0YLQvtGCINC+0LHRitC10LrRgiDQt9C90LDRh9C10L3QuNGPINCy0YHQtdGFINC/0L7Qu9C10LlcbiAgICB0aGlzLl9pbnB1dExpc3QuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICAgIHRoaXMuX2Zvcm1WYWx1ZXNbaW5wdXQubmFtZV0gPSBpbnB1dC52YWx1ZTtcbiAgICB9KTtcblxuICAgIC8vINCy0L7Qt9Cy0YDQsNGJ0LDQtdC8INC+0LHRitC10LrRgiDQt9C90LDRh9C10L3QuNC5XG4gICAgcmV0dXJuIHRoaXMuX2Zvcm1WYWx1ZXM7XG4gIH1cblxuICBzZXRFdmVudExpc3RlbmVycygpIHtcbiAgICBzdXBlci5zZXRFdmVudExpc3RlbmVycygpO1xuICAgIHRoaXMuX2Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZ0KSA9PiB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgdGhpcy5faGFuZGxlU3VibWl0KHRoaXMuX2dldElucHV0VmFsdWVzKCkpO1xuICAgICAgLyogdGhpcy5jbG9zZVBvcHVwKCk7ICovXG4gICAgfSk7XG4gIH1cblxuICBjbG9zZVBvcHVwKCkge1xuICAgIHN1cGVyLmNsb3NlUG9wdXAoKTtcbiAgICB0aGlzLl9mb3JtLnJlc2V0KCk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlY3Rpb24ge1xuICBjb25zdHJ1Y3Rvcih7IHJlbmRlcmVyIH0sIGNvbnRhaW5lclNlbGVjdG9yKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIgPSByZW5kZXJlcjtcbiAgICB0aGlzLl9jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnRhaW5lclNlbGVjdG9yKTtcbiAgfVxuXG4gIHJlbmRlckl0ZW1zKGRhdGEpIHtcbiAgICB0aGlzLl9pdGVtcyA9IGRhdGE7XG4gICAgdGhpcy5faXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgdGhpcy5fcmVuZGVyZXIoaXRlbSk7XG4gICAgfSk7XG4gIH1cblxuICBhZGRJdGVtKGVsZW1lbnQpIHtcbiAgICB0aGlzLl9jb250YWluZXIucHJlcGVuZChlbGVtZW50KTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlckluZm8ge1xuICBjb25zdHJ1Y3Rvcih7IHVzZXJOYW1lLCB1c2VyRGVzY3JpcHRpb24gfSkge1xuICAgIHRoaXMuX3Byb2ZpbGVOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih1c2VyTmFtZSk7XG4gICAgdGhpcy5fcHJvZmlsZUpvYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodXNlckRlc2NyaXB0aW9uKTtcbiAgfVxuXG4gIGdldFVzZXJJbmZvKCkge1xuICAgIGNvbnN0IGdvdHRlbkluZm8gPSB7XG4gICAgICB1c2VyTmFtZTogdGhpcy5fcHJvZmlsZU5hbWUudGV4dENvbnRlbnQsXG4gICAgICB1c2VyRGVzY3JpcHRpb246IHRoaXMuX3Byb2ZpbGVKb2IudGV4dENvbnRlbnQsXG4gICAgfTtcblxuICAgIHJldHVybiBnb3R0ZW5JbmZvO1xuICB9XG5cbiAgc2V0VXNlckluZm8oZGF0YSkge1xuICAgIHRoaXMuX3Byb2ZpbGVOYW1lLnRleHRDb250ZW50ID0gZGF0YS5wcm9maWxlO1xuICAgIHRoaXMuX3Byb2ZpbGVKb2IudGV4dENvbnRlbnQgPSBkYXRhLmRlc2NyaXB0aW9uO1xuICB9XG59XG4iLCJleHBvcnQgY29uc3QgY29uZmlnID0ge1xuICBmb3JtU2VsZWN0b3I6ICcucG9wdXBfX2Zvcm0nLFxuICBpbnB1dFNlbGVjdG9yOiAnLnBvcHVwX19pbnB1dCcsXG4gIHN1Ym1pdEJ1dHRvblNlbGVjdG9yOiAnLnBvcHVwX19zdWJtaXQnLFxuICBpbmFjdGl2ZUJ1dHRvbkNsYXNzOiAncG9wdXBfX3N1Ym1pdF9kaXNhYmxlZCcsXG4gIGlucHV0RXJyb3JDbGFzczogJ3BvcHVwX19pbnB1dF90eXBlX2Vycm9yJyxcbiAgZXJyb3JDbGFzczogJ3BvcHVwX19pbnB1dC1lcnJvcl9hY3RpdmUnfTsiLCJleHBvcnQgY29uc3QgaW5pdGlhbENhcmRzID0gW1xuICB7XG4gICAgdGl0bGU6ICfQndCw0YbQuNC+0L3QsNC70YzQvdGL0Lkg0J/QsNGA0Log0JHRjdC00LvRjdC90LTRgScsXG4gICAgcGljdHVyZTogJ2h0dHBzOi8vaS5pYmIuY28vSlFHWjUwNC9CYWRsYW5kcy1OYXRpb25hbC1QYXJrLVNvdXRoLURha290YS1VU0EuanBnJ1xuICB9LFxuICB7XG4gICAgdGl0bGU6ICfQk9C+0YDRiyDQkdC70YMg0KDQuNC00LYnLFxuICAgIHBpY3R1cmU6ICdodHRwczovL2kuaWJiLmNvLzQ4OW1UUXgvQmx1ZS1SaWRnZS1Nb3VudGFpbnMuanBnJ1xuICB9LFxuICB7XG4gICAgdGl0bGU6ICfQmdC10LvQu9C+0YPRgdGC0L7Rg9C9JyxcbiAgICBwaWN0dXJlOiAnaHR0cHM6Ly9pLmliYi5jby82QjZKUEZLL1llbGxvd3N0b25lLmpwZydcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAn0KLRgNC+0L/QsCDQlNGP0LTQuCDQotC+0LzQsCcsXG4gICAgcGljdHVyZTogJ2h0dHBzOi8vaS5pYmIuY28vMHFnRGJOVi9VbmNsZS1Ub21zLVRyYWlsLmpwZydcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAn0JLQvtC00L7Qv9Cw0LQg0JzQsNC70YLQvdC+0LzQsCcsXG4gICAgcGljdHVyZTogJ2h0dHBzOi8vaS5pYmIuY28vSnY5ak1wVy9NdWx0bm9tYWgtRmFsbHMuanBnJ1xuICB9LFxuICB7XG4gICAgdGl0bGU6ICfQntGB0YLRgNC+0LIg0J7QsNGF0YMnLFxuICAgIHBpY3R1cmU6ICdodHRwczovL2kuaWJiLmNvL1RrUHF5WkgvT2FodS5qcGcnXG4gIH1cbl07IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xuXG5jb25zdCBidXR0b25FZGl0UHJvZmlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fZWRpdC1idXR0b25cIik7XG5jb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19pbnB1dF9saW5lX25hbWVcIik7XG5jb25zdCBqb2JJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2lucHV0X2xpbmVfZGVzY3JpcHRpb25cIik7XG5jb25zdCBwb3B1cEVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX2VkaXRcIik7XG5jb25zdCBwb3B1cEFkZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfYWRkXCIpO1xuY29uc3QgYnV0dG9uQWRkQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fYWRkLWJ1dHRvblwiKTtcblxuaW1wb3J0IHsgQ2FyZCB9IGZyb20gXCIuLi9jb21wb25lbnRzL0NhcmQuanNcIjtcbmltcG9ydCBTZWN0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL1NlY3Rpb24uanNcIjtcbmltcG9ydCB7IEZvcm1WYWxpZGF0b3IgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzXCI7XG5pbXBvcnQgUGljdHVyZVBvcHVwIGZyb20gXCIuLi9jb21wb25lbnRzL1BpY3R1cmVQb3B1cC5qc1wiO1xuaW1wb3J0IFBvcHVwV2l0aEZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9wdXBXaXRoRm9ybS5qc1wiO1xuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCIuLi9jb21wb25lbnRzL1VzZXJJbmZvLmpzXCI7XG5pbXBvcnQgeyBjb25maWcgfSBmcm9tIFwiLi4vdXRpbHMvY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBpbml0aWFsQ2FyZHMgfSBmcm9tIFwiLi4vdXRpbHMvaW5pdGlhbENhcmRzXCI7XG5cbmNvbnN0IHBvcHVwRWRpdFZhbGlkYXRpb24gPSBuZXcgRm9ybVZhbGlkYXRvcihjb25maWcsIHBvcHVwRWRpdCk7XG5jb25zdCBwb3B1cEFkZFZhbGlkYXRpb24gPSBuZXcgRm9ybVZhbGlkYXRvcihjb25maWcsIHBvcHVwQWRkKTtcblxucG9wdXBFZGl0VmFsaWRhdGlvbi5lbmFibGVWYWxpZGF0aW9uKCk7XG5cbi8vIOKGkyDQvdC+0LLQsNGPINGE0LjQs9GD0LvQuNC90LAg0L/RgNC+INGO0LfQtdGA0LBcblxuY29uc3QgdXNlckluZm8gPSBuZXcgVXNlckluZm8oe1xuICB1c2VyTmFtZTogXCIucHJvZmlsZV9fbmFtZVwiLFxuICB1c2VyRGVzY3JpcHRpb246IFwiLnByb2ZpbGVfX2Rlc2NyaXB0aW9uXCIsXG59KTtcblxuLy8g4oaTINC90L7QstCw0Y8g0YTQvtGA0LzQsCBlZGl0XG5cbmNvbnN0IGVkaXRGb3JtID0gbmV3IFBvcHVwV2l0aEZvcm0oe1xuICBwb3B1cFNlbGVjdG9yOiBcIi5wb3B1cF9lZGl0XCIsXG4gIGhhbmRsZVN1Ym1pdDogKGRhdGEpID0+IHtcbiAgICB1c2VySW5mby5zZXRVc2VySW5mbyhkYXRhKTtcbiAgICBlZGl0Rm9ybS5jbG9zZVBvcHVwKCk7XG4gIH0sXG59KTtcblxuZWRpdEZvcm0uc2V0RXZlbnRMaXN0ZW5lcnMoKTtcblxuLy8g4oaTINCw0LrRgtC40LLQsNGG0LjRjyDQutC90L7Qv9C60LggZWRpdFxuXG5idXR0b25FZGl0UHJvZmlsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjb25zdCBnb3R0ZW5JbmZvID0gdXNlckluZm8uZ2V0VXNlckluZm8oKTtcbiAgbmFtZUlucHV0LnZhbHVlID0gZ290dGVuSW5mby51c2VyTmFtZTtcbiAgam9iSW5wdXQudmFsdWUgPSBnb3R0ZW5JbmZvLnVzZXJEZXNjcmlwdGlvbjtcbiAgZWRpdEZvcm0ub3BlblBvcHVwKCk7XG59KTtcblxuLy8g4oaTINC90L7QstCw0Y8g0YTQuNCz0YPQu9C40L3QsCDQv9GA0L4g0LrQsNGA0YLQuNC90LrQuFxuXG5jb25zdCBwaWN0dXJlUG9wdXAgPSBuZXcgUGljdHVyZVBvcHVwKFwiLnBvcHVwX3BpY1wiKTtcbnBpY3R1cmVQb3B1cC5zZXRFdmVudExpc3RlbmVycygpO1xuXG4vLyDihpMg0Lgg0YLQsNC6INC/0L7QvdGP0YLQvdC+XG5cbmZ1bmN0aW9uIGhhbmRsZUNhcmRDbGljayh0aXRsZSwgbGluaykge1xuICBwaWN0dXJlUG9wdXAub3BlblBvcHVwKHRpdGxlLCBsaW5rKTtcbn1cblxuLy8g4oaTICDQvdC+0LLRi9C5INGN0LrQt9C10LzQv9C70Y/RgCDQutCw0YDRgtC+0YfQutC4XG5cbmZ1bmN0aW9uIGFkZENhcmQoZGF0YSkgeyBcbiAgY29uc3QgY2FyZEl0ZW0gPSBuZXcgQ2FyZChcbiAgZGF0YS50aXRsZSxcbiAgZGF0YS5waWN0dXJlLFxuICBcIi5jYXJkc19faXRlbS10ZW1wbGF0ZVwiLFxuICBoYW5kbGVDYXJkQ2xpY2tcbik7XG5cbnJldHVybiBjYXJkSXRlbS5nZW5lcmF0ZUNhcmQoKTtcbn1cblxuLy8g4oaTICDQsdC70L7QuiDRgSDQutCw0YDRgtC40L3QutCw0LzQuFxuXG5jb25zdCBjYXJkc0xpc3QgPSBuZXcgU2VjdGlvbihcbiAge1xuICAgIHJlbmRlcmVyOiAoZGF0YSkgPT4ge1xuICAgICAgY2FyZHNMaXN0LmFkZEl0ZW0oYWRkQ2FyZChkYXRhKSk7XG4gICAgfSxcbiAgfSxcbiAgXCIuY2FyZHNcIlxuKTtcblxuY2FyZHNMaXN0LnJlbmRlckl0ZW1zKGluaXRpYWxDYXJkcyk7XG5cbi8vIOKGkyAg0L3QvtCy0LDRjyDRhNC+0YDQvNCwIGFkZFxuXG5jb25zdCBhZGRGb3JtID0gbmV3IFBvcHVwV2l0aEZvcm0oe1xuICBwb3B1cFNlbGVjdG9yOiBcIi5wb3B1cF9hZGRcIixcbiAgaGFuZGxlU3VibWl0OiAoZGF0YSkgPT4ge1xuICAgIGNhcmRzTGlzdC5hZGRJdGVtKGFkZENhcmQoZGF0YSkpO1xuICAgIGFkZEZvcm0uY2xvc2VQb3B1cCgpO1xuICB9LFxufSk7XG5cbmFkZEZvcm0uc2V0RXZlbnRMaXN0ZW5lcnMoKTtcblxuLy8g4oaTINCw0LrRgtC40LLQsNGG0LjRjyDQutC90L7Qv9C60LggYWRkXG5cbmJ1dHRvbkFkZENhcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgcG9wdXBBZGRWYWxpZGF0aW9uLnJlc2V0VmFsaWRhdGlvbigpO1xuICBhZGRGb3JtLm9wZW5Qb3B1cCgpO1xufSk7XG5cbnBvcHVwQWRkVmFsaWRhdGlvbi5lbmFibGVWYWxpZGF0aW9uKCk7XG5cblxuLy8g0KLQo9CiXG5cbiJdLCJuYW1lcyI6WyJDYXJkIiwidGl0bGUiLCJsaW5rIiwidGVtcGxhdGVTZWxlY3RvciIsImhhbmRsZUNhcmRDbGljayIsIl90aXRsZSIsIl9saW5rIiwiX3RlbXBsYXRlU2VsZWN0b3IiLCJfaGFuZGxlQ2FyZENsaWNrIiwiY2FyZEVsZW1lbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjb250ZW50IiwiY2xvbmVOb2RlIiwiX2VsZW1lbnQiLCJyZW1vdmUiLCJfbGlrZUJ1dHRvbiIsImNsYXNzTGlzdCIsInRvZ2dsZSIsIl9kZWxldGVCdXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwiX2hhbmRsZURlbGV0ZSIsIl9oYW5kbGVMaWtlIiwiX2NhcmRJbWciLCJfZ2V0VGVtcGxhdGUiLCJfY2FyZFRpdGxlIiwiX3NldEV2ZW50TGlzdGVuZXJzIiwic3JjIiwiYWx0IiwidGV4dENvbnRlbnQiLCJGb3JtVmFsaWRhdG9yIiwic2V0dGluZ3MiLCJmb3JtRWxlbWVudCIsImlucHV0RWxlbWVudCIsImVycm9yTWVzc2FnZSIsIl9lcnJvckVsZW1lbnQiLCJfZm9ybUVsZW1lbnQiLCJpZCIsImFkZCIsIl9pbnB1dEVycm9yQ2xhc3MiLCJfZXJyb3JDbGFzcyIsIl9oYXNJbnZhbGlkSW5wdXQiLCJfaW5wdXRMaXN0IiwiX2J1dHRvbkVsZW1lbnQiLCJfaW5hY3RpdmVCdXR0b25DbGFzcyIsInNldEF0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsInNvbWUiLCJpdGVtIiwidmFsaWRpdHkiLCJ2YWxpZCIsIl9zaG93SW5wdXRFcnJvciIsInZhbGlkYXRpb25NZXNzYWdlIiwiX2hpZGVJbnB1dEVycm9yIiwidG9nZ2xlQnV0dG9uU3RhdGUiLCJmb3JFYWNoIiwiX2NoZWNrSW5wdXRWYWxpZGl0eSIsIl9zZXRWYWxpZGF0aW9uRXZlbnRMaXN0ZW5lcnMiLCJfZm9ybVNlbGVjdG9yIiwiZm9ybVNlbGVjdG9yIiwiX2lucHV0U2VsZWN0b3IiLCJpbnB1dFNlbGVjdG9yIiwiX3N1Ym1pdEJ1dHRvblNlbGVjdG9yIiwic3VibWl0QnV0dG9uU2VsZWN0b3IiLCJpbmFjdGl2ZUJ1dHRvbkNsYXNzIiwiaW5wdXRFcnJvckNsYXNzIiwiZXJyb3JDbGFzcyIsIkFycmF5IiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJQb3B1cCIsIlBpY3R1cmVQb3B1cCIsInBvcHVwU2VsZWN0b3IiLCJfcGljUG9wdXBJbWFnZSIsIl9wb3B1cCIsIl9waWNQb3B1cE5hbWUiLCJfaGFuZGxlRXNjQ2xvc2VSZWYiLCJfaGFuZGxlRXNjQ2xvc2UiLCJiaW5kIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImV2dCIsImtleSIsImNsb3NlUG9wdXAiLCJ0YXJnZXQiLCJjb250YWlucyIsIlBvcHVwV2l0aEZvcm0iLCJoYW5kbGVTdWJtaXQiLCJfaGFuZGxlU3VibWl0IiwiX2Zvcm0iLCJfZm9ybVZhbHVlcyIsImlucHV0IiwibmFtZSIsInZhbHVlIiwicHJldmVudERlZmF1bHQiLCJfZ2V0SW5wdXRWYWx1ZXMiLCJyZXNldCIsIlNlY3Rpb24iLCJjb250YWluZXJTZWxlY3RvciIsInJlbmRlcmVyIiwiX3JlbmRlcmVyIiwiX2NvbnRhaW5lciIsImRhdGEiLCJfaXRlbXMiLCJlbGVtZW50IiwicHJlcGVuZCIsIlVzZXJJbmZvIiwidXNlck5hbWUiLCJ1c2VyRGVzY3JpcHRpb24iLCJfcHJvZmlsZU5hbWUiLCJfcHJvZmlsZUpvYiIsImdvdHRlbkluZm8iLCJwcm9maWxlIiwiZGVzY3JpcHRpb24iLCJjb25maWciLCJpbml0aWFsQ2FyZHMiLCJwaWN0dXJlIiwiYnV0dG9uRWRpdFByb2ZpbGUiLCJuYW1lSW5wdXQiLCJqb2JJbnB1dCIsInBvcHVwRWRpdCIsInBvcHVwQWRkIiwiYnV0dG9uQWRkQ2FyZCIsInBvcHVwRWRpdFZhbGlkYXRpb24iLCJwb3B1cEFkZFZhbGlkYXRpb24iLCJlbmFibGVWYWxpZGF0aW9uIiwidXNlckluZm8iLCJlZGl0Rm9ybSIsInNldFVzZXJJbmZvIiwic2V0RXZlbnRMaXN0ZW5lcnMiLCJnZXRVc2VySW5mbyIsIm9wZW5Qb3B1cCIsInBpY3R1cmVQb3B1cCIsImFkZENhcmQiLCJjYXJkSXRlbSIsImdlbmVyYXRlQ2FyZCIsImNhcmRzTGlzdCIsImFkZEl0ZW0iLCJyZW5kZXJJdGVtcyIsImFkZEZvcm0iLCJyZXNldFZhbGlkYXRpb24iXSwic291cmNlUm9vdCI6IiJ9