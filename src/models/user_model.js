import { observable, action, decorate } from 'mobx';

class UserModel {
  setData(userData) {
    this.username = userData.name;
    this.avatar = userData.picture
  }
}

export default decorate(UserModel, {
  username: observable,
  avatar: observable,
  setData: action
});
