import {Component, Prop, State} from '@stencil/core';

import {UserData} from '../../providers/user-data';
import {TutorialData} from "../../providers/tutorial-data";
import {__} from "../../providers/i18n";

@Component({
  tag: 'page-tutorial',
  styleUrl: 'page-tutorial.scss'
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
              ? <ion-button color="light" href="/who-am-i"> Skip </ion-button>
              : ''}
          </ion-buttons>
        </ion-toolbar>
      </ion-header>,

      <ion-content scrollY={false}>
        <ion-slides onIonSlideReachEnd={() => this.showSkip = false} onIonSlidePrevStart={() => this.showSkip = true}
                    pager={true}>
          {this.slides.map(({img, color, text}) =>
            (<ion-slide>
                <ion-card class="slide-card" style={{backgroundColor: color}}>
                  <img src={`/assets/img/${img}`} class="slide-image"/>
                  <ion-card-content class="slide-text">
                    <h2 class="slide-text-inner" innerHTML={text}/>
                  </ion-card-content>
                </ion-card>
              </ion-slide>
            ))}
          <ion-slide>
            <ion-card>
              <img src="/assets/img/ica-slidebox-img-4.png" class="slide-image"/>
              <ion-card-content><h2 class="slide-title">{__('READY_TO_PLAY_Q')}</h2>
                <ion-button fill="clear" href="/who-am-i">
                  {__('CONTINUE')}
                  <ion-icon slot="end" name="arrow-forward"/>
                </ion-button>
              </ion-card-content>
            </ion-card>
          </ion-slide>
        </ion-slides>
      </ion-content>
    ];
  }
}
