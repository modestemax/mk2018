import {Component, Prop} from '@stencil/core';
import {__} from "../../providers/i18n";
import {ForceAlternanceData} from "../../providers/force-alternance";


@Component({
  tag: 'page-forces',
  styleUrl: 'page-forces.scss',
})
export class PageForces {

  @Prop() goback = '/';
  private forces;

  componentWillLoad() {
    return this.loadData();
  }

  async loadData() {
    this.forces = await ForceAlternanceData.getData();
  }


  render() {
    return [
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">

          </ion-buttons>
          <ion-title>
            {__('LES_FORCES_POUR_L_ALTERNANCE_URNES_PAIX')}
          </ion-title>

          <ion-buttons slot="end">
            <ion-menu-button/>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>,

      <ion-content>


        <ion-list class="bank-list">
          {this.forces.map(({name, key, img, summary}) => (
            [
              <ion-item href={`/others/forces/${key}`}>
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
