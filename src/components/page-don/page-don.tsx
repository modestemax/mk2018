import {Component, Prop} from '@stencil/core';
// import { ConferenceData } from '../../providers/conference-data';
// import { UserData } from '../../providers/user-data';

@Component({
  tag: 'page-don',
  styleUrl: 'page-don.css',
})
export class PageDon {

  @Prop() goback = '/';
  private forces = [
    {
      name: 'Orange Money',
      logo: '/assets/img/orange_4.png',
      summary: '+237 655 81 94 84'
    },
    {
      name: 'MTN Mobile Money',
      logo: '/assets/img/mtnmoney5.png',
      summary: '+237 653 79 10 38'
    },
    {
      name: 'Afriland First Bank',
      logo: '/assets/img/afriland.jpg',
      summary: `CM21 10005 00001<br/>03458061001-74`
    },
    {
      name: 'BICEC',
      logo: '/assets/img/bicec.png',
      summary: `ICL RCMCXXXX 10001 066864<br/>51963664001-47`
    },
    {
      name: 'UBC',
      logo: '/assets/img/UBC.png',
      summary: `LICMACMCX 10023 00040<br/>00413014245-01`
    },
    {
      name: 'Europe or America [CIC EST]',
      logo: '/assets/img/cic.png',
      summary: `IBAN: FR76 3008 7330 0100 0203<br/>3320 126 / BIC: CMCIFRPP`
    },
    {
      name: 'Europe or America [PayPal]',
      logo: '/assets/img/paypal.png',
      summary: `contact@mrcparty.org`
    },


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

        <br/>
        <ion-list>
          {this.forces.map(({name, logo, summary}) => (

            [<ion-item>
              <ion-thumbnail slot="start">
                <img src={logo}/>
              </ion-thumbnail>
              <ion-label>
                <h2>  {name}</h2>
                <p innerHTML={summary}/>
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
