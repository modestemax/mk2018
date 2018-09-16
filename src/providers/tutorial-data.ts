import {UserData} from './user-data';

export class TutorialData {
  private static slides;

  static async load() {
    if (this.slides) {
      return this.slides;
    } else {
      const rsp = await fetch(`/assets/data/tutorial.${UserData.lng}.json`);
      const json = await rsp.json();
      return (this.slides = json);
    }
  }
}
