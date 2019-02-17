import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_inspector_rules_packages_config {
    arns?: rstring[]
}

export class data_aws_inspector_rules_packages implements Data {
    config: data_aws_inspector_rules_packages_config
    private _is_data: boolean = true
    private _name: string = "aws_inspector_rules_packages"
    private _id: string;
    constructor(id: string, config: data_aws_inspector_rules_packages_config) {
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
    
    get ref_arns(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.arns`)
  }
}

