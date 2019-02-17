import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_cloudhsm_v2_hsm_config {
    availability_zone?: rstring
    cluster_id: rstring
    hsm_eni_id?: rstring
    hsm_id?: rstring
    hsm_state?: rstring
    ip_address?: rstring
    subnet_id?: rstring
}

export class aws_cloudhsm_v2_hsm implements Resource {
    config: aws_cloudhsm_v2_hsm_config
    private _is_data: boolean = false
    private _name: string = "aws_cloudhsm_v2_hsm"
    private _id: string;
    constructor(id: string, config: aws_cloudhsm_v2_hsm_config) {
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
    
    get ref_availability_zone(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.availability_zone`)
    }
    get ref_cluster_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.cluster_id`)
    }
    get ref_hsm_eni_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.hsm_eni_id`)
    }
    get ref_hsm_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.hsm_id`)
    }
    get ref_hsm_state(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.hsm_state`)
    }
    get ref_ip_address(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.ip_address`)
    }
    get ref_subnet_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.subnet_id`)
    }
}

