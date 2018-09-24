import {Component, State} from '@stencil/core';
import {ContactsData} from '../../providers/contact-data';
import {__} from "../../providers/i18n";


@Component({
  tag: 'page-contact',
  styleUrl: 'page-contact.scss',
})
export class PageContact {
  @State() contacts = [];


  componentWillLoad() {
    ContactsData.onChange(([contact]) => this.contacts = contact.contacts);

  }


  async openContactForm(subject) {
    console.log('contact');

    const modalController: any = document.querySelector('ion-modal-controller');
    await modalController.componentOnReady();
    const form = document.createElement('page-contact-form')

    const modal = await modalController.create({
      component: form,
      componentProps: {subject}
    });
    return modal.present();
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
        <ion-list class="group-list">
          {this.contacts.map(({text}, index) => [<ion-item>
            <ion-label class="content-text">
              <p class="contact-text" innerHTML={text}/>
            </ion-label>
            <ion-icon onClick={() => this.openContactForm(text)} slot="end" name="mail" class="mail-icon"/>
          </ion-item>,
            index + 1 === this.contacts.length ? '' : <hr class="separator"/>
          ])}
        </ion-list>
      </ion-content>
    ];
  }

}
