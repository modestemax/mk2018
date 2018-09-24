// import {Data} from './data';
//
// export class GaleriesData extends Data {
//   private static galeries = [];
//
//   static async load() {
//     const data = await super.load();
//     let numero = 1;
//
//     data.galeries = data.galeries.map(({details, title: groupTitle, ...args}) => {
//       return {
//         ...args, title: groupTitle,
//         details: details.map(({title, ...args}) => {
//           const galeries = {
//             ...args, title,
//             numero: numero++,
//             groupTitle,
//             titleKey: encodeURIComponent(title)
//           };
//           this.galeries[galeries.numero] = galeries;
//           return galeries;
//         })
//       };
//     });
//     return data;
//   }
//
//   static async getData(): Promise<any> {
//     return this.load();
//   }
//
//   protected static getUrl(lng: string) {
//     return `/assets/data/galeries.${lng}.json`;
//   }
//
//   static async getGalerie(numero: number) {
//     await this.load();
//     return this.galeries[numero] || {};
//   }
// }


import {Firebase} from './firebase';

export class GaleriesData extends Firebase {

  static getCollectionName(lng) {
    return 'galeries_' + lng;
  }

  static filter(collection) {
    return collection.where('publish', '==', true)
      .orderBy('position', 'asc');
  }
}
