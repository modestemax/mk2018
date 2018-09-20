import { Component, Prop } from '@stencil/core';
import { ChantierData } from '../../../providers/chantier-data';
// import { ConferenceData } from '../../providers/conference-data';
// import { UserData } from '../../providers/user-data';

@Component({
  tag: 'page-chantier',
  styleUrl: 'page-chantier.scss',
})
export class PageChantier {

  @Prop() goback = '/';
  @Prop() num = 5;
  data: any;

  componentWillLoad() {
    return this.loadData();
  }

  async loadData() {
    this.data = await ChantierData.getChantier(this.num);
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref={this.goback}/>
          </ion-buttons>
          <ion-title>
            {this.data.pageTitle}
          </ion-title>

          <ion-buttons slot="end">
            <ion-menu-button/>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>,

      <ion-content>
        <ion-list>
          <ion-list-header no-padding>

            <ion-card class="header">
              <ion-card-header>
                <ion-thumbnail class="img-wrapper"><img src={`/assets/img/${this.data.img}`} class="slide-image"/>
                </ion-thumbnail>
              </ion-card-header>
              <hr class="thematique" style={{ height: '15px', backgroundColor: this.data.color }}/>
              <ion-card-content class="center-text">
                <ion-label>
                  <p innerHTML={this.data.label}/>
                </ion-label>
                <ion-label><h2 class="slide-title" innerHTML={this.data.title}/></ion-label>
                <p innerHTML={this.data.text}/>

              </ion-card-content>
            </ion-card>
          </ion-list-header>

          {this.data.details.map(({ title, key }) => (
            <chantier-sous-titre color={this.data.color} text={title} numChantier={this.data.numChantier} key={key}/>
          ))}
        </ion-list>
      </ion-content>
    ];
  }

}