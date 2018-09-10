import {Component, Prop} from '@stencil/core';
// import { ConferenceData } from '../../providers/conference-data';
// import { UserData } from '../../providers/user-data';

@Component({
  tag: 'page-chantier',
  styleUrl: 'page-chantier.css',
})
export class PageChantier {

  @Prop() goback = '/';
  @Prop() num = 5;
  private content;
  private docTitle;
  private logo;

  async componentWillLoad() {
    // this.session = await ConferenceData.getSession(this.docName);
    this.content = this.getContent() || [];
  }

  getContent() {
    switch (this.num) {
      case 1:
        return this.chantier1Content();
      case 2:
        return this.chantier2Content();
      case 3:
        return this.chantier3Content();
      case 4:
        return this.chantier4Content();
      case 5:
        return this.chantier5Content();

    }
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref={this.goback}></ion-back-button>
          </ion-buttons>
          <ion-title>
            {this.docTitle}
          </ion-title>

          <ion-buttons slot="end">
            <ion-menu-button></ion-menu-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>,

      <ion-content>
        <ion-list>
          <ion-item>
            <img src={this.logo} alt="ionic logo"/>
          </ion-item>
          {this.content.map(({title, detail}) => (
            <ion-item href={`/mon-projet/chantier/${this.num}/detail/${detail}`}>
              {title}
            </ion-item>
          ))}
        </ion-list>
      </ion-content>
    ];
  }

  private chantier1Content() {
    this.docTitle = 'Chantier N° 5';
    this.logo = '/assets/img/ica-slidebox-img-1.png';
    return [];
  }

  private chantier2Content() {
    this.docTitle = 'Chantier N° 5';
    this.logo = '/assets/img/ica-slidebox-img-1.png';
    return [];
  }

  private chantier3Content() {
    this.docTitle = 'Chantier N° 5';
    this.logo = '/assets/img/ica-slidebox-img-1.png';
    return [];
  }

  private chantier4Content() {
    this.docTitle = 'Chantier N° 5';
    this.logo = '/assets/img/ica-slidebox-img-1.png';
    return [];
  }

  private chantier5Content() {
    this.docTitle = 'Chantier N° 5';
    this.logo = '/assets/img/ica-slidebox-img-1.png';
    return [
      {
        title: `UNE POLITIQUE ÉTRANGÈRE DE POSITIONNEMENT`,
        detail: 'politique-etrangere'
      },
      {
        title: `METTRE LA DIPLOMATIE AU SERVICE DE L’ECONOMIE`,
        detail: 'diplomatie'
      },
      {
        title: `CREER UN ENVIRONNEMENT FAVORABLE AU « RETOUR DES CERVEAUX »`,
        detail: 'retour-cerveaux'
      },
      {
        title: `FAIRE LES REFORMES NECESSAIRES POUR IMPLIQUER LES CAMEROUNAIS DE L’ETRANGER DANS LA VIE POLITIQUE NATIONALE`,
        detail: 'politique-national'
      },
      {
        title: `CANALISER LE POTENTIEL EXCEPTIONNEL DE LA DIASPORA CAMEROUNAISE POUR LE METTRE AU SERVICE DU DEVELOPPEMENT NATIONAL`,
        detail: 'developpement-national'
      },
    ];
  }
}
