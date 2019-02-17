import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_flow_log_config {
    eni_id?: rstring
    iam_role_arn?: rstring
    log_destination?: rstring
    log_destination_type?: rstring
    log_group_name?: rstring
    subnet_id?: rstring
    traffic_type: rstring
    vpc_id?: rstring
}

export class aws_flow_log implements Resource {
    config: aws_flow_log_config
    private _is_data: boolean = false
    private _name: string = "aws_flow_log"
    private _id: string;
    constructor(id: string, config: aws_flow_log_config) {
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
    
    get ref_eni_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.eni_id`)
    }
    get ref_iam_role_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.iam_role_arn`)
    }
    get ref_log_destination(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.log_destination`)
    }
    get ref_log_destination_type(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.log_destination_type`)
    }
    get ref_log_group_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.log_group_name`)
    }
    get ref_subnet_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.subnet_id`)
    }
    get ref_traffic_type(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.traffic_type`)
    }
    get ref_vpc_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.vpc_id`)
    }
}

