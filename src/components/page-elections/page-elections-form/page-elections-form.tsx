import {Component, Prop, State} from '@stencil/core';
import {ElectionsData} from '../../../providers/elections-data';
import {Ballots} from '../../../providers/ballots-data';
import {__} from '../../../providers/i18n';
import {validateEmail} from '../../../providers/tools';
import {Plugins} from '@capacitor/core';
import _ from 'lodash';

const {Toast, /*Share*/} = Plugins;

@Component({
  tag: 'page-elections-form',
  styleUrl: 'page-elections-form.scss',
})
export class PageElectionsForm {

  // private session: any;
  @Prop() _id: string;
  @Prop() goback = '/';
  private data;
  // private name: HTMLInputElement;
  // private phone: HTMLInputElement;
  // private email: HTMLInputElement;
  // private city: HTMLInputElement;
  // private message: HTMLInputElement;
  private region: HTMLInputElement;
  private regions: any = [];
  private division: HTMLInputElement;
  @State() divisions: any = [];
  private council: HTMLInputElement;
  @State() councils: any = [];
  private pool: HTMLInputElement;
  @State() pools: any = [];
  @State() scrutineer: any;
  @State() editMode: boolean;
  private lastName: HTMLInputElement;
  private firstName: HTMLInputElement;
  private orange: HTMLInputElement;
  private mtn: HTMLInputElement;
  private nextel: HTMLInputElement;
  private camtel: HTMLInputElement;
  private email: HTMLInputElement;


  async componentWillLoad() {
    this.data = await ElectionsData.get(this._id) || {};
    this.data.content = this.data.content || [];

    this.regions = await Ballots.getRegions();
  }

  async onRegionChanged() {
    if (this.region.value) {
      this.divisions = await Ballots.getDivisions({region_id: this.region.value});
    } else {
      this.divisions = [];
    }
    this.division.value = null;
  }

  async onDivisionChanged() {
    if (this.region.value && this.division.value) {
      this.councils = await Ballots.getCouncils({region_id: this.region.value, division_id: this.division.value});
    } else {
      this.councils = [];
    }
    this.council.value = null;
  }

  async onCouncilChanged() {
    if (this.region.value && this.division.value && this.council.value) {
      this.pools = await Ballots.getPools({
        region_id: this.region.value,
        division_id: this.division.value,
        council_id: this.council.value
      });
    } else {
      this.pools = [];
    }
    this.pool.value = null;
  }

  onPoolingStationChanged() {

    if (this.pool.value) {
      const pool = this.pools.find(p => p.id === this.pool.value);
      this.scrutineer = pool && pool.data().scrutineer;

      this.editMode = !this.scrutineer;

    } else {
      this.scrutineer = null;
      this.editMode = false;
    }

  }

  render() {
    let button1Text = __('UPDATE'), button1Click = this.edit.bind(this);
    let button2Text = __('DELETE'), button2Click = this.delete.bind(this);
    if (this.editMode) {
      button1Text = __('SAVE');
      button1Click = this.save.bind(this);
      button2Text = __('CANCEL');
      button2Click = this.cancel.bind(this);
    }

    return [
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref={this.goback}/>
          </ion-buttons>
          <ion-title>
            {__('XXXXXXXX')}
          </ion-title>

          <ion-buttons slot="end">
            <ion-menu-button/>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>,

      <ion-content>
        <ion-card class="content-detail">
          {/*<ion-card-header class={`header ${this._id} `} style={{backgroundColor: this.data.color}}>
            <div class="logo">
              <img-video img={this.data.img} height="20%"/>
            </div>
          </ion-card-header>*/}
          <ion-card-content>
            {this.formFilter()}
            <hr/>
            {this.editMode ? this.formScrutineer() : (this.scrutineer ? this.displayScrutineer() : '')}
          </ion-card-content>
        </ion-card>
      </ion-content>,

      this.editMode || this.scrutineer ? <ion-footer>
        <ion-toolbar color="light">
          <ion-buttons slot="start">
            <ion-button onClick={button1Click} color="primary">{button1Text}</ion-button>
          </ion-buttons>
          <ion-buttons slot="end">
            <ion-button onClick={button2Click} color="dark">{button2Text}</ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-footer> : ''
    ];
  }

  private formFilter() {
    return (
      <ion-list class="form">
        <ion-list-header class="en-tete">

        </ion-list-header>
        <ion-item>
          <ion-label position="stacked">{__('REGION')}</ion-label>
          <ion-select onIonChange={this.onRegionChanged.bind(this)} ref={(el: HTMLInputElement) => this.region = el}
                      interface="action-sheet">
            {this.regions.map(region => (<ion-select-option value={region.id}>{region.data().name}</ion-select-option>))}
          </ion-select>
        </ion-item>
        <ion-item>
          <ion-label position="stacked">{__('DIVISION')}</ion-label>
          <ion-select onIonChange={this.onDivisionChanged.bind(this)} ref={(el: HTMLInputElement) => this.division = el}
                      interface="action-sheet">
            {this.divisions.map(division => (
              <ion-select-option value={division.id}>{division.data().name}</ion-select-option>))}
          </ion-select>
        </ion-item>
        <ion-item>
          <ion-label position="stacked">{__('COUNCIL')}</ion-label>
          <ion-select onIonChange={this.onCouncilChanged.bind(this)} ref={(el: HTMLInputElement) => this.council = el}
                      interface="action-sheet">
            {this.councils.map(council => (
              <ion-select-option value={council.id}>{council.data().name}</ion-select-option>))}
          </ion-select>
        </ion-item>
        <ion-item>
          <ion-label position="stacked">{__('POLLING_STATION')}</ion-label>
          <ion-select onIonChange={this.onPoolingStationChanged.bind(this)} ref={(el: HTMLInputElement) => this.pool = el}
                      interface="action-sheet">
            {this.pools.map(poolingStation => (
              <ion-select-option value={poolingStation.id}>{poolingStation.data().name}</ion-select-option>))}
          </ion-select>
        </ion-item>


      </ion-list>
    );
  }

