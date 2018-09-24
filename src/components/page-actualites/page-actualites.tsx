import {Component, State,} from '@stencil/core';
import {News} from '../../providers/news';
import {__} from "../../providers/i18n";

@Component({
  tag: 'page-actualites',
  styleUrl: 'page-actualites.scss',
})
export class PageActualites {
  @State() actualites = [];

  async componentWillLoad() {
    this.actualites = await News.loadDefaultData();
  }

  componentDidLoad() {
    News.onChange(actualites => this.actualites = actualites);

  }


  render() {
    return [
      <ion-header>
        <ion-toolbar>
          <ion-title>
            {__('ACTUALITÉS')}
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
