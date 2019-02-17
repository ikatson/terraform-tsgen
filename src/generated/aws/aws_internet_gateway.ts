import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_internet_gateway_config {
    owner_id?: rstring
    tags?: {[propName: string]: rstring}
    vpc_id?: rstring
}

export class aws_internet_gateway implements Resource {
    config: aws_internet_gateway_config
    private _is_data: boolean = false
    private _name: string = "aws_internet_gateway"
    private _id: string;
    constructor(id: string, config: aws_internet_gateway_config) {
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
    
    get ref_owner_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.owner_id`)
    }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`${this._name}.${this._id}.tags`)
    }
    get ref_vpc_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.vpc_id`)
    }
}

