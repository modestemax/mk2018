import {Component, State} from '@stencil/core';
import {EngagementsData} from '../../providers/engagements-data';
import {__} from '../../providers/i18n';

@Component({
  tag: 'page-engagements',
  styleUrl: 'page-engagements.scss',
})
export class PageEngagements {


  @State() data: any = [];


  async componentWillLoad() {
    this.data = await EngagementsData.loadDefaultData();
  }

  componentDidLoad() {
    EngagementsData.onChange(data => this.data = data);

  }

  render() {
    let numero = 1;
    return [
      <ion-header>
        <ion-toolbar>
          <ion-title>
            {__('MES_ENGAGEMENTS')}
          </ion-title>

          <ion-buttons slot="end">
            <ion-menu-button/>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>,

      <ion-content>


        <ion-list class="engagement-list" lines="full">

          {this.data.map(({color, _id, types}) => (
            types.map(({title: type_title, engagements}) => (
              <ion-item-group>
                <ion-item-divider no-padding class="group-header" style={{backgroundColor: color}}>
                  <ion-item><h6 class="title">{type_title}</h6></ion-item>
                </ion-item-divider>

                {engagements.map(({title, text}) => (

                  <ion-item detail-push class="engagement-text" href={text ? `/engagements/${_id}/${type_title}/${title}` : '#'}>
                    <ion-text class="numero"> {numero++}.</ion-text>
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
