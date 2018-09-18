import { Component } from '@stencil/core';
import { ContactsData } from '../../providers/contact-data';


@Component({
  tag: 'page-contact',
  styleUrl: 'page-contact.scss',
})
export class PageContact {
  private contacts = [];


  componentWillLoad() {
    return this.loadData();

  }

  async loadData() {
    this.contacts = await ContactsData.getContacts();
  }

  async openContactForm() {
    console.log('contact');
    //debugger;
    const modalController: any = document.querySelector('ion-modal-controller');
    await modalController.componentOnReady();
    const form = document.createElement('page-contact-form')

    const modal = await modalController.create({
      component: form,
      componentProps: { value: 123 }
    });
    return modal.present();
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
        <ion-list class="group-list">
          {this.contacts.map(({ text }, index) => [<ion-item>
            <ion-label class="content-text">
              <p class="contact-text" innerHTML={text}/>
            </ion-label>
            <ion-icon onClick={this.openContactForm.bind(this)} slot="end" name="mail" class="mail-icon"/>
          </ion-item>,
                                                 index + 1 === this.contacts.length ? '' : <hr class="separator"/>
          ])}
        </ion-list>
      </ion-content>
    ];
  }

}
