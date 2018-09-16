import {Component, Prop} from '@stencil/core';
// import { ConferenceData } from '../../providers/conference-data';
// import { UserData } from '../../providers/user-data';

@Component({
  tag: 'page-forces',
  styleUrl: 'page-forces.scss',
})
export class PageForces {

  @Prop() goback = '/';
  private forces = [
    {
      name: 'crac',
      forceId: 'crac',
      logo: 'orange_4.png',
      summary: 'qsdq  qdsdqs dqsd'
    },
    {
      name: 'crac',
      forceId: 'crac',
      logo: 'orange_4.png',
      summary: 'qsdq  qdsdqs dqsd'
    },
    {
      name: 'crac',
      forceId: 'crac',
      logo: 'orange_4.png',
      summary: 'qsdq  qdsdqs dqsd'
    }
  ];

  async componentWillLoad() {

  }


  render() {
    return [
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">

          </ion-buttons>
          <ion-title>
            Les Forces pour l’Alternance Urnes Paix
          </ion-title>

          <ion-buttons slot="end">
            <ion-menu-button/>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>,

      <ion-content>


        <ion-list class="bank-list">
          {this.forces.map(({name, forceId, logo, summary}) => (
            [
              <ion-item href={`/others/forces/${forceId}`}>
                <ion-thumbnail slot="start">
                  <img src={`/assets/img/${logo}`}/>
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
