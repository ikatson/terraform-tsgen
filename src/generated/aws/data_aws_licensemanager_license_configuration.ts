import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_licensemanager_license_configuration_config {
    description?: rstring
    license_count?: rnumber
    license_count_hard_limit?: rboolean
    license_counting_type: rstring
    license_rules?: rstring[]
    name: rstring
    tags?: {[propName: string]: rstring}
}

export class data_aws_licensemanager_license_configuration implements Data {
    config: data_aws_licensemanager_license_configuration_config
    private _is_data: boolean = true
    private _name: string = "data_aws_licensemanager_license_configuration"
    private _id: string;
    constructor(id: string, config: data_aws_licensemanager_license_configuration_config) {
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
    
    get ref_description(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.description`)
  }
    get ref_license_count(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.license_count`)
  }
    get ref_license_count_hard_limit(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.license_count_hard_limit`)
  }
    get ref_license_counting_type(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.license_counting_type`)
  }
    get ref_license_rules(): Reference<rstring[]> {
        return new Reference(`data.${this._name}.${this._id}.license_rules`)
  }
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`data.${this._name}.${this._id}.tags`)
  }
}

