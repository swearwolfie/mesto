export default class Api {
  constructor({ url, headers }) {
    this._url = url; // https://mesto.nomoreparties.co/v1/cohort-54/
    this._headers = headers;
  }

  /* checkResponse() { // ?????????? ВЫНЕСТИ В ОТДЕЛЬНУЮ ФУНКЦИЮ НО ШОБ РАБОТАЛО
    if (response.ok) {
      return response.json(); // Promise.resolve
    } else {
      Promise.reject(`Ошибка: ${response.status} ${response.statusText}`);
    }
  } */

  getCards() {
    return fetch(`${this._url}${'cards'}`, {
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
  
  addNewCard(name, link) {
    return fetch(`${this._url}${'cards'}`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({ 
        name, 
        link 
      }),
    }).then((response) => {
      if (response.ok) {
        return response.json(); // Promise.resolve
      } else {
        Promise.reject(`Ошибка: ${response.status} ${response.statusText}`);
      }
    })
  }

  getProfileInfo() {
    return fetch(`${this._url}${'users/me'}`, {
      headers: this._headers
    }).then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        Promise.reject(`Ошибка: ${response.status} ${response.statusText}`);
      }
    })
  }

  editProfile(name, about) {
    return fetch(`${this._url}${'users/me'}`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name,
        about
      })
    }).then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        Promise.reject(`Ошибка: ${response.status} ${response.statusText}`);
      }
  })
}
}