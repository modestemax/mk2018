import {Component, Prop} from '@stencil/core';


@Component({
  tag: 'page-penalty',
  styleUrl: 'page-penalty.scss'
})
export class PagePenalty {

  mode!: string;

  penaltySteps: any[] = [];
  @Prop({connect: 'ion-action-sheet-controller'}) actionSheetCtrl: HTMLIonActionSheetControllerElement;


  async componentWillLoad() {
    this.penaltySteps = [
      {
        logo: '/assets/img/Penalty1.jpg',
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
        logo: '/assets/img/Penalty1.jpg',
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
                <ion-col no-padding col-7 align-self-stretch class="penalty-item">

                  <ion-card class="penalty-card">
                    <ion-card-header no-padding>
                      <ion-label class="img-container"><img src={logo} alt="Speaker profile pic"/></ion-label>
                    </ion-card-header>

                    <ion-card-content>
                      <ion-list>
                        <ion-list-header class="list-header"><h2>  {title}  </h2></ion-list-header>
                        <ul>
                          {details.map(detail => (
                            <li>{detail}</li>
                          ))}
                        </ul>
                      </ion-list>
                    </ion-card-content>
                  </ion-card>

                </ion-col>
              ))}
            </ion-row>
          </ion-grid>
        </ion-list>
      </ion-content>
    ];
  }
}
