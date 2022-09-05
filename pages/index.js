let formElement = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close-icon');

editButton.addEventListener('click', function(e) {
  e.preventDefault()
  formElement.classList.add('popup_opened')
});

closeButton.addEventListener('click', function() {
  formElement.classList.remove('popup_opened');
});

// ↑ выскакивание окошка


let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__description');
let nameInput = document.querySelector('.popup__input_line_name').value = profileName.textContent;
let jobInput = document.querySelector('.popup__input_line_description').value = profileJob.textContent;

// ↑ инпуты заполняются контентом профиля


// let submitButton = document.querySelector('.popup__submit');

function formSubmitHandler (evt) {
  evt.preventDefault();
  let nameInput = document.querySelector('.popup__input_line_name').value;
  let jobInput = document.querySelector('.popup__input_line_description').value;
  // Получите значение полей jobInput и nameInput из свойства value

  // let profileName = document.querySelector('.profile__name');
  // let profileJob = document.querySelector('.profile__description');
  // Выберите элементы, куда должны быть вставлены значения полей

  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  // Вставьте новые значения с помощью textContent
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler); 
