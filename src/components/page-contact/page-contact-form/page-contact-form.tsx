import {Component} from '@stencil/core';
import {__} from "../../../providers/i18n";
// import {Plugins} from '@capacitor/core';

// const {Toast, Share} = Plugins;

@Component({
  tag: 'page-contact-form',
  styleUrl: 'page-contact-form.scss',
})
export class PageContactForm {
  subject;
  // async show() {
  //   await Toast.show({
  //     text: 'Hello!'
  //   });
  // }

  dismiss() {
    // this.show();
    // let shareRet = await
    // Share.share({
    //   title: 'See cool stuff',
    //   text: 'Really awesome thing you need to see right meow',
    //   url: 'http://ionicframework.com/',
    //   dialogTitle: 'Share with buddies'
    // });


    const modalController: any = document.querySelector('ion-modal-controller');
    modalController.dismiss()
  }

  sendMessage() {
    const modalController: any = document.querySelector('ion-modal-controller');
    modalController.dismiss();
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
            {__('VOUS_SOUHAITEZ_INTÉGRER_UNE_UNITÉ_MRC')}
          </ion-list-header>
          <ion-item>
            <ion-label position="floating"> {__('NOM_PRÉNOM')}</ion-label>
            <ion-input/>
          </ion-item>
          <ion-item>
            <ion-label position="floating">{__('TEL_MOBILE_WHATSAPP')}</ion-label>
            <ion-input/>
          </ion-item>
          <ion-item>
            <ion-label position="floating">{__('EMAIL')}</ion-label>
            <ion-input/>
          </ion-item>
          <ion-item>
            <ion-label position="floating">{__('VILLE_DE_RESIDENCE')}</ion-label>
            <ion-input/>
          </ion-item>
          <ion-item>
            <ion-label position="floating">{__('MESSAGE')}</ion-label>
            <ion-textarea/>
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
