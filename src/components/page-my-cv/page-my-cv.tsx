import {Component, Prop, State} from '@stencil/core';
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

        {this.content}

      </ion-content>
    ];
  }

  private etatCivilContent() {
    this.docTitle = 'Etat Civil';
    return 'Etat Civil';
  }

  private academicContent() {
    this.docTitle = 'Academic';
    return 'Academic';
  }

  private administrationContent() {
    this.docTitle = 'Administration';
    return 'Administration';
  }

  private internationalContent() {
    this.docTitle = 'International';
    return 'International';
  }

  private distinctionContent() {
    this.docTitle = 'distinction';
    return 'distinction';
  }
}
