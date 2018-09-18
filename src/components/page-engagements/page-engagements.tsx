import {Component} from '@stencil/core';
import {EngagementsData} from '../../providers/engagements-data';

@Component({
  tag: 'page-engagements',
  styleUrl: 'page-engagements.scss',
})
export class PageEngagements {


  data: any;

  componentWillLoad() {
    return this.loadData();

  }

  async loadData() {
    this.data = await EngagementsData.getData();
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar>
          <ion-title>
            Mes Engagements
          </ion-title>

          <ion-buttons slot="end">
            <ion-menu-button/>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>,

      <ion-content>


        <ion-list class="engagement-list" lines="full" mode="ios">

          {this.data.engagements.map(({color, sousEngagements}) => (
            sousEngagements.map(({title, details}) => (
              <ion-item-group >
                <ion-item-divider no-padding class="group-header" style={{backgroundColor: color}}>
                  <ion-item>  <h6 class="title">{title}</h6></ion-item>
                </ion-item-divider>

                {details.map(({numero, title, text}) => (

                  <ion-item detail-push class="engagement-text" href={text ? `/others/mes-engagements/${numero}` : '/toto'}>
                    <ion-text class="numero"> {numero}.</ion-text>
                    {title}
                    {/*<ion-icon name="rose" item-end></ion-icon>*/}
                    {/*<ion-icon class="item-detail-icon"  ></ion-icon>*/}
                    </ion-item>

                ))}

              </ion-item-group>
            ))
          ))}

        </ion-list>
      </ion-content>
    ];
  }

}
