const popupBase = document.querySelector('.popup');
const buttonEditProfile = document.querySelector('.profile__edit-button');
const buttonClosePopup = document.querySelector('.popup__close-icon');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__description');
const nameInput = document.querySelector('.popup__input_line_name');
const jobInput = document.querySelector('.popup__input_line_description');
const popupEdit = document.querySelector('.popup_edit');
const popupAdd = document.querySelector('.popup_add');
const buttonAddCard = document.querySelector('.profile__add-button');
const buttonClosePopupAdd = document.querySelector('.popup__close-icon_add')
const cardNameInput = document.querySelector('.popup__input_add_name');
const cardPicInput = document.querySelector('.popup__input_add_pic');
const popupPic = document.querySelector('.popup_pic');
const popupPicImage = document.querySelector('.popup__image');
const popupPicName = document.querySelector('.popup__description');
const buttonClosePicPopup = document.querySelector('.popup__close-icon_pic');

// ↓ ф-ции открытия и закрытия

function openPopup(popupBase) {
  popupBase.classList.add('popup_opened');
}

function closePopup(popupBase) {
  popupBase.classList.remove('popup_opened');
}

// ↓ выскакивание окошка edit

buttonEditProfile.addEventListener('click', () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;

openPopup(popupEdit);
});

buttonClosePopup.addEventListener('click', () => {
  closePopup(popupEdit);
});

// ↓ выскакивание окошка add

 buttonAddCard.addEventListener('click', () => {
  openPopup(popupAdd);
});
 buttonClosePopupAdd.addEventListener('click', () => {
  closePopup(popupAdd);
});

// ↓ сабмит для редактирования профиля

const popupForm = document.querySelector('.popup__form') // элементы, куда должны быть вставлены значения полей

function handleFormSubmit (evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;  // новые значения

  closePopup(popupEdit);

}

popupForm.addEventListener('submit', handleFormSubmit); // прикрепляем обработчик к форме:

// ↓ сабмит для добавления карточек

const cards = document.querySelector('.cards');
const cardsItemTemplate = document.querySelector('.cards__item-template').content;
const cardItemFaux = cardsItemTemplate.querySelector('.cards__item_template')
const popupAddForm = document.querySelector('.popup__form_add');
const cardName = cardItemFaux.querySelector('.cards__name');
const cardPic = cardItemFaux.querySelector('.cards__pic');


// ↓ удаление карточек

function handleDelete(event) {
  const currentCardItem = event.target.closest('.cards__item');
  currentCardItem.remove();
}

// ↓ лайки

function handleLike(event) {
  const currentCardItem = event.target.closest('.cards__item');
  const likeButtonClosest = currentCardItem.querySelector('.cards__like-button');
  likeButtonClosest.classList.toggle('cards__like-button_active');

}

// ↓ попап картинки

function handleFullPic(evt) {
  const eventTarget = evt.target;
  popupPicImage.src = eventTarget.src;
  const container = evt.target.closest('.cards__item');
  popupPicName.textContent = container.querySelector('.cards__name').textContent; 
  popupPicImage.alt = container.querySelector('.cards__name').textContent;
  openPopup(popupPic);

  buttonClosePicPopup.addEventListener('click', () => {
    closePopup(popupPic);
  });
}

// ↓ ф-ция слушателей лайка и корзины

function setEventListeners(element) {
  const deleteButton = element.querySelector('.cards__bin');
  deleteButton.addEventListener('click', handleDelete);

  const likeButton = element.querySelector('.cards__like-button');
  likeButton.addEventListener('click', handleLike);

  const img = element.querySelector('.cards__pic');
  img.addEventListener('click', handleFullPic);
} 

// ↓ ф-ция добавления карточки

function createNewCard(title, link) {
  const addedCardItem = cardItemFaux.cloneNode(true);
  const addedCardImage = addedCardItem.querySelector('.cards__pic');
  addedCardImage.src = link;
  addedCardImage.alt = title;
  const addedCardName = addedCardItem.querySelector('.cards__name');
  addedCardName.textContent = title;

  setEventListeners(addedCardItem);
  
  return addedCardItem;
}

function render(title, link) {
  const newCard = createNewCard(title, link);
  cards.prepend(newCard);
}

// ↓ сабмит добавления карточки

popupAddForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const submittedName = cardNameInput.value;
  const submittedPic = cardPicInput.value;

  render(submittedName, submittedPic);

  closePopup(popupAdd);

  cardNameInput.value = '';
  cardPicInput.value = '';
});

// ↓ лайки и корзина для оригинальных карточек из ПР4
/*
const cardItemArr = Array.from(document.querySelectorAll('.cards__item'));
cardItemArr.forEach(setEventListeners); */

// ↓ добавляем свои карточки

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

initialCards.forEach(function (evt) {
  const initialCardsName = evt.name;
  const initialCardsPic = evt.link;
  render(initialCardsName, initialCardsPic);

  closePopup(popupAdd);
});