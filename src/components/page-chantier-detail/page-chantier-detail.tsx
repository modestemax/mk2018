import {Component, Prop} from '@stencil/core';
// import { ConferenceData } from '../../providers/conference-data';
// import { UserData } from '../../providers/user-data';

@Component({
  tag: 'page-chantier-detail',
  styleUrl: 'page-chantier-detail.css',
})
export class PageChantierDetail {

  @Prop() goback = '/';
  @Prop() num = 5;
  @Prop() detail = 'politique-etrangere';
  private content;
  private docTitle;
  private gobackUrl;

  async componentWillLoad() {
    // this.session = await ConferenceData.getSession(this.docName);
    this.content = this.getContent() || [];
    this.gobackUrl = `${this.goback}/${this.num}`;
    console.log('go back',this.gobackUrl);
  }

  getContent() {
    switch (this.num) {
      case 1:
        return this.chantier1DetailContent();
      case 2:
        return this.chantier2DetailContent();
      case 3:
        return this.chantier3DetailContent();
      case 4:
        return this.chantier4DetailContent();
      case 5:
        return this.chantier5DetailContent();

    }
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref={this.gobackUrl}></ion-back-button>
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
          {this.content.map(item => (
            <ion-item-group>
              <ion-item-divider>
                <ion-label>
                  {item.title}
                </ion-label>
              </ion-item-divider>
              {item.items.map(text => (
                <ion-item>
                  {text}
                </ion-item>
              ))}

            </ion-item-group>
          ))}
        </ion-list>
      </ion-content>
    ];
  }

  private chantier1DetailContent() {
  }

  private chantier2DetailContent() {
  }

  private chantier3DetailContent() {
  }

  private chantier4DetailContent() {
  }

  private chantier5DetailContent() {
    switch (this.detail) {
      case 'politique-etrangere':
        return this.politiqueEtrangereContent();
      case 'diplomatie':
        return this.diplomatieContent();
      case 'retour-cerveaux':
        return this.retourCerveauxContent();
      case 'politique-national':
        return this.politiqueNationalContent();
      case 'developpement-national':
        return this.developpementNationalContent();
    }
  }

  private politiqueEtrangereContent() {
    this.docTitle = `UNE POLITIQUE ÉTRANGÈRE DE POSITIONNEMENT`;
    return [
      {
        title: `Affirmer le Cameroun sur la scène régionale, continentale et mondiale`,
        items: [`Action chiffrée promesse 1`, `Action chiffrée promesse 1`, `Action chiffrée promesse 1`,]
      },
      {
        title: `Se positionner stratégiquement sur les grands dossiers internationaux`,
        items: [`Action chiffrée promesse 1`, `Action chiffrée promesse 1`, `Action chiffrée promesse 1`,]
      },
      {
        title: `Etablir des alliances traduisant une bonne compréhension des enjeux internationaux et des intérêts du pays à court, à moyen et à long terme`,
        items: [`Action chiffrée promesse 1`, `Action chiffrée promesse 1`, `Action chiffrée promesse 1`,]
      },
      {
        title: `Marquer notre fort attachement à la solidarité régionale et continentale africaine`,
        items: [`Action chiffrée promesse 1`, `Action chiffrée promesse 1`, `Action chiffrée promesse 1`,]
      },
    ];
  }

  private diplomatieContent() {

  }

  private retourCerveauxContent() {

  }

  private politiqueNationalContent() {

  }

  private developpementNationalContent() {

  }
}
