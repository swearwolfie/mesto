export default class UserInfo {
  constructor({ userName, userDescription, userAvatar }) {
    this._profileName = document.querySelector(userName);
    this._profileJob = document.querySelector(userDescription);
    this._profileAvatar = document.querySelector(userAvatar);
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

  setUserAvatar(avatar) {
    this._profileAvatar.src = avatar; // ссылка
  }
}
