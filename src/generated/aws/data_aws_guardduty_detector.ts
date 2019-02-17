import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_guardduty_detector_config {
    account_id?: rstring
    enable?: rboolean
    finding_publishing_frequency?: rstring
}

export class data_aws_guardduty_detector implements Data {
    config: data_aws_guardduty_detector_config
    private _is_data: boolean = true
    private _name: string = "data_aws_guardduty_detector"
    private _id: string;
    constructor(id: string, config: data_aws_guardduty_detector_config) {
        this._id = id;
        this.config = config;
    }
    getID(): string {
      return this._id;
    }
    getName(): string {
      return this._name;
    }
    toJSON() {
      return {
          [this._name]: [
            {
              [this._id]: [this.config]
            }
          ]
      };
    }
    
    get ref_account_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.account_id`)
  }
    get ref_enable(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.enable`)
  }
    get ref_finding_publishing_frequency(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.finding_publishing_frequency`)
  }
}

