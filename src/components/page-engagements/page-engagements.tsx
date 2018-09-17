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


        <ion-list class="">
          {this.data.engagements.map(({color, sousEngagements}) => (
            sousEngagements.map(({title, details}) => (
              <ion-list>
                <ion-list-header style={{backgroundColor: color}}>
                  <ion-label>{title}</ion-label>
                </ion-list-header>
                <ol>
                  {details.map(({title, text, titleKey}) => (
                    <li>
                      <ion-item href={text ? `/others/mes-engagements/${titleKey}` : '#'}>
                        {title}
                      </ion-item>
                    </li>
                  ))}
                </ol>
              </ion-list>
            ))
          ))}
        </ion-list>
      </ion-content>
    ];
  }

}
