import {Component, Prop, State} from '@stencil/core';

import {UserData} from '../../../providers/user-data';
import {TutorialData} from '../../../providers/tutorial-data';
import {__} from '../../../providers/i18n';

// const HOME_PAGE = '/who-am-i';
const HOME_PAGE = '/elections';

@Component({
  tag: 'page-tutorial',
  styleUrl: 'page-tutorial.scss'
})
export class PageTutorial {

  @Prop() lng = 'fr';
  @State() showSkip = true;

  @State() slides = [];

  async componentWillLoad() {
    // this.slides = await TutorialData.getAll();
    await UserData.setLng(this.lng);
    this.slides = await TutorialData.loadDefaultData();
  }

  componentDidLoad() {
    UserData.hasSeenTutorial(true);

    TutorialData.onChange(slides => this.slides = slides);
  }

  render() {
    return [
      <ion-header no-border>
        <ion-toolbar class="tutorial-transparent">
          <ion-buttons slot="end">
            {this.showSkip
              ? <ion-button color="light" href={HOME_PAGE}>     {__('SKIP')} </ion-button>
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
                  <img-video img={img} class="slide-image"/>
                  <ion-card-content class="slide-text">
                    <h2 class="slide-text-inner" innerHTML={text}/>

                    {!this.showSkip ? <ion-button fill="clear" href={HOME_PAGE}>
                      {__('CONTINUE')}
                      <ion-icon slot="end" name="arrow-forward"/>
                    </ion-button> : ''}

                  </ion-card-content>
                </ion-card>
              </ion-slide>
            ))}
          {/*<ion-slide>*/}
          {/*<ion-card>*/}
          {/*<img-video img={'ica-slidebox-img-4.png'} class="slide-image"/>*/}
          {/*<ion-card-content><h2 class="slide-title">{__('READY_TO_PLAY_Q')}</h2>*/}
          {/*<ion-button fill="clear" href="/who-am-i">*/}
          {/*{__('CONTINUE')}*/}
          {/*<ion-icon slot="end" name="arrow-forward"/>*/}
          {/*</ion-button>*/}
          {/*</ion-card-content>*/}
          {/*</ion-card>*/}
          {/*</ion-slide>*/}
        </ion-slides>
      </ion-content>
    ];
  }
}
