
export default class UserInfo {
  constructor({ userName, userDescription }) {
    this._userName = document.querySelector(userName);
    this._userDescription = document.querySelector(userDescription);
    this._profileName = document.querySelector('.profile__name');
    this._profileJob = document.querySelector('.profile__description');
  }


  getUserInfo() {
    const getInfo = {
    userName: this._profileName.textContent,
    userDescription: this._profileJob.textContent
  }

    return getInfo;
  }

  setUserInfo() {
    this._profileName.textContent = this._userName.value;
    this._profileJob.textContent = this._userDescription.value;
  }
}