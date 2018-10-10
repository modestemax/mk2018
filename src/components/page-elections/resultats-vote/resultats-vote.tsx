import {Component, Listen, Prop, State} from '@stencil/core';
import {ElectionForm} from '../forms/election-form';
import {Ballots} from '../../../providers/ballots-data';
import {ElectionsData} from '../../../providers/elections-data';
import _ from 'lodash';

@Component({
  tag: 'resultats-vote',
  styleUrl: 'resultats-vote.scss',
})
export class ResultatsVote {
  formType = 'resultat';
  entityName = 'resultatsVote';
  @Prop() goback = '/';
  @State() editMode: boolean;
  @State() entity: any;
  @State() result: any = {};
  @State() sort: boolean;

  constructor() {
    new ElectionForm(this, {pool_id: true, command: false, cancel_select: true});
    this.entity = {};
    this['poolData'] = {};
  }


  async componentWillLoad() {
    this['formData'] = await ElectionsData.getFormData(this['formType']) || {};
    await this.loadResults();
  }

  componentDidLoad() {
    Ballots.firestoreBallotsStats.collection('proces-verbaux').onSnapshot(this.loadResults.bind(this));
  }

  @Listen('regionChanged')
  async onRegionChanged(event: CustomEvent) {
    this.filterChanged(event);
  }

  @Listen('divisionChanged')
  async onDivisionChanged(event: CustomEvent) {
    this.filterChanged(event);
  }

  @Listen('councilChanged')
  async onCouncilChanged(event: CustomEvent) {
    this.filterChanged(event);
  }

  @Listen('poolingStationChanged')
  async onPoolingStationChanged(event: CustomEvent) {
    this.filterChanged(event);
  }

  async filterChanged(event) {
    this['poolData'] = event.detail.poolData;
    await this.loadResults();
  }

  displayData() {

    const {kamto, akere, matomba, cabral, biya, ndam, ndifor, osih, garga, inscrits, votants, votes, blancs, nuls,} = this.result;
    let candidats = [
      {img: 'kamto.png', score: kamto, name: 'Maurice Kamto', party: 'MRC', color: 'red'},
      {img: 'akere.png', score: akere, name: 'Akere Muna', party: 'XXX', color: 'blue'},
      {img: 'matomba.png', score: matomba, name: 'Serge Espoir Matomba', party: 'PURS', color: 'blue'},
      {img: 'cabral.png', score: cabral, name: 'Cabral Libii Li Ngue', party: 'UNIVERS', color: 'blue'},
      {img: 'biya.png', score: biya, name: 'Paul Biya', party: 'RDPC', color: 'blue'},
      {img: 'ndam.png', score: ndam, name: 'Adamou Ndam Njoya', party: 'UDC', color: 'blue'},
      {img: 'ndifor.png', score: ndifor, name: 'Franklin Ndifor', party: 'XXX', color: 'blue'},
      {img: 'osih.png', score: osih, name: 'Joshua Osih', party: 'SDF', color: 'blue'},
      {img: 'garga.png', score: garga, name: 'Garga Haman Adji', party: 'XXX', color: 'blue'},
    ];
    if (this.sort) {
      candidats = _.orderBy(candidats, 'score', 'desc');
    }
    const electeurs = [
      {group: 'Inscrits', count: inscrits},
      {group: 'Votants', count: votants},
      {group: 'Votes Exprimés', count: votes},
      {group: 'Votes Blancs', count: blancs},
      {group: 'Votes Nuls', count: nuls},
    ];

    return Object.keys(this.result).length === 0 ? '' : [
      <ion-item>
        <ion-label>Classer par Ordre</ion-label>
        <ion-checkbox checked slot="end" color="primary" onIonChange={(e) =>{ this.sort = e.detail.checked}}></ion-checkbox>
      </ion-item>,

      <ion-list>
        {candidats.map(({img, score, name, party, color}) => {
          const percentage = this.getPercentage(score);

          return (<ion-item>
              <ion-thumbnail>
                <img-video img={img}/>
              </ion-thumbnail>
              <ion-label>
                <h3 class="candidat-name">{name} - {party}</h3>
                <p class="candidat-name">Voix = {score}</p>
                <ion-item>
                  <div slot="start" class="percentage-view">
                    <hr style={{width: `${percentage}%`, backgroundColor: color}}/>
                  </div>
                  <ion-text slot="end" class="percentage-text">{percentage}%</ion-text>
                </ion-item>
              </ion-label>
            </ion-item>
          );
        })}
      </ion-list>,

      <ion-grid>
        {electeurs.map(({group, count}) => {
          const percentage = +(count / inscrits * 100).toFixed(2);
          let percentageText = '';
          if (percentage !== 100) {
            percentageText = `(${percentage}%)`;
          }

          return (<ion-row>
              <ion-col>{group}</ion-col>
              <ion-col>:{count}</ion-col>
              <ion-col>{percentageText}</ion-col>
            </ion-row>
          );
        })}
      </ion-grid>

    ];
  }

  private async loadResults() {
    const {region_id, division_id, council_id, pool_id} = this['poolData'];
    const results = await Ballots.loadResult({region_id, division_id, council_id, pool_id});
    this.buildResults(results);

  }

  private buildResults(results: any) {
    const resultZone = {};
    results.forEach((doc) => {
      const {procesVerbal} = doc.data();
      for (const [key, val] of Object.entries(procesVerbal)) {
        resultZone[key] = resultZone[key] || 0;
        resultZone[key] += +val || 0;
      }
    });
    this.result = resultZone;
  }

  private getPercentage(score: number) {
    const {kamto, akere, matomba, cabral, biya, ndam, ndifor, osih, garga} = this.result;
    const total = +kamto + +akere + +matomba + +cabral + +biya + +ndam + +ndifor + +osih + +garga;
    return +(+score / total * 100).toFixed(2);
  }
}

