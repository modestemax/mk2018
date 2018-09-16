import {Component} from '@stencil/core';
import {PenaltyData} from '../../providers/penalty-data';
import {__} from '../../providers/i18n';


@Component({
  tag: 'page-penalty',
  styleUrl: 'page-penalty.scss'
})
export class PagePenalty {

  private penaltySteps: any = [];

  componentWillLoad() {
    return this.loadData();
  }

  async loadData() {
    this.penaltySteps = await PenaltyData.getData();
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="end">
            <ion-menu-button/>
          </ion-buttons>
          <ion-title>{__('LE_PENALTY_DU_07_OCTOBRE_2018')}</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="outer-content">
        <ion-list class="penalty-items">
          <ion-grid no-padding>
            <ion-row class="penalty-items-row" align-items-stretch>
              {this.penaltySteps.map(({img, title, details}) => (
                <ion-col no-padding col-7 align-self-stretch class="penalty-item">

                  <ion-card class="penalty-card">
                    <ion-card-header no-padding>
                      <ion-label class="img-container"><img src={`/assets/img/${img}`} alt=""/></ion-label>
                    </ion-card-header>

                    <ion-card-content>
                      <ion-list class="content-list">
                        <ion-list-header class="list-header"><h2>{title}</h2></ion-list-header>
                        <ul>
                          {details.map(detail => (
                            <li>{detail}</li>
                          ))}
                        </ul>
                      </ion-list>
                    </ion-card-content>
                  </ion-card>

                </ion-col>
              ))}
            </ion-row>
          </ion-grid>
        </ion-list>
      </ion-content>
    ];
  }
}
