import { Component, Prop, State } from '@stencil/core';
// import { ConferenceData } from '../../providers/conference-data';
// import { UserData } from '../../providers/user-data';

@Component({
  tag: 'page-my-cv',
  styleUrl: 'page-my-cv.css',
})
export class PageMyCv {

  // private session: any;
  @State() isFavorite: boolean;
  @Prop() docName: string;
  @Prop() goback = '/';
  private docTitle;
  private content;

  async componentWillLoad() {
    // this.session = await ConferenceData.getSession(this.docName);
    this.content = this.getContent();
  }

  getContent() {
    switch (this.docName) {
      case 'etat-civil':
        return this.etatCivilContent();
      case 'academic':
        return this.academicContent();
      case 'administration':
        return this.administrationContent();
      case 'international':
        return this.internationalContent();
      case 'distinction':
        return this.distinctionContent();

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

  private etatCivilContent() {
    this.docTitle = 'Etat Civil';
    return [
      {
        title: '1979 : Faculté de Droit, Université de Yaoundé',
        items: ['Yaoundé, Cameroun', 'License en Droit Public']
      },
      {
        title: '1980 : Institut Européen des Hautes Etudes Internationales (IEHEI)',
        items: ['Nice, France', `Diplôme des hautes études internationales et d’études supérieures des communautés européennes`],
      },
      {
        title: '1980 : Université de Nice, Faculté de Droit',
        items: ['Nice, France', `Diplôme d’études approfondies de droit public fundamental`, `Diplôme d’études approfondies de droit international (1980).`],
      },
      {
        title: '1982 : Institut d’Administration Publique',
        items: ['Paris, France', `Diplôme option XXXX`],
      },
      {
        title: '1983 : Université de Nice, Faculté de Droit',
        items: ['Nice, France', `Doctorat d’Etat en Droit`],
      },
      {
        title: '1988 : Prix de l’Académie des sciences d’outremer',
        items: [],
      },
      {
        title: '1988 : Agrége des Facultes de Droit.',
        items: [],
      }
    ];
  }

  private academicContent() {
    this.docTitle = 'Academic';
    return [{ title: 'Academic', items: [] }];
  }

  private administrationContent() {
    this.docTitle = 'Administration';
    return [{ title: 'Administration', items: [] }];
  }

  private internationalContent() {
    this.docTitle = 'International';
    return [{ title: 'International', items: [] }];
  }

  private distinctionContent() {
    this.docTitle = 'distinction';
    return [{ title: 'distinction', items: [] }];
  }
}
