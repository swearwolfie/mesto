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
  }, {
    key: "changeAvatar",
    value: function changeAvatar(avatar) {
      return fetch("".concat(this._url, 'users/me/avatar'), {
        method: "PATCH",
        headers: this._headers,
        body: JSON.stringify({
          avatar: avatar
        })
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
    _this._popupButton = _this._popup.querySelector('.popup__submit');
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
  }, {
    key: "renderLoading",
    value: function renderLoading(isLoading) {
      if (isLoading) {
        this._popupButton.textContent = 'Сохранение...';
      } else {
        this._popupButton.textContent = this._popupButtonTextContent;
      }
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
      userDescription = _ref.userDescription,
      userAvatar = _ref.userAvatar;
    _classCallCheck(this, UserInfo);
    this._profileName = document.querySelector(userName);
    this._profileJob = document.querySelector(userDescription);
    this._profileAvatar = document.querySelector(userAvatar);
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
  }, {
    key: "setUserAvatar",
    value: function setUserAvatar(avatar) {
      this._profileAvatar.src = avatar; // ссылка
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
/* harmony import */ var _components_Api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Api */ "./src/components/Api.js");


// _id: '80f1ef482b84886f3d501767'

var buttonEditProfile = document.querySelector(".profile__edit-button");
var nameInput = document.querySelector(".popup__input_line_name");
var jobInput = document.querySelector(".popup__input_line_description");
var popupEdit = document.querySelector(".popup_edit");
var popupAdd = document.querySelector(".popup_add");
var popupAvatar = document.querySelector(".popup_avatar");
var buttonAddCard = document.querySelector(".profile__add-button");
var buttonChangeAvatar = document.querySelector(".profile__photo-edit-button");









// ↓  конфиг API

var apiConfig = {
  url: 'https://mesto.nomoreparties.co/v1/cohort-54/',
  headers: {
    authorization: 'e005a204-1370-46e1-93c7-d7d1a162ac21',
    "Content-type": 'application/json'
  }
};
var apiNew = new _components_Api__WEBPACK_IMPORTED_MODULE_8__["default"](apiConfig);
var popupEditValidation = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_3__.FormValidator(_utils_constants__WEBPACK_IMPORTED_MODULE_7__.config, popupEdit);
var popupAddValidation = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_3__.FormValidator(_utils_constants__WEBPACK_IMPORTED_MODULE_7__.config, popupAdd);
var popupChangeAvatarValidation = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_3__.FormValidator(_utils_constants__WEBPACK_IMPORTED_MODULE_7__.config, popupAvatar);
popupEditValidation.enableValidation();
popupChangeAvatarValidation.enableValidation();

// ↓ новая фигулина про юзера

var userId; // получаем ниже ↓↓↓

apiNew.getProfileInfo().then(function (profileUserInfo) {
  userInfo.setUserInfo(profileUserInfo.name, profileUserInfo.about);
  userInfo.setUserAvatar(profileUserInfo.avatar);
  userId = profileUserInfo._id; // я родился
})["catch"](function (error) {
  console.log(error);
});
var userInfo = new _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_6__["default"]({
  userName: ".profile__name",
  userDescription: ".profile__description",
  userAvatar: ".profile__photo"
});

// ↓ новая форма edit

var editForm = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_5__["default"]({
  popupSelector: ".popup_edit",
  handleSubmit: function handleSubmit(data) {
    editForm.renderLoading(true);
    apiNew.editProfile(data.profile, data.description) // data – содержимое инпутов, profile/description – name'ы инпутов из индекс.хтмл
    .then(function (submittedInfo) {
      userInfo.setUserInfo(submittedInfo.name, submittedInfo.about);
    })["catch"](function (error) {
      console.log(error);
    })["finally"](function () {
      editForm.renderLoading(false);
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

// ↓ новая форма редактирования аватара

var avatarPopup = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_5__["default"]({
  popupSelector: '.popup_avatar',
  handleSubmit: function handleSubmit(data) {
    avatarPopup.renderLoading(true);
    apiNew.changeAvatar(data.avatar).then(function (res) {
      userInfo.setUserAvatar(res.avatar);
    })["catch"](function (error) {
      console.log(error);
    })["finally"](function () {
      avatarPopup.renderLoading(false);
    });
    avatarPopup.closePopup();
  }
});
avatarPopup.setEventListeners();

// ↓ активация кнопки editAvatar

buttonChangeAvatar.addEventListener("click", function () {
  avatarPopup.openPopup();
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
    addForm.renderLoading(true);
    apiNew.addNewCard(data.title, data.picture).then(function (newCard) {
      cardsList.addItem(addCard(newCard));
    })["catch"](function (error) {
      console.log(error);
    })["finally"](function () {
      addForm.renderLoading(false);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBSSxDQUFDTSxLQUFLLEVBQUVOLElBQUksQ0FBQzRMLE9BQU8sQ0FBQyxDQUMxQ3hNLElBQUksQ0FBQyxVQUFDeU0sT0FBTyxFQUFLO01BQ2pCUixTQUFTLENBQUNDLE9BQU8sQ0FBQ1YsT0FBTyxDQUFDaUIsT0FBTyxDQUFDLENBQUM7SUFDckMsQ0FBQyxDQUFDLFNBQ0ksQ0FBQyxVQUFDakMsS0FBSyxFQUFLO01BQ2hCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsS0FBSyxDQUFDO0lBQ3BCLENBQUMsQ0FBQyxXQUNNLENBQUMsWUFBTTtNQUNiOEIsT0FBTyxDQUFDMUIsYUFBYSxDQUFDLEtBQUssQ0FBQztJQUM5QixDQUFDLENBQUM7SUFDRjBCLE9BQU8sQ0FBQ3JGLFVBQVUsRUFBRTtFQUN0QjtBQUNGLENBQUMsQ0FBQztBQUVGcUYsT0FBTyxDQUFDdEIsaUJBQWlCLEVBQUU7O0FBRTNCOztBQUVBdEIsYUFBYSxDQUFDcEcsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07RUFDNUMwRyxrQkFBa0IsQ0FBQzBDLGVBQWUsRUFBRTtFQUNwQ0osT0FBTyxDQUFDcEIsU0FBUyxFQUFFO0FBQ3JCLENBQUMsQ0FBQztBQUVGbEIsa0JBQWtCLENBQUNFLGdCQUFnQixFQUFFLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BcGkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1BpY3R1cmVQb3B1cC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qb3B1cC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qb3B1cFdpdGhGb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVXNlckluZm8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXguY3NzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBBcGkge1xuICBjb25zdHJ1Y3Rvcih7IHVybCwgaGVhZGVycyB9KSB7XG4gICAgdGhpcy5fdXJsID0gdXJsOyAvLyBodHRwczovL21lc3RvLm5vbW9yZXBhcnRpZXMuY28vdjEvY29ob3J0LTU0L1xuICAgIHRoaXMuX2hlYWRlcnMgPSBoZWFkZXJzO1xuICB9XG5cbiAgY2hlY2tSZXNwb25zZShyZXNwb25zZSkgeyAvLyDQvtGC0LTQtdC70YzQvdCw0Y8g0YTRg9C90LrRhtC40Y8g0LTQu9GPINC+0LHRidC10L3QuNGPINGBINGB0LXRgNCy0LXRgNC+0LxcbiAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7IC8vIFByb21pc2UucmVzb2x2ZVxuICAgIH0gZWxzZSB7XG4gICAgICBQcm9taXNlLnJlamVjdChg0J7RiNC40LHQutCwOiAke3Jlc3BvbnNlLnN0YXR1c30gJHtyZXNwb25zZS5zdGF0dXNUZXh0fWApO1xuICAgIH1cbiAgfSBcblxuICBnZXRDYXJkcygpIHtcbiAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5fdXJsfSR7J2NhcmRzJ31gLCB7XG4gICAgICBoZWFkZXJzOiB0aGlzLl9oZWFkZXJzXG4gICAgfSkudGhlbih0aGlzLmNoZWNrUmVzcG9uc2UpXG4gIH1cblxuICBkZWxldGVDYXJkKGlkKSB7XG4gICAgcmV0dXJuIGZldGNoKGAke3RoaXMuX3VybH0keydjYXJkcy8nfSR7aWR9YCwge1xuICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxuICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVyc1xuICAgIH0pLnRoZW4odGhpcy5jaGVja1Jlc3BvbnNlKVxuICB9XG4gIFxuICBhZGROZXdDYXJkKG5hbWUsIGxpbmspIHtcbiAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5fdXJsfSR7J2NhcmRzJ31gLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVycyxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgXG4gICAgICAgIG5hbWUsIFxuICAgICAgICBsaW5rXG4gICAgICB9KSxcbiAgICB9KS50aGVuKHRoaXMuY2hlY2tSZXNwb25zZSlcbiAgfVxuXG4gIGdldFByb2ZpbGVJbmZvKCkge1xuICAgIHJldHVybiBmZXRjaChgJHt0aGlzLl91cmx9JHsndXNlcnMvbWUnfWAsIHtcbiAgICAgIGhlYWRlcnM6IHRoaXMuX2hlYWRlcnNcbiAgICB9KS50aGVuKHRoaXMuY2hlY2tSZXNwb25zZSlcbiAgfVxuXG4gIGVkaXRQcm9maWxlKG5hbWUsIGFib3V0KSB7XG4gICAgcmV0dXJuIGZldGNoKGAke3RoaXMuX3VybH0keyd1c2Vycy9tZSd9YCwge1xuICAgICAgbWV0aG9kOiBcIlBBVENIXCIsXG4gICAgICBoZWFkZXJzOiB0aGlzLl9oZWFkZXJzLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBuYW1lLFxuICAgICAgICBhYm91dFxuICAgICAgfSlcbiAgICB9KS50aGVuKHRoaXMuY2hlY2tSZXNwb25zZSlcbiAgfVxuXG4gIGRlbGV0ZUxpa2UoaWQpIHtcbiAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5fdXJsfSR7J2NhcmRzLyd9JHtpZH0keycvbGlrZXMnfWAsIHtcbiAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcbiAgICAgIGhlYWRlcnM6IHRoaXMuX2hlYWRlcnNcbiAgICB9KS50aGVuKHRoaXMuY2hlY2tSZXNwb25zZSlcbiAgfVxuXG4gIHB1dExpa2UoaWQpIHtcbiAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5fdXJsfSR7J2NhcmRzLyd9JHtpZH0keycvbGlrZXMnfWAsIHtcbiAgICAgIG1ldGhvZDogXCJQVVRcIixcbiAgICAgIGhlYWRlcnM6IHRoaXMuX2hlYWRlcnNcbiAgICB9KS50aGVuKHRoaXMuY2hlY2tSZXNwb25zZSlcbiAgfVxuXG4gIGNoYW5nZUF2YXRhcihhdmF0YXIpIHtcbiAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5fdXJsfSR7J3VzZXJzL21lL2F2YXRhcid9YCwge1xuICAgICAgbWV0aG9kOiBcIlBBVENIXCIsXG4gICAgICBoZWFkZXJzOiB0aGlzLl9oZWFkZXJzLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBhdmF0YXJcbiAgICAgIH0pXG4gICAgfSkudGhlbih0aGlzLmNoZWNrUmVzcG9uc2UpXG4gIH1cbn0iLCJleHBvcnQgY2xhc3MgQ2FyZCB7XG4gIGNvbnN0cnVjdG9yKGRhdGEsIHRlbXBsYXRlU2VsZWN0b3IsIGhhbmRsZUNhcmRDbGljaywgaGFuZGxlQmluQ2xpY2ssIGhhbmRsZUxpa2VDbGljaykge1xuICAgIHRoaXMuX3RpdGxlID0gZGF0YS50aXRsZTtcbiAgICB0aGlzLl9saW5rID0gZGF0YS5saW5rO1xuICAgIHRoaXMuX2xpa2VzID0gZGF0YS5saWtlcztcbiAgICB0aGlzLl9pZCA9IGRhdGEuaWQ7XG4gICAgdGhpcy5fdXNlcklkID0gZGF0YS51c2VySWQ7XG4gICAgdGhpcy5fb3duZXJJZCA9IGRhdGEub3duZXJJZDtcbiAgICB0aGlzLl90ZW1wbGF0ZVNlbGVjdG9yID0gdGVtcGxhdGVTZWxlY3RvcjtcbiAgICB0aGlzLl9oYW5kbGVDYXJkQ2xpY2sgPSBoYW5kbGVDYXJkQ2xpY2s7XG4gICAgdGhpcy5faGFuZGxlQmluQ2xpY2sgPSBoYW5kbGVCaW5DbGljaztcbiAgICB0aGlzLl9oYW5kbGVMaWtlQ2xpY2sgPSBoYW5kbGVMaWtlQ2xpY2s7XG4gIH1cblxuICBfZ2V0VGVtcGxhdGUoKSB7XG4gICAgY29uc3QgY2FyZEVsZW1lbnQgPSBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IodGhpcy5fdGVtcGxhdGVTZWxlY3RvcilcbiAgICAgIC5jb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZHNfX2l0ZW1cIilcbiAgICAgIC5jbG9uZU5vZGUodHJ1ZSk7XG5cbiAgICByZXR1cm4gY2FyZEVsZW1lbnQ7XG4gIH1cbiAgXG4gIC8vIOKGkyDRg9C00LDQu9C10L3QuNC1INC60LDRgNGC0L7Rh9C10LpcblxuICBoYW5kbGVEZWxldGUoKSB7XG4gICAgdGhpcy5fZWxlbWVudC5yZW1vdmUoKTtcbiAgICB0aGlzLl9lbGVtZW50ID0gbnVsbDtcbiAgfVxuXG4gIC8vIOKGkyDQutC90L7Qv9C60LAg0LvQsNC50LrQsFxuXG4gIF9wdXRMaWtlKCkge1xuICAgIHRoaXMuX2xpa2VCdXR0b24uY2xhc3NMaXN0LmFkZChcImNhcmRzX19saWtlLWJ1dHRvbl9hY3RpdmVcIik7XG4gIH1cblxuICBfb21pdExpa2UoKSB7XG4gICAgdGhpcy5fbGlrZUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiY2FyZHNfX2xpa2UtYnV0dG9uX2FjdGl2ZVwiKTtcbiAgfVxuXG4gIGlzTGlrZWQoKSB7XG4gICAgdGhpcy5fdXNlckhhc0xpa2VkID0gdGhpcy5fbGlrZXMuZmluZCh1c2VyID0+IHVzZXIuX2lkID09PSB0aGlzLl91c2VySWQpIC8vINC/0YDQvtCy0LXRgNGP0LXQvCwg0LXRgdGC0Ywg0LvQuCDQsiDQvNCw0YHRgdC40LLQtSDQu9Cw0LnQutC+0LIg0Y9cbiAgICByZXR1cm4gdGhpcy5fdXNlckhhc0xpa2VkO1xuICB9XG5cbiAgLy8g4oaTINGB0YfQtdGC0YfQuNC6INC70LDQudC60L7QslxuXG4gIGNvdW50TGlrZXMobmV3TGlrZXMpIHtcbiAgICB0aGlzLl9saWtlcyA9IG5ld0xpa2VzO1xuICAgIHRoaXMuX2xpa2VzTnVtYmVyID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZHNfX2xpa2VzLW51bWJlcicpO1xuICAgIHRoaXMuX2xpa2VzTnVtYmVyLnRleHRDb250ZW50ID0gdGhpcy5fbGlrZXMubGVuZ3RoO1xuXG4gICAgaWYgKHRoaXMuaXNMaWtlZCgpKSB7XG4gICAgICB0aGlzLl9wdXRMaWtlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX29taXRMaWtlKCk7XG4gICAgfVxuICB9XG5cbiAgIC8vIOKGkyDRgdC60YDRi9GC0Ywg0LrQvtGA0LfQuNC90YMg0L3QsCDRh9GD0LbQuNGFINC60LDRgNGC0L7Rh9C60LDRhVxuICAgX2hpZGVCaW4oKSB7XG4gICAgaWYgKHRoaXMuX293bmVySWQgIT09IHRoaXMuX3VzZXJJZCkge1xuICAgICAgdGhpcy5fZGVsZXRlQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxuICAgfVxuXG5cbiAgLy8g4oaTINGELdGG0LjRjyDRgdC70YPRiNCw0YLQtdC70LXQuSDQu9Cw0LnQutCwLCDQutC+0YDQt9C40L3RiyDQuCDRhNGD0LvQu9CwXG5cbiAgX3NldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHRoaXMuX2RlbGV0ZUJ1dHRvbiA9IHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkc19fYmluXCIpO1xuICAgIHRoaXMuX2RlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5faGFuZGxlQmluQ2xpY2sodGhpcy5faWQpO1xuICAgIH0pO1xuICAgIHRoaXMuX2hpZGVCaW4oKTtcblxuICAgIHRoaXMuX2xpa2VCdXR0b24gPSB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZHNfX2xpa2UtYnV0dG9uXCIpO1xuICAgIHRoaXMuX2xpa2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHRoaXMuX2hhbmRsZUxpa2VDbGljayh0aGlzLl9pZCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLl9jYXJkSW1nID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRzX19waWNcIik7XG4gICAgdGhpcy5fY2FyZEltZy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5faGFuZGxlQ2FyZENsaWNrKHRoaXMuX3RpdGxlLCB0aGlzLl9saW5rKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIOKGkyDRgdC+0LfQtNCw0L3QuNC1INC60LDRgNGC0L7Rh9C60LhcblxuICBnZW5lcmF0ZUNhcmQoKSB7XG4gICAgdGhpcy5fZWxlbWVudCA9IHRoaXMuX2dldFRlbXBsYXRlKCk7XG4gICAgdGhpcy5fY2FyZFRpdGxlID0gdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRzX19uYW1lXCIpO1xuICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXJzKCk7XG5cbiAgICB0aGlzLl9jYXJkSW1nLnNyYyA9IHRoaXMuX2xpbms7XG4gICAgdGhpcy5fY2FyZEltZy5hbHQgPSB0aGlzLl90aXRsZTtcbiAgICB0aGlzLl9jYXJkVGl0bGUudGV4dENvbnRlbnQgPSB0aGlzLl90aXRsZTtcblxuICAgIHRoaXMuY291bnRMaWtlcyh0aGlzLl9saWtlcyk7XG5cbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudDtcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIEZvcm1WYWxpZGF0b3Ige1xuICBjb25zdHJ1Y3RvcihzZXR0aW5ncywgZm9ybUVsZW1lbnQpIHtcbiAgICB0aGlzLl9mb3JtU2VsZWN0b3IgPSBzZXR0aW5ncy5mb3JtU2VsZWN0b3I7XG4gICAgdGhpcy5faW5wdXRTZWxlY3RvciA9IHNldHRpbmdzLmlucHV0U2VsZWN0b3I7XG4gICAgdGhpcy5fc3VibWl0QnV0dG9uU2VsZWN0b3IgPSBzZXR0aW5ncy5zdWJtaXRCdXR0b25TZWxlY3RvcjtcbiAgICB0aGlzLl9pbmFjdGl2ZUJ1dHRvbkNsYXNzID0gc2V0dGluZ3MuaW5hY3RpdmVCdXR0b25DbGFzcztcbiAgICB0aGlzLl9pbnB1dEVycm9yQ2xhc3MgPSBzZXR0aW5ncy5pbnB1dEVycm9yQ2xhc3M7XG4gICAgdGhpcy5fZXJyb3JDbGFzcyA9IHNldHRpbmdzLmVycm9yQ2xhc3M7XG4gICAgdGhpcy5fZm9ybUVsZW1lbnQgPSBmb3JtRWxlbWVudDtcbiAgICB0aGlzLl9idXR0b25FbGVtZW50ID0gdGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIHRoaXMuX3N1Ym1pdEJ1dHRvblNlbGVjdG9yXG4gICAgKTtcbiAgICB0aGlzLl9pbnB1dExpc3QgPSBBcnJheS5mcm9tKFxuICAgICAgdGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLl9pbnB1dFNlbGVjdG9yKVxuICAgICk7XG4gIH1cblxuICAvLyDQv9C+0LrQsNC30LDRgtGMINC+0YjQuNCx0LrRg1xuICBfc2hvd0lucHV0RXJyb3IgPSAoaW5wdXRFbGVtZW50LCBlcnJvck1lc3NhZ2UpID0+IHtcbiAgICAvLyDQndCw0YXQvtC00LjQvCDRjdC70LXQvNC10L3RgiDQvtGI0LjQsdC60Lgg0LLQvdGD0YLRgNC4INGB0LDQvNC+0Lkg0YTRg9C90LrRhtC40LhcbiAgICB0aGlzLl9lcnJvckVsZW1lbnQgPSB0aGlzLl9mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYC4ke2lucHV0RWxlbWVudC5pZH0tZXJyb3JgXG4gICAgKTtcbiAgICBpbnB1dEVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLl9pbnB1dEVycm9yQ2xhc3MpO1xuICAgIHRoaXMuX2Vycm9yRWxlbWVudC50ZXh0Q29udGVudCA9IGVycm9yTWVzc2FnZTtcbiAgICB0aGlzLl9lcnJvckVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLl9lcnJvckNsYXNzKTtcbiAgfTtcblxuICAvLyDRgdC60YDRi9GC0Ywg0L7RiNC40LHQutGDXG4gIF9oaWRlSW5wdXRFcnJvciA9IChpbnB1dEVsZW1lbnQpID0+IHtcbiAgICAvLyDQndCw0YXQvtC00LjQvCDRjdC70LXQvNC10L3RgiDQvtGI0LjQsdC60LhcbiAgICB0aGlzLl9lcnJvckVsZW1lbnQgPSB0aGlzLl9mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYC4ke2lucHV0RWxlbWVudC5pZH0tZXJyb3JgXG4gICAgKTtcbiAgICBpbnB1dEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9pbnB1dEVycm9yQ2xhc3MpO1xuICAgIHRoaXMuX2Vycm9yRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2Vycm9yQ2xhc3MpO1xuICAgIHRoaXMuX2Vycm9yRWxlbWVudC50ZXh0Q29udGVudCA9IFwiXCI7XG4gIH07XG5cbiAgLy8g0LrQvdC+0L/QutCwXG4gIHRvZ2dsZUJ1dHRvblN0YXRlID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLl9oYXNJbnZhbGlkSW5wdXQodGhpcy5faW5wdXRMaXN0KSkge1xuICAgICAgLy8g0LTQtdC70LDQtdC8INC60L3QvtC/0LrRgyDQvdC10LDQutGC0LjQstC90L7QuVxuICAgICAgdGhpcy5fYnV0dG9uRWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MpO1xuICAgICAgdGhpcy5fYnV0dG9uRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcInRydWVcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vINC40L3QsNGH0LUg0LDQutGC0LjQstC90LBcbiAgICAgIHRoaXMuX2J1dHRvbkVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9pbmFjdGl2ZUJ1dHRvbkNsYXNzKTtcbiAgICAgIHRoaXMuX2J1dHRvbkVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJ0cnVlXCIpO1xuICAgIH1cbiAgfTtcblxuICAvLyDQv9GA0L7QstC10YDQuNGC0Ywg0LjQvdC/0YPRgtGLINC00LvRjyDQsNC60YLQuNCy0LDRhtC40Lgg0LrQvdC+0L/QutC4XG4gIF9oYXNJbnZhbGlkSW5wdXQgPSAoKSA9PiB7XG4gICAgLy8g0L/RgNC+0YXQvtC00LjQvCDQv9C+INGN0YLQvtC80YMg0LzQsNGB0YHQuNCy0YMg0LzQtdGC0L7QtNC+0Lwgc29tZVxuICAgIHJldHVybiB0aGlzLl9pbnB1dExpc3Quc29tZSgoaXRlbSkgPT4ge1xuICAgICAgLy8g0JXRgdC70Lgg0L/QvtC70LUg0L3QtSDQstCw0LvQuNC00L3Qviwg0LrQvtC70LHRjdC6INCy0LXRgNC90ZHRgiB0cnVlXG4gICAgICAvLyDQntCx0YXQvtC0INC80LDRgdGB0LjQstCwINC/0YDQtdC60YDQsNGC0LjRgtGB0Y8g0Lgg0LLRgdGPINGE0YPQvdC60YbQuNGPXG4gICAgICAvLyBoYXNJbnZhbGlkSW5wdXQg0LLQtdGA0L3RkdGCIHRydWVcblxuICAgICAgcmV0dXJuICFpdGVtLnZhbGlkaXR5LnZhbGlkO1xuICAgIH0pO1xuICB9O1xuXG4gIC8vINC/0YDQvtCy0LXRgNGP0LXQvCDQstGB0Y4g0Y3RgtGDINC10LHQsNC70LDQudC60YMt0LHQsNC70LDQu9Cw0LnQutGDXG4gIF9jaGVja0lucHV0VmFsaWRpdHkgPSAoaW5wdXRFbGVtZW50KSA9PiB7XG4gICAgaWYgKCFpbnB1dEVsZW1lbnQudmFsaWRpdHkudmFsaWQpIHtcbiAgICAgIHRoaXMuX3Nob3dJbnB1dEVycm9yKGlucHV0RWxlbWVudCwgaW5wdXRFbGVtZW50LnZhbGlkYXRpb25NZXNzYWdlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5faGlkZUlucHV0RXJyb3IoaW5wdXRFbGVtZW50KTtcbiAgICB9XG4gIH07XG5cbiAgcmVzZXRWYWxpZGF0aW9uKCkge1xuICAgIHRoaXMudG9nZ2xlQnV0dG9uU3RhdGUoKTtcblxuICAgIHRoaXMuX2lucHV0TGlzdC5mb3JFYWNoKChpbnB1dEVsZW1lbnQpID0+IHtcbiAgICAgIHRoaXMuX2hpZGVJbnB1dEVycm9yKGlucHV0RWxlbWVudCk7XG4gICAgfSk7XG4gIH1cblxuICAvLyDQvtCx0YDQsNCx0L7RgtGH0LjQutC4INC00LvRjyDQstGB0LXRhSDQv9C+0LvQtdC5INGE0L7RgNC80YtcbiAgX3NldFZhbGlkYXRpb25FdmVudExpc3RlbmVycyA9ICgpID0+IHtcbiAgICB0aGlzLnRvZ2dsZUJ1dHRvblN0YXRlKCk7XG5cbiAgICAvLyDQntCx0L7QudC00ZHQvCDQstGB0LUg0Y3Qu9C10LzQtdC90YLRiyDQv9C+0LvRg9GH0LXQvdC90L7QuSDQutC+0LvQu9C10LrRhtC40LhcbiAgICB0aGlzLl9pbnB1dExpc3QuZm9yRWFjaCgoaW5wdXRFbGVtZW50KSA9PiB7XG4gICAgICAvLyDQutCw0LbQtNC+0LzRgyDQv9C+0LvRjiDQtNC+0LHQsNCy0LjQvCDQvtCx0YDQsNCx0L7RgtGH0LjQuiDRgdC+0LHRi9GC0LjRjyBpbnB1dFxuICAgICAgaW5wdXRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XG4gICAgICAgIC8vINCS0L3Rg9GC0YDQuCDQutC+0LvQsdGN0LrQsCDQstGL0LfQvtCy0LXQvCBjaGVja0lucHV0VmFsaWRpdHksXG4gICAgICAgIC8vINC/0LXRgNC10LTQsNCyINC10Lkg0YTQvtGA0LzRgyDQuCDQv9GA0L7QstC10YDRj9C10LzRi9C5INGN0LvQtdC80LXQvdGCXG4gICAgICAgIHRoaXMuX2NoZWNrSW5wdXRWYWxpZGl0eShpbnB1dEVsZW1lbnQpO1xuICAgICAgICAvLyDQv9C10YDQtdC00LDQtdC8INGELdGG0LjQuCDQvNCw0YHRgdC40LIg0L/QvtC70LXQuSDRhNC+0YDQvNGLINC4INGN0LvQtdC80LXQvdGCINC60L3QvtC/0LrQuFxuICAgICAgICB0aGlzLnRvZ2dsZUJ1dHRvblN0YXRlKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICAvLyDQvtCx0YDQsNCx0L7RgtGH0LjQutC4INCy0YHQtdC8INGE0L7RgNC80LDQvFxuICBlbmFibGVWYWxpZGF0aW9uID0gKCkgPT4ge1xuICAgIHRoaXMuX3NldFZhbGlkYXRpb25FdmVudExpc3RlbmVycygpO1xuICB9O1xufVxuIiwiaW1wb3J0IFBvcHVwIGZyb20gXCIuL1BvcHVwLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBpY3R1cmVQb3B1cCBleHRlbmRzIFBvcHVwIHtcbiAgY29uc3RydWN0b3IocG9wdXBTZWxlY3Rvcikge1xuICAgIHN1cGVyKHBvcHVwU2VsZWN0b3IpO1xuICAgIHRoaXMuX3BpY1BvcHVwSW1hZ2UgPSB0aGlzLl9wb3B1cC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19pbWFnZVwiKTtcbiAgICB0aGlzLl9waWNQb3B1cE5hbWUgPSB0aGlzLl9wb3B1cC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19kZXNjcmlwdGlvblwiKTtcbiAgfVxuXG4gIG9wZW5Qb3B1cCh0aXRsZSwgbGluaykge1xuICAgIHRoaXMuX3BpY1BvcHVwSW1hZ2Uuc3JjID0gbGluaztcbiAgICB0aGlzLl9waWNQb3B1cE5hbWUudGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgICB0aGlzLl9waWNQb3B1cE5hbWUuYWx0ID0gdGl0bGU7XG4gICAgc3VwZXIub3BlblBvcHVwKCk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwIHtcbiAgY29uc3RydWN0b3IocG9wdXBTZWxlY3Rvcikge1xuICAgIHRoaXMuX3BvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihwb3B1cFNlbGVjdG9yKTtcbiAgICB0aGlzLl9oYW5kbGVFc2NDbG9zZVJlZiA9IHRoaXMuX2hhbmRsZUVzY0Nsb3NlLmJpbmQodGhpcyk7XG4gIH1cblxuICAvLyDihpMg0YQt0YbQuNC4IC/QvNC10YLQvtC00YsvINC+0YLQutGA0YvRgtC40Y8g0Lgg0LfQsNC60YDRi9GC0LjRj1xuXG4gIG9wZW5Qb3B1cCgpIHtcbiAgICB0aGlzLl9wb3B1cC5jbGFzc0xpc3QuYWRkKFwicG9wdXBfb3BlbmVkXCIpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuX2hhbmRsZUVzY0Nsb3NlUmVmKTtcbiAgfVxuXG4gIGNsb3NlUG9wdXAoKSB7XG4gICAgdGhpcy5fcG9wdXAuY2xhc3NMaXN0LnJlbW92ZShcInBvcHVwX29wZW5lZFwiKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLl9oYW5kbGVFc2NDbG9zZVJlZik7XG4gIH1cblxuICAvLyDihpMg0LfQsNC60YDRi9GC0LjQtSDRh9C10YDQtdC3IGVzY1xuXG4gIF9oYW5kbGVFc2NDbG9zZShldnQpIHtcbiAgICBpZiAoZXZ0LmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgdGhpcy5jbG9zZVBvcHVwKCk7XG4gICAgfVxuICB9XG5cbiAgLy8g4oaTINC30LDQutGA0YvRgtC40LUg0L/RgNC4INGJ0LXQu9GH0LrQtSDQvdCwINC60YDQtdGB0YLQuNC6INC40LvQuCDQvtCy0LXRgNC70LXQuVxuXG4gIHNldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHRoaXMuX3BvcHVwLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKGV2dCkgPT4ge1xuICAgICAgaWYgKGV2dC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicG9wdXBfb3BlbmVkXCIpKSB7XG4gICAgICAgIHRoaXMuY2xvc2VQb3B1cCgpO1xuICAgICAgfVxuICAgICAgaWYgKGV2dC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicG9wdXBfX2Nsb3NlLWljb25cIikpIHtcbiAgICAgICAgdGhpcy5jbG9zZVBvcHVwKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCBQb3B1cCBmcm9tIFwiLi9Qb3B1cC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cFdpdGhGb3JtIGV4dGVuZHMgUG9wdXAge1xuICBjb25zdHJ1Y3Rvcih7IHBvcHVwU2VsZWN0b3IsIGhhbmRsZVN1Ym1pdCB9KSB7XG4gICAgc3VwZXIocG9wdXBTZWxlY3Rvcik7XG4gICAgdGhpcy5faGFuZGxlU3VibWl0ID0gaGFuZGxlU3VibWl0O1xuICAgIHRoaXMuX2Zvcm0gPSB0aGlzLl9wb3B1cC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19mb3JtXCIpO1xuICAgIC8vINC00L7RgdGC0LDRkdC8INCy0YHQtSDRjdC70LXQvNC10L3RgtGLINC/0L7Qu9C10LlcbiAgICB0aGlzLl9pbnB1dExpc3QgPSB0aGlzLl9wb3B1cC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBvcHVwX19pbnB1dFwiKTtcbiAgICB0aGlzLl9wb3B1cEJ1dHRvbiA9IHRoaXMuX3BvcHVwLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fc3VibWl0Jyk7XG4gIH1cblxuICBfZ2V0SW5wdXRWYWx1ZXMoKSB7XG4gICAgLy8g0YHQvtC30LTQsNGR0Lwg0L/Rg9GB0YLQvtC5INC+0LHRitC10LrRglxuICAgIHRoaXMuX2Zvcm1WYWx1ZXMgPSB7fTtcblxuICAgIC8vINC00L7QsdCw0LLQu9GP0LXQvCDQsiDRjdGC0L7RgiDQvtCx0YrQtdC60YIg0LfQvdCw0YfQtdC90LjRjyDQstGB0LXRhSDQv9C+0LvQtdC5XG4gICAgdGhpcy5faW5wdXRMaXN0LmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICB0aGlzLl9mb3JtVmFsdWVzW2lucHV0Lm5hbWVdID0gaW5wdXQudmFsdWU7XG4gICAgfSk7XG5cbiAgICAvLyDQstC+0LfQstGA0LDRidCw0LXQvCDQvtCx0YrQtdC60YIg0LfQvdCw0YfQtdC90LjQuVxuICAgIHJldHVybiB0aGlzLl9mb3JtVmFsdWVzO1xuICB9XG5cbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgc3VwZXIuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB0aGlzLl9mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2dCkgPT4ge1xuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIHRoaXMuX2hhbmRsZVN1Ym1pdCh0aGlzLl9nZXRJbnB1dFZhbHVlcygpKTtcbiAgICAgIC8qIHRoaXMuY2xvc2VQb3B1cCgpOyAqL1xuICAgIH0pO1xuICB9XG5cbiAgY2xvc2VQb3B1cCgpIHtcbiAgICBzdXBlci5jbG9zZVBvcHVwKCk7XG4gICAgdGhpcy5fZm9ybS5yZXNldCgpO1xuICB9XG5cbiAgY2hhbmdlU3VibWl0SGFuZGxlcihuZXdTdWJtaXRIYW5kbGVyKSB7XG4gICAgdGhpcy5faGFuZGxlU3VibWl0ID0gbmV3U3VibWl0SGFuZGxlcjtcbiAgfVxuXG5cbiAgcmVuZGVyTG9hZGluZyhpc0xvYWRpbmcpIHtcbiAgICBpZihpc0xvYWRpbmcpIHtcbiAgICAgIHRoaXMuX3BvcHVwQnV0dG9uLnRleHRDb250ZW50ID0gJ9Ch0L7RhdGA0LDQvdC10L3QuNC1Li4uJ1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9wb3B1cEJ1dHRvbi50ZXh0Q29udGVudCA9IHRoaXMuX3BvcHVwQnV0dG9uVGV4dENvbnRlbnRcbiAgICB9XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlY3Rpb24ge1xuICBjb25zdHJ1Y3Rvcih7IHJlbmRlcmVyIH0sIGNvbnRhaW5lclNlbGVjdG9yKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIgPSByZW5kZXJlcjtcbiAgICB0aGlzLl9jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnRhaW5lclNlbGVjdG9yKTtcbiAgfVxuXG4gIHJlbmRlckl0ZW1zKGRhdGEpIHtcbiAgICB0aGlzLl9pdGVtcyA9IGRhdGE7XG4gICAgdGhpcy5faXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgdGhpcy5fcmVuZGVyZXIoaXRlbSk7XG4gICAgfSk7XG4gIH1cblxuICBhZGRJdGVtKGVsZW1lbnQpIHtcbiAgICB0aGlzLl9jb250YWluZXIucHJlcGVuZChlbGVtZW50KTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlckluZm8ge1xuICBjb25zdHJ1Y3Rvcih7IHVzZXJOYW1lLCB1c2VyRGVzY3JpcHRpb24sIHVzZXJBdmF0YXIgfSkge1xuICAgIHRoaXMuX3Byb2ZpbGVOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih1c2VyTmFtZSk7XG4gICAgdGhpcy5fcHJvZmlsZUpvYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodXNlckRlc2NyaXB0aW9uKTtcbiAgICB0aGlzLl9wcm9maWxlQXZhdGFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih1c2VyQXZhdGFyKTtcbiAgfVxuXG4gIGdldFVzZXJJbmZvKCkge1xuICAgIGNvbnN0IGdvdHRlbkluZm8gPSB7XG4gICAgICB1c2VyTmFtZTogdGhpcy5fcHJvZmlsZU5hbWUudGV4dENvbnRlbnQsXG4gICAgICB1c2VyRGVzY3JpcHRpb246IHRoaXMuX3Byb2ZpbGVKb2IudGV4dENvbnRlbnQsXG4gICAgfTtcblxuICAgIHJldHVybiBnb3R0ZW5JbmZvO1xuICB9XG5cbiAgc2V0VXNlckluZm8obmFtZSwgZGVzY3JpcHRpb24pIHtcbiAgICB0aGlzLl9wcm9maWxlTmFtZS50ZXh0Q29udGVudCA9IG5hbWU7XG4gICAgdGhpcy5fcHJvZmlsZUpvYi50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uO1xuICB9XG5cbiAgc2V0VXNlckF2YXRhcihhdmF0YXIpIHtcbiAgICB0aGlzLl9wcm9maWxlQXZhdGFyLnNyYyA9IGF2YXRhcjtcbiAgfVxuXG4gIHNldFVzZXJBdmF0YXIoYXZhdGFyKSB7XG4gICAgdGhpcy5fcHJvZmlsZUF2YXRhci5zcmMgPSBhdmF0YXI7IC8vINGB0YHRi9C70LrQsFxuICB9XG59XG4iLCJleHBvcnQgY29uc3QgY29uZmlnID0ge1xuICBmb3JtU2VsZWN0b3I6ICcucG9wdXBfX2Zvcm0nLFxuICBpbnB1dFNlbGVjdG9yOiAnLnBvcHVwX19pbnB1dCcsXG4gIHN1Ym1pdEJ1dHRvblNlbGVjdG9yOiAnLnBvcHVwX19zdWJtaXQnLFxuICBpbmFjdGl2ZUJ1dHRvbkNsYXNzOiAncG9wdXBfX3N1Ym1pdF9kaXNhYmxlZCcsXG4gIGlucHV0RXJyb3JDbGFzczogJ3BvcHVwX19pbnB1dF90eXBlX2Vycm9yJyxcbiAgZXJyb3JDbGFzczogJ3BvcHVwX19pbnB1dC1lcnJvcl9hY3RpdmUnfTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vaW5kZXguY3NzXCI7XG5cbi8vIF9pZDogJzgwZjFlZjQ4MmI4NDg4NmYzZDUwMTc2NydcblxuY29uc3QgYnV0dG9uRWRpdFByb2ZpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2VkaXQtYnV0dG9uXCIpO1xuY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9faW5wdXRfbGluZV9uYW1lXCIpO1xuY29uc3Qgam9iSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19pbnB1dF9saW5lX2Rlc2NyaXB0aW9uXCIpO1xuY29uc3QgcG9wdXBFZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9lZGl0XCIpO1xuY29uc3QgcG9wdXBBZGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX2FkZFwiKTtcbmNvbnN0IHBvcHVwQXZhdGFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9hdmF0YXJcIik7XG5jb25zdCBidXR0b25BZGRDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19hZGQtYnV0dG9uXCIpO1xuY29uc3QgYnV0dG9uQ2hhbmdlQXZhdGFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19waG90by1lZGl0LWJ1dHRvblwiKTtcblxuaW1wb3J0IHsgQ2FyZCB9IGZyb20gXCIuLi9jb21wb25lbnRzL0NhcmQuanNcIjtcbmltcG9ydCBTZWN0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL1NlY3Rpb24uanNcIjtcbmltcG9ydCB7IEZvcm1WYWxpZGF0b3IgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzXCI7XG5pbXBvcnQgUGljdHVyZVBvcHVwIGZyb20gXCIuLi9jb21wb25lbnRzL1BpY3R1cmVQb3B1cC5qc1wiO1xuaW1wb3J0IFBvcHVwV2l0aEZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9wdXBXaXRoRm9ybS5qc1wiO1xuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCIuLi9jb21wb25lbnRzL1VzZXJJbmZvLmpzXCI7XG5pbXBvcnQgeyBjb25maWcgfSBmcm9tIFwiLi4vdXRpbHMvY29uc3RhbnRzXCI7XG5pbXBvcnQgQXBpIGZyb20gXCIuLi9jb21wb25lbnRzL0FwaVwiO1xuXG5cbi8vIOKGkyAg0LrQvtC90YTQuNCzIEFQSVxuXG5jb25zdCBhcGlDb25maWcgPSB7XG4gIHVybDogJ2h0dHBzOi8vbWVzdG8ubm9tb3JlcGFydGllcy5jby92MS9jb2hvcnQtNTQvJyxcbiAgaGVhZGVyczoge1xuICAgIGF1dGhvcml6YXRpb246ICdlMDA1YTIwNC0xMzcwLTQ2ZTEtOTNjNy1kN2QxYTE2MmFjMjEnLFxuICAgIFwiQ29udGVudC10eXBlXCI6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICB9IFxufVxuXG5jb25zdCBhcGlOZXcgPSBuZXcgQXBpKGFwaUNvbmZpZyk7XG5cbmNvbnN0IHBvcHVwRWRpdFZhbGlkYXRpb24gPSBuZXcgRm9ybVZhbGlkYXRvcihjb25maWcsIHBvcHVwRWRpdCk7XG5jb25zdCBwb3B1cEFkZFZhbGlkYXRpb24gPSBuZXcgRm9ybVZhbGlkYXRvcihjb25maWcsIHBvcHVwQWRkKTtcbmNvbnN0IHBvcHVwQ2hhbmdlQXZhdGFyVmFsaWRhdGlvbiA9IG5ldyBGb3JtVmFsaWRhdG9yKGNvbmZpZywgcG9wdXBBdmF0YXIpO1xuXG5wb3B1cEVkaXRWYWxpZGF0aW9uLmVuYWJsZVZhbGlkYXRpb24oKTtcbnBvcHVwQ2hhbmdlQXZhdGFyVmFsaWRhdGlvbi5lbmFibGVWYWxpZGF0aW9uKCk7XG5cbi8vIOKGkyDQvdC+0LLQsNGPINGE0LjQs9GD0LvQuNC90LAg0L/RgNC+INGO0LfQtdGA0LBcblxubGV0IHVzZXJJZCAvLyDQv9C+0LvRg9GH0LDQtdC8INC90LjQttC1IOKGk+KGk+KGk1xuXG5hcGlOZXcuZ2V0UHJvZmlsZUluZm8oKVxuLnRoZW4oKHByb2ZpbGVVc2VySW5mbykgPT4ge1xuICB1c2VySW5mby5zZXRVc2VySW5mbyhwcm9maWxlVXNlckluZm8ubmFtZSwgcHJvZmlsZVVzZXJJbmZvLmFib3V0KTtcbiAgdXNlckluZm8uc2V0VXNlckF2YXRhcihwcm9maWxlVXNlckluZm8uYXZhdGFyKTtcbiAgdXNlcklkID0gcHJvZmlsZVVzZXJJbmZvLl9pZDsgLy8g0Y8g0YDQvtC00LjQu9GB0Y9cbn0pLmNhdGNoKChlcnJvcikgPT4ge1xuICBjb25zb2xlLmxvZyhlcnJvcilcbn0pXG5cbmNvbnN0IHVzZXJJbmZvID0gbmV3IFVzZXJJbmZvKHtcbiAgdXNlck5hbWU6IFwiLnByb2ZpbGVfX25hbWVcIixcbiAgdXNlckRlc2NyaXB0aW9uOiBcIi5wcm9maWxlX19kZXNjcmlwdGlvblwiLFxuICB1c2VyQXZhdGFyOiBcIi5wcm9maWxlX19waG90b1wiXG59KTtcblxuLy8g4oaTINC90L7QstCw0Y8g0YTQvtGA0LzQsCBlZGl0XG5cbmNvbnN0IGVkaXRGb3JtID0gbmV3IFBvcHVwV2l0aEZvcm0oe1xuICBwb3B1cFNlbGVjdG9yOiBcIi5wb3B1cF9lZGl0XCIsXG4gIGhhbmRsZVN1Ym1pdDogKGRhdGEpID0+IHtcbiAgICBlZGl0Rm9ybS5yZW5kZXJMb2FkaW5nKHRydWUpO1xuICAgIGFwaU5ldy5lZGl0UHJvZmlsZShkYXRhLnByb2ZpbGUsIGRhdGEuZGVzY3JpcHRpb24pIC8vIGRhdGEg4oCTINGB0L7QtNC10YDQttC40LzQvtC1INC40L3Qv9GD0YLQvtCyLCBwcm9maWxlL2Rlc2NyaXB0aW9uIOKAkyBuYW1lJ9GLINC40L3Qv9GD0YLQvtCyINC40Lcg0LjQvdC00LXQutGBLtGF0YLQvNC7XG4gICAgLnRoZW4oKHN1Ym1pdHRlZEluZm8pID0+IHtcbiAgICAgIHVzZXJJbmZvLnNldFVzZXJJbmZvKHN1Ym1pdHRlZEluZm8ubmFtZSwgc3VibWl0dGVkSW5mby5hYm91dCk7XG4gICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfSkuZmluYWxseSgoKSA9PiB7XG4gICAgICBlZGl0Rm9ybS5yZW5kZXJMb2FkaW5nKGZhbHNlKTtcbiAgICB9KVxuICAgIGVkaXRGb3JtLmNsb3NlUG9wdXAoKTtcbiAgfSxcbn0pO1xuXG5lZGl0Rm9ybS5zZXRFdmVudExpc3RlbmVycygpO1xuXG4vLyDihpMg0LDQutGC0LjQstCw0YbQuNGPINC60L3QvtC/0LrQuCBlZGl0XG5cbmJ1dHRvbkVkaXRQcm9maWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNvbnN0IGdvdHRlbkluZm8gPSB1c2VySW5mby5nZXRVc2VySW5mbygpO1xuICBuYW1lSW5wdXQudmFsdWUgPSBnb3R0ZW5JbmZvLnVzZXJOYW1lO1xuICBqb2JJbnB1dC52YWx1ZSA9IGdvdHRlbkluZm8udXNlckRlc2NyaXB0aW9uO1xuICBlZGl0Rm9ybS5vcGVuUG9wdXAoKTtcbn0pO1xuXG4vLyDihpMg0L3QvtCy0LDRjyDRhNC+0YDQvNCwINGA0LXQtNCw0LrRgtC40YDQvtCy0LDQvdC40Y8g0LDQstCw0YLQsNGA0LBcblxuY29uc3QgYXZhdGFyUG9wdXAgPSBuZXcgUG9wdXBXaXRoRm9ybSh7XG4gIHBvcHVwU2VsZWN0b3I6ICcucG9wdXBfYXZhdGFyJyxcbiAgaGFuZGxlU3VibWl0OiAoZGF0YSkgPT4ge1xuICAgIGF2YXRhclBvcHVwLnJlbmRlckxvYWRpbmcodHJ1ZSlcbiAgICBhcGlOZXcuY2hhbmdlQXZhdGFyKGRhdGEuYXZhdGFyKVxuICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgIHVzZXJJbmZvLnNldFVzZXJBdmF0YXIocmVzLmF2YXRhcik7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7IGNvbnNvbGUubG9nKGVycm9yKSB9KVxuICAgIC5maW5hbGx5KCgpID0+IHtcbiAgICAgIGF2YXRhclBvcHVwLnJlbmRlckxvYWRpbmcoZmFsc2UpO1xuICAgIH0pXG4gICAgYXZhdGFyUG9wdXAuY2xvc2VQb3B1cCgpO1xuICB9XG4gIH0pO1xuXG5hdmF0YXJQb3B1cC5zZXRFdmVudExpc3RlbmVycygpO1xuXG4vLyDihpMg0LDQutGC0LjQstCw0YbQuNGPINC60L3QvtC/0LrQuCBlZGl0QXZhdGFyXG5cbmJ1dHRvbkNoYW5nZUF2YXRhci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBhdmF0YXJQb3B1cC5vcGVuUG9wdXAoKTtcbn0pXG5cbi8vIOKGkyDQvdC+0LLQsNGPINGE0LjQs9GD0LvQuNC90LAg0L/RgNC+INC60LDRgNGC0LjQvdC60LhcblxuY29uc3QgcGljdHVyZVBvcHVwID0gbmV3IFBpY3R1cmVQb3B1cChcIi5wb3B1cF9waWNcIik7XG5waWN0dXJlUG9wdXAuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcblxuLy8g4oaTINC4INGC0LDQuiDQv9C+0L3Rj9GC0L3QvlxuXG5mdW5jdGlvbiBoYW5kbGVDYXJkQ2xpY2sodGl0bGUsIGxpbmspIHtcbiAgcGljdHVyZVBvcHVwLm9wZW5Qb3B1cCh0aXRsZSwgbGluayk7XG59XG5cbi8vIOKGkyDQvdC+0LLQsNGPINGE0L7RgNC80LAg0LTQu9GPINC/0L7QtNGC0LLQtdGA0LbQtNC10L3QuNGPINGD0LTQsNC70LXQvdC40Y8g0LrQsNGA0YLQvtGH0LrQuCBcblxuY29uc3QgY29uZmlybURlbGV0ZUZvcm0gPSBuZXcgUG9wdXBXaXRoRm9ybSh7XG4gIHBvcHVwU2VsZWN0b3I6ICcucG9wdXBfbWFrZS1zdXJlJ1xufSlcblxuY29uZmlybURlbGV0ZUZvcm0uc2V0RXZlbnRMaXN0ZW5lcnMoKTtcblxuLy8g4oaTICDRhNGD0L3QutGG0LjRjyDQv9C+0LTRgtCy0LXRgNC20LTQtdC90LjRjyDRg9C00LDQu9C10L3QuNGPXG5cbi8qIGZ1bmN0aW9uIGhhbmRsZUJpbkNsaWNrKGlkKSB7XG4gIGNvbmZpcm1EZWxldGVGb3JtLm9wZW5Qb3B1cCgpO1xuICBjb25maXJtRGVsZXRlRm9ybS5jaGFuZ2VTdWJtaXRIYW5kbGVyKCgpID0+IHtcbiAgICBhcGlOZXcuZGVsZXRlQ2FyZChpZClcbiAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICBhZGRDYXJkLmhhbmRsZURlbGV0ZSgpIC8vINCi0KPQoiDQndCVINCS0KvQl9Cr0JLQkNCV0KLQodCvID0oXG4gICAgICBjb25maXJtRGVsZXRlRm9ybS5jbG9zZVBvcHVwKClcbiAgICB9KSBcbiAgICB9KTtcbn0gKi9cblxuLy8g4oaTICDRhNGD0L3QutGG0LjRjyDQu9Cw0LnQutCwXG4vKlxuZnVuY3Rpb24gaGFuZGxlTGlrZUNsaWNrKGlkKSB7XG4gIGFwaU5ldy5wdXRMaWtlKGlkKVxuICAudGhlbigoKSA9PiB7fSlcbiAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgfSlcbn0qL1xuXG4vLyDihpMgINC90L7QstGL0Lkg0Y3QutC30LXQvNC/0LvRj9GAINC60LDRgNGC0L7Rh9C60LhcblxuZnVuY3Rpb24gYWRkQ2FyZChkYXRhKSB7IFxuICBjb25zdCBjYXJkSXRlbSA9IG5ldyBDYXJkKHtcbiAgICB0aXRsZTogZGF0YS5uYW1lLFxuICAgIGxpbms6IGRhdGEubGluayxcbiAgICBsaWtlczogZGF0YS5saWtlcyxcbiAgICBpZDogZGF0YS5faWQsXG4gICAgdXNlcklkOiB1c2VySWQsXG4gICAgb3duZXJJZDogZGF0YS5vd25lci5faWQsXG4gIH0sXG4gIFwiLmNhcmRzX19pdGVtLXRlbXBsYXRlXCIsXG4gIGhhbmRsZUNhcmRDbGljayxcbiAgKGlkKSA9PiB7XG4gICAgY29uZmlybURlbGV0ZUZvcm0ub3BlblBvcHVwKCk7XG4gICAgY29uZmlybURlbGV0ZUZvcm0uY2hhbmdlU3VibWl0SGFuZGxlcigoKSA9PiB7XG4gICAgICBhcGlOZXcuZGVsZXRlQ2FyZChpZClcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgY2FyZEl0ZW0uaGFuZGxlRGVsZXRlKClcbiAgICAgICAgY29uZmlybURlbGV0ZUZvcm0uY2xvc2VQb3B1cCgpXG4gICAgICB9KSBcbiAgICAgIH0pO1xuICB9LFxuICAoaWQpID0+IHtcbiAgICBpZiAoY2FyZEl0ZW0uaXNMaWtlZCgpKSB7XG4gICAgICBhcGlOZXcuZGVsZXRlTGlrZShpZClcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgY2FyZEl0ZW0uY291bnRMaWtlcyhyZXMubGlrZXMpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgIGFwaU5ldy5wdXRMaWtlKGlkKVxuICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgIGNhcmRJdGVtLmNvdW50TGlrZXMocmVzLmxpa2VzKTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgIH0pXG4gIH19XG4pO1xuXG5yZXR1cm4gY2FyZEl0ZW0uZ2VuZXJhdGVDYXJkKCk7XG59XG5cbi8vIOKGkyAg0LHQu9C+0Log0YEg0LrQsNGA0YLQuNC90LrQsNC80LhcblxuY29uc3QgY2FyZHNMaXN0ID0gbmV3IFNlY3Rpb24oXG4gIHtcbiAgICByZW5kZXJlcjogKGRhdGEpID0+IHtcbiAgICAgIGNhcmRzTGlzdC5hZGRJdGVtKGFkZENhcmQoZGF0YSkpO1xuICAgIH0sXG4gIH0sXG4gIFwiLmNhcmRzXCJcbik7XG5cbi8vIOKGkyAg0L/RgNC40LrQu9GO0YfQtdC90LjRjyDRgSDQvtGC0YDQuNGB0L7QstC60L7QuSDQutCw0YDRgtC+0YfQtdC6INGH0LXRgNC10LcgQVBJIFxuLy8g4oaTICDQvtGC0YDQuNGB0L7QstC60LBcblxuYXBpTmV3LmdldENhcmRzKCkgLy8gcmVzdWx0IC0g0LPQvtGC0L7QstGL0LUg0LTQsNC90L3Ri9C1XG4gIC50aGVuKChjYXJkcykgPT4ge1xuICAgIGNhcmRzTGlzdC5yZW5kZXJJdGVtcyhjYXJkcyk7XG59KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgY29uc29sZS5sb2coZXJyb3IpO1xufSk7XG5cblxuLy8g4oaTICDQvdC+0LLQsNGPINGE0L7RgNC80LAgYWRkXG5cbmNvbnN0IGFkZEZvcm0gPSBuZXcgUG9wdXBXaXRoRm9ybSh7XG4gIHBvcHVwU2VsZWN0b3I6IFwiLnBvcHVwX2FkZFwiLFxuICBoYW5kbGVTdWJtaXQ6IChkYXRhKSA9PiB7XG4gICAgYWRkRm9ybS5yZW5kZXJMb2FkaW5nKHRydWUpO1xuICAgIGFwaU5ldy5hZGROZXdDYXJkKGRhdGEudGl0bGUsIGRhdGEucGljdHVyZSlcbiAgICAudGhlbigobmV3Q2FyZCkgPT4ge1xuICAgICAgY2FyZHNMaXN0LmFkZEl0ZW0oYWRkQ2FyZChuZXdDYXJkKSlcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9KVxuICAgIC5maW5hbGx5KCgpID0+IHtcbiAgICAgIGFkZEZvcm0ucmVuZGVyTG9hZGluZyhmYWxzZSk7XG4gICAgfSlcbiAgICBhZGRGb3JtLmNsb3NlUG9wdXAoKTtcbiAgfSxcbn0pO1xuXG5hZGRGb3JtLnNldEV2ZW50TGlzdGVuZXJzKCk7XG5cbi8vIOKGkyDQsNC60YLQuNCy0LDRhtC40Y8g0LrQvdC+0L/QutC4IGFkZFxuXG5idXR0b25BZGRDYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHBvcHVwQWRkVmFsaWRhdGlvbi5yZXNldFZhbGlkYXRpb24oKTtcbiAgYWRkRm9ybS5vcGVuUG9wdXAoKTtcbn0pO1xuXG5wb3B1cEFkZFZhbGlkYXRpb24uZW5hYmxlVmFsaWRhdGlvbigpO1xuIl0sIm5hbWVzIjpbIkFwaSIsInVybCIsImhlYWRlcnMiLCJfdXJsIiwiX2hlYWRlcnMiLCJyZXNwb25zZSIsIm9rIiwianNvbiIsIlByb21pc2UiLCJyZWplY3QiLCJzdGF0dXMiLCJzdGF0dXNUZXh0IiwiZmV0Y2giLCJ0aGVuIiwiY2hlY2tSZXNwb25zZSIsImlkIiwibWV0aG9kIiwibmFtZSIsImxpbmsiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImFib3V0IiwiYXZhdGFyIiwiQ2FyZCIsImRhdGEiLCJ0ZW1wbGF0ZVNlbGVjdG9yIiwiaGFuZGxlQ2FyZENsaWNrIiwiaGFuZGxlQmluQ2xpY2siLCJoYW5kbGVMaWtlQ2xpY2siLCJfdGl0bGUiLCJ0aXRsZSIsIl9saW5rIiwiX2xpa2VzIiwibGlrZXMiLCJfaWQiLCJfdXNlcklkIiwidXNlcklkIiwiX293bmVySWQiLCJvd25lcklkIiwiX3RlbXBsYXRlU2VsZWN0b3IiLCJfaGFuZGxlQ2FyZENsaWNrIiwiX2hhbmRsZUJpbkNsaWNrIiwiX2hhbmRsZUxpa2VDbGljayIsImNhcmRFbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY29udGVudCIsImNsb25lTm9kZSIsIl9lbGVtZW50IiwicmVtb3ZlIiwiX2xpa2VCdXR0b24iLCJjbGFzc0xpc3QiLCJhZGQiLCJfdXNlckhhc0xpa2VkIiwiZmluZCIsInVzZXIiLCJuZXdMaWtlcyIsIl9saWtlc051bWJlciIsInRleHRDb250ZW50IiwibGVuZ3RoIiwiaXNMaWtlZCIsIl9wdXRMaWtlIiwiX29taXRMaWtlIiwiX2RlbGV0ZUJ1dHRvbiIsInN0eWxlIiwiZGlzcGxheSIsImFkZEV2ZW50TGlzdGVuZXIiLCJfaGlkZUJpbiIsIl9jYXJkSW1nIiwiX2dldFRlbXBsYXRlIiwiX2NhcmRUaXRsZSIsIl9zZXRFdmVudExpc3RlbmVycyIsInNyYyIsImFsdCIsImNvdW50TGlrZXMiLCJGb3JtVmFsaWRhdG9yIiwic2V0dGluZ3MiLCJmb3JtRWxlbWVudCIsImlucHV0RWxlbWVudCIsImVycm9yTWVzc2FnZSIsIl9lcnJvckVsZW1lbnQiLCJfZm9ybUVsZW1lbnQiLCJfaW5wdXRFcnJvckNsYXNzIiwiX2Vycm9yQ2xhc3MiLCJfaGFzSW52YWxpZElucHV0IiwiX2lucHV0TGlzdCIsIl9idXR0b25FbGVtZW50IiwiX2luYWN0aXZlQnV0dG9uQ2xhc3MiLCJzZXRBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJzb21lIiwiaXRlbSIsInZhbGlkaXR5IiwidmFsaWQiLCJfc2hvd0lucHV0RXJyb3IiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsIl9oaWRlSW5wdXRFcnJvciIsInRvZ2dsZUJ1dHRvblN0YXRlIiwiZm9yRWFjaCIsIl9jaGVja0lucHV0VmFsaWRpdHkiLCJfc2V0VmFsaWRhdGlvbkV2ZW50TGlzdGVuZXJzIiwiX2Zvcm1TZWxlY3RvciIsImZvcm1TZWxlY3RvciIsIl9pbnB1dFNlbGVjdG9yIiwiaW5wdXRTZWxlY3RvciIsIl9zdWJtaXRCdXR0b25TZWxlY3RvciIsInN1Ym1pdEJ1dHRvblNlbGVjdG9yIiwiaW5hY3RpdmVCdXR0b25DbGFzcyIsImlucHV0RXJyb3JDbGFzcyIsImVycm9yQ2xhc3MiLCJBcnJheSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwiUG9wdXAiLCJQaWN0dXJlUG9wdXAiLCJwb3B1cFNlbGVjdG9yIiwiX3BpY1BvcHVwSW1hZ2UiLCJfcG9wdXAiLCJfcGljUG9wdXBOYW1lIiwiX2hhbmRsZUVzY0Nsb3NlUmVmIiwiX2hhbmRsZUVzY0Nsb3NlIiwiYmluZCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJldnQiLCJrZXkiLCJjbG9zZVBvcHVwIiwidGFyZ2V0IiwiY29udGFpbnMiLCJQb3B1cFdpdGhGb3JtIiwiaGFuZGxlU3VibWl0IiwiX2hhbmRsZVN1Ym1pdCIsIl9mb3JtIiwiX3BvcHVwQnV0dG9uIiwiX2Zvcm1WYWx1ZXMiLCJpbnB1dCIsInZhbHVlIiwicHJldmVudERlZmF1bHQiLCJfZ2V0SW5wdXRWYWx1ZXMiLCJyZXNldCIsIm5ld1N1Ym1pdEhhbmRsZXIiLCJpc0xvYWRpbmciLCJfcG9wdXBCdXR0b25UZXh0Q29udGVudCIsIlNlY3Rpb24iLCJjb250YWluZXJTZWxlY3RvciIsInJlbmRlcmVyIiwiX3JlbmRlcmVyIiwiX2NvbnRhaW5lciIsIl9pdGVtcyIsImVsZW1lbnQiLCJwcmVwZW5kIiwiVXNlckluZm8iLCJ1c2VyTmFtZSIsInVzZXJEZXNjcmlwdGlvbiIsInVzZXJBdmF0YXIiLCJfcHJvZmlsZU5hbWUiLCJfcHJvZmlsZUpvYiIsIl9wcm9maWxlQXZhdGFyIiwiZ290dGVuSW5mbyIsImRlc2NyaXB0aW9uIiwiY29uZmlnIiwiYnV0dG9uRWRpdFByb2ZpbGUiLCJuYW1lSW5wdXQiLCJqb2JJbnB1dCIsInBvcHVwRWRpdCIsInBvcHVwQWRkIiwicG9wdXBBdmF0YXIiLCJidXR0b25BZGRDYXJkIiwiYnV0dG9uQ2hhbmdlQXZhdGFyIiwiYXBpQ29uZmlnIiwiYXV0aG9yaXphdGlvbiIsImFwaU5ldyIsInBvcHVwRWRpdFZhbGlkYXRpb24iLCJwb3B1cEFkZFZhbGlkYXRpb24iLCJwb3B1cENoYW5nZUF2YXRhclZhbGlkYXRpb24iLCJlbmFibGVWYWxpZGF0aW9uIiwiZ2V0UHJvZmlsZUluZm8iLCJwcm9maWxlVXNlckluZm8iLCJ1c2VySW5mbyIsInNldFVzZXJJbmZvIiwic2V0VXNlckF2YXRhciIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImVkaXRGb3JtIiwicmVuZGVyTG9hZGluZyIsImVkaXRQcm9maWxlIiwicHJvZmlsZSIsInN1Ym1pdHRlZEluZm8iLCJzZXRFdmVudExpc3RlbmVycyIsImdldFVzZXJJbmZvIiwib3BlblBvcHVwIiwiYXZhdGFyUG9wdXAiLCJjaGFuZ2VBdmF0YXIiLCJyZXMiLCJwaWN0dXJlUG9wdXAiLCJjb25maXJtRGVsZXRlRm9ybSIsImFkZENhcmQiLCJjYXJkSXRlbSIsIm93bmVyIiwiY2hhbmdlU3VibWl0SGFuZGxlciIsImRlbGV0ZUNhcmQiLCJoYW5kbGVEZWxldGUiLCJkZWxldGVMaWtlIiwicHV0TGlrZSIsImdlbmVyYXRlQ2FyZCIsImNhcmRzTGlzdCIsImFkZEl0ZW0iLCJnZXRDYXJkcyIsImNhcmRzIiwicmVuZGVySXRlbXMiLCJhZGRGb3JtIiwiYWRkTmV3Q2FyZCIsInBpY3R1cmUiLCJuZXdDYXJkIiwicmVzZXRWYWxpZGF0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==