import {Data} from './data';

export class TutorialData extends Data {


  protected static getUrl(lng: string) {
    return `/assets/data/tutorial.${lng}.json`;
  }

  static async loadSlides() {
    await this.load();
    return this.data.slides
  }
}
