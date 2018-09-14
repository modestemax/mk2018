import {Component, Prop} from '@stencil/core';
import {chantierData} from '../../providers/chantier-data';
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
          <ion-item>

            <ion-card>
              <ion-card-header>
                <ion-thumbnail class="img-wrapper"><img src={`/assets/img/${this.data.logo}`} class="slide-image"/></ion-thumbnail>
              </ion-card-header>
              <ion-card-content>
                <ion-label>
                  <p innerHTML={this.data.label}/>
                </ion-label>
                <ion-label><h2 class="slide-title" innerHTML={this.data.title}/></ion-label>
                <p innerHTML={this.data.text}/>

              </ion-card-content>

            </ion-card>

          </ion-item>
          {this.data.details.map(({title, detail}) => (
            <ion-item href={`/mon-projet/chantier/${this.data.numChantier}/detail/${detail}`}>
              {title}
            </ion-item>
          ))}
        </ion-list>
      </ion-content>
    ];
  }

}
