import {Data} from "./data";

export class ContactsData extends Data {

  static async getContacts() {
    let data = await this.load();
    return data.contacts;
  }

  protected static getUrl(lng: string) {
    return `/assets/data/contacts.${lng}.json`;
  }
}
