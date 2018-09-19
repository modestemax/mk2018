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
    'color': any;
    'key': any;
    'numChantier': any;
    'text': any;
  }
  interface ChantierSousTitreAttributes extends StencilHTMLAttributes {
    'color'?: any;
    'key'?: any;
    'numChantier'?: any;
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
    'date': string;
    'img': string;
    'text': string;
    'title': string;
  }
  interface MkActualiteAttributes extends StencilHTMLAttributes {
    'date'?: string;
    'img'?: string;
    'text'?: string;
    'title'?: string;
  }

  interface PageAboutPopover {}
  interface PageAboutPopoverAttributes extends StencilHTMLAttributes {}

  interface PageAbout {}
  interface PageAboutAttributes extends StencilHTMLAttributes {}

  interface PageAccount {}
  interface PageAccountAttributes extends StencilHTMLAttributes {
    'onUserDidLogOut'?: (event: CustomEvent) => void;
  }

  interface PageActualites {}
  interface PageActualitesAttributes extends StencilHTMLAttributes {}

  interface PageContactForm {}
  interface PageContactFormAttributes extends StencilHTMLAttributes {}

  interface PageContact {}
  interface PageContactAttributes extends StencilHTMLAttributes {}

  interface PageDon {
    'goback': string;
  }
  interface PageDonAttributes extends StencilHTMLAttributes {
    'goback'?: string;
  }

  interface PageEngagementsDetail {
    'goback': string;
    'numero': number;
  }
  interface PageEngagementsDetailAttributes extends StencilHTMLAttributes {
    'goback'?: string;
    'numero'?: number;
  }

  interface PageEngagements {}
  interface PageEngagementsAttributes extends StencilHTMLAttributes {}

  interface PageEnter {}
  interface PageEnterAttributes extends StencilHTMLAttributes {}

  interface PageForcesDetail {
    'forceId': string;
    'goback': string;
  }
  interface PageForcesDetailAttributes extends StencilHTMLAttributes {
    'forceId'?: string;
    'goback'?: string;
  }

  interface PageForces {
    'goback': string;
  }
  interface PageForcesAttributes extends StencilHTMLAttributes {
    'goback'?: string;
  }

  interface PageGalerieDetail {
    'goback': string;
    'numero': number;
  }
  interface PageGalerieDetailAttributes extends StencilHTMLAttributes {
    'goback'?: string;
    'numero'?: number;
  }

  interface PageGalerie {}
  interface PageGalerieAttributes extends StencilHTMLAttributes {}

  interface PageLogin {}
  interface PageLoginAttributes extends StencilHTMLAttributes {
    'onUserDidLogIn'?: (event: CustomEvent) => void;
  }

  interface PageMap {}
  interface PageMapAttributes extends StencilHTMLAttributes {}

  interface PageChantierDetail {
    'detail': string;
    'goback': string;
    'num': number;
  }
  interface PageChantierDetailAttributes extends StencilHTMLAttributes {
    'detail'?: string;
    'goback'?: string;
    'num'?: number;
  }

  interface PageChantier {
    'goback': string;
    'num': number;
  }
  interface PageChantierAttributes extends StencilHTMLAttributes {
    'goback'?: string;
    'num'?: number;
  }

  interface PageMonProjet {}
  interface PageMonProjetAttributes extends StencilHTMLAttributes {}

  interface PagePenalty {}
  interface PagePenaltyAttributes extends StencilHTMLAttributes {}

  interface PageScheduleFilter {
    'excludedTracks': string[];
  }
  interface PageScheduleFilterAttributes extends StencilHTMLAttributes {
    'excludedTracks'?: string[];
  }

  interface PageSchedule {}
  interface PageScheduleAttributes extends StencilHTMLAttributes {}

  interface PageSession {
    'goback': string;
    'sessionId': string;
  }
  interface PageSessionAttributes extends StencilHTMLAttributes {
    'goback'?: string;
    'sessionId'?: string;
  }

  interface PageSignup {}
  interface PageSignupAttributes extends StencilHTMLAttributes {}

  interface PageSpeakerDetail {
    'speakerId': string;
  }
  interface PageSpeakerDetailAttributes extends StencilHTMLAttributes {
    'speakerId'?: string;
  }

  interface PageSpeakerList {}
  interface PageSpeakerListAttributes extends StencilHTMLAttributes {}

  interface PageSupport {}
  interface PageSupportAttributes extends StencilHTMLAttributes {}

  interface PageTabs {}
  interface PageTabsAttributes extends StencilHTMLAttributes {}

  interface PageTutorial {
    'lng': string;
  }
  interface PageTutorialAttributes extends StencilHTMLAttributes {
    'lng'?: string;
  }

  interface PageMonCv {
    'docName': string;
    'goback': string;
  }
  interface PageMonCvAttributes extends StencilHTMLAttributes {
    'docName'?: string;
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
    'PageAboutPopover': Components.PageAboutPopover;
    'PageAbout': Components.PageAbout;
    'PageAccount': Components.PageAccount;
    'PageActualites': Components.PageActualites;
    'PageContactForm': Components.PageContactForm;
    'PageContact': Components.PageContact;
    'PageDon': Components.PageDon;
    'PageEngagementsDetail': Components.PageEngagementsDetail;
    'PageEngagements': Components.PageEngagements;
    'PageEnter': Components.PageEnter;
    'PageForcesDetail': Components.PageForcesDetail;
    'PageForces': Components.PageForces;
    'PageGalerieDetail': Components.PageGalerieDetail;
    'PageGalerie': Components.PageGalerie;
    'PageLogin': Components.PageLogin;
    'PageMap': Components.PageMap;
    'PageChantierDetail': Components.PageChantierDetail;
    'PageChantier': Components.PageChantier;
    'PageMonProjet': Components.PageMonProjet;
    'PagePenalty': Components.PagePenalty;
    'PageScheduleFilter': Components.PageScheduleFilter;
    'PageSchedule': Components.PageSchedule;
    'PageSession': Components.PageSession;
    'PageSignup': Components.PageSignup;
    'PageSpeakerDetail': Components.PageSpeakerDetail;
    'PageSpeakerList': Components.PageSpeakerList;
    'PageSupport': Components.PageSupport;
    'PageTabs': Components.PageTabs;
    'PageTutorial': Components.PageTutorial;
    'PageMonCv': Components.PageMonCv;
    'PageWhoAmI': Components.PageWhoAmI;
  }

  interface StencilIntrinsicElements {
    'app-root': Components.AppRootAttributes;
    'chantier-sous-titre': Components.ChantierSousTitreAttributes;
    'img-video': Components.ImgVideoAttributes;
    'lazy-iframe': Components.LazyIframeAttributes;
    'mk-actualite': Components.MkActualiteAttributes;
    'page-about-popover': Components.PageAboutPopoverAttributes;
    'page-about': Components.PageAboutAttributes;
    'page-account': Components.PageAccountAttributes;
    'page-actualites': Components.PageActualitesAttributes;
    'page-contact-form': Components.PageContactFormAttributes;
    'page-contact': Components.PageContactAttributes;
    'page-don': Components.PageDonAttributes;
    'page-engagements-detail': Components.PageEngagementsDetailAttributes;
    'page-engagements': Components.PageEngagementsAttributes;
    'page-enter': Components.PageEnterAttributes;
    'page-forces-detail': Components.PageForcesDetailAttributes;
    'page-forces': Components.PageForcesAttributes;
    'page-galerie-detail': Components.PageGalerieDetailAttributes;
    'page-galerie': Components.PageGalerieAttributes;
    'page-login': Components.PageLoginAttributes;
    'page-map': Components.PageMapAttributes;
    'page-chantier-detail': Components.PageChantierDetailAttributes;
    'page-chantier': Components.PageChantierAttributes;
    'page-mon-projet': Components.PageMonProjetAttributes;
    'page-penalty': Components.PagePenaltyAttributes;
    'page-schedule-filter': Components.PageScheduleFilterAttributes;
    'page-schedule': Components.PageScheduleAttributes;
    'page-session': Components.PageSessionAttributes;
    'page-signup': Components.PageSignupAttributes;
    'page-speaker-detail': Components.PageSpeakerDetailAttributes;
    'page-speaker-list': Components.PageSpeakerListAttributes;
    'page-support': Components.PageSupportAttributes;
    'page-tabs': Components.PageTabsAttributes;
    'page-tutorial': Components.PageTutorialAttributes;
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

  interface HTMLPageAboutPopoverElement extends Components.PageAboutPopover, HTMLStencilElement {}
  var HTMLPageAboutPopoverElement: {
    prototype: HTMLPageAboutPopoverElement;
    new (): HTMLPageAboutPopoverElement;
  };

  interface HTMLPageAboutElement extends Components.PageAbout, HTMLStencilElement {}
  var HTMLPageAboutElement: {
    prototype: HTMLPageAboutElement;
    new (): HTMLPageAboutElement;
  };

  interface HTMLPageAccountElement extends Components.PageAccount, HTMLStencilElement {}
  var HTMLPageAccountElement: {
    prototype: HTMLPageAccountElement;
    new (): HTMLPageAccountElement;
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

  interface HTMLPageEnterElement extends Components.PageEnter, HTMLStencilElement {}
  var HTMLPageEnterElement: {
    prototype: HTMLPageEnterElement;
    new (): HTMLPageEnterElement;
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

  interface HTMLPageLoginElement extends Components.PageLogin, HTMLStencilElement {}
  var HTMLPageLoginElement: {
    prototype: HTMLPageLoginElement;
    new (): HTMLPageLoginElement;
  };

  interface HTMLPageMapElement extends Components.PageMap, HTMLStencilElement {}
  var HTMLPageMapElement: {
    prototype: HTMLPageMapElement;
    new (): HTMLPageMapElement;
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

  interface HTMLPageMonProjetElement extends Components.PageMonProjet, HTMLStencilElement {}
  var HTMLPageMonProjetElement: {
    prototype: HTMLPageMonProjetElement;
    new (): HTMLPageMonProjetElement;
  };

  interface HTMLPagePenaltyElement extends Components.PagePenalty, HTMLStencilElement {}
  var HTMLPagePenaltyElement: {
    prototype: HTMLPagePenaltyElement;
    new (): HTMLPagePenaltyElement;
  };

  interface HTMLPageScheduleFilterElement extends Components.PageScheduleFilter, HTMLStencilElement {}
  var HTMLPageScheduleFilterElement: {
    prototype: HTMLPageScheduleFilterElement;
    new (): HTMLPageScheduleFilterElement;
  };

  interface HTMLPageScheduleElement extends Components.PageSchedule, HTMLStencilElement {}
  var HTMLPageScheduleElement: {
    prototype: HTMLPageScheduleElement;
    new (): HTMLPageScheduleElement;
  };

  interface HTMLPageSessionElement extends Components.PageSession, HTMLStencilElement {}
  var HTMLPageSessionElement: {
    prototype: HTMLPageSessionElement;
    new (): HTMLPageSessionElement;
  };

  interface HTMLPageSignupElement extends Components.PageSignup, HTMLStencilElement {}
  var HTMLPageSignupElement: {
    prototype: HTMLPageSignupElement;
    new (): HTMLPageSignupElement;
  };

  interface HTMLPageSpeakerDetailElement extends Components.PageSpeakerDetail, HTMLStencilElement {}
  var HTMLPageSpeakerDetailElement: {
    prototype: HTMLPageSpeakerDetailElement;
    new (): HTMLPageSpeakerDetailElement;
  };

  interface HTMLPageSpeakerListElement extends Components.PageSpeakerList, HTMLStencilElement {}
  var HTMLPageSpeakerListElement: {
    prototype: HTMLPageSpeakerListElement;
    new (): HTMLPageSpeakerListElement;
  };

  interface HTMLPageSupportElement extends Components.PageSupport, HTMLStencilElement {}
  var HTMLPageSupportElement: {
    prototype: HTMLPageSupportElement;
    new (): HTMLPageSupportElement;
  };

  interface HTMLPageTabsElement extends Components.PageTabs, HTMLStencilElement {}
  var HTMLPageTabsElement: {
    prototype: HTMLPageTabsElement;
    new (): HTMLPageTabsElement;
  };

  interface HTMLPageTutorialElement extends Components.PageTutorial, HTMLStencilElement {}
  var HTMLPageTutorialElement: {
    prototype: HTMLPageTutorialElement;
    new (): HTMLPageTutorialElement;
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
    'page-about-popover': HTMLPageAboutPopoverElement
    'page-about': HTMLPageAboutElement
    'page-account': HTMLPageAccountElement
    'page-actualites': HTMLPageActualitesElement
    'page-contact-form': HTMLPageContactFormElement
    'page-contact': HTMLPageContactElement
    'page-don': HTMLPageDonElement
    'page-engagements-detail': HTMLPageEngagementsDetailElement
    'page-engagements': HTMLPageEngagementsElement
    'page-enter': HTMLPageEnterElement
    'page-forces-detail': HTMLPageForcesDetailElement
    'page-forces': HTMLPageForcesElement
    'page-galerie-detail': HTMLPageGalerieDetailElement
    'page-galerie': HTMLPageGalerieElement
    'page-login': HTMLPageLoginElement
    'page-map': HTMLPageMapElement
    'page-chantier-detail': HTMLPageChantierDetailElement
    'page-chantier': HTMLPageChantierElement
    'page-mon-projet': HTMLPageMonProjetElement
    'page-penalty': HTMLPagePenaltyElement
    'page-schedule-filter': HTMLPageScheduleFilterElement
    'page-schedule': HTMLPageScheduleElement
    'page-session': HTMLPageSessionElement
    'page-signup': HTMLPageSignupElement
    'page-speaker-detail': HTMLPageSpeakerDetailElement
    'page-speaker-list': HTMLPageSpeakerListElement
    'page-support': HTMLPageSupportElement
    'page-tabs': HTMLPageTabsElement
    'page-tutorial': HTMLPageTutorialElement
    'page-mon-cv': HTMLPageMonCvElement
    'page-who-am-i': HTMLPageWhoAmIElement
  }

  interface ElementTagNameMap {
    'app-root': HTMLAppRootElement;
    'chantier-sous-titre': HTMLChantierSousTitreElement;
    'img-video': HTMLImgVideoElement;
    'lazy-iframe': HTMLLazyIframeElement;
    'mk-actualite': HTMLMkActualiteElement;
    'page-about-popover': HTMLPageAboutPopoverElement;
    'page-about': HTMLPageAboutElement;
    'page-account': HTMLPageAccountElement;
    'page-actualites': HTMLPageActualitesElement;
    'page-contact-form': HTMLPageContactFormElement;
    'page-contact': HTMLPageContactElement;
    'page-don': HTMLPageDonElement;
    'page-engagements-detail': HTMLPageEngagementsDetailElement;
    'page-engagements': HTMLPageEngagementsElement;
    'page-enter': HTMLPageEnterElement;
    'page-forces-detail': HTMLPageForcesDetailElement;
    'page-forces': HTMLPageForcesElement;
    'page-galerie-detail': HTMLPageGalerieDetailElement;
    'page-galerie': HTMLPageGalerieElement;
    'page-login': HTMLPageLoginElement;
    'page-map': HTMLPageMapElement;
    'page-chantier-detail': HTMLPageChantierDetailElement;
    'page-chantier': HTMLPageChantierElement;
    'page-mon-projet': HTMLPageMonProjetElement;
    'page-penalty': HTMLPagePenaltyElement;
    'page-schedule-filter': HTMLPageScheduleFilterElement;
    'page-schedule': HTMLPageScheduleElement;
    'page-session': HTMLPageSessionElement;
    'page-signup': HTMLPageSignupElement;
    'page-speaker-detail': HTMLPageSpeakerDetailElement;
    'page-speaker-list': HTMLPageSpeakerListElement;
    'page-support': HTMLPageSupportElement;
    'page-tabs': HTMLPageTabsElement;
    'page-tutorial': HTMLPageTutorialElement;
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
