import UserModel from './user_model';

export default class MainModel {
  constructor() {
    this.user = new UserModel();
  }
}
