import { Component, Prop } from '@stencil/core';
import { chantierData } from '../../providers/chantier-data';
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
    this.data = await chantierData.getChantier(this.num);
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref={this.goback}></ion-back-button>
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
                <ion-thumbnail class="img-wrapper"><img src={`/assets/img/${this.data.logo}`} class="slide-image"/>
                </ion-thumbnail>
              </ion-card-header>
              <ion-card-content class="center-text">
                <ion-label>
                  <p innerHTML={this.data.label}/>
                </ion-label>
                <ion-label><h2 class="slide-title" innerHTML={this.data.title}/></ion-label>
                <p innerHTML={this.data.text}/>

              </ion-card-content>
            </ion-card>
          </ion-list-header>

          {this.data.details.map(({ title, key, color }) => (
            <ion-card class="chantier-detail" style={{ borderLeftColor: color }}>
              <ion-card-content>
                <ion-item href={`/mon-projet/chantier/${this.data.numChantier}/detail/${key}`}>
                  <ion-text> {title}</ion-text>
                </ion-item>
              </ion-card-content>
            </ion-card>
          ))}
        </ion-list>
      </ion-content>
    ];
  }

}
