export default class UserInfo {
  constructor({ userName, userDescription }) {
    this._profileName = document.querySelector(userName);
    this._profileJob = document.querySelector(userDescription);
  }

  getUserInfo() {
    const gottenInfo = {
      userName: this._profileName.textContent,
      userDescription: this._profileJob.textContent,
    };

    return gottenInfo;
  }

  setUserInfo(name, description) {
    this._profileName.textContent = name;
    this._profileJob.textContent = description;
  }
}
