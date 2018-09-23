import {Component, Prop} from '@stencil/core';
import {ChantierData} from '../../../../providers/chantier-data';
// import { ConferenceData } from '../../providers/conference-data';
// import { UserData } from '../../providers/user-data';

@Component({
  tag: 'page-chantier-detail',
  styleUrl: 'page-chantier-detail.scss',
})
export class PageChantierDetail {

  @Prop() goback = '/';
  @Prop() _id: string;
  @Prop() detail: string;
  private gobackUrl;

  data: any;
  sousDetails: any;

  componentWillLoad() {
    this.gobackUrl = `${this.goback}/${this._id}`;
    return this.loadData();

  }

  async loadData() {
    this.data = await ChantierData.get(this._id);
    this.sousDetails = this.data.details.find(d => d.key === this.detail);
    this.sousDetails.details = this.sousDetails.details || [];
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref={this.gobackUrl}/>
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
              <hr class="thematique" style={{height: '15px', backgroundColor: this.data.color}}/>
              <ion-card-content class="center-text">
                <ion-label>
                  <p innerHTML={this.data.label}/>
                </ion-label>
                <ion-label><h2 class="slide-title" innerHTML={this.data.title}/></ion-label>
                <p innerHTML={this.data.text}/>

              </ion-card-content>
            </ion-card>
          </ion-list-header>

          <chantier-sous-titre color={this.data.color} text={this.sousDetails.title}/>
          {/*<ion-card class="chantier-detail" style={{ borderLeftColor: this.data.color }}>
            <ion-card-content>
              <ion-item>
                <ion-text> {this.sousDetails.title}</ion-text>
              </ion-item>
            </ion-card-content>
          </ion-card>
*/}
        </ion-list>

        <ion-list class="sub-detail-list">
          {this.sousDetails.details.map(item => (
            <ion-item-group class="sub-detail-group">
              <ion-item-divider>
                <ion-label>
                  <p class="sub-detail-title" style={{color: this.data.color}}> {item.title}</p>
                </ion-label>
              </ion-item-divider>
              <ul>
                {item.items.map(text => (
                  <li>
                    {text}
                  </li>
                ))}
              </ul>
            </ion-item-group>
          ))}
        </ion-list>
      </ion-content>
    ];
  }

}
