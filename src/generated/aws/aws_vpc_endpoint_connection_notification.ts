import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_vpc_endpoint_connection_notification_config {
    connection_events: rstring[]
    connection_notification_arn: rstring
    notification_type?: rstring
    state?: rstring
    vpc_endpoint_id?: rstring
    vpc_endpoint_service_id?: rstring
}

export class aws_vpc_endpoint_connection_notification implements Resource {
    config: aws_vpc_endpoint_connection_notification_config
    private _is_data: boolean = false
    private _name: string = "aws_vpc_endpoint_connection_notification"
    private _id: string;
    constructor(id: string, config: aws_vpc_endpoint_connection_notification_config) {
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
    
    get ref_connection_events(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.connection_events`)
    }
    get ref_connection_notification_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.connection_notification_arn`)
    }
    get ref_notification_type(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.notification_type`)
    }
    get ref_state(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.state`)
    }
    get ref_vpc_endpoint_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.vpc_endpoint_id`)
    }
    get ref_vpc_endpoint_service_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.vpc_endpoint_service_id`)
    }
}

