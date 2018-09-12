import {Component, Prop} from '@stencil/core';
// import { ConferenceData } from '../../providers/conference-data';
// import { UserData } from '../../providers/user-data';

@Component({
  tag: 'page-forces',
  styleUrl: 'page-forces.css',
})
export class PageForces {

  @Prop() goback = '/';
  private forces = [
    {
      name: 'crac',
      forceId: 'crac',
      logo: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y',
      summary: 'qsdq  qdsdqs dqsd'
    },
    {
      name: 'crac',
      forceId: 'crac',
      logo: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y',
      summary: 'qsdq  qdsdqs dqsd'
    },
    {
      name: 'crac',
      forceId: 'crac',
      logo: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y',
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
            <ion-menu-button></ion-menu-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>,

      <ion-content>


        <ion-list>
          {this.forces.map(({name, forceId, logo, summary}) => (
            <ion-item href={`/others/forces/${forceId}`}>
              <ion-thumbnail slot="start">
                <img src={logo}/>
              </ion-thumbnail>
              <div>
                <p>
                  {name}
                </p>
                <p innerHTML={summary}/>
              </div>
            </ion-item>
          ))}
        </ion-list>
      </ion-content>
    ];
  }

}
