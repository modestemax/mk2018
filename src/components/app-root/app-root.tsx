import '@ionic/core';

import {Component, Element, Prop, State,} from '@stencil/core';
import {UserData} from '../../providers/user-data';
import {Plugins} from '@capacitor/core';
import {Menu} from '../../providers/menu-data';
import {I18nData, __} from '../../providers/i18n';
import {Firebase} from '../../providers/firebase';


const {SplashScreen, Share} = Plugins;

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
  // @Prop({connect: 'ion-router'}) router: any;


  @State() menus: any = [];
  @State() strings: any = [];


  async componentWillLoad() {
    this.userLng = (await UserData.getLng()) || this.userLng;
    await Firebase.initialize();
    // ---debug only
    await Firebase.pushDefaultData();
    // --------------

    await I18nData.loadDefaultStrings();

    this.menus = await Menu.getDefaultMenu();


    this.hasSeenTutorial = this.isServer
      ? true
      : await UserData.checkHasSeenTutorial();

  }

  async componentDidLoad() {
    try {
      await SplashScreen.hide();
    } catch {
      // return;
    }
    Menu.onChange(async () => {
      this.menus = await Menu.getMenu();
    });

    I18nData.onChange(strings => this.strings = strings);

    UserData.onLangChanged(async () => {
      this.menus = await Menu.getMenu();
      this.strings = await I18nData.getAll();
      // document.location.reload()
    });
  }

  async shareApp() {
    await Share.share({
      title: 'KAMTO\'18',
      text: __('SHARE_APP_TEXT'),
      url: __('SHARE_APP_URL'),
      dialogTitle: __('SHARE_WITH_BUDDIES')
    });
  }

  renderRouter() {
    return (
      <ion-router useHash={false}>
        <ion-route-redirect from="/" to={this.hasSeenTutorial ? '/acceuil/tutorial' : '/acceuil'}/>

        <ion-route component="page-tabs">

          <ion-route url="/who-am-i" component="tab-who-am-i">
            <ion-route component="page-who-am-i"/>
            <ion-route url="/:_id" component="page-mon-cv" componentProps={{goback: '/who-am-i'}}/>
          </ion-route>

          <ion-route url="/elections" component="tab-elections">
            <ion-route component="page-elections"/>
            <ion-route url="/scrutateur" component="form-scrutateur" componentProps={{goback: '/elections'}}/>
            <ion-route url="/proces-verbal" component="form-proces-verbal" componentProps={{goback: '/elections'}}/>
          </ion-route>

          <ion-route url="/programme" component="tab-programme">
            <ion-route component="page-programme"/>
            <ion-route url="/chantier/:_id" component="page-chantier" componentProps={{goback: '/programme'}}/>
            <ion-route url="/chantier/:_id/detail/:detail" component="page-chantier-detail"
                       componentProps={{goback: '/programme/chantier'}}/>
          </ion-route>

          <ion-route url="/engagements" component="tab-engagements">
            <ion-route component="page-engagements"/>
            <ion-route url="/:_id/:type_title/:_title" component="page-engagements-detail"
                       componentProps={{goback: '/engagements'}}/>
          </ion-route>

          <ion-route url="/actualites" component="tab-actualites">
            <ion-route component="page-actualites"/>
            <ion-route url="/:_id" component="page-actualite" componentProps={{goback: '/actualites'}}/>
          </ion-route>


          <ion-route url="/penalty" component="page-penalty"/>

          <ion-route url="/others" component="tab-others">
            <ion-route url="/forces" component="page-forces"/>
            <ion-route url="/forces/:_id" component="page-forces-detail" componentProps={{goback: '/others/forces'}}/>
            <ion-route url="/faq" component="page-faq"/>
            <ion-route url="/don" component="page-don"/>
            <ion-route url="/contact" component="page-contact"/>
            <ion-route url="/galeries" component="page-galerie"/>
            <ion-route url="/galeries/:_id/:_title" component="page-galerie-detail"
                       componentProps={{goback: '/others/galeries'}}/>
          </ion-route>

        </ion-route>

        <ion-route url="/acceuil" component="page-acceuil"/>


        {/*<ion-route url="/acceuil/tutorial" >*/}
        <ion-route url="/acceuil/tutorial" component="page-tutorial" componentProps={{lng: this.userLng}}/>
        <ion-route url="/acceuil/tutorial/fr" component="page-tutorial" componentProps={{lng: 'fr'}}/>
        <ion-route url="/acceuil/tutorial/en" component="page-tutorial" componentProps={{lng: 'en'}}/>
        {/*</ion-route>*/}

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
              <img-video img={'Kamto-photo.png'}/>
            </ion-thumbnail>
            <img-video img={'kamto2018.png'} class="kamto2018"/>
          </ion-item>
          <hr class="menu-header-separator"/>
          {/*</ion-list-header>*/}

          <br/>
          {this.menus.map((appPages) =>
            <ion-list>
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
          <ion-list>
            <ion-menu-toggle autoHide={false}>
              <ion-item onClick={this.shareApp.bind(this)} class="menu-item">
                <ion-icon slot="start" name="share"/>
                <ion-label>
                  {__('SHARE')}
                </ion-label>
              </ion-item>
            </ion-menu-toggle>
          </ion-list>
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
        <ion-modal-controller/>
      </ion-app>
    );
  }
}
