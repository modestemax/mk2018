import {Component, Prop} from '@stencil/core';
import {__} from '../../../providers/i18n';
import {ContactsData} from '../../../providers/contact-data';

import {Plugins} from '@capacitor/core';
import {UserData} from '../../../providers/user-data';

const {Toast, /*Share*/} = Plugins;

@Component({
  tag: 'page-contact-form',
  styleUrl: 'page-contact-form.scss',
})
export class PageContactForm {
  @Prop() subject: string;
  private name: HTMLInputElement;
  private phone: HTMLInputElement;
  private email: HTMLInputElement;
  private city: HTMLInputElement;
  private message: HTMLInputElement;

  async show(text) {
    try {
      await Toast.show({text, duration: 'long'});
    }catch (e) {
      alert(text)
    }
  }

  dismiss() {
    const modalController: any = document.querySelector('ion-modal-controller');
    modalController.dismiss();
  }

  async sendMessage() {
    const modalController: any = document.querySelector('ion-modal-controller');
    if (this.name.value && this.email.value && this.message.value) {
      await ContactsData.sendMail({
        name: this.name.value,
        phone: this.phone.value || '',
        email: this.email.value,
        city: this.city.value || '',
        message: this.message.value,
        subject: this.subject,
        language: UserData.lng
      });
      await this.show(__('EMAIL_SENT'));
      modalController.dismiss();
    } else {
      this.show(__('REMPLIR_CHAMPS_SVP'));
    }
  }


  render() {
    return [
      <ion-header>
        <ion-toolbar>

          <ion-title>
            {__('CONTACTEZ_NOUS')}
          </ion-title>

          <ion-buttons slot="end">
            <ion-menu-button/>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>,

      <ion-content>

        <ion-list class="form">
          <ion-list-header class="en-tete">
            {this.subject}
          </ion-list-header>
          <ion-item>
            <ion-label position="floating"> {__('NOM_PRÉNOM')}</ion-label>
            <ion-input ref={(el: HTMLInputElement) => this.name = el}/>
          </ion-item>
          <ion-item>
            <ion-label position="floating">{__('TEL_MOBILE_WHATSAPP')}</ion-label>
            <ion-input ref={(el: HTMLInputElement) => this.phone = el}/>
          </ion-item>
          <ion-item>
            <ion-label position="floating">{__('EMAIL')}</ion-label>
            <ion-input ref={(el: HTMLInputElement) => this.email = el}/>
            {/*<ion-input ref={(el: HTMLInputElement) => this.email = el} /!*type="email"*!//>*/}
          </ion-item>
          <ion-item>
            <ion-label position="floating">{__('VILLE_DE_RESIDENCE')}</ion-label>
            <ion-input ref={(el: HTMLInputElement) => this.city = el}/>
          </ion-item>
          <ion-item>
            <ion-label position="floating">{__('MESSAGE')}</ion-label>
            <ion-textarea ref={(el: HTMLInputElement) => this.message = el}/>
          </ion-item>

        </ion-list>
      </ion-content>,
      <ion-footer>
        <ion-toolbar color="light">
          <ion-buttons slot="start">
            <ion-button onClick={this.sendMessage.bind(this)} color="primary">{__('ENVOYER')}</ion-button>
          </ion-buttons>
          <ion-buttons slot="end">
            <ion-button onClick={this.dismiss.bind(this)} color="dark">{__('ANNULER')}</ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-footer>
    ];
  }

}
