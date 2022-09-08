let formElement = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close-icon');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__description');
let nameInput = document.querySelector('.popup__input_line_name');
let jobInput = document.querySelector('.popup__input_line_description');
let submitButton = document.querySelector('.popup__submit');

function openPopup() {
  formElement.classList.add('popup_opened');
  let nameInputV = document.querySelector('.popup__input_line_name').value = profileName.textContent;
  let jobInputV = document.querySelector('.popup__input_line_description').value = profileJob.textContent;
}

function closePopup() {
  formElement.classList.remove('popup_opened');
}

editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);

// ↑ выскакивание окошка

let popupForm = document.querySelector('.popup__form')

function formSubmitHandler (evt) {
  evt.preventDefault();

  let profileName = document.querySelector('.profile__name');
  let profileJob = document.querySelector('.profile__description');
  // Выберите элементы, куда должны быть вставлены значения полей

  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  // Вставьте новые значения с помощью textContent

  closePopup();

}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
popupForm.addEventListener('submit', formSubmitHandler);