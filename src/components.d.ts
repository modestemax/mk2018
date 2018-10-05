/**
* This is an autogenerated file created by the Stencil compiler.
* It contains typing information for all components that exist in this project.
*/
/* tslint:disable */

import '@stencil/core';

import '@ionic/core';
import 'ionicons';


export namespace Components {

  interface AppRoot {}
  interface AppRootAttributes extends StencilHTMLAttributes {}

  interface ChantierSousTitre {
    '_id': any;
    'color': any;
    'key': any;
    'text': any;
  }
  interface ChantierSousTitreAttributes extends StencilHTMLAttributes {
    '_id'?: any;
    'color'?: any;
    'key'?: any;
    'text'?: any;
  }

  interface ImgVideo {
    'height': string;
    'img': string;
    'video': string;
    'vtitle': string;
    'width': string;
  }
  interface ImgVideoAttributes extends StencilHTMLAttributes {
    'height'?: string;
    'img'?: string;
    'video'?: string;
    'vtitle'?: string;
    'width'?: string;
  }

  interface LazyIframe {
    'frameBorder': string;
    'height': string;
    'name': string;
    'scrolling': string;
    'src': string;
    'width': string;
  }
  interface LazyIframeAttributes extends StencilHTMLAttributes {
    'frameBorder'?: string;
    'height'?: string;
    'name'?: string;
    'scrolling'?: string;
    'src'?: string;
    'width'?: string;
  }

  interface MkActualite {
    '_id': any;
    'date': string;
    'full': boolean;
    'img': string;
    'text': string;
    'titre': string;
    'video': string;
  }
  interface MkActualiteAttributes extends StencilHTMLAttributes {
    '_id'?: any;
    'date'?: string;
    'full'?: boolean;
    'img'?: string;
    'text'?: string;
    'titre'?: string;
    'video'?: string;
  }

  interface PoolingStation {}
  interface PoolingStationAttributes extends StencilHTMLAttributes {
    'onCouncilChanged'?: (event: CustomEvent) => void;
    'onDivisionChanged'?: (event: CustomEvent) => void;
    'onPoolingStationChanged'?: (event: CustomEvent) => void;
    'onRegionChanged'?: (event: CustomEvent) => void;
  }

  interface PageAcceuil {}
  interface PageAcceuilAttributes extends StencilHTMLAttributes {}

  interface PageTutorial {
    'lng': string;
  }
  interface PageTutorialAttributes extends StencilHTMLAttributes {
    'lng'?: string;
  }

  interface PageActualite {
    '_id': any;
    'goback': string;
  }
  interface PageActualiteAttributes extends StencilHTMLAttributes {
    '_id'?: any;
    'goback'?: string;
  }

  interface PageActualites {}
  interface PageActualitesAttributes extends StencilHTMLAttributes {}

  interface PageContactForm {
    'subject': string;
  }
  interface PageContactFormAttributes extends StencilHTMLAttributes {
    'subject'?: string;
  }

  interface PageContact {}
  interface PageContactAttributes extends StencilHTMLAttributes {}

  interface PageDon {
    'goback': string;
  }
  interface PageDonAttributes extends StencilHTMLAttributes {
    'goback'?: string;
  }

  interface FormScrutateur {
    '_id': string;
    'goback': string;
  }
  interface FormScrutateurAttributes extends StencilHTMLAttributes {
    '_id'?: string;
    'goback'?: string;
  }

  interface PageElections {}
  interface PageElectionsAttributes extends StencilHTMLAttributes {}

  interface PageEngagementsDetail {
    '_id': any;
    '_title': any;
    'goback': string;
    'type_title': any;
  }
  interface PageEngagementsDetailAttributes extends StencilHTMLAttributes {
    '_id'?: any;
    '_title'?: any;
    'goback'?: string;
    'type_title'?: any;
  }

  interface PageEngagements {}
  interface PageEngagementsAttributes extends StencilHTMLAttributes {}

  interface PageForcesDetail {
    '_id': string;
    'goback': string;
  }
  interface PageForcesDetailAttributes extends StencilHTMLAttributes {
    '_id'?: string;
    'goback'?: string;
  }

  interface PageForces {
    'goback': string;
  }
  interface PageForcesAttributes extends StencilHTMLAttributes {
    'goback'?: string;
  }

  interface PageGalerieDetail {
    '_id': any;
    '_title': any;
    'goback': string;
  }
  interface PageGalerieDetailAttributes extends StencilHTMLAttributes {
    '_id'?: any;
    '_title'?: any;
    'goback'?: string;
  }

  interface PageGalerie {}
  interface PageGalerieAttributes extends StencilHTMLAttributes {}

  interface PageMap {}
  interface PageMapAttributes extends StencilHTMLAttributes {}

  interface PagePenalty {}
  interface PagePenaltyAttributes extends StencilHTMLAttributes {}

  interface PageChantierDetail {
    '_id': string;
    'detail': string;
    'goback': string;
  }
  interface PageChantierDetailAttributes extends StencilHTMLAttributes {
    '_id'?: string;
    'detail'?: string;
    'goback'?: string;
  }

  interface PageChantier {
    '_id': any;
    'goback': string;
  }
  interface PageChantierAttributes extends StencilHTMLAttributes {
    '_id'?: any;
    'goback'?: string;
  }

  interface PageProgramme {}
  interface PageProgrammeAttributes extends StencilHTMLAttributes {}

  interface PageTabs {}
  interface PageTabsAttributes extends StencilHTMLAttributes {}

  interface PageMonCv {
    '_id': string;
    'goback': string;
  }
  interface PageMonCvAttributes extends StencilHTMLAttributes {
    '_id'?: string;
    'goback'?: string;
  }

  interface PageWhoAmI {}
  interface PageWhoAmIAttributes extends StencilHTMLAttributes {}
}

declare global {
  interface StencilElementInterfaces {
    'AppRoot': Components.AppRoot;
    'ChantierSousTitre': Components.ChantierSousTitre;
    'ImgVideo': Components.ImgVideo;
    'LazyIframe': Components.LazyIframe;
    'MkActualite': Components.MkActualite;
    'PoolingStation': Components.PoolingStation;
    'PageAcceuil': Components.PageAcceuil;
    'PageTutorial': Components.PageTutorial;
    'PageActualite': Components.PageActualite;
    'PageActualites': Components.PageActualites;
    'PageContactForm': Components.PageContactForm;
    'PageContact': Components.PageContact;
    'PageDon': Components.PageDon;
    'FormScrutateur': Components.FormScrutateur;
    'PageElections': Components.PageElections;
    'PageEngagementsDetail': Components.PageEngagementsDetail;
    'PageEngagements': Components.PageEngagements;
    'PageForcesDetail': Components.PageForcesDetail;
    'PageForces': Components.PageForces;
    'PageGalerieDetail': Components.PageGalerieDetail;
    'PageGalerie': Components.PageGalerie;
    'PageMap': Components.PageMap;
    'PagePenalty': Components.PagePenalty;
    'PageChantierDetail': Components.PageChantierDetail;
    'PageChantier': Components.PageChantier;
    'PageProgramme': Components.PageProgramme;
    'PageTabs': Components.PageTabs;
    'PageMonCv': Components.PageMonCv;
    'PageWhoAmI': Components.PageWhoAmI;
  }

  interface StencilIntrinsicElements {
    'app-root': Components.AppRootAttributes;
    'chantier-sous-titre': Components.ChantierSousTitreAttributes;
    'img-video': Components.ImgVideoAttributes;
    'lazy-iframe': Components.LazyIframeAttributes;
    'mk-actualite': Components.MkActualiteAttributes;
    'pooling-station': Components.PoolingStationAttributes;
    'page-acceuil': Components.PageAcceuilAttributes;
    'page-tutorial': Components.PageTutorialAttributes;
    'page-actualite': Components.PageActualiteAttributes;
    'page-actualites': Components.PageActualitesAttributes;
    'page-contact-form': Components.PageContactFormAttributes;
    'page-contact': Components.PageContactAttributes;
    'page-don': Components.PageDonAttributes;
    'form-scrutateur': Components.FormScrutateurAttributes;
    'page-elections': Components.PageElectionsAttributes;
    'page-engagements-detail': Components.PageEngagementsDetailAttributes;
    'page-engagements': Components.PageEngagementsAttributes;
    'page-forces-detail': Components.PageForcesDetailAttributes;
    'page-forces': Components.PageForcesAttributes;
    'page-galerie-detail': Components.PageGalerieDetailAttributes;
    'page-galerie': Components.PageGalerieAttributes;
    'page-map': Components.PageMapAttributes;
    'page-penalty': Components.PagePenaltyAttributes;
    'page-chantier-detail': Components.PageChantierDetailAttributes;
    'page-chantier': Components.PageChantierAttributes;
    'page-programme': Components.PageProgrammeAttributes;
    'page-tabs': Components.PageTabsAttributes;
    'page-mon-cv': Components.PageMonCvAttributes;
    'page-who-am-i': Components.PageWhoAmIAttributes;
  }


  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLChantierSousTitreElement extends Components.ChantierSousTitre, HTMLStencilElement {}
  var HTMLChantierSousTitreElement: {
    prototype: HTMLChantierSousTitreElement;
    new (): HTMLChantierSousTitreElement;
  };

  interface HTMLImgVideoElement extends Components.ImgVideo, HTMLStencilElement {}
  var HTMLImgVideoElement: {
    prototype: HTMLImgVideoElement;
    new (): HTMLImgVideoElement;
  };

  interface HTMLLazyIframeElement extends Components.LazyIframe, HTMLStencilElement {}
  var HTMLLazyIframeElement: {
    prototype: HTMLLazyIframeElement;
    new (): HTMLLazyIframeElement;
  };

  interface HTMLMkActualiteElement extends Components.MkActualite, HTMLStencilElement {}
  var HTMLMkActualiteElement: {
    prototype: HTMLMkActualiteElement;
    new (): HTMLMkActualiteElement;
  };

  interface HTMLPoolingStationElement extends Components.PoolingStation, HTMLStencilElement {}
  var HTMLPoolingStationElement: {
    prototype: HTMLPoolingStationElement;
    new (): HTMLPoolingStationElement;
  };

  interface HTMLPageAcceuilElement extends Components.PageAcceuil, HTMLStencilElement {}
  var HTMLPageAcceuilElement: {
    prototype: HTMLPageAcceuilElement;
    new (): HTMLPageAcceuilElement;
  };

  interface HTMLPageTutorialElement extends Components.PageTutorial, HTMLStencilElement {}
  var HTMLPageTutorialElement: {
    prototype: HTMLPageTutorialElement;
    new (): HTMLPageTutorialElement;
  };

  interface HTMLPageActualiteElement extends Components.PageActualite, HTMLStencilElement {}
  var HTMLPageActualiteElement: {
    prototype: HTMLPageActualiteElement;
    new (): HTMLPageActualiteElement;
  };

  interface HTMLPageActualitesElement extends Components.PageActualites, HTMLStencilElement {}
  var HTMLPageActualitesElement: {
    prototype: HTMLPageActualitesElement;
    new (): HTMLPageActualitesElement;
  };

  interface HTMLPageContactFormElement extends Components.PageContactForm, HTMLStencilElement {}
  var HTMLPageContactFormElement: {
    prototype: HTMLPageContactFormElement;
    new (): HTMLPageContactFormElement;
  };

  interface HTMLPageContactElement extends Components.PageContact, HTMLStencilElement {}
  var HTMLPageContactElement: {
    prototype: HTMLPageContactElement;
    new (): HTMLPageContactElement;
  };

  interface HTMLPageDonElement extends Components.PageDon, HTMLStencilElement {}
  var HTMLPageDonElement: {
    prototype: HTMLPageDonElement;
    new (): HTMLPageDonElement;
  };

  interface HTMLFormScrutateurElement extends Components.FormScrutateur, HTMLStencilElement {}
  var HTMLFormScrutateurElement: {
    prototype: HTMLFormScrutateurElement;
    new (): HTMLFormScrutateurElement;
  };

  interface HTMLPageElectionsElement extends Components.PageElections, HTMLStencilElement {}
  var HTMLPageElectionsElement: {
    prototype: HTMLPageElectionsElement;
    new (): HTMLPageElectionsElement;
  };

  interface HTMLPageEngagementsDetailElement extends Components.PageEngagementsDetail, HTMLStencilElement {}
  var HTMLPageEngagementsDetailElement: {
    prototype: HTMLPageEngagementsDetailElement;
    new (): HTMLPageEngagementsDetailElement;
  };

  interface HTMLPageEngagementsElement extends Components.PageEngagements, HTMLStencilElement {}
  var HTMLPageEngagementsElement: {
    prototype: HTMLPageEngagementsElement;
    new (): HTMLPageEngagementsElement;
  };

  interface HTMLPageForcesDetailElement extends Components.PageForcesDetail, HTMLStencilElement {}
  var HTMLPageForcesDetailElement: {
    prototype: HTMLPageForcesDetailElement;
    new (): HTMLPageForcesDetailElement;
  };

  interface HTMLPageForcesElement extends Components.PageForces, HTMLStencilElement {}
  var HTMLPageForcesElement: {
    prototype: HTMLPageForcesElement;
    new (): HTMLPageForcesElement;
  };

  interface HTMLPageGalerieDetailElement extends Components.PageGalerieDetail, HTMLStencilElement {}
  var HTMLPageGalerieDetailElement: {
    prototype: HTMLPageGalerieDetailElement;
    new (): HTMLPageGalerieDetailElement;
  };

  interface HTMLPageGalerieElement extends Components.PageGalerie, HTMLStencilElement {}
  var HTMLPageGalerieElement: {
    prototype: HTMLPageGalerieElement;
    new (): HTMLPageGalerieElement;
  };

  interface HTMLPageMapElement extends Components.PageMap, HTMLStencilElement {}
  var HTMLPageMapElement: {
    prototype: HTMLPageMapElement;
    new (): HTMLPageMapElement;
  };

  interface HTMLPagePenaltyElement extends Components.PagePenalty, HTMLStencilElement {}
  var HTMLPagePenaltyElement: {
    prototype: HTMLPagePenaltyElement;
    new (): HTMLPagePenaltyElement;
  };

  interface HTMLPageChantierDetailElement extends Components.PageChantierDetail, HTMLStencilElement {}
  var HTMLPageChantierDetailElement: {
    prototype: HTMLPageChantierDetailElement;
    new (): HTMLPageChantierDetailElement;
  };

  interface HTMLPageChantierElement extends Components.PageChantier, HTMLStencilElement {}
  var HTMLPageChantierElement: {
    prototype: HTMLPageChantierElement;
    new (): HTMLPageChantierElement;
  };

  interface HTMLPageProgrammeElement extends Components.PageProgramme, HTMLStencilElement {}
  var HTMLPageProgrammeElement: {
    prototype: HTMLPageProgrammeElement;
    new (): HTMLPageProgrammeElement;
  };

  interface HTMLPageTabsElement extends Components.PageTabs, HTMLStencilElement {}
  var HTMLPageTabsElement: {
    prototype: HTMLPageTabsElement;
    new (): HTMLPageTabsElement;
  };

  interface HTMLPageMonCvElement extends Components.PageMonCv, HTMLStencilElement {}
  var HTMLPageMonCvElement: {
    prototype: HTMLPageMonCvElement;
    new (): HTMLPageMonCvElement;
  };

  interface HTMLPageWhoAmIElement extends Components.PageWhoAmI, HTMLStencilElement {}
  var HTMLPageWhoAmIElement: {
    prototype: HTMLPageWhoAmIElement;
    new (): HTMLPageWhoAmIElement;
  };

  interface HTMLElementTagNameMap {
    'app-root': HTMLAppRootElement
    'chantier-sous-titre': HTMLChantierSousTitreElement
    'img-video': HTMLImgVideoElement
    'lazy-iframe': HTMLLazyIframeElement
    'mk-actualite': HTMLMkActualiteElement
    'pooling-station': HTMLPoolingStationElement
    'page-acceuil': HTMLPageAcceuilElement
    'page-tutorial': HTMLPageTutorialElement
    'page-actualite': HTMLPageActualiteElement
    'page-actualites': HTMLPageActualitesElement
    'page-contact-form': HTMLPageContactFormElement
    'page-contact': HTMLPageContactElement
    'page-don': HTMLPageDonElement
    'form-scrutateur': HTMLFormScrutateurElement
    'page-elections': HTMLPageElectionsElement
    'page-engagements-detail': HTMLPageEngagementsDetailElement
    'page-engagements': HTMLPageEngagementsElement
    'page-forces-detail': HTMLPageForcesDetailElement
    'page-forces': HTMLPageForcesElement
    'page-galerie-detail': HTMLPageGalerieDetailElement
    'page-galerie': HTMLPageGalerieElement
    'page-map': HTMLPageMapElement
    'page-penalty': HTMLPagePenaltyElement
    'page-chantier-detail': HTMLPageChantierDetailElement
    'page-chantier': HTMLPageChantierElement
    'page-programme': HTMLPageProgrammeElement
    'page-tabs': HTMLPageTabsElement
    'page-mon-cv': HTMLPageMonCvElement
    'page-who-am-i': HTMLPageWhoAmIElement
  }

  interface ElementTagNameMap {
    'app-root': HTMLAppRootElement;
    'chantier-sous-titre': HTMLChantierSousTitreElement;
    'img-video': HTMLImgVideoElement;
    'lazy-iframe': HTMLLazyIframeElement;
    'mk-actualite': HTMLMkActualiteElement;
    'pooling-station': HTMLPoolingStationElement;
    'page-acceuil': HTMLPageAcceuilElement;
    'page-tutorial': HTMLPageTutorialElement;
    'page-actualite': HTMLPageActualiteElement;
    'page-actualites': HTMLPageActualitesElement;
    'page-contact-form': HTMLPageContactFormElement;
    'page-contact': HTMLPageContactElement;
    'page-don': HTMLPageDonElement;
    'form-scrutateur': HTMLFormScrutateurElement;
    'page-elections': HTMLPageElectionsElement;
    'page-engagements-detail': HTMLPageEngagementsDetailElement;
    'page-engagements': HTMLPageEngagementsElement;
    'page-forces-detail': HTMLPageForcesDetailElement;
    'page-forces': HTMLPageForcesElement;
    'page-galerie-detail': HTMLPageGalerieDetailElement;
    'page-galerie': HTMLPageGalerieElement;
    'page-map': HTMLPageMapElement;
    'page-penalty': HTMLPagePenaltyElement;
    'page-chantier-detail': HTMLPageChantierDetailElement;
    'page-chantier': HTMLPageChantierElement;
    'page-programme': HTMLPageProgrammeElement;
    'page-tabs': HTMLPageTabsElement;
    'page-mon-cv': HTMLPageMonCvElement;
    'page-who-am-i': HTMLPageWhoAmIElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
