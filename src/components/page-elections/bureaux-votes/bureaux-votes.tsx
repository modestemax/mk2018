import {Component, Listen, Prop, State} from '@stencil/core';
import {ElectionForm} from '../forms/election-form';
import {Ballots} from '../../../providers/ballots-data';
import _ from 'lodash';
import {ElectionsData} from '../../../providers/elections-data';

@Component({
  tag: 'bureaux-votes',
  styleUrl: 'bureaux-votes.scss',
})
export class BureauxVotes {
  formType = 'bureau-vote';
  entityName = 'bureauVote';
  @Prop() goback = '/';
  @State() editMode: boolean;
  @State() entity: any;
  @State() docs: any[];
  @State() allDocs: any[];
  @State() footDoc: any;

  constructor() {
    new ElectionForm(this, {pool_id: false, command: false, cancel_select: false});
    this.entity = {}
  }


  @Listen('regionChanged')
  async onRegionChanged(event: CustomEvent) {
    this.filterChanged(event);
  }

  @Listen('divisionChanged')
  async onDivisionChanged(event: CustomEvent) {
    this.filterChanged(event);
  }

  @Listen('councilChanged')
  async onCouncilChanged(event: CustomEvent) {
    this.filterChanged(event);
  }

  async filterChanged(event) {
    this['poolData'] = event.detail.poolData;
    const {region_id, division_id, council_id} = event.detail.poolData;
    let id;
    let hasFoot = true;
    if (region_id && division_id && council_id) {
      id = `regions/${region_id}/divisions/${division_id}/councils/${council_id}/pooling_stations`;
    } else if (region_id && division_id) {
      id = `regions/${region_id}/divisions/${division_id}/councils`;
    } else if (region_id) {
      id = `regions/${region_id}/divisions`;
    } else {
      id = `regions`;
      hasFoot = false;
    }
    await this.loadDocs(id, hasFoot);
  }

  async componentWillLoad() {
    this['formData'] = await ElectionsData.getFormData(this['formType']) || {};
    await this.loadDocs('regions', false);
  }

  displayData() {
    return (
      <table>
        {this.docs.map(doc => (<tr id={doc.id}>
          <td>{doc.data().name}</td>
          <td>{doc.data().polling_stations_count}</td>
        </tr>))}

        {this.footDoc ?
          <tfoot>
          <tr id={this.footDoc.id}>
            <td>{this.footDoc.data().name}</td>
            <td>{this.footDoc.data().polling_stations_count}</td>
          </tr>
          </tfoot>
          : ''}
      </table>
    );
  }

  private async loadDocs(id: any, hasFoot: boolean) {
    if (id) {
      this.allDocs = await Ballots.getDocs(id);
    }
    this.allDocs = this.allDocs || [];
    this.docs = this.allDocs;
    this.footDoc = null;
    if (hasFoot) {
      this.footDoc = _.last(this.allDocs);
      this.docs = _.initial(this.allDocs);
    }
  }
}

