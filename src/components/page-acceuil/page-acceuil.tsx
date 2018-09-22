import {Component} from '@stencil/core';

@Component({
  tag: 'page-acceuil',
  styleUrl: 'page-acceuil.scss'
})
export class PageAcceuil {
  render() {
    return [
      <ion-content class="mk_photo">
        <p class="image-acceuil">
          <img src="/assets/img/maurice_kamto_1.jpg" alt="ionic logo"/>
        </p>
      </ion-content>,
      <ion-footer>
        <ion-toolbar color="light">
          <div text-center>
            <ion-anchor href="/acceuil/tutorial/fr">FRANCAIS</ion-anchor>
            <ion-anchor href="#"> | </ion-anchor>
            <ion-anchor href="/acceuil/tutorial/en">ENGLISH</ion-anchor>
          </div>
        </ion-toolbar>
      </ion-footer>
    ];
  }
}
