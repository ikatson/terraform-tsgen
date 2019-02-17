import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface aws_sqs_queue_config {
    arn?: rstring
    content_based_deduplication?: rboolean
    delay_seconds?: rnumber
    fifo_queue?: rboolean
    kms_data_key_reuse_period_seconds?: rnumber
    kms_master_key_id?: rstring
    max_message_size?: rnumber
    message_retention_seconds?: rnumber
    name?: rstring
    name_prefix?: rstring
    policy?: rstring
    receive_wait_time_seconds?: rnumber
    redrive_policy?: rstring
    tags?: {[propName: string]: rstring}
    visibility_timeout_seconds?: rnumber
}

export class aws_sqs_queue implements Resource {
    config: aws_sqs_queue_config
    private _is_data: boolean = false
    private _name: string = "aws_sqs_queue"
    private _id: string;
    constructor(id: string, config: aws_sqs_queue_config) {
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
        return new Reference(`${this._name}.${this._id}.arn`)
    }
    get ref_content_based_deduplication(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.content_based_deduplication`)
    }
    get ref_delay_seconds(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.delay_seconds`)
    }
    get ref_fifo_queue(): Reference<boolean> {
        return new Reference(`${this._name}.${this._id}.fifo_queue`)
    }
    get ref_kms_data_key_reuse_period_seconds(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.kms_data_key_reuse_period_seconds`)
    }
    get ref_kms_master_key_id(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.kms_master_key_id`)
    }
    get ref_max_message_size(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.max_message_size`)
    }
    get ref_message_retention_seconds(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.message_retention_seconds`)
    }
    get ref_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name`)
    }
    get ref_name_prefix(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name_prefix`)
    }
    get ref_policy(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.policy`)
    }
    get ref_receive_wait_time_seconds(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.receive_wait_time_seconds`)
    }
    get ref_redrive_policy(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.redrive_policy`)
    }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`${this._name}.${this._id}.tags`)
    }
    get ref_visibility_timeout_seconds(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.visibility_timeout_seconds`)
    }
}

