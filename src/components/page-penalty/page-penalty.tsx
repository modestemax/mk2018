import {Component, Prop} from '@stencil/core';


@Component({
  tag: 'page-penalty',
  styleUrl: 'page-penalty.css'
})
export class PagePenalty {

  mode!: string;

  penaltySteps: any[] = [];
  @Prop({connect: 'ion-action-sheet-controller'}) actionSheetCtrl: HTMLIonActionSheetControllerElement;


  async componentWillLoad() {
    this.penaltySteps = [
      {
        logo: '/assets/img/ica-slidebox-img-1.png',
        title: 'Faisons basculer le destin du Cameroun',
        details: [
          `Afin que soit révélé notre si grand potentiel longtemps étouffé`,
          `Pour la fusion de nos différences et plus de jamais de division tribale`,
          `Ouvrons ensemble une nouvelle ère pour l’épanouissement de tous`,
          `L’équipe sortante doit passer le témoin, elle a donné ce qu’elle a pu pendant 36 ans`,
          `Changeons d’avenir par les urnes et dans la paix`
        ]
      },
      {
        logo: '/assets/img/ica-slidebox-img-1.png',
        title: 'Pourquoi KAMTO',
        details: [
          `Je me suis préparé assidument pendant 6 ans`,
          `J’ai de tout temps eu des convictions constantes sur notre pays`,
          `Pour mes réalisations nationales et internationales`,
          `Je veux réconcilier les Camerounais et impulser l’invention d’une nouvelle nation`,
          `Je ne vous trahirai jamais`
        ]
      },
    ];
  }


  render() {
    return [
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="end">
            <ion-menu-button/>
          </ion-buttons>
          <ion-title>Le Penalty du 07 Octobre 2018</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="outer-content">
        <ion-list>
          <ion-grid>
            <ion-row align-items-stretch>
              {this.penaltySteps.map(({logo, title, details}) => (
                <ion-col col-7 align-self-stretch>
                  <ion-item>
                    <ion-card class="speaker-card">
                      <ion-card-header>
                        <ion-item detail-none>
                          {/*<ion-avatar slot="start">*/}
                          <img src={logo} alt="Speaker profile pic"/>
                          {/*</ion-avatar>*/}
                        </ion-item>
                        <ion-item><h2>   {title} </h2></ion-item>
                      </ion-card-header>

                      <ion-card-content>
                        <ion-list>
                          {details.map(detail => (
                            <ion-item>
                              <h3>{detail}</h3>
                            </ion-item>
                          ))}
                        </ion-list>
                      </ion-card-content>
                    </ion-card>
                  </ion-item>
                </ion-col>
              ))}
            </ion-row>
          </ion-grid>
        </ion-list>
      </ion-content>
    ];
  }
}
