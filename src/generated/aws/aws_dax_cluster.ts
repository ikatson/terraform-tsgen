import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _aws_dax_cluster__nodes {
    address?: rstring
    availability_zone?: rstring
    id?: rstring
    port?: rnumber
}

export interface _aws_dax_cluster__server_side_encryption {
    enabled?: rboolean
}

export interface aws_dax_cluster_config {
    arn?: rstring
    availability_zones?: rstring[]
    cluster_address?: rstring
    cluster_name: rstring
    configuration_endpoint?: rstring
    description?: rstring
    iam_role_arn: rstring
    maintenance_window?: rstring
    node_type: rstring
    nodes?: _aws_dax_cluster__nodes[]
    notification_topic_arn?: rstring
    parameter_group_name?: rstring
    port?: rnumber
    replication_factor: rnumber
    security_group_ids?: rstring[]
    server_side_encryption?: _aws_dax_cluster__server_side_encryption[]
    subnet_group_name?: rstring
    tags?: {[propName: string]: rstring}
}

export class aws_dax_cluster implements Resource {
    config: aws_dax_cluster_config
    private _is_data: boolean = false
    private _name: string = "aws_dax_cluster"
    private _id: string;
    constructor(id: string, config: aws_dax_cluster_config) {
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
    get ref_availability_zones(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.availability_zones`)
    }
    get ref_cluster_address(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.cluster_address`)
    }
    get ref_cluster_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.cluster_name`)
    }
    get ref_configuration_endpoint(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.configuration_endpoint`)
    }
    get ref_description(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.description`)
    }
    get ref_iam_role_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.iam_role_arn`)
    }
    get ref_maintenance_window(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.maintenance_window`)
    }
    get ref_node_type(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.node_type`)
    }
    get ref_nodes(): Reference<_aws_dax_cluster__nodes[]> {
        return new Reference(`${this._name}.${this._id}.nodes`)
    }
    get ref_notification_topic_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.notification_topic_arn`)
    }
    get ref_parameter_group_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.parameter_group_name`)
    }
    get ref_port(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.port`)
    }
    get ref_replication_factor(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.replication_factor`)
    }
    get ref_security_group_ids(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.security_group_ids`)
    }
    get ref_server_side_encryption(): Reference<_aws_dax_cluster__server_side_encryption[]> {
        return new Reference(`${this._name}.${this._id}.server_side_encryption`)
    }
    get ref_subnet_group_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.subnet_group_name`)
    }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`${this._name}.${this._id}.tags`)
    }
}

