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

  setUserInfo(data) {
    this._profileName.textContent = data.profile;
    this._profileJob.textContent = data.description;
  }
}
