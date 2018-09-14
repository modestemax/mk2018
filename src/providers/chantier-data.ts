class ChantierData {
  data: any;

  constructor() {
  }


  async load() {
    if (this.data) {
      return this.data;
    } else {
      const rsp = await fetch('/assets/data/chantiers.json');
      const json = await rsp.json();
      return (this.data = json);
    }
  }

  async getChantier(num) {
    let data = await this.load();
    return data.chantiers.find(c => c.numChantier == num);
  }
}

export const chantierData = new ChantierData();
