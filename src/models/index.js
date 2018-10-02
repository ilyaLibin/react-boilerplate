import ApplicationsModel from './applications_model';
import UserModel from './user_model';
import PeriodModel from './period_model';

export default class MainModel {
  constructor() {
    this.user = new UserModel();
  }
}
