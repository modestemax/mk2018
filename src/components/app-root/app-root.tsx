import '@ionic/core';

import {Component, Element, Listen, Prop, State} from '@stencil/core';
import {UserData} from '../../providers/user-data';
import {Plugins} from '@capacitor/core';
import {text} from '../../providers/i18n';

const {SplashScreen} = Plugins;

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.scss'
})
export class AppRoot {
  @State() loggedIn = false;
  hasSeenTutorial = false;
  userLng = 'fr';

  @Element() el: HTMLElement;

  @Prop({context: 'isServer'}) isServer: boolean;


  menus: any;

  async componentWillLoad() {

    this.menus = await text.loadMenu();

    text.onLngChanged.push(() => {
      this.menus = text.loadMenu();
    });

    this.hasSeenTutorial = this.isServer
      ? true
      : await UserData.checkHasSeenTutorial();
    this.userLng = (await UserData.getLng()) || this.userLng;
  }

  async componentDidLoad() {
    this.checkLoginStatus();
    try {
      await SplashScreen.hide();
    } catch {
      return;
    }
  }

  async checkLoginStatus() {
    const loggedIn = this.loggedIn = await UserData.isLoggedIn();
    return loggedIn;
  }

  async logout() {
    await UserData.logout();
    this.loggedIn = false;
  }

  @Listen('userDidLogIn')
  @Listen('userDidLogOut')
  updateLoggedInStatus(loggedEvent) {
    this.loggedIn = loggedEvent.detail.loginStatus;
  }

  renderRouter() {
    return (
      <ion-router useHash={false}>
        <ion-route-redirect from="/" to={this.hasSeenTutorial ? '/who-am-i' : '/enter'}/>

        <ion-route component="page-tabs">
          <ion-route url="/who-am-i" component="tab-who-am-i">
            <ion-route component="page-who-am-i"/>
            <ion-route url="/mon-cv/:docName" component="page-mon-cv" componentProps={{goback: '/who-am-i'}}/>
          </ion-route>

          <ion-route url="/mon-projet" component="tab-mon-projet">
            <ion-route component="page-mon-projet"/>
            <ion-route url="/chantier/:num" component="page-chantier" componentProps={{goback: '/mon-projet'}}/>
            <ion-route url="/chantier/:num/detail/:detail" component="page-chantier-detail"
                       componentProps={{goback: '/mon-projet/chantier'}}/>
          </ion-route>
          <ion-route url="/etoudi" component="page-etoudi"/>
          <ion-route url="/penalty" component="page-penalty"/>

          <ion-route url="/others" component="tab-hidden">
            <ion-route url="/forces" component="page-forces"/>
            <ion-route url="/forces/:forceId" component="page-forces-detail" componentProps={{goback: '/forces'}}/>
            <ion-route url="/faq" component="page-faq"/>
            <ion-route url="/don" component="page-don"/>
            <ion-route url="/contact" component="page-contact"/>
          </ion-route>

          <ion-route url="/schedule" component="tab-schedule">
            <ion-route component="page-schedule"/>
            <ion-route url="/session/:sessionId" component="page-session" componentProps={{goback: '/schedule'}}/>
          </ion-route>

          <ion-route url="/speakers" component="tab-speaker">
            <ion-route component="page-speaker-list"/>
            <ion-route url="/session/:sessionId" component="page-session" componentProps={{goback: '/speakers'}}/>
            <ion-route url="/:speakerId" component="page-speaker-detail"/>
          </ion-route>

          <ion-route url="/map" component="page-map"/>

          <ion-route url="/about" component="page-about"/>
        </ion-route>
        <ion-route url="/enter" component="page-enter"/>


        {/*<ion-route url="/tutorial" >*/}
        <ion-route url="/tutorial" component="page-tutorial" componentProps={{lng: this.userLng}}/>
        <ion-route url="/tutorial/fr" component="page-tutorial" componentProps={{lng: 'fr'}}/>
        <ion-route url="tutorial/en" component="page-tutorial" componentProps={{lng: 'en'}}/>
        {/*</ion-route>*/}

        <ion-route url="/login" component="page-login"/>
        <ion-route url="/account" component="page-account"/>
        <ion-route url="/signup" component="page-signup"/>
        <ion-route url="/support" component="page-support"/>
      </ion-router>
    );
  }

  renderMenu() {
    return (
      <ion-menu side="end">
        <ion-header>
          <ion-toolbar>
            <ion-title>Menu</ion-title>

          </ion-toolbar>
        </ion-header>
        <ion-content forceOverscroll={false} class="menu-content">

          {/*<ion-list-header>*/}
          <ion-item class="menu-header">
            <ion-thumbnail slot="start" class="photo">
              <img src="/assets/img/Kamto-photo.png"/>
            </ion-thumbnail>
            <img src="/assets/img/kamto2018.png" class="kamto2018"/>
          </ion-item>
          <hr class="menu-header-separator"/>
          {/*</ion-list-header>*/}

          <br/>
          {this.menus.map((appPages) =>
            <ion-list>
              {/*<ion-list-header>*/}
              {/*/!*Account*!/*/}
              {/*</ion-list-header>*/}
              {appPages.map((p) =>
                <ion-menu-toggle autoHide={false}>
                  <ion-item href={p.url} class="menu-item">
                    <ion-icon slot="start" name={p.icon}/>
                    <ion-label>
                      {p.title}
                    </ion-label>
                  </ion-item>
                </ion-menu-toggle>
              )}
            </ion-list>
          )}
        </ion-content>
      </ion-menu>
    );
  }

  // TODO ion-menu should be split out
  render() {
    return (
      <ion-app>
        {this.renderRouter()}
        <ion-split-pane>
          {this.renderMenu()}
          <ion-router-outlet animated={false} main/>
        </ion-split-pane>
      </ion-app>
    );
  }
}
