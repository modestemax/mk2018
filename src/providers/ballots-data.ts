import {Firebase} from './firebase';

export class Ballots extends Firebase {

  static async getRegions() {
    const regions = await this.firestoreBallots.collection('regions').get();
    return regions.docs;
  }

  static async getDivisions({region_id}: { region_id: string }) {
    const divisions = await this.firestoreBallots.collection(`regions/${region_id}/divisions`).get();
    return divisions.docs;
  }


  static async getCouncils({region_id, division_id}: { region_id: string; division_id: string }) {
    const councils = await this.firestoreBallots.collection(`regions/${region_id}/divisions/${division_id}/councils`).get();
    return councils.docs;
  }

  static async getPools({region_id, division_id, council_id}: { region_id: string; division_id: string; council_id: string }) {
    const pools = await this.firestoreBallots.collection(
      `regions/${region_id}/divisions/${division_id}/councils/${council_id}/pooling_stations`).get();
    return pools.docs;
  }

  static async saveScrutineer({region_id, division_id, council_id, pool_id, scrutineer}: { region_id: string; division_id: string; council_id: string; pool_id: string; scrutineer: any }) {
    const doc = this.firestoreBallots.doc(
      `regions/${region_id}/divisions/${division_id}/councils/${council_id}/pooling_stations/${pool_id}`);
    await doc.update({scrutineer});
  }

  static async deleteScrutineer({region_id, division_id, council_id, pool_id}: { region_id: string; division_id: string; council_id: string; pool_id: string }) {
    const doc = this.firestoreBallots.doc(
      `regions/${region_id}/divisions/${division_id}/councils/${council_id}/pooling_stations/${pool_id}`);
    await doc.update({scrutineer: null});
  }
}
