import {UserData, UserDataController} from './user-data';


class MkDataControler {
  data: any;

  constructor(public user: UserDataController) {
  }


}

export const ConferenceData = new MkDataControler(UserData);
