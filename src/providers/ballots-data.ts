import {Firebase} from './firebase';

export class Ballots extends Firebase {

  static async getRegions() {
    const regions = await this.firestoreBallots.collection('regions').get();
    return regions.docs;
  }

  static async getDivisions(region_id: string) {
    const divisions = await this.firestoreBallots.collection(`regions/${region_id}/divisions`).get();
    return divisions.docs;
  }
}
