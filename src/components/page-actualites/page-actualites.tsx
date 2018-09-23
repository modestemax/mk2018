import { Component, State, } from '@stencil/core';
// import { ConferenceData } from '../../providers/conference-data';
// import { UserData } from '../../providers/user-data';
import { News } from '../../providers/news';

@Component({
  tag: 'page-actualites',
  styleUrl: 'page-actualites.scss',
})
export class PageActualites {
  @State() actualites = [];


  componentWillLoad() {
    News.onChange(actualites => this.actualites = actualites);
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar>
          <ion-title>
            Actualités
          </ion-title>

          <ion-buttons slot="end">
            <ion-menu-button/>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="cards-bg social-cards">
        {this.actualites.map(actualite => (<mk-actualite {...actualite} />))}
      </ion-content>
    ];
  }


}
