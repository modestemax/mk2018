import { Component, Prop, State } from '@stencil/core';
import { __ } from '../../providers/i18n';
import { ForceAlternanceData } from '../../providers/force-alternance';


@Component({
  tag: 'page-forces',
  styleUrl: 'page-forces.scss',
})
export class PageForces {

  @Prop() goback = '/';
  @State() forces=[];

  async componentWillLoad() {
    this.forces = await ForceAlternanceData.loadDefaultData();
  }

  componentDidLoad() {
    ForceAlternanceData.onChange(forces => this.forces = forces);

  }


  render() {
    return [
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">

          </ion-buttons>
          <ion-title>
            {__('LA_COALITION_FAUP')}
          </ion-title>

          <ion-buttons slot="end">
            <ion-menu-button/>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>,

      <ion-content>


        <ion-list class="bank-list">
          {this.forces.map(({ name, _id, img, summary }) => (
            [
              <ion-item href={`/others/forces/${_id}`}>
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
