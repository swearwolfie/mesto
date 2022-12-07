export default class Api {
  constructor({ url, headers }) {
    this._url = url; // https://mesto.nomoreparties.co/v1/cohort-54/cards
    this._headers = headers;
  }

  getCards() {
    return fetch(this._url, {
      headers: this._headers
    }).then((response) => {
      if (response.ok) {
        return response.json(); // Promise.resolve
      } else {
        Promise.reject(`Ошибка: ${response.status} ${response.statusText}`);
      }
    })
  }

  deleteCard() {}
  addNewCard() {}
}