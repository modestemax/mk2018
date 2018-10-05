import {Firebase} from './firebase';

export class Ballots extends Firebase {

  static async getRegions() {
    const regions = await this.firestoreBallots.collection('regions').get();
    return regions.docs;
  }

  static async getDivisions({region_id}: { region_id: string }) {
    if (region_id) {
      const divisions = await this.firestoreBallots.collection(`regions/${region_id}/divisions`).get();
      return divisions.docs;
    }
  }


  static async getCouncils({region_id, division_id}: { region_id: string; division_id: string }) {
    if (region_id && division_id) {
      const councils = await this.firestoreBallots.collection(`regions/${region_id}/divisions/${division_id}/councils`).get();
      return councils.docs;
    }
  }

  static async getPools({region_id, division_id, council_id}: { region_id: string; division_id: string; council_id: string }) {
    if (region_id && division_id && council_id) {
      const pools = await this.firestoreBallots.collection(
        `regions/${region_id}/divisions/${division_id}/councils/${council_id}/pooling_stations`).get();
      return pools.docs;
    }
  }

  static async getPool({region_id, division_id, council_id, pool_id}: { region_id: string; division_id: string; council_id: string; pool_id: string }) {
    if (region_id && division_id && council_id && pool_id) {
      const pool = await this.firestoreBallots.doc(
        `regions/${region_id}/divisions/${division_id}/councils/${council_id}/pooling_stations/${pool_id}`).get();
      return pool;
    }
  }

  static async saveScrutineer({region_id, division_id, council_id, pool_id, scrutineer}: { region_id: string; division_id: string; council_id: string; pool_id: string; scrutineer: any }) {
    if (region_id && division_id && council_id && pool_id && scrutineer) {
      this.save({poolData: {region_id, division_id, council_id, pool_id}, entity: scrutineer, entityName: 'scrutineer'});
    }
  }

  static async saveProcesVerbal({region_id, division_id, council_id, pool_id, procesVerbal}: { region_id: string; division_id: string; council_id: string; pool_id: string; procesVerbal: any }) {
    if (region_id && division_id && council_id && pool_id && procesVerbal) {
      await this.save({
        poolData: {region_id, division_id, council_id, pool_id},
        entity: procesVerbal,
        entityName: 'procesVerbal'
      });
    }
  }

  static async save({poolData, entity, entityName}) {
    if (poolData && entity && entityName) {
      const {region_id, division_id, council_id, pool_id} = poolData;
      const doc = this.firestoreBallots.doc(
        `regions/${region_id}/divisions/${division_id}/councils/${council_id}/pooling_stations/${pool_id}`);
      await doc.update({[entityName]: entity});
      debugger
      if (entityName === 'procesVerbal') {
        this.saveProcesVerbalStat({
          poolData, procesVerbal: entity
        });
      }
    }
  }

  static async delete({poolData, entityName}: { poolData: { region_id: string; division_id: string; council_id: string; pool_id: string }; entityName: string }) {
    if (poolData && entityName) {
      const {region_id, division_id, council_id, pool_id} = poolData;

      const doc = this.firestoreBallots.doc(
        `regions/${region_id}/divisions/${division_id}/councils/${council_id}/pooling_stations/${pool_id}`);
      await doc.update({[entityName]: null});
      if (entityName === 'procesVerbal') {
        this.deleteProcesVerbalStat({poolData});
      }
    }
  }

  static async saveIncident({poolData, incident}: { poolData: any; incident: any }) {
    const {region_id, division_id, council_id, pool_id} = poolData;
    const collection = this.firestoreBallots.collection(
      `regions/${region_id}/divisions/${division_id}/councils/${council_id}/pooling_stations/${pool_id}/incidents`);
    await collection.add(incident);
  }

  private static saveProcesVerbalStat({poolData, procesVerbal}: { poolData: { region_id: string; division_id: string; council_id: string; pool_id: string }; procesVerbal: any }) {
    const {region_id, division_id, council_id, pool_id} = poolData;
    debugger
    const id = `${region_id}:${division_id}:${council_id}:${pool_id}`;
    this.firestoreBallotsStats.doc(`proces-verbeaux/${id}`).set({
      ...poolData,
      procesVerbal
    });

  }

  private static deleteProcesVerbalStat({poolData}: { poolData: { region_id: string; division_id: string; council_id: string; pool_id: string } }) {
    const {region_id, division_id, council_id, pool_id} = poolData;
    const id = `${region_id}:${division_id}:${council_id}:${pool_id}`;
    this.firestoreBallotsStats.doc(`proces-verbeaux/${id}`).delete();
  }
}
