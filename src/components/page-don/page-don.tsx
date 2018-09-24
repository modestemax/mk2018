import {Component, Prop, State} from '@stencil/core';

import {BankData} from '../../providers/bank-data';
import {__} from '../../providers/i18n';

@Component({
  tag: 'page-don',
  styleUrl: 'page-don.scss',
})
export class PageDon {

  @Prop() goback = '/';
  @State() banks = [];

  async componentWillLoad() {
    this.banks = await BankData.loadDefaultData();
  }

  componentDidLoad() {
    BankData.onChange(banks => this.banks = banks);

  }

  render() {
    return [
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">

          </ion-buttons>
          <ion-title>
            {__('FAITES_UN_DON')}
          </ion-title>

          <ion-buttons slot="end">
            <ion-menu-button/>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>,

      <ion-content>

        <ion-list class="bank-list">
          {this.banks.map(({name, img, summary}) => (
            [
              <ion-item>
                <ion-thumbnail slot="start">
                  <img src={`/assets/img/${img}`}/>
                </ion-thumbnail>
                <ion-label>
                  <h3 class="bank-name">  {name}</h3>
                  <p class="bank-summary" innerHTML={summary}/>
                </ion-label>
              </ion-item>,

              <hr/>
            ]
          ))}
        </ion-list>
      </ion-content>
    ];
  }

}
