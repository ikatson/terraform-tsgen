import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_guardduty_ipset_config {
    activate: rboolean
    detector_id: rstring
    format: rstring
    location: rstring
    name: rstring
}

export class data_aws_guardduty_ipset implements Data {
    config: data_aws_guardduty_ipset_config
    private _is_data: boolean = true
    private _name: string = "data_aws_guardduty_ipset"
    private _id: string;
    constructor(id: string, config: data_aws_guardduty_ipset_config) {
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
    
    get ref_activate(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.activate`)
  }
    get ref_detector_id(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.detector_id`)
  }
    get ref_format(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.format`)
  }
    get ref_location(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.location`)
  }
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
}

