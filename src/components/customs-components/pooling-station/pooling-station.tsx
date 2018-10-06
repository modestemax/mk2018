import {Component, Event, EventEmitter, Prop, State} from '@stencil/core';
import {__} from '../../../providers/i18n';
import {Ballots} from '../../../providers/ballots-data';

@Component({
  tag: 'pooling-station',
  styleUrl: 'pooling-station.scss',
})
export class PoolingStation {
  private region: HTMLInputElement;
  private regions: any = [];
  private division: HTMLInputElement;
  @State() divisions: any = [];
  private council: HTMLInputElement;
  @State() councils: any = [];
  private pool: HTMLInputElement;
  @State() pools: any = [];
  @State() scrutineer: any;

  @Event() regionChanged: EventEmitter;
  @Event() divisionChanged: EventEmitter;
  @Event() councilChanged: EventEmitter;
  @Event() poolingStationChanged: EventEmitter;
  @Prop() showPool = true;

  async onRegionChanged() {
    if (this.region.value) {
      this.divisions = await Ballots.getDivisions({region_id: this.region.value});
    } else {
      this.divisions = [];
    }
    this.division.value = null;
    this.regionChanged.emit({
      poolData: {
        region_id: this.region.value,
        division_id: this.division.value,
        council_id: this.council.value,
        pool_id: this.pool.value,
      }
    });
  }

  async onDivisionChanged() {
    if (this.region.value && this.division.value) {
      this.councils = await Ballots.getCouncils({region_id: this.region.value, division_id: this.division.value});
    } else {
      this.councils = [];
    }
    this.council.value = null;
    this.divisionChanged.emit({
      poolData: {
        region_id: this.region.value,
        division_id: this.division.value,
        council_id: this.council.value,
        pool_id: this.pool.value,
      }
    });
  }

  async onCouncilChanged() {
    if (this.region.value && this.division.value && this.council.value) {
      this.pools = await Ballots.getPools({
        region_id: this.region.value,
        division_id: this.division.value,
        council_id: this.council.value
      });
    } else {
      this.pools = [];
    }
    this.pool.value = null;
    this.councilChanged.emit({
      poolData: {
        region_id: this.region.value,
        division_id: this.division.value,
        council_id: this.council.value,
        pool_id: this.pool.value,
      }
    });
  }

  async onPoolingStationChanged() {

    this.poolingStationChanged.emit({
      poolData: {
        region_id: this.region.value,
        division_id: this.division.value,
        council_id: this.council.value,
        pool_id: this.pool.value,
      }
    });
  }


  async componentWillLoad() {
    this.regions = await Ballots.getRegions();
  }

  render() {
    return (
      <ion-list class="form">
        {/*<ion-list-header class="en-tete">*/}

        {/*</ion-list-header>*/}
        <ion-item>
          <ion-label position="stacked">{__('REGION')}</ion-label>
          <ion-select onIonChange={this.onRegionChanged.bind(this)} ref={(el: HTMLInputElement) => this.region = el}
                      interface="action-sheet">
            {this.regions.map(region => (<ion-select-option value={region.id}>{region.data().name}</ion-select-option>))}
          </ion-select>
        </ion-item>
        <ion-item>
          <ion-label position="stacked">{__('DIVISION')}</ion-label>
          <ion-select onIonChange={this.onDivisionChanged.bind(this)} ref={(el: HTMLInputElement) => this.division = el}
                      interface="action-sheet">
            {this.divisions.map(division => (
              <ion-select-option value={division.id}>{division.data().name}</ion-select-option>))}
          </ion-select>
        </ion-item>
        <ion-item>
          <ion-label position="stacked">{__('COUNCIL')}</ion-label>
          <ion-select onIonChange={this.onCouncilChanged.bind(this)} ref={(el: HTMLInputElement) => this.council = el}
                      interface="action-sheet">
            {this.councils.map(council => (
              <ion-select-option value={council.id}>{council.data().name}</ion-select-option>))}
          </ion-select>
        </ion-item>
        <ion-item style={{visibility: this.showPool ? 'visible' : 'hidden'}}>
          <ion-label position="stacked">{__('POLLING_STATION')}</ion-label>
          <ion-select onIonChange={this.onPoolingStationChanged.bind(this)} ref={(el: HTMLInputElement) => this.pool = el}
                      interface="action-sheet">
            {this.pools.map(poolingStation => (
              <ion-select-option value={poolingStation.id}>{poolingStation.data().name}</ion-select-option>))}
          </ion-select>
        </ion-item>


      </ion-list>
    );
  }


}
