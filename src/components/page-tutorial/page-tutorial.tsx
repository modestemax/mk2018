import {Component, Prop, State} from '@stencil/core';

import {UserData} from '../../providers/user-data';
import {TutorialData} from "../../providers/tutorial-data";
import {__} from "../../providers/i18n";

@Component({
  tag: 'page-tutorial',
  styleUrl: 'page-tutorial.css'
})
export class PageTutorial {

  @Prop() lng = 'fr';
  @State() showSkip = true;

  slides = [];

  componentWillLoad() {
    return this.loadData();
  }

  async loadData() {
    this.slides = await TutorialData.loadSlides();
  }

  componentDidLoad() {
    UserData.hasSeenTutorial(true);
    UserData.setLng(this.lng);
  }

  render() {

    return [
      <ion-header no-border>
        <ion-toolbar class="tutorial-transparent">
          <ion-buttons slot="end">
            {this.showSkip
              ? <ion-button color="primary" href="/who-am-i"> Skip </ion-button>
              : ''}
          </ion-buttons>
        </ion-toolbar>
      </ion-header>,

      <ion-content scrollY={false}>
        <ion-slides onIonSlideReachEnd={() => this.showSkip = false} pager={true}>
          {this.slides.map(({img, title, text}) =>
            (<ion-slide>
                <img src={`/assets/img/${img}`} class="slide-image"/>
                <h2 class="slide-title" innerHTML={title}/>
                <p innerHTML={text}/>
              </ion-slide>
            ))}
          <ion-slide>
            <img src="assets/img/ica-slidebox-img-4.png" class="slide-image"/>
            <h2 class="slide-title">{__('READY_TO_PLAY_Q')}</h2>
            <ion-button fill="clear" href="/who-am-i">
              {__('CONTINUE')}
              <ion-icon slot="end" name="arrow-forward"/>
            </ion-button>
          </ion-slide>
        </ion-slides>
      </ion-content>
    ];
  }
}
