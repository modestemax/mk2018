// import {map, snakeCase} from 'lodash';
import {Data} from './data';

export class EngagementsData extends Data {
  protected static getUrl(lng: string) {
    return `/assets/data/engagements.${lng}.json`;
  }

  static async getData() {
    const data = await this.load();
    data.engagements = data.engagements.map(({sousEngagements, ...args}) => {
      return {
        ...args,
        sousEngagements: sousEngagements.map(({details, ...args}) => {
          return {
            ...args,
            details: details.map(({title, ...args}) => {
              return {
                ...args, title,
                titleKey: encodeURIComponent(title)
              };
            })
          };
        })
      };
    });
    return data;
  }
}
