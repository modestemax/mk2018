import {Component, Prop, State} from '@stencil/core';
import {ElectionsData} from '../../../providers/elections-data';
import {Ballots} from '../../../providers/ballots-data';
import {__} from '../../../providers/i18n';

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
  private email: HTMLInputElement;
  private city: HTMLInputElement;
  private message: HTMLInputElement;
  private region: HTMLInputElement;
  private regions: any = [];
  private division: HTMLInputElement;
  @State() divisions: any = [];


  async componentWillLoad() {
    this.data = await ElectionsData.get(this._id) || {};
    this.data.content = this.data.content || [];

    this.regions = await Ballots.getRegions();
  }

  async getDivision() {
    this.divisions = await Ballots.getDivisions(this.region.value)
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref={this.goback}/>
          </ion-buttons>
          <ion-title>
            {this.data.section}
          </ion-title>

          <ion-buttons slot="end">
            <ion-menu-button/>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>,

      <ion-content>
        <ion-card class="content-detail">
          <ion-card-header class={`header ${this._id} `} style={{backgroundColor: this.data.color}}>
            <div class="logo">
              <img-video img={this.data.img} height="20%"/>
            </div>
          </ion-card-header>
          <ion-card-content>
            <ion-list class="form">
              <ion-list-header class="en-tete">
                {'this.subject'}
              </ion-list-header>
              <ion-item>
                <ion-label position="floating"> {__('NOM_PRÉNOM')}</ion-label>
                <ion-select onIonChange={this.getDivision.bind(this)} ref={(el: HTMLInputElement) => this.region = el}
                            interface="action-sheet">
                  {this.regions.map(region => (<ion-select-option value={region.id}>{region.data().name}</ion-select-option>))}
                </ion-select>
              </ion-item>
              <ion-item>
                <ion-label position="floating">{__('TEL_MOBILE_WHATSAPP')}</ion-label>
                <ion-select ref={(el: HTMLInputElement) => this.division = el} interface="action-sheet">
                  {this.divisions.map(division => (
                    <ion-select-option value={division.id}>{division.data().name}</ion-select-option>))}
                </ion-select>
              </ion-item>
              <ion-item>
                <ion-label position="floating">{__('EMAIL')}</ion-label>
                <ion-input ref={(el: HTMLInputElement) => this.email = el}/>
                {/*<ion-input ref={(el: HTMLInputElement) => this.email = el} /!*type="email"*!//>*/}
              </ion-item>
              <ion-item>
                <ion-label position="floating">{__('VILLE_DE_RESIDENCE')}</ion-label>
                <ion-input ref={(el: HTMLInputElement) => this.city = el}/>
              </ion-item>
              <ion-item>
                <ion-label position="floating">{__('MESSAGE')}</ion-label>
                <ion-textarea ref={(el: HTMLInputElement) => this.message = el}/>
              </ion-item>

            </ion-list>
          </ion-card-content>
        </ion-card>
      </ion-content>
    ];
  }
}

