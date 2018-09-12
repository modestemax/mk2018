import {Component,} from '@stencil/core';
// import { ConferenceData } from '../../providers/conference-data';
// import { UserData } from '../../providers/user-data';

@Component({
  tag: 'page-contact',
  styleUrl: 'page-contact.css',
})
export class PageContact {

  // private session: any;
  private bureaux = [
    {
      name: 'Bureau National',
      members: [
        {
          title: 'Secrétariat du Président National',
          href: '#'
        },
        {
          title: 'Secrétariat du Président National',
          href: '#'
        },
        {
          title: 'Secrétariat du Président National',
          href: '#'
        },
      ]
    },
    {
      name: 'Bureau National',
      members: [
        {
          title: 'Secrétariat du Président National',
          href: '#'
        },
        {
          title: 'Secrétariat du Président National',
          href: '#'
        },
        {
          title: 'Secrétariat du Président National',
          href: '#'
        },
      ]
    },
    {
      name: 'Bureau National',
      members: [
        {
          title: 'Secrétariat du Président National',
          href: '#'
        },
        {
          title: 'Secrétariat du Président National',
          href: '#'
        },
        {
          title: 'Secrétariat du Président National',
          href: '#'
        },
      ]
    },
  ]

  async componentWillLoad() {
    // this.session = await ConferenceData.getSession(this.docName);

  }


  render() {
    return [
      <ion-header>
        <ion-toolbar>

          <ion-title>
            Contacter-Nous
          </ion-title>

          <ion-buttons slot="end">
            <ion-menu-button/>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>,

      <ion-content>
        <ion-list>
          {this.bureaux.map(({name, members}) => (
            <ion-item-group>
              <ion-item-divider>
                <ion-label>
                  {name}
                </ion-label>
              </ion-item-divider>
              {members.map(({title, href}) => (
                <ion-item href={href ? href : '#'}>
                  {title}
                </ion-item>
              ))}

            </ion-item-group>
          ))}
        </ion-list>
      </ion-content>
    ];
  }

}
