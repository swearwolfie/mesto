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
    key: "checkResponse",
    value: function checkResponse(response) {
      // отдельная функция для общения с сервером
      if (response.ok) {
        return response.json(); // Promise.resolve
      } else {
        Promise.reject("\u041E\u0448\u0438\u0431\u043A\u0430: ".concat(response.status, " ").concat(response.statusText));
      }
    }
  }, {
    key: "getCards",
    value: function getCards() {
      return fetch("".concat(this._url, 'cards'), {
        headers: this._headers
      }).then(this.checkResponse);
    }
  }, {
    key: "deleteCard",
    value: function deleteCard(id) {
      return fetch("".concat(this._url, 'cards/').concat(id), {
        method: "DELETE",
        headers: this._headers
      }).then(this.checkResponse);
    }
  }, {
    key: "addNewCard",
    value: function addNewCard(name, link) {
      return fetch("".concat(this._url, 'cards'), {
        method: "POST",
        headers: this._headers,
        body: JSON.stringify({
          name: name,
          link: link
        })
      }).then(this.checkResponse);
    }
  }, {
    key: "getProfileInfo",
    value: function getProfileInfo() {
      return fetch("".concat(this._url, 'users/me'), {
        headers: this._headers
      }).then(this.checkResponse);
    }
  }, {
    key: "editProfile",
    value: function editProfile(name, about) {
      return fetch("".concat(this._url, 'users/me'), {
        method: "PATCH",
        headers: this._headers,
        body: JSON.stringify({
          name: name,
          about: about
        })
      }).then(this.checkResponse);
    }
  }, {
    key: "deleteLike",
    value: function deleteLike(id) {
      return fetch("".concat(this._url, 'cards/').concat(id, '/likes'), {
        method: "DELETE",
        headers: this._headers
      }).then(this.checkResponse);
    }
  }, {
    key: "putLike",
    value: function putLike(id) {
      return fetch("".concat(this._url, 'cards/').concat(id, '/likes'), {
        method: "PUT",
        headers: this._headers
      }).then(this.checkResponse);
    }
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
  function Card(data, templateSelector, handleCardClick, handleBinClick, handleLikeClick) {
    _classCallCheck(this, Card);
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
  _createClass(Card, [{
    key: "_getTemplate",
    value: function _getTemplate() {
      var cardElement = document.querySelector(this._templateSelector).content.querySelector(".cards__item").cloneNode(true);
      return cardElement;
    }

    // ↓ удаление карточек
  }, {
    key: "handleDelete",
    value: function handleDelete() {
      this._element.remove();
      this._element = null;
    }

    // ↓ кнопка лайка
  }, {
    key: "_putLike",
    value: function _putLike() {
      this._likeButton.classList.add("cards__like-button_active");
    }
  }, {
    key: "_omitLike",
    value: function _omitLike() {
      this._likeButton.classList.remove("cards__like-button_active");
    }
  }, {
    key: "isLiked",
    value: function isLiked() {
      var _this = this;
      this._userHasLiked = this._likes.find(function (user) {
        return user._id === _this._userId;
      }); // проверяем, есть ли в массиве лайков я
      return this._userHasLiked;
    }

    // ↓ счетчик лайков
  }, {
    key: "countLikes",
    value: function countLikes(newLikes) {
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
  }, {
    key: "_hideBin",
    value: function _hideBin() {
      if (this._ownerId !== this._userId) {
        this._deleteButton.style.display = 'none';
      }
    }

    // ↓ ф-ция слушателей лайка, корзины и фулла
  }, {
    key: "_setEventListeners",
    value: function _setEventListeners() {
      var _this2 = this;
      this._deleteButton = this._element.querySelector(".cards__bin");
      this._deleteButton.addEventListener("click", function () {
        _this2._handleBinClick(_this2._id);
      });
      this._hideBin();
      this._likeButton = this._element.querySelector(".cards__like-button");
      this._likeButton.addEventListener("click", function () {
        _this2._handleLikeClick(_this2._id);
      });
      this._cardImg = this._element.querySelector(".cards__pic");
      this._cardImg.addEventListener("click", function () {
        _this2._handleCardClick(_this2._title, _this2._link);
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
      this.countLikes(this._likes);
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
  }, {
    key: "changeSubmitHandler",
    value: function changeSubmitHandler(newSubmitHandler) {
      this._handleSubmit = newSubmitHandler;
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
    value: function setUserInfo(name, description) {
      this._profileName.textContent = name;
      this._profileJob.textContent = description;
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


// _id: '80f1ef482b84886f3d501767'

var buttonEditProfile = document.querySelector(".profile__edit-button");
var nameInput = document.querySelector(".popup__input_line_name");
var jobInput = document.querySelector(".popup__input_line_description");
var popupEdit = document.querySelector(".popup_edit");
var popupAdd = document.querySelector(".popup_add");
var popupConfirmDelete = document.querySelector('.popup_make-sure');
var buttonAddCard = document.querySelector(".profile__add-button");










// ↓  конфиг API

var apiConfig = {
  url: 'https://mesto.nomoreparties.co/v1/cohort-54/',
  headers: {
    authorization: 'e005a204-1370-46e1-93c7-d7d1a162ac21',
    "Content-type": 'application/json'
  }
};
var apiNew = new _components_Api__WEBPACK_IMPORTED_MODULE_9__["default"](apiConfig);
var popupEditValidation = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_3__.FormValidator(_utils_constants__WEBPACK_IMPORTED_MODULE_7__.config, popupEdit);
var popupAddValidation = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_3__.FormValidator(_utils_constants__WEBPACK_IMPORTED_MODULE_7__.config, popupAdd);
popupEditValidation.enableValidation();

// ↓ новая фигулина про юзера

var userId; // получаем ниже ↓↓↓

apiNew.getProfileInfo().then(function (profileUserInfo) {
  userInfo.setUserInfo(profileUserInfo.name, profileUserInfo.about);
  userId = profileUserInfo._id; // я родился
})["catch"](function (error) {
  console.log(error);
});
var userInfo = new _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_6__["default"]({
  userName: ".profile__name",
  userDescription: ".profile__description"
});

// ↓ новая форма edit

var editForm = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_5__["default"]({
  popupSelector: ".popup_edit",
  handleSubmit: function handleSubmit(data) {
    apiNew.editProfile(data.profile, data.description) // data – содержимое инпутов, profile/description – name'ы инпутов из индекс.хтмл
    .then(function (submittedInfo) {
      userInfo.setUserInfo(submittedInfo.name, submittedInfo.about);
    })["catch"](function (error) {
      console.log(error);
    });
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

// ↓ новая форма для подтверждения удаления карточки 

var confirmDeleteForm = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_5__["default"]({
  popupSelector: '.popup_make-sure'
});
confirmDeleteForm.setEventListeners();

// ↓  функция подтверждения удаления

/* function handleBinClick(id) {
  confirmDeleteForm.openPopup();
  confirmDeleteForm.changeSubmitHandler(() => {
    apiNew.deleteCard(id)
    .then((res) => {
      addCard.handleDelete() // ТУТ НЕ ВЫЗЫВАЕТСЯ =(
      confirmDeleteForm.closePopup()
    }) 
    });
} */

// ↓  функция лайка
/*
function handleLikeClick(id) {
  apiNew.putLike(id)
  .then(() => {})
  .catch((error) => {
    console.log(error);
  })
}*/

// ↓  новый экземпляр карточки

function addCard(data) {
  var cardItem = new _components_Card_js__WEBPACK_IMPORTED_MODULE_1__.Card({
    title: data.name,
    link: data.link,
    likes: data.likes,
    id: data._id,
    userId: userId,
    ownerId: data.owner._id
  }, ".cards__item-template", handleCardClick, function (id) {
    confirmDeleteForm.openPopup();
    confirmDeleteForm.changeSubmitHandler(function () {
      apiNew.deleteCard(id).then(function (res) {
        cardItem.handleDelete();
        confirmDeleteForm.closePopup();
      });
    });
  }, function (id) {
    if (cardItem.isLiked()) {
      apiNew.deleteLike(id).then(function (res) {
        cardItem.countLikes(res.likes);
      })["catch"](function (error) {
        console.log(error);
      });
    } else {
      apiNew.putLike(id).then(function (res) {
        cardItem.countLikes(res.likes);
      })["catch"](function (error) {
        console.log(error);
      });
    }
  });
  return cardItem.generateCard();
}

// ↓  блок с картинками

var cardsList = new _components_Section_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
  renderer: function renderer(data) {
    cardsList.addItem(addCard(data));
  }
}, ".cards");

// ↓  приключения с отрисовкой карточек через API 
// ↓  отрисовка

apiNew.getCards() // result - готовые данные
.then(function (cards) {
  cardsList.renderItems(cards);
})["catch"](function (error) {
  console.log(error);
});

// ↓  новая форма add

var addForm = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_5__["default"]({
  popupSelector: ".popup_add",
  handleSubmit: function handleSubmit(data) {
    console.log(data);
    apiNew.addNewCard(data.title, data.picture).then(function (newCard) {
      cardsList.addItem(addCard(newCard));
    })["catch"](function (error) {
      console.log(error);
    });
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUNvQyxlQUFlLEVBQUU7RUFDcENILE9BQU8sQ0FBQ2xCLFNBQVMsRUFBRTtBQUNyQixDQUFDLENBQUM7QUFFRmYsa0JBQWtCLENBQUNDLGdCQUFnQixFQUFFLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BcGkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1BpY3R1cmVQb3B1cC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qb3B1cC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qb3B1cFdpdGhGb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVXNlckluZm8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvaW5pdGlhbENhcmRzLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwaSB7XG4gIGNvbnN0cnVjdG9yKHsgdXJsLCBoZWFkZXJzIH0pIHtcbiAgICB0aGlzLl91cmwgPSB1cmw7IC8vIGh0dHBzOi8vbWVzdG8ubm9tb3JlcGFydGllcy5jby92MS9jb2hvcnQtNTQvXG4gICAgdGhpcy5faGVhZGVycyA9IGhlYWRlcnM7XG4gIH1cblxuICBjaGVja1Jlc3BvbnNlKHJlc3BvbnNlKSB7IC8vINC+0YLQtNC10LvRjNC90LDRjyDRhNGD0L3QutGG0LjRjyDQtNC70Y8g0L7QsdGJ0LXQvdC40Y8g0YEg0YHQtdGA0LLQtdGA0L7QvFxuICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTsgLy8gUHJvbWlzZS5yZXNvbHZlXG4gICAgfSBlbHNlIHtcbiAgICAgIFByb21pc2UucmVqZWN0KGDQntGI0LjQsdC60LA6ICR7cmVzcG9uc2Uuc3RhdHVzfSAke3Jlc3BvbnNlLnN0YXR1c1RleHR9YCk7XG4gICAgfVxuICB9IFxuXG4gIGdldENhcmRzKCkge1xuICAgIHJldHVybiBmZXRjaChgJHt0aGlzLl91cmx9JHsnY2FyZHMnfWAsIHtcbiAgICAgIGhlYWRlcnM6IHRoaXMuX2hlYWRlcnNcbiAgICB9KS50aGVuKHRoaXMuY2hlY2tSZXNwb25zZSlcbiAgfVxuXG4gIGRlbGV0ZUNhcmQoaWQpIHtcbiAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5fdXJsfSR7J2NhcmRzLyd9JHtpZH1gLCB7XG4gICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXG4gICAgICBoZWFkZXJzOiB0aGlzLl9oZWFkZXJzXG4gICAgfSkudGhlbih0aGlzLmNoZWNrUmVzcG9uc2UpXG4gIH1cbiAgXG4gIGFkZE5ld0NhcmQobmFtZSwgbGluaykge1xuICAgIHJldHVybiBmZXRjaChgJHt0aGlzLl91cmx9JHsnY2FyZHMnfWAsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBoZWFkZXJzOiB0aGlzLl9oZWFkZXJzLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBcbiAgICAgICAgbmFtZSwgXG4gICAgICAgIGxpbmtcbiAgICAgIH0pLFxuICAgIH0pLnRoZW4odGhpcy5jaGVja1Jlc3BvbnNlKVxuICB9XG5cbiAgZ2V0UHJvZmlsZUluZm8oKSB7XG4gICAgcmV0dXJuIGZldGNoKGAke3RoaXMuX3VybH0keyd1c2Vycy9tZSd9YCwge1xuICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVyc1xuICAgIH0pLnRoZW4odGhpcy5jaGVja1Jlc3BvbnNlKVxuICB9XG5cbiAgZWRpdFByb2ZpbGUobmFtZSwgYWJvdXQpIHtcbiAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5fdXJsfSR7J3VzZXJzL21lJ31gLCB7XG4gICAgICBtZXRob2Q6IFwiUEFUQ0hcIixcbiAgICAgIGhlYWRlcnM6IHRoaXMuX2hlYWRlcnMsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIGFib3V0XG4gICAgICB9KVxuICAgIH0pLnRoZW4odGhpcy5jaGVja1Jlc3BvbnNlKVxuICB9XG5cbiAgZGVsZXRlTGlrZShpZCkge1xuICAgIHJldHVybiBmZXRjaChgJHt0aGlzLl91cmx9JHsnY2FyZHMvJ30ke2lkfSR7Jy9saWtlcyd9YCwge1xuICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxuICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVyc1xuICAgIH0pLnRoZW4odGhpcy5jaGVja1Jlc3BvbnNlKVxuICB9XG5cbiAgcHV0TGlrZShpZCkge1xuICAgIHJldHVybiBmZXRjaChgJHt0aGlzLl91cmx9JHsnY2FyZHMvJ30ke2lkfSR7Jy9saWtlcyd9YCwge1xuICAgICAgbWV0aG9kOiBcIlBVVFwiLFxuICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVyc1xuICAgIH0pLnRoZW4odGhpcy5jaGVja1Jlc3BvbnNlKVxuICB9XG59IiwiZXhwb3J0IGNsYXNzIENhcmQge1xuICBjb25zdHJ1Y3RvcihkYXRhLCB0ZW1wbGF0ZVNlbGVjdG9yLCBoYW5kbGVDYXJkQ2xpY2ssIGhhbmRsZUJpbkNsaWNrLCBoYW5kbGVMaWtlQ2xpY2spIHtcbiAgICB0aGlzLl90aXRsZSA9IGRhdGEudGl0bGU7XG4gICAgdGhpcy5fbGluayA9IGRhdGEubGluaztcbiAgICB0aGlzLl9saWtlcyA9IGRhdGEubGlrZXM7XG4gICAgdGhpcy5faWQgPSBkYXRhLmlkO1xuICAgIHRoaXMuX3VzZXJJZCA9IGRhdGEudXNlcklkO1xuICAgIHRoaXMuX293bmVySWQgPSBkYXRhLm93bmVySWQ7XG4gICAgdGhpcy5fdGVtcGxhdGVTZWxlY3RvciA9IHRlbXBsYXRlU2VsZWN0b3I7XG4gICAgdGhpcy5faGFuZGxlQ2FyZENsaWNrID0gaGFuZGxlQ2FyZENsaWNrO1xuICAgIHRoaXMuX2hhbmRsZUJpbkNsaWNrID0gaGFuZGxlQmluQ2xpY2s7XG4gICAgdGhpcy5faGFuZGxlTGlrZUNsaWNrID0gaGFuZGxlTGlrZUNsaWNrO1xuICB9XG5cbiAgX2dldFRlbXBsYXRlKCkge1xuICAgIGNvbnN0IGNhcmRFbGVtZW50ID0gZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKHRoaXMuX3RlbXBsYXRlU2VsZWN0b3IpXG4gICAgICAuY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRzX19pdGVtXCIpXG4gICAgICAuY2xvbmVOb2RlKHRydWUpO1xuXG4gICAgcmV0dXJuIGNhcmRFbGVtZW50O1xuICB9XG4gIFxuICAvLyDihpMg0YPQtNCw0LvQtdC90LjQtSDQutCw0YDRgtC+0YfQtdC6XG5cbiAgaGFuZGxlRGVsZXRlKCkge1xuICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlKCk7XG4gICAgdGhpcy5fZWxlbWVudCA9IG51bGw7XG4gIH1cblxuICAvLyDihpMg0LrQvdC+0L/QutCwINC70LDQudC60LBcblxuICBfcHV0TGlrZSgpIHtcbiAgICB0aGlzLl9saWtlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjYXJkc19fbGlrZS1idXR0b25fYWN0aXZlXCIpO1xuICB9XG5cbiAgX29taXRMaWtlKCkge1xuICAgIHRoaXMuX2xpa2VCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImNhcmRzX19saWtlLWJ1dHRvbl9hY3RpdmVcIik7XG4gIH1cblxuICBpc0xpa2VkKCkge1xuICAgIHRoaXMuX3VzZXJIYXNMaWtlZCA9IHRoaXMuX2xpa2VzLmZpbmQodXNlciA9PiB1c2VyLl9pZCA9PT0gdGhpcy5fdXNlcklkKSAvLyDQv9GA0L7QstC10YDRj9C10LwsINC10YHRgtGMINC70Lgg0LIg0LzQsNGB0YHQuNCy0LUg0LvQsNC50LrQvtCyINGPXG4gICAgcmV0dXJuIHRoaXMuX3VzZXJIYXNMaWtlZDtcbiAgfVxuXG4gIC8vIOKGkyDRgdGH0LXRgtGH0LjQuiDQu9Cw0LnQutC+0LJcblxuICBjb3VudExpa2VzKG5ld0xpa2VzKSB7XG4gICAgdGhpcy5fbGlrZXMgPSBuZXdMaWtlcztcbiAgICB0aGlzLl9saWtlc051bWJlciA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRzX19saWtlcy1udW1iZXInKTtcbiAgICB0aGlzLl9saWtlc051bWJlci50ZXh0Q29udGVudCA9IHRoaXMuX2xpa2VzLmxlbmd0aDtcblxuICAgIGlmICh0aGlzLmlzTGlrZWQoKSkge1xuICAgICAgdGhpcy5fcHV0TGlrZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9vbWl0TGlrZSgpO1xuICAgIH1cbiAgfVxuXG4gICAvLyDihpMg0YHQutGA0YvRgtGMINC60L7RgNC30LjQvdGDINC90LAg0YfRg9C20LjRhSDQutCw0YDRgtC+0YfQutCw0YVcbiAgIF9oaWRlQmluKCkge1xuICAgIGlmICh0aGlzLl9vd25lcklkICE9PSB0aGlzLl91c2VySWQpIHtcbiAgICAgIHRoaXMuX2RlbGV0ZUJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cbiAgIH1cblxuXG4gIC8vIOKGkyDRhC3RhtC40Y8g0YHQu9GD0YjQsNGC0LXQu9C10Lkg0LvQsNC50LrQsCwg0LrQvtGA0LfQuNC90Ysg0Lgg0YTRg9C70LvQsFxuXG4gIF9zZXRFdmVudExpc3RlbmVycygpIHtcbiAgICB0aGlzLl9kZWxldGVCdXR0b24gPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZHNfX2JpblwiKTtcbiAgICB0aGlzLl9kZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHRoaXMuX2hhbmRsZUJpbkNsaWNrKHRoaXMuX2lkKTtcbiAgICB9KTtcbiAgICB0aGlzLl9oaWRlQmluKCk7XG5cbiAgICB0aGlzLl9saWtlQnV0dG9uID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRzX19saWtlLWJ1dHRvblwiKTtcbiAgICB0aGlzLl9saWtlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB0aGlzLl9oYW5kbGVMaWtlQ2xpY2sodGhpcy5faWQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5fY2FyZEltZyA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkc19fcGljXCIpO1xuICAgIHRoaXMuX2NhcmRJbWcuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHRoaXMuX2hhbmRsZUNhcmRDbGljayh0aGlzLl90aXRsZSwgdGhpcy5fbGluayk7XG4gICAgfSk7XG4gIH1cblxuICAvLyDihpMg0YHQvtC30LTQsNC90LjQtSDQutCw0YDRgtC+0YfQutC4XG5cbiAgZ2VuZXJhdGVDYXJkKCkge1xuICAgIHRoaXMuX2VsZW1lbnQgPSB0aGlzLl9nZXRUZW1wbGF0ZSgpO1xuICAgIHRoaXMuX2NhcmRUaXRsZSA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkc19fbmFtZVwiKTtcbiAgICB0aGlzLl9zZXRFdmVudExpc3RlbmVycygpO1xuXG4gICAgdGhpcy5fY2FyZEltZy5zcmMgPSB0aGlzLl9saW5rO1xuICAgIHRoaXMuX2NhcmRJbWcuYWx0ID0gdGhpcy5fdGl0bGU7XG4gICAgdGhpcy5fY2FyZFRpdGxlLnRleHRDb250ZW50ID0gdGhpcy5fdGl0bGU7XG5cbiAgICB0aGlzLmNvdW50TGlrZXModGhpcy5fbGlrZXMpO1xuXG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQ7XG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBGb3JtVmFsaWRhdG9yIHtcbiAgY29uc3RydWN0b3Ioc2V0dGluZ3MsIGZvcm1FbGVtZW50KSB7XG4gICAgdGhpcy5fZm9ybVNlbGVjdG9yID0gc2V0dGluZ3MuZm9ybVNlbGVjdG9yO1xuICAgIHRoaXMuX2lucHV0U2VsZWN0b3IgPSBzZXR0aW5ncy5pbnB1dFNlbGVjdG9yO1xuICAgIHRoaXMuX3N1Ym1pdEJ1dHRvblNlbGVjdG9yID0gc2V0dGluZ3Muc3VibWl0QnV0dG9uU2VsZWN0b3I7XG4gICAgdGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyA9IHNldHRpbmdzLmluYWN0aXZlQnV0dG9uQ2xhc3M7XG4gICAgdGhpcy5faW5wdXRFcnJvckNsYXNzID0gc2V0dGluZ3MuaW5wdXRFcnJvckNsYXNzO1xuICAgIHRoaXMuX2Vycm9yQ2xhc3MgPSBzZXR0aW5ncy5lcnJvckNsYXNzO1xuICAgIHRoaXMuX2Zvcm1FbGVtZW50ID0gZm9ybUVsZW1lbnQ7XG4gICAgdGhpcy5fYnV0dG9uRWxlbWVudCA9IHRoaXMuX2Zvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICB0aGlzLl9zdWJtaXRCdXR0b25TZWxlY3RvclxuICAgICk7XG4gICAgdGhpcy5faW5wdXRMaXN0ID0gQXJyYXkuZnJvbShcbiAgICAgIHRoaXMuX2Zvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5faW5wdXRTZWxlY3RvcilcbiAgICApO1xuICB9XG5cbiAgLy8g0L/QvtC60LDQt9Cw0YLRjCDQvtGI0LjQsdC60YNcbiAgX3Nob3dJbnB1dEVycm9yID0gKGlucHV0RWxlbWVudCwgZXJyb3JNZXNzYWdlKSA9PiB7XG4gICAgLy8g0J3QsNGF0L7QtNC40Lwg0Y3Qu9C10LzQtdC90YIg0L7RiNC40LHQutC4INCy0L3Rg9GC0YDQuCDRgdCw0LzQvtC5INGE0YPQvdC60YbQuNC4XG4gICAgdGhpcy5fZXJyb3JFbGVtZW50ID0gdGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGAuJHtpbnB1dEVsZW1lbnQuaWR9LWVycm9yYFxuICAgICk7XG4gICAgaW5wdXRFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5faW5wdXRFcnJvckNsYXNzKTtcbiAgICB0aGlzLl9lcnJvckVsZW1lbnQudGV4dENvbnRlbnQgPSBlcnJvck1lc3NhZ2U7XG4gICAgdGhpcy5fZXJyb3JFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5fZXJyb3JDbGFzcyk7XG4gIH07XG5cbiAgLy8g0YHQutGA0YvRgtGMINC+0YjQuNCx0LrRg1xuICBfaGlkZUlucHV0RXJyb3IgPSAoaW5wdXRFbGVtZW50KSA9PiB7XG4gICAgLy8g0J3QsNGF0L7QtNC40Lwg0Y3Qu9C10LzQtdC90YIg0L7RiNC40LHQutC4XG4gICAgdGhpcy5fZXJyb3JFbGVtZW50ID0gdGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGAuJHtpbnB1dEVsZW1lbnQuaWR9LWVycm9yYFxuICAgICk7XG4gICAgaW5wdXRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5faW5wdXRFcnJvckNsYXNzKTtcbiAgICB0aGlzLl9lcnJvckVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9lcnJvckNsYXNzKTtcbiAgICB0aGlzLl9lcnJvckVsZW1lbnQudGV4dENvbnRlbnQgPSBcIlwiO1xuICB9O1xuXG4gIC8vINC60L3QvtC/0LrQsFxuICB0b2dnbGVCdXR0b25TdGF0ZSA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5faGFzSW52YWxpZElucHV0KHRoaXMuX2lucHV0TGlzdCkpIHtcbiAgICAgIC8vINC00LXQu9Cw0LXQvCDQutC90L7Qv9C60YMg0L3QtdCw0LrRgtC40LLQvdC+0LlcbiAgICAgIHRoaXMuX2J1dHRvbkVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLl9pbmFjdGl2ZUJ1dHRvbkNsYXNzKTtcbiAgICAgIHRoaXMuX2J1dHRvbkVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJ0cnVlXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyDQuNC90LDRh9C1INCw0LrRgtC40LLQvdCwXG4gICAgICB0aGlzLl9idXR0b25FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyk7XG4gICAgICB0aGlzLl9idXR0b25FbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwidHJ1ZVwiKTtcbiAgICB9XG4gIH07XG5cbiAgLy8g0L/RgNC+0LLQtdGA0LjRgtGMINC40L3Qv9GD0YLRiyDQtNC70Y8g0LDQutGC0LjQstCw0YbQuNC4INC60L3QvtC/0LrQuFxuICBfaGFzSW52YWxpZElucHV0ID0gKCkgPT4ge1xuICAgIC8vINC/0YDQvtGF0L7QtNC40Lwg0L/QviDRjdGC0L7QvNGDINC80LDRgdGB0LjQstGDINC80LXRgtC+0LTQvtC8IHNvbWVcbiAgICByZXR1cm4gdGhpcy5faW5wdXRMaXN0LnNvbWUoKGl0ZW0pID0+IHtcbiAgICAgIC8vINCV0YHQu9C4INC/0L7Qu9C1INC90LUg0LLQsNC70LjQtNC90L4sINC60L7Qu9Cx0Y3QuiDQstC10YDQvdGR0YIgdHJ1ZVxuICAgICAgLy8g0J7QsdGF0L7QtCDQvNCw0YHRgdC40LLQsCDQv9GA0LXQutGA0LDRgtC40YLRgdGPINC4INCy0YHRjyDRhNGD0L3QutGG0LjRj1xuICAgICAgLy8gaGFzSW52YWxpZElucHV0INCy0LXRgNC90ZHRgiB0cnVlXG5cbiAgICAgIHJldHVybiAhaXRlbS52YWxpZGl0eS52YWxpZDtcbiAgICB9KTtcbiAgfTtcblxuICAvLyDQv9GA0L7QstC10YDRj9C10Lwg0LLRgdGOINGN0YLRgyDQtdCx0LDQu9Cw0LnQutGDLdCx0LDQu9Cw0LvQsNC50LrRg1xuICBfY2hlY2tJbnB1dFZhbGlkaXR5ID0gKGlucHV0RWxlbWVudCkgPT4ge1xuICAgIGlmICghaW5wdXRFbGVtZW50LnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgICB0aGlzLl9zaG93SW5wdXRFcnJvcihpbnB1dEVsZW1lbnQsIGlucHV0RWxlbWVudC52YWxpZGF0aW9uTWVzc2FnZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2hpZGVJbnB1dEVycm9yKGlucHV0RWxlbWVudCk7XG4gICAgfVxuICB9O1xuXG4gIHJlc2V0VmFsaWRhdGlvbigpIHtcbiAgICB0aGlzLnRvZ2dsZUJ1dHRvblN0YXRlKCk7XG5cbiAgICB0aGlzLl9pbnB1dExpc3QuZm9yRWFjaCgoaW5wdXRFbGVtZW50KSA9PiB7XG4gICAgICB0aGlzLl9oaWRlSW5wdXRFcnJvcihpbnB1dEVsZW1lbnQpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8g0L7QsdGA0LDQsdC+0YLRh9C40LrQuCDQtNC70Y8g0LLRgdC10YUg0L/QvtC70LXQuSDRhNC+0YDQvNGLXG4gIF9zZXRWYWxpZGF0aW9uRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgdGhpcy50b2dnbGVCdXR0b25TdGF0ZSgpO1xuXG4gICAgLy8g0J7QsdC+0LnQtNGR0Lwg0LLRgdC1INGN0LvQtdC80LXQvdGC0Ysg0L/QvtC70YPRh9C10L3QvdC+0Lkg0LrQvtC70LvQtdC60YbQuNC4XG4gICAgdGhpcy5faW5wdXRMaXN0LmZvckVhY2goKGlucHV0RWxlbWVudCkgPT4ge1xuICAgICAgLy8g0LrQsNC20LTQvtC80YMg0L/QvtC70Y4g0LTQvtCx0LDQstC40Lwg0L7QsdGA0LDQsdC+0YLRh9C40Log0YHQvtCx0YvRgtC40Y8gaW5wdXRcbiAgICAgIGlucHV0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xuICAgICAgICAvLyDQktC90YPRgtGA0Lgg0LrQvtC70LHRjdC60LAg0LLRi9C30L7QstC10LwgY2hlY2tJbnB1dFZhbGlkaXR5LFxuICAgICAgICAvLyDQv9C10YDQtdC00LDQsiDQtdC5INGE0L7RgNC80YMg0Lgg0L/RgNC+0LLQtdGA0Y/QtdC80YvQuSDRjdC70LXQvNC10L3RglxuICAgICAgICB0aGlzLl9jaGVja0lucHV0VmFsaWRpdHkoaW5wdXRFbGVtZW50KTtcbiAgICAgICAgLy8g0L/QtdGA0LXQtNCw0LXQvCDRhC3RhtC40Lgg0LzQsNGB0YHQuNCyINC/0L7Qu9C10Lkg0YTQvtGA0LzRiyDQuCDRjdC70LXQvNC10L3RgiDQutC90L7Qv9C60LhcbiAgICAgICAgdGhpcy50b2dnbGVCdXR0b25TdGF0ZSgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgLy8g0L7QsdGA0LDQsdC+0YLRh9C40LrQuCDQstGB0LXQvCDRhNC+0YDQvNCw0LxcbiAgZW5hYmxlVmFsaWRhdGlvbiA9ICgpID0+IHtcbiAgICB0aGlzLl9zZXRWYWxpZGF0aW9uRXZlbnRMaXN0ZW5lcnMoKTtcbiAgfTtcbn1cbiIsImltcG9ydCBQb3B1cCBmcm9tIFwiLi9Qb3B1cC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQaWN0dXJlUG9wdXAgZXh0ZW5kcyBQb3B1cCB7XG4gIGNvbnN0cnVjdG9yKHBvcHVwU2VsZWN0b3IpIHtcbiAgICBzdXBlcihwb3B1cFNlbGVjdG9yKTtcbiAgICB0aGlzLl9waWNQb3B1cEltYWdlID0gdGhpcy5fcG9wdXAucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9faW1hZ2VcIik7XG4gICAgdGhpcy5fcGljUG9wdXBOYW1lID0gdGhpcy5fcG9wdXAucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9fZGVzY3JpcHRpb25cIik7XG4gIH1cblxuICBvcGVuUG9wdXAodGl0bGUsIGxpbmspIHtcbiAgICB0aGlzLl9waWNQb3B1cEltYWdlLnNyYyA9IGxpbms7XG4gICAgdGhpcy5fcGljUG9wdXBOYW1lLnRleHRDb250ZW50ID0gdGl0bGU7XG4gICAgdGhpcy5fcGljUG9wdXBOYW1lLmFsdCA9IHRpdGxlO1xuICAgIHN1cGVyLm9wZW5Qb3B1cCgpO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cCB7XG4gIGNvbnN0cnVjdG9yKHBvcHVwU2VsZWN0b3IpIHtcbiAgICB0aGlzLl9wb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocG9wdXBTZWxlY3Rvcik7XG4gICAgdGhpcy5faGFuZGxlRXNjQ2xvc2VSZWYgPSB0aGlzLl9oYW5kbGVFc2NDbG9zZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgLy8g4oaTINGELdGG0LjQuCAv0LzQtdGC0L7QtNGLLyDQvtGC0LrRgNGL0YLQuNGPINC4INC30LDQutGA0YvRgtC40Y9cblxuICBvcGVuUG9wdXAoKSB7XG4gICAgdGhpcy5fcG9wdXAuY2xhc3NMaXN0LmFkZChcInBvcHVwX29wZW5lZFwiKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLl9oYW5kbGVFc2NDbG9zZVJlZik7XG4gIH1cblxuICBjbG9zZVBvcHVwKCkge1xuICAgIHRoaXMuX3BvcHVwLmNsYXNzTGlzdC5yZW1vdmUoXCJwb3B1cF9vcGVuZWRcIik7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5faGFuZGxlRXNjQ2xvc2VSZWYpO1xuICB9XG5cbiAgLy8g4oaTINC30LDQutGA0YvRgtC40LUg0YfQtdGA0LXQtyBlc2NcblxuICBfaGFuZGxlRXNjQ2xvc2UoZXZ0KSB7XG4gICAgaWYgKGV2dC5rZXkgPT09IFwiRXNjYXBlXCIpIHtcbiAgICAgIHRoaXMuY2xvc2VQb3B1cCgpO1xuICAgIH1cbiAgfVxuXG4gIC8vIOKGkyDQt9Cw0LrRgNGL0YLQuNC1INC/0YDQuCDRidC10LvRh9C60LUg0L3QsCDQutGA0LXRgdGC0LjQuiDQuNC70Lgg0L7QstC10YDQu9C10LlcblxuICBzZXRFdmVudExpc3RlbmVycygpIHtcbiAgICB0aGlzLl9wb3B1cC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIChldnQpID0+IHtcbiAgICAgIGlmIChldnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInBvcHVwX29wZW5lZFwiKSkge1xuICAgICAgICB0aGlzLmNsb3NlUG9wdXAoKTtcbiAgICAgIH1cbiAgICAgIGlmIChldnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInBvcHVwX19jbG9zZS1pY29uXCIpKSB7XG4gICAgICAgIHRoaXMuY2xvc2VQb3B1cCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgUG9wdXAgZnJvbSBcIi4vUG9wdXAuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBXaXRoRm9ybSBleHRlbmRzIFBvcHVwIHtcbiAgY29uc3RydWN0b3IoeyBwb3B1cFNlbGVjdG9yLCBoYW5kbGVTdWJtaXQgfSkge1xuICAgIHN1cGVyKHBvcHVwU2VsZWN0b3IpO1xuICAgIHRoaXMuX2hhbmRsZVN1Ym1pdCA9IGhhbmRsZVN1Ym1pdDtcbiAgICB0aGlzLl9mb3JtID0gdGhpcy5fcG9wdXAucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9fZm9ybVwiKTtcbiAgICAvLyDQtNC+0YHRgtCw0ZHQvCDQstGB0LUg0Y3Qu9C10LzQtdC90YLRiyDQv9C+0LvQtdC5XG4gICAgdGhpcy5faW5wdXRMaXN0ID0gdGhpcy5fcG9wdXAucXVlcnlTZWxlY3RvckFsbChcIi5wb3B1cF9faW5wdXRcIik7XG4gIH1cblxuICBfZ2V0SW5wdXRWYWx1ZXMoKSB7XG4gICAgLy8g0YHQvtC30LTQsNGR0Lwg0L/Rg9GB0YLQvtC5INC+0LHRitC10LrRglxuICAgIHRoaXMuX2Zvcm1WYWx1ZXMgPSB7fTtcblxuICAgIC8vINC00L7QsdCw0LLQu9GP0LXQvCDQsiDRjdGC0L7RgiDQvtCx0YrQtdC60YIg0LfQvdCw0YfQtdC90LjRjyDQstGB0LXRhSDQv9C+0LvQtdC5XG4gICAgdGhpcy5faW5wdXRMaXN0LmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICB0aGlzLl9mb3JtVmFsdWVzW2lucHV0Lm5hbWVdID0gaW5wdXQudmFsdWU7XG4gICAgfSk7XG5cbiAgICAvLyDQstC+0LfQstGA0LDRidCw0LXQvCDQvtCx0YrQtdC60YIg0LfQvdCw0YfQtdC90LjQuVxuICAgIHJldHVybiB0aGlzLl9mb3JtVmFsdWVzO1xuICB9XG5cbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgc3VwZXIuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB0aGlzLl9mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2dCkgPT4ge1xuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIHRoaXMuX2hhbmRsZVN1Ym1pdCh0aGlzLl9nZXRJbnB1dFZhbHVlcygpKTtcbiAgICAgIC8qIHRoaXMuY2xvc2VQb3B1cCgpOyAqL1xuICAgIH0pO1xuICB9XG5cbiAgY2xvc2VQb3B1cCgpIHtcbiAgICBzdXBlci5jbG9zZVBvcHVwKCk7XG4gICAgdGhpcy5fZm9ybS5yZXNldCgpO1xuICB9XG5cbiAgY2hhbmdlU3VibWl0SGFuZGxlcihuZXdTdWJtaXRIYW5kbGVyKSB7XG4gICAgdGhpcy5faGFuZGxlU3VibWl0ID0gbmV3U3VibWl0SGFuZGxlcjtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VjdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHsgcmVuZGVyZXIgfSwgY29udGFpbmVyU2VsZWN0b3IpIHtcbiAgICB0aGlzLl9yZW5kZXJlciA9IHJlbmRlcmVyO1xuICAgIHRoaXMuX2NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGFpbmVyU2VsZWN0b3IpO1xuICB9XG5cbiAgcmVuZGVySXRlbXMoZGF0YSkge1xuICAgIHRoaXMuX2l0ZW1zID0gZGF0YTtcbiAgICB0aGlzLl9pdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICB0aGlzLl9yZW5kZXJlcihpdGVtKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZEl0ZW0oZWxlbWVudCkge1xuICAgIHRoaXMuX2NvbnRhaW5lci5wcmVwZW5kKGVsZW1lbnQpO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VySW5mbyB7XG4gIGNvbnN0cnVjdG9yKHsgdXNlck5hbWUsIHVzZXJEZXNjcmlwdGlvbiB9KSB7XG4gICAgdGhpcy5fcHJvZmlsZU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHVzZXJOYW1lKTtcbiAgICB0aGlzLl9wcm9maWxlSm9iID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih1c2VyRGVzY3JpcHRpb24pO1xuICB9XG5cbiAgZ2V0VXNlckluZm8oKSB7XG4gICAgY29uc3QgZ290dGVuSW5mbyA9IHtcbiAgICAgIHVzZXJOYW1lOiB0aGlzLl9wcm9maWxlTmFtZS50ZXh0Q29udGVudCxcbiAgICAgIHVzZXJEZXNjcmlwdGlvbjogdGhpcy5fcHJvZmlsZUpvYi50ZXh0Q29udGVudCxcbiAgICB9O1xuXG4gICAgcmV0dXJuIGdvdHRlbkluZm87XG4gIH1cblxuICBzZXRVc2VySW5mbyhuYW1lLCBkZXNjcmlwdGlvbikge1xuICAgIHRoaXMuX3Byb2ZpbGVOYW1lLnRleHRDb250ZW50ID0gbmFtZTtcbiAgICB0aGlzLl9wcm9maWxlSm9iLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XG4gIH1cbn1cbiIsImV4cG9ydCBjb25zdCBjb25maWcgPSB7XG4gIGZvcm1TZWxlY3RvcjogJy5wb3B1cF9fZm9ybScsXG4gIGlucHV0U2VsZWN0b3I6ICcucG9wdXBfX2lucHV0JyxcbiAgc3VibWl0QnV0dG9uU2VsZWN0b3I6ICcucG9wdXBfX3N1Ym1pdCcsXG4gIGluYWN0aXZlQnV0dG9uQ2xhc3M6ICdwb3B1cF9fc3VibWl0X2Rpc2FibGVkJyxcbiAgaW5wdXRFcnJvckNsYXNzOiAncG9wdXBfX2lucHV0X3R5cGVfZXJyb3InLFxuICBlcnJvckNsYXNzOiAncG9wdXBfX2lucHV0LWVycm9yX2FjdGl2ZSd9OyIsImV4cG9ydCBjb25zdCBpbml0aWFsQ2FyZHMgPSBbXG4gIHtcbiAgICB0aXRsZTogJ9Cd0LDRhtC40L7QvdCw0LvRjNC90YvQuSDQn9Cw0YDQuiDQkdGN0LTQu9GN0L3QtNGBJyxcbiAgICBwaWN0dXJlOiAnaHR0cHM6Ly9pLmliYi5jby9KUUdaNTA0L0JhZGxhbmRzLU5hdGlvbmFsLVBhcmstU291dGgtRGFrb3RhLVVTQS5qcGcnXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ9CT0L7RgNGLINCR0LvRgyDQoNC40LTQticsXG4gICAgcGljdHVyZTogJ2h0dHBzOi8vaS5pYmIuY28vNDg5bVRReC9CbHVlLVJpZGdlLU1vdW50YWlucy5qcGcnXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ9CZ0LXQu9C70L7Rg9GB0YLQvtGD0L0nLFxuICAgIHBpY3R1cmU6ICdodHRwczovL2kuaWJiLmNvLzZCNkpQRksvWWVsbG93c3RvbmUuanBnJ1xuICB9LFxuICB7XG4gICAgdGl0bGU6ICfQotGA0L7Qv9CwINCU0Y/QtNC4INCi0L7QvNCwJyxcbiAgICBwaWN0dXJlOiAnaHR0cHM6Ly9pLmliYi5jby8wcWdEYk5WL1VuY2xlLVRvbXMtVHJhaWwuanBnJ1xuICB9LFxuICB7XG4gICAgdGl0bGU6ICfQktC+0LTQvtC/0LDQtCDQnNCw0LvRgtC90L7QvNCwJyxcbiAgICBwaWN0dXJlOiAnaHR0cHM6Ly9pLmliYi5jby9KdjlqTXBXL011bHRub21haC1GYWxscy5qcGcnXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ9Ce0YHRgtGA0L7QsiDQntCw0YXRgycsXG4gICAgcGljdHVyZTogJ2h0dHBzOi8vaS5pYmIuY28vVGtQcXlaSC9PYWh1LmpwZydcbiAgfVxuXTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vaW5kZXguY3NzXCI7XG5cbi8vIF9pZDogJzgwZjFlZjQ4MmI4NDg4NmYzZDUwMTc2NydcblxuY29uc3QgYnV0dG9uRWRpdFByb2ZpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2VkaXQtYnV0dG9uXCIpO1xuY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9faW5wdXRfbGluZV9uYW1lXCIpO1xuY29uc3Qgam9iSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19pbnB1dF9saW5lX2Rlc2NyaXB0aW9uXCIpO1xuY29uc3QgcG9wdXBFZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9lZGl0XCIpO1xuY29uc3QgcG9wdXBBZGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX2FkZFwiKTtcbmNvbnN0IHBvcHVwQ29uZmlybURlbGV0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9tYWtlLXN1cmUnKTtcbmNvbnN0IGJ1dHRvbkFkZENhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2FkZC1idXR0b25cIik7XG5cbmltcG9ydCB7IENhcmQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJkLmpzXCI7XG5pbXBvcnQgU2VjdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWN0aW9uLmpzXCI7XG5pbXBvcnQgeyBGb3JtVmFsaWRhdG9yIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9ybVZhbGlkYXRvci5qc1wiO1xuaW1wb3J0IFBpY3R1cmVQb3B1cCBmcm9tIFwiLi4vY29tcG9uZW50cy9QaWN0dXJlUG9wdXAuanNcIjtcbmltcG9ydCBQb3B1cFdpdGhGb3JtIGZyb20gXCIuLi9jb21wb25lbnRzL1BvcHVwV2l0aEZvcm0uanNcIjtcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwiLi4vY29tcG9uZW50cy9Vc2VySW5mby5qc1wiO1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSBcIi4uL3V0aWxzL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgaW5pdGlhbENhcmRzIH0gZnJvbSBcIi4uL3V0aWxzL2luaXRpYWxDYXJkc1wiO1xuaW1wb3J0IEFwaSBmcm9tIFwiLi4vY29tcG9uZW50cy9BcGlcIjtcblxuXG4vLyDihpMgINC60L7QvdGE0LjQsyBBUElcblxuY29uc3QgYXBpQ29uZmlnID0ge1xuICB1cmw6ICdodHRwczovL21lc3RvLm5vbW9yZXBhcnRpZXMuY28vdjEvY29ob3J0LTU0LycsXG4gIGhlYWRlcnM6IHtcbiAgICBhdXRob3JpemF0aW9uOiAnZTAwNWEyMDQtMTM3MC00NmUxLTkzYzctZDdkMWExNjJhYzIxJyxcbiAgICBcIkNvbnRlbnQtdHlwZVwiOiAnYXBwbGljYXRpb24vanNvbidcbiAgfSBcbn1cblxuY29uc3QgYXBpTmV3ID0gbmV3IEFwaShhcGlDb25maWcpO1xuXG5jb25zdCBwb3B1cEVkaXRWYWxpZGF0aW9uID0gbmV3IEZvcm1WYWxpZGF0b3IoY29uZmlnLCBwb3B1cEVkaXQpO1xuY29uc3QgcG9wdXBBZGRWYWxpZGF0aW9uID0gbmV3IEZvcm1WYWxpZGF0b3IoY29uZmlnLCBwb3B1cEFkZCk7XG5cbnBvcHVwRWRpdFZhbGlkYXRpb24uZW5hYmxlVmFsaWRhdGlvbigpO1xuXG4vLyDihpMg0L3QvtCy0LDRjyDRhNC40LPRg9C70LjQvdCwINC/0YDQviDRjtC30LXRgNCwXG5cbmxldCB1c2VySWQgLy8g0L/QvtC70YPRh9Cw0LXQvCDQvdC40LbQtSDihpPihpPihpNcblxuYXBpTmV3LmdldFByb2ZpbGVJbmZvKClcbi50aGVuKChwcm9maWxlVXNlckluZm8pID0+IHtcbiAgdXNlckluZm8uc2V0VXNlckluZm8ocHJvZmlsZVVzZXJJbmZvLm5hbWUsIHByb2ZpbGVVc2VySW5mby5hYm91dClcbiAgdXNlcklkID0gcHJvZmlsZVVzZXJJbmZvLl9pZDsgLy8g0Y8g0YDQvtC00LjQu9GB0Y9cbn0pLmNhdGNoKChlcnJvcikgPT4ge1xuICBjb25zb2xlLmxvZyhlcnJvcilcbn0pXG5cbmNvbnN0IHVzZXJJbmZvID0gbmV3IFVzZXJJbmZvKHtcbiAgdXNlck5hbWU6IFwiLnByb2ZpbGVfX25hbWVcIixcbiAgdXNlckRlc2NyaXB0aW9uOiBcIi5wcm9maWxlX19kZXNjcmlwdGlvblwiLFxufSk7XG5cbi8vIOKGkyDQvdC+0LLQsNGPINGE0L7RgNC80LAgZWRpdFxuXG5jb25zdCBlZGl0Rm9ybSA9IG5ldyBQb3B1cFdpdGhGb3JtKHtcbiAgcG9wdXBTZWxlY3RvcjogXCIucG9wdXBfZWRpdFwiLFxuICBoYW5kbGVTdWJtaXQ6IChkYXRhKSA9PiB7XG4gICAgYXBpTmV3LmVkaXRQcm9maWxlKGRhdGEucHJvZmlsZSwgZGF0YS5kZXNjcmlwdGlvbikgLy8gZGF0YSDigJMg0YHQvtC00LXRgNC20LjQvNC+0LUg0LjQvdC/0YPRgtC+0LIsIHByb2ZpbGUvZGVzY3JpcHRpb24g4oCTIG5hbWUn0Ysg0LjQvdC/0YPRgtC+0LIg0LjQtyDQuNC90LTQtdC60YEu0YXRgtC80LtcbiAgICAudGhlbigoc3VibWl0dGVkSW5mbykgPT4ge1xuICAgICAgdXNlckluZm8uc2V0VXNlckluZm8oc3VibWl0dGVkSW5mby5uYW1lLCBzdWJtaXR0ZWRJbmZvLmFib3V0KTtcbiAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9KVxuICAgIGVkaXRGb3JtLmNsb3NlUG9wdXAoKTtcbiAgfSxcbn0pO1xuXG5lZGl0Rm9ybS5zZXRFdmVudExpc3RlbmVycygpO1xuXG4vLyDihpMg0LDQutGC0LjQstCw0YbQuNGPINC60L3QvtC/0LrQuCBlZGl0XG5cbmJ1dHRvbkVkaXRQcm9maWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNvbnN0IGdvdHRlbkluZm8gPSB1c2VySW5mby5nZXRVc2VySW5mbygpO1xuICBuYW1lSW5wdXQudmFsdWUgPSBnb3R0ZW5JbmZvLnVzZXJOYW1lO1xuICBqb2JJbnB1dC52YWx1ZSA9IGdvdHRlbkluZm8udXNlckRlc2NyaXB0aW9uO1xuICBlZGl0Rm9ybS5vcGVuUG9wdXAoKTtcbn0pO1xuXG4vLyDihpMg0L3QvtCy0LDRjyDRhNC40LPRg9C70LjQvdCwINC/0YDQviDQutCw0YDRgtC40L3QutC4XG5cbmNvbnN0IHBpY3R1cmVQb3B1cCA9IG5ldyBQaWN0dXJlUG9wdXAoXCIucG9wdXBfcGljXCIpO1xucGljdHVyZVBvcHVwLnNldEV2ZW50TGlzdGVuZXJzKCk7XG5cbi8vIOKGkyDQuCDRgtCw0Log0L/QvtC90Y/RgtC90L5cblxuZnVuY3Rpb24gaGFuZGxlQ2FyZENsaWNrKHRpdGxlLCBsaW5rKSB7XG4gIHBpY3R1cmVQb3B1cC5vcGVuUG9wdXAodGl0bGUsIGxpbmspO1xufVxuXG5cbi8vIOKGkyDQvdC+0LLQsNGPINGE0L7RgNC80LAg0LTQu9GPINC/0L7QtNGC0LLQtdGA0LbQtNC10L3QuNGPINGD0LTQsNC70LXQvdC40Y8g0LrQsNGA0YLQvtGH0LrQuCBcblxuY29uc3QgY29uZmlybURlbGV0ZUZvcm0gPSBuZXcgUG9wdXBXaXRoRm9ybSh7XG4gIHBvcHVwU2VsZWN0b3I6ICcucG9wdXBfbWFrZS1zdXJlJ1xufSlcblxuY29uZmlybURlbGV0ZUZvcm0uc2V0RXZlbnRMaXN0ZW5lcnMoKTtcblxuLy8g4oaTICDRhNGD0L3QutGG0LjRjyDQv9C+0LTRgtCy0LXRgNC20LTQtdC90LjRjyDRg9C00LDQu9C10L3QuNGPXG5cbi8qIGZ1bmN0aW9uIGhhbmRsZUJpbkNsaWNrKGlkKSB7XG4gIGNvbmZpcm1EZWxldGVGb3JtLm9wZW5Qb3B1cCgpO1xuICBjb25maXJtRGVsZXRlRm9ybS5jaGFuZ2VTdWJtaXRIYW5kbGVyKCgpID0+IHtcbiAgICBhcGlOZXcuZGVsZXRlQ2FyZChpZClcbiAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICBhZGRDYXJkLmhhbmRsZURlbGV0ZSgpIC8vINCi0KPQoiDQndCVINCS0KvQl9Cr0JLQkNCV0KLQodCvID0oXG4gICAgICBjb25maXJtRGVsZXRlRm9ybS5jbG9zZVBvcHVwKClcbiAgICB9KSBcbiAgICB9KTtcbn0gKi9cblxuLy8g4oaTICDRhNGD0L3QutGG0LjRjyDQu9Cw0LnQutCwXG4vKlxuZnVuY3Rpb24gaGFuZGxlTGlrZUNsaWNrKGlkKSB7XG4gIGFwaU5ldy5wdXRMaWtlKGlkKVxuICAudGhlbigoKSA9PiB7fSlcbiAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgfSlcbn0qL1xuXG4vLyDihpMgINC90L7QstGL0Lkg0Y3QutC30LXQvNC/0LvRj9GAINC60LDRgNGC0L7Rh9C60LhcblxuZnVuY3Rpb24gYWRkQ2FyZChkYXRhKSB7IFxuICBjb25zdCBjYXJkSXRlbSA9IG5ldyBDYXJkKHtcbiAgICB0aXRsZTogZGF0YS5uYW1lLFxuICAgIGxpbms6IGRhdGEubGluayxcbiAgICBsaWtlczogZGF0YS5saWtlcyxcbiAgICBpZDogZGF0YS5faWQsXG4gICAgdXNlcklkOiB1c2VySWQsXG4gICAgb3duZXJJZDogZGF0YS5vd25lci5faWQsXG4gIH0sXG4gIFwiLmNhcmRzX19pdGVtLXRlbXBsYXRlXCIsXG4gIGhhbmRsZUNhcmRDbGljayxcbiAgKGlkKSA9PiB7XG4gICAgY29uZmlybURlbGV0ZUZvcm0ub3BlblBvcHVwKCk7XG4gICAgY29uZmlybURlbGV0ZUZvcm0uY2hhbmdlU3VibWl0SGFuZGxlcigoKSA9PiB7XG4gICAgICBhcGlOZXcuZGVsZXRlQ2FyZChpZClcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgY2FyZEl0ZW0uaGFuZGxlRGVsZXRlKClcbiAgICAgICAgY29uZmlybURlbGV0ZUZvcm0uY2xvc2VQb3B1cCgpXG4gICAgICB9KSBcbiAgICAgIH0pO1xuICB9LFxuICAoaWQpID0+IHtcbiAgICBpZiAoY2FyZEl0ZW0uaXNMaWtlZCgpKSB7XG4gICAgICBhcGlOZXcuZGVsZXRlTGlrZShpZClcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgY2FyZEl0ZW0uY291bnRMaWtlcyhyZXMubGlrZXMpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgIGFwaU5ldy5wdXRMaWtlKGlkKVxuICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgIGNhcmRJdGVtLmNvdW50TGlrZXMocmVzLmxpa2VzKTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgIH0pXG4gIH19XG4pO1xuXG5yZXR1cm4gY2FyZEl0ZW0uZ2VuZXJhdGVDYXJkKCk7XG59XG5cbi8vIOKGkyAg0LHQu9C+0Log0YEg0LrQsNGA0YLQuNC90LrQsNC80LhcblxuY29uc3QgY2FyZHNMaXN0ID0gbmV3IFNlY3Rpb24oXG4gIHtcbiAgICByZW5kZXJlcjogKGRhdGEpID0+IHtcbiAgICAgIGNhcmRzTGlzdC5hZGRJdGVtKGFkZENhcmQoZGF0YSkpO1xuICAgIH0sXG4gIH0sXG4gIFwiLmNhcmRzXCJcbik7XG5cbi8vIOKGkyAg0L/RgNC40LrQu9GO0YfQtdC90LjRjyDRgSDQvtGC0YDQuNGB0L7QstC60L7QuSDQutCw0YDRgtC+0YfQtdC6INGH0LXRgNC10LcgQVBJIFxuLy8g4oaTICDQvtGC0YDQuNGB0L7QstC60LBcblxuYXBpTmV3LmdldENhcmRzKCkgLy8gcmVzdWx0IC0g0LPQvtGC0L7QstGL0LUg0LTQsNC90L3Ri9C1XG4gIC50aGVuKChjYXJkcykgPT4ge1xuICAgIGNhcmRzTGlzdC5yZW5kZXJJdGVtcyhjYXJkcyk7XG59KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgY29uc29sZS5sb2coZXJyb3IpO1xufSk7XG5cblxuLy8g4oaTICDQvdC+0LLQsNGPINGE0L7RgNC80LAgYWRkXG5cbmNvbnN0IGFkZEZvcm0gPSBuZXcgUG9wdXBXaXRoRm9ybSh7XG4gIHBvcHVwU2VsZWN0b3I6IFwiLnBvcHVwX2FkZFwiLFxuICBoYW5kbGVTdWJtaXQ6IChkYXRhKSA9PiB7XG4gICAgY29uc29sZS5sb2coZGF0YSlcbiAgICBhcGlOZXcuYWRkTmV3Q2FyZChkYXRhLnRpdGxlLCBkYXRhLnBpY3R1cmUpXG4gICAgLnRoZW4oKG5ld0NhcmQpID0+IHtcbiAgICAgIGNhcmRzTGlzdC5hZGRJdGVtKGFkZENhcmQobmV3Q2FyZCkpXG4gICAgfSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfSlcbiAgICBhZGRGb3JtLmNsb3NlUG9wdXAoKTtcbiAgfSxcbn0pO1xuXG5hZGRGb3JtLnNldEV2ZW50TGlzdGVuZXJzKCk7XG5cbi8vIOKGkyDQsNC60YLQuNCy0LDRhtC40Y8g0LrQvdC+0L/QutC4IGFkZFxuXG5idXR0b25BZGRDYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHBvcHVwQWRkVmFsaWRhdGlvbi5yZXNldFZhbGlkYXRpb24oKTtcbiAgYWRkRm9ybS5vcGVuUG9wdXAoKTtcbn0pO1xuXG5wb3B1cEFkZFZhbGlkYXRpb24uZW5hYmxlVmFsaWRhdGlvbigpO1xuIl0sIm5hbWVzIjpbIkFwaSIsInVybCIsImhlYWRlcnMiLCJfdXJsIiwiX2hlYWRlcnMiLCJyZXNwb25zZSIsIm9rIiwianNvbiIsIlByb21pc2UiLCJyZWplY3QiLCJzdGF0dXMiLCJzdGF0dXNUZXh0IiwiZmV0Y2giLCJ0aGVuIiwiY2hlY2tSZXNwb25zZSIsImlkIiwibWV0aG9kIiwibmFtZSIsImxpbmsiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImFib3V0IiwiQ2FyZCIsImRhdGEiLCJ0ZW1wbGF0ZVNlbGVjdG9yIiwiaGFuZGxlQ2FyZENsaWNrIiwiaGFuZGxlQmluQ2xpY2siLCJoYW5kbGVMaWtlQ2xpY2siLCJfdGl0bGUiLCJ0aXRsZSIsIl9saW5rIiwiX2xpa2VzIiwibGlrZXMiLCJfaWQiLCJfdXNlcklkIiwidXNlcklkIiwiX293bmVySWQiLCJvd25lcklkIiwiX3RlbXBsYXRlU2VsZWN0b3IiLCJfaGFuZGxlQ2FyZENsaWNrIiwiX2hhbmRsZUJpbkNsaWNrIiwiX2hhbmRsZUxpa2VDbGljayIsImNhcmRFbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY29udGVudCIsImNsb25lTm9kZSIsIl9lbGVtZW50IiwicmVtb3ZlIiwiX2xpa2VCdXR0b24iLCJjbGFzc0xpc3QiLCJhZGQiLCJfdXNlckhhc0xpa2VkIiwiZmluZCIsInVzZXIiLCJuZXdMaWtlcyIsIl9saWtlc051bWJlciIsInRleHRDb250ZW50IiwibGVuZ3RoIiwiaXNMaWtlZCIsIl9wdXRMaWtlIiwiX29taXRMaWtlIiwiX2RlbGV0ZUJ1dHRvbiIsInN0eWxlIiwiZGlzcGxheSIsImFkZEV2ZW50TGlzdGVuZXIiLCJfaGlkZUJpbiIsIl9jYXJkSW1nIiwiX2dldFRlbXBsYXRlIiwiX2NhcmRUaXRsZSIsIl9zZXRFdmVudExpc3RlbmVycyIsInNyYyIsImFsdCIsImNvdW50TGlrZXMiLCJGb3JtVmFsaWRhdG9yIiwic2V0dGluZ3MiLCJmb3JtRWxlbWVudCIsImlucHV0RWxlbWVudCIsImVycm9yTWVzc2FnZSIsIl9lcnJvckVsZW1lbnQiLCJfZm9ybUVsZW1lbnQiLCJfaW5wdXRFcnJvckNsYXNzIiwiX2Vycm9yQ2xhc3MiLCJfaGFzSW52YWxpZElucHV0IiwiX2lucHV0TGlzdCIsIl9idXR0b25FbGVtZW50IiwiX2luYWN0aXZlQnV0dG9uQ2xhc3MiLCJzZXRBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJzb21lIiwiaXRlbSIsInZhbGlkaXR5IiwidmFsaWQiLCJfc2hvd0lucHV0RXJyb3IiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsIl9oaWRlSW5wdXRFcnJvciIsInRvZ2dsZUJ1dHRvblN0YXRlIiwiZm9yRWFjaCIsIl9jaGVja0lucHV0VmFsaWRpdHkiLCJfc2V0VmFsaWRhdGlvbkV2ZW50TGlzdGVuZXJzIiwiX2Zvcm1TZWxlY3RvciIsImZvcm1TZWxlY3RvciIsIl9pbnB1dFNlbGVjdG9yIiwiaW5wdXRTZWxlY3RvciIsIl9zdWJtaXRCdXR0b25TZWxlY3RvciIsInN1Ym1pdEJ1dHRvblNlbGVjdG9yIiwiaW5hY3RpdmVCdXR0b25DbGFzcyIsImlucHV0RXJyb3JDbGFzcyIsImVycm9yQ2xhc3MiLCJBcnJheSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwiUG9wdXAiLCJQaWN0dXJlUG9wdXAiLCJwb3B1cFNlbGVjdG9yIiwiX3BpY1BvcHVwSW1hZ2UiLCJfcG9wdXAiLCJfcGljUG9wdXBOYW1lIiwiX2hhbmRsZUVzY0Nsb3NlUmVmIiwiX2hhbmRsZUVzY0Nsb3NlIiwiYmluZCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJldnQiLCJrZXkiLCJjbG9zZVBvcHVwIiwidGFyZ2V0IiwiY29udGFpbnMiLCJQb3B1cFdpdGhGb3JtIiwiaGFuZGxlU3VibWl0IiwiX2hhbmRsZVN1Ym1pdCIsIl9mb3JtIiwiX2Zvcm1WYWx1ZXMiLCJpbnB1dCIsInZhbHVlIiwicHJldmVudERlZmF1bHQiLCJfZ2V0SW5wdXRWYWx1ZXMiLCJyZXNldCIsIm5ld1N1Ym1pdEhhbmRsZXIiLCJTZWN0aW9uIiwiY29udGFpbmVyU2VsZWN0b3IiLCJyZW5kZXJlciIsIl9yZW5kZXJlciIsIl9jb250YWluZXIiLCJfaXRlbXMiLCJlbGVtZW50IiwicHJlcGVuZCIsIlVzZXJJbmZvIiwidXNlck5hbWUiLCJ1c2VyRGVzY3JpcHRpb24iLCJfcHJvZmlsZU5hbWUiLCJfcHJvZmlsZUpvYiIsImdvdHRlbkluZm8iLCJkZXNjcmlwdGlvbiIsImNvbmZpZyIsImluaXRpYWxDYXJkcyIsInBpY3R1cmUiLCJidXR0b25FZGl0UHJvZmlsZSIsIm5hbWVJbnB1dCIsImpvYklucHV0IiwicG9wdXBFZGl0IiwicG9wdXBBZGQiLCJwb3B1cENvbmZpcm1EZWxldGUiLCJidXR0b25BZGRDYXJkIiwiYXBpQ29uZmlnIiwiYXV0aG9yaXphdGlvbiIsImFwaU5ldyIsInBvcHVwRWRpdFZhbGlkYXRpb24iLCJwb3B1cEFkZFZhbGlkYXRpb24iLCJlbmFibGVWYWxpZGF0aW9uIiwiZ2V0UHJvZmlsZUluZm8iLCJwcm9maWxlVXNlckluZm8iLCJ1c2VySW5mbyIsInNldFVzZXJJbmZvIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZWRpdEZvcm0iLCJlZGl0UHJvZmlsZSIsInByb2ZpbGUiLCJzdWJtaXR0ZWRJbmZvIiwic2V0RXZlbnRMaXN0ZW5lcnMiLCJnZXRVc2VySW5mbyIsIm9wZW5Qb3B1cCIsInBpY3R1cmVQb3B1cCIsImNvbmZpcm1EZWxldGVGb3JtIiwiYWRkQ2FyZCIsImNhcmRJdGVtIiwib3duZXIiLCJjaGFuZ2VTdWJtaXRIYW5kbGVyIiwiZGVsZXRlQ2FyZCIsInJlcyIsImhhbmRsZURlbGV0ZSIsImRlbGV0ZUxpa2UiLCJwdXRMaWtlIiwiZ2VuZXJhdGVDYXJkIiwiY2FyZHNMaXN0IiwiYWRkSXRlbSIsImdldENhcmRzIiwiY2FyZHMiLCJyZW5kZXJJdGVtcyIsImFkZEZvcm0iLCJhZGROZXdDYXJkIiwibmV3Q2FyZCIsInJlc2V0VmFsaWRhdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=