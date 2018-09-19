import {Component} from '@stencil/core';
import {ContactsData} from '../../../providers/contact-data';

@Component({
  tag: 'page-contact-form',
  styleUrl: 'page-contact-form.scss',
})
export class PageContactForm {
  private contacts = [];

  dismiss() {
    const modalController: any = document.querySelector('ion-modal-controller');
    modalController.dismiss()
  }

  sendMessage() {
    const modalController: any = document.querySelector('ion-modal-controller');
    modalController.dismiss()
  }

  componentWillLoad() {
    return this.loadData();

  }

  async loadData() {
    this.contacts = await ContactsData.getContacts();
    console.log(this.contacts)
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar>

          <ion-title>
            Contacter-Nous
          </ion-title>

          <ion-buttons slot="end">
            <ion-menu-button/>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>,

      <ion-content>

        <ion-list class="form">
          <ion-list-header class="en-tete">
            Vous souhaitez intégrer une unité MRC
          </ion-list-header>
          <ion-item>
            <ion-label position="floating">Nom & Prénom</ion-label>
            <ion-input></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="floating">Tel Mobile (WhatsApp)</ion-label>
            <ion-input></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="floating">Email</ion-label>
            <ion-input></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="floating">Ville de residence</ion-label>
            <ion-input></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="floating">Message</ion-label>
            <ion-textarea></ion-textarea>
          </ion-item>

        </ion-list>
      </ion-content>,
      <ion-footer>
        <ion-toolbar color="light">
          <ion-buttons slot="start">
              <ion-button onClick={this.sendMessage.bind(this)} color="primary">Envoyer</ion-button>
          </ion-buttons>
          <ion-buttons slot="end">
            <ion-button onClick={this.dismiss.bind(this)} color="dark">Annuler</ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-footer>
    ];
  }

}
