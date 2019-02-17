import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_transfer_server_config {
    arn?: rstring
    endpoint?: rstring
    force_destroy?: rboolean
    identity_provider_type?: rstring
    invocation_role?: rstring
    logging_role?: rstring
    tags?: {[propName: string]: rstring}
    url?: rstring
}

export class data_aws_transfer_server implements Data {
    config: data_aws_transfer_server_config
    private _is_data: boolean = true
    private _name: string = "data_aws_transfer_server"
    private _id: string;
    constructor(id: string, config: data_aws_transfer_server_config) {
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
    
    get ref_arn(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.arn`)
  }
    get ref_endpoint(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.endpoint`)
  }
    get ref_force_destroy(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.force_destroy`)
  }
    get ref_identity_provider_type(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.identity_provider_type`)
  }
    get ref_invocation_role(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.invocation_role`)
  }
    get ref_logging_role(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.logging_role`)
  }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`data.${this._name}.${this._id}.tags`)
  }
    get ref_url(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.url`)
  }
}