  displayScrutineer() {
    return (
      <ion-grid>
        <ion-row>
          <ion-col>Last Name</ion-col>
          <ion-col>:{this.scrutineer.lastName}</ion-col>
        </ion-row>
        <ion-row>
          <ion-col>First Name</ion-col>
          <ion-col>:{this.scrutineer.firstName}</ion-col>
        </ion-row>
        <ion-row>
          <ion-col>ORANGE</ion-col>
          <ion-col>:{this.scrutineer.orange}</ion-col>
        </ion-row>
        <ion-row>
          <ion-col>MTN</ion-col>
          <ion-col>:{this.scrutineer.mtn}</ion-col>
        </ion-row>
        <ion-row>
          <ion-col>NEXTEL</ion-col>
          <ion-col>:{this.scrutineer.nextel}</ion-col>
        </ion-row>
        <ion-row>
          <ion-col>CAMTEL</ion-col>
          <ion-col>:{this.scrutineer.camtel}</ion-col>
        </ion-row>
        <ion-row>
          <ion-col>Email</ion-col>
          <ion-col>:{this.scrutineer.email}</ion-col>
        </ion-row>
      </ion-grid>
    );
  }

  formScrutineer() {
    this.scrutineer = this.scrutineer || {};
    return (<ion-list class="form">

      <ion-item>
        <ion-label position="floating"> {__('LAST_NAME')}</ion-label>
        <ion-input value={this.scrutineer.lastName} ref={(el: HTMLInputElement) => this.lastName = el}/>
      </ion-item>
      <ion-item>
        <ion-label position="floating">{__('FIRST_NAME')}</ion-label>
        <ion-input value={this.scrutineer.firstName} ref={(el: HTMLInputElement) => this.firstName = el}/>
      </ion-item>
      <ion-item>
        <ion-label position="floating">ORANGE</ion-label>
        <ion-input value={this.scrutineer.orange} ref={(el: HTMLInputElement) => this.orange = el}/>
      </ion-item>
      <ion-item>
        <ion-label position="floating">MTN</ion-label>
        <ion-input value={this.scrutineer.mtn} ref={(el: HTMLInputElement) => this.mtn = el}/>
      </ion-item>
      <ion-item>
        <ion-label position="floating">NEXTEL</ion-label>
        <ion-input value={this.scrutineer.nextel} ref={(el: HTMLInputElement) => this.nextel = el}/>
      </ion-item>
      <ion-item>
        <ion-label position="floating">CAMTEL</ion-label>
        <ion-input value={this.scrutineer.camtel} ref={(el: HTMLInputElement) => this.camtel = el}/>
      </ion-item>
      <ion-item>
        <ion-label position="floating">Email</ion-label>
        <ion-input value={this.scrutineer.email} ref={(el: HTMLInputElement) => this.email = el}/>
      </ion-item>

    </ion-list>);
  }

  async show(text) {
    await Toast.show({text, duration: 'long'});
  }

  async save() {
    let error = '';
    const [lastName, firstName, orange, mtn, nextel, camtel, email] =
      [this.lastName.value, this.firstName.value, this.orange.value, this.mtn.value, this.nextel.value, this.camtel.value, this.email.value];
    if (!_.trim(lastName)) {
      error = __('NAME_ERROR');
    } else if (!(_.trim(orange) || _.trim(mtn) || _.trim(nextel) || _.trim(camtel))) {
      error = __('PHONE_ERROR');
    } else if (email && !validateEmail(email)) {
      error = __('EMAIL_ERROR');
    }
    if (error) {
      return this.show(error);
    }
    this.scrutineer = {lastName, firstName, orange, mtn, nextel, camtel, email};
    await Ballots.saveScrutineer({
      region_id: this.region.value,
      division_id: this.division.value,
      council_id: this.council.value,
      pool_id: this.pool.value,
      scrutineer: this.scrutineer
    });
    this.show(__('SAVE_SUCCESS'));
    this.editMode = false;
  }

  async delete() {
    await Ballots.deleteScrutineer({
      region_id: this.region.value,
      division_id: this.division.value,
      council_id: this.council.value,
      pool_id: this.pool.value,
    });
    this.scrutineer = null;
    this.editMode = true;
    this.show(__('DELETE_SUCCESS'));
  }

  edit() {
    this.editMode = true;
  }

  cancel() {
    this.editMode = false;
  }

}

