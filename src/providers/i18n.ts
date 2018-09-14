const DEFAULT_LNG = 'FR';

class Text {
  onLngChanged: any = [];

  loadMenu(): any {
    return [
      [{
        title: 'Qui suis-je',
        url: '/who-am-i',
        icon: 'person'
      },
        {
          title: 'Mon Projet pour le Cameroun',
          url: '/mon-projet',
          icon: 'folder-open'
        },
        {
          title: 'En route pour Etoudi',
          url: '/map',
          icon: 'walk'
        },
        {
          title: 'Le Penalty du 07 Octobre 2018',
          url: '/penalty',
          icon: 'football'
        }],
      [{
        title: 'Les Forces Alternance Urnes Paix',
        url: '/others/forces',
        icon: 'people'
      },
        {
          title: 'Vos Questions / Mes Réponses',
          url: '/others/faq',
          icon: 'help-circle-outline'
        },
      ],
      [{
        title: 'Faites un don',
        url: '/others/don',
        icon: 'gift'
      },
        {
          title: 'Contacter l’Equipe de Campagne',
          url: '/others/contact',
          icon: 'mail-open'
        },
      ]
    ];
  }

  text: any;
  lng = DEFAULT_LNG;

  constructor() {
    this.load();
  }

  async load() {
    if (this.text) {
      return this.text;
    } else {
      const rsp = await fetch('/assets/data/i18n.json');
      const json = await rsp.json();
      return (this.text = json);
    }
  }

  async setLng(lng) {
    this.lng = lng || this.lng;
  }

  getText(key) {
    return (this.text[this.lng] && this.text[this.lng][key]) || this.text[DEFAULT_LNG][key];
  }
}

export const text = new Text();
export const __ = text.getText.bind(text);
