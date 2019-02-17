import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_guardduty_detector_config {
    account_id?: rstring
    enable?: rboolean
    finding_publishing_frequency?: rstring
}

export class aws_guardduty_detector implements Resource {
    config: aws_guardduty_detector_config
    private _is_data: boolean = false
    private _name: string = "aws_guardduty_detector"
    private _id: string;
    constructor(id: string, config: aws_guardduty_detector_config) {
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
        return new Reference(`${this._name}.${this._id}.account_id`)
    }
    get ref_enable(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.enable`)
    }
    get ref_finding_publishing_frequency(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.finding_publishing_frequency`)
    }
}

