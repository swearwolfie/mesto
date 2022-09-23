const formElement = document.querySelector('.popup');
const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__close-icon');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__description');
const nameInput = document.querySelector('.popup__input_line_name');
const jobInput = document.querySelector('.popup__input_line_description');
const formEdit = document.querySelector('.popup_edit');
const formAdd = document.querySelector('.popup_add');
const addButton = document.querySelector('.profile__add-button');
const closeAddButton = document.querySelector('.popup__close-icon_add')
const cardNameInput = document.querySelector('.popup__input_add_name');
const cardPicInput = document.querySelector('.popup__input_add_pic');

function openEditPopup() {
  formElement.classList.add('popup_opened'); 
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function closeEditPopup() {
  formElement.classList.remove('popup_opened');
}

editButton.addEventListener('click', openEditPopup);
closeButton.addEventListener('click', closeEditPopup);

// ↑ выскакивание окошка edit

function openAddPopup() {
  formAdd.classList.add('popup_opened'); 
}

function closeAddPopup() {
  formAdd.classList.remove('popup_opened');
}

addButton.addEventListener('click', openAddPopup);
closeAddButton.addEventListener('click', closeAddPopup);

// ↑ выскакивание окошка add
// ↓ сабмит для редактирования профиля

const popupForm = document.querySelector('.popup__form')

function formSubmitHandler (evt) {
  evt.preventDefault();

  const profileName = document.querySelector('.profile__name');
  const profileJob = document.querySelector('.profile__description');
  // Выберите элементы, куда должны быть вставлены значения полей

  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  // Вставьте новые значения с помощью textContent

  closePopup();

}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
popupForm.addEventListener('submit', formSubmitHandler);

// ↓ сабмит для добавления карточек

const cards = document.querySelector('.cards');
const cardsItemTemplate = document.querySelector('.cards__item-template').content;
const popupAddForm = document.querySelector('.popup__form_add');

function addNewCard (evt) {
  evt.preventDefault();
  const addedCardTemplate = cardsItemTemplate.cloneNode(true);
  const cardName = addedCardTemplate.querySelector('.cards__name');
  const cardPic = addedCardTemplate.querySelector('.cards__pic');
  // элементы, куда вставляются значения

  cardName.textContent = cardNameInput.value;
  cardPic.src = cardPicInput.value;

  cards.prepend(addedCardTemplate);
  closeAddPopup();

}

popupAddForm.addEventListener('submit', addNewCard);

// добавляем свои карточки

const initialCards = [
  {
    name: 'Национальный Парк Бэдлэндс',
    link: 'https://i.ibb.co/x6YS8s3/Badlands-National-Park-South-Dakota-USA.jpg'
  },
  {
    name: 'Горы Блу Ридж',
    link: 'https://i.ibb.co/pj5KYMy/Blue-Ridge-Mountains.jpg'
  },
  {
    name: 'Йеллоустоун',
    link: 'https://i.ibb.co/MZB5HMW/Yellowstone.jpg'
  },
  {
    name: 'Тропа Дяди Тома',
    link: 'https://i.ibb.co/0jBFndg/Uncle-Toms-Trail.jpg'
  },
  {
    name: 'Водопад Малтнома',
    link: 'https://i.ibb.co/QDjSfWy/Multnomah-Falls.jpg'
  },
  {
    name: 'Остров Оаху',
    link: 'https://i.ibb.co/TkPqyZH/Oahu.jpg'
  }
];
// применяем для каждого элемента
  initialCards.forEach(function (element) {
    //клонируем темплейт
    const jsCards = cardsItemTemplate.cloneNode(true);

    //наполняем
    jsCards.querySelector('.cards__name').textContent = element.name;
    jsCards.querySelector('.cards__pic').src = element.link;
    jsCards.querySelector('.cards__pic').alt = element.name;

  cards.prepend(jsCards);
});


// лайки

const likeButton = Array.from(document.querySelectorAll('.cards__like-button'));

likeButton.forEach(function(button) {
  button.addEventListener('click', () => {
    button.classList.toggle('cards__like-button_active');
  })
})

// удаление карточек


const deleteCardButton = Array.from(document.querySelectorAll('.cards__bin'));
const cardsItemArr = Array.from(document.querySelectorAll('.cards__item'));

deleteCardButton.forEach(function(button) {
  button.addEventListener('click', () => {
    button.parentElement.remove();
  })
})

// попап картинки

const cardsPic = document.querySelectorAll('.cards__pic');
const cardsPicNameA = document.querySelectorAll('.cards__name');
const popupPic = document.querySelector('.popup_pic');
const popupImage = document.querySelector('.popup__image');
const popupDescription = document.querySelector('.popup__description');
const closePicButton = document.querySelector('.popup__close-icon_pic');

function openPicPopup(eventTarget) {
  popupPic.classList.add('popup_opened');
  popupImage.src = eventTarget.src;

  const container = eventTarget.closest('.cards__item');
  popupDescription.textContent = container.querySelector('.cards__name').textContent; 
} 

function closePicPopup() {
  popupPic.classList.remove('popup_opened');
}

cards.addEventListener('click', function(evt) {
const eventTarget = evt.target;

if (evt.target.classList != 'cards__pic') {
  return console.log('не та область!')
};

openPicPopup(eventTarget);

});

closePicButton.addEventListener('click', closePicPopup);