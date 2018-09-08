import { Component } from '@stencil/core';

@Component({
  tag: 'page-enter',
  styleUrl: 'page-enter.css'
})
export class PageAbout {
  render() {
    return [
      <ion-content>
        {/*<div class="about-header">*/}
          {/*<img src="assets/img/mk-enter.png" alt="ionic logo" />*/}
        {/*</div>*/}
      </ion-content>,
      <ion-footer>
        <ion-toolbar>
          <div text-center>
            <ion-anchor href="/home?lang=fr">FRANCAIS</ion-anchor>
            <span> | </span>
            <ion-anchor href="/home?lang=en">ENGLISH</ion-anchor>
          </div>
        </ion-toolbar>
      </ion-footer>
    ];
  }
}
