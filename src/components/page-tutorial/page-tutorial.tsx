import {Component, Prop, State} from '@stencil/core';

import {UserData} from '../../providers/user-data';

@Component({
  tag: 'page-tutorial',
  styleUrl: 'page-tutorial.css'
})
export class PageTutorial {

  @Prop() lng = 'fr';
  @State()  showSkip = true;

  slides = [
    {
      src: '/assets/img/ica-slidebox-img-1.png',
      title: `Welcome to the <b>ICA</b>`,
      text: `The <b>ionic conference app</b> is a practical preview of the
              ionic framework in action, and a demonstration of proper code use.`
    },
    {
      src: '/assets/img/ica-slidebox-img-2.png',
      title: `What is Ionic?`,
      text: `<b>Ionic Pro</b> is a powerful set of services and features built
              on top of Ionic Framework that brings a totally new level of app
              development agility to mobile dev teams.`
    },
    {
      src: '/assets/img/ica-slidebox-img-3.png',
      title: `What is Ionic Pro?`,
      text: `<b>Ionic Pro</b> is a powerful set of services and features built
              on top of Ionic Framework that brings a totally new level of app
              development agility to mobile dev teams.`
    }
  ];

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
          {this.slides.map(({src, title, text}) =>
            (<ion-slide>
                <img src={src} class="slide-image"/>
                <h2 class="slide-title" innerHTML={title}/>
                <p innerHTML={text}/>
              </ion-slide>
            ))}

          <ion-slide>
            <img src="assets/img/ica-slidebox-img-4.png" class="slide-image"/>
            <h2 class="slide-title">Ready to Play?</h2>
            <ion-button fill="clear" href="/who-am-i">
              Continue
              <ion-icon slot="end" name="arrow-forward"/>
            </ion-button>
          </ion-slide>
        </ion-slides>
      </ion-content>
    ];
  }
}
