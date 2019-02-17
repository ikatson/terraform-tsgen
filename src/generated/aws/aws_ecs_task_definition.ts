import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _aws_ecs_task_definition__placement_constraints {
    expression?: rstring
    type: rstring
}

export interface __aws_ecs_task_definition__volume__docker_volume_configuration {
    autoprovision?: rboolean
    driver?: rstring
    driver_opts?: {[propName: string]: rstring}
    labels?: {[propName: string]: rstring}
    scope?: rstring
}

export interface _aws_ecs_task_definition__volume {
    docker_volume_configuration?: __aws_ecs_task_definition__volume__docker_volume_configuration[]
    host_path?: rstring
    name: rstring
}

export interface aws_ecs_task_definition_config {
    arn?: rstring
    container_definitions: rstring
    cpu?: rstring
    execution_role_arn?: rstring
    family: rstring
    ipc_mode?: rstring
    memory?: rstring
    network_mode?: rstring
    pid_mode?: rstring
    placement_constraints?: _aws_ecs_task_definition__placement_constraints[]
    requires_compatibilities?: rstring[]
    revision?: rnumber
    tags?: {[propName: string]: rstring}
    task_role_arn?: rstring
    volume?: _aws_ecs_task_definition__volume[]
}

export class aws_ecs_task_definition implements Resource {
    config: aws_ecs_task_definition_config
    private _is_data: boolean = false
    private _name: string = "aws_ecs_task_definition"
    private _id: string;
    constructor(id: string, config: aws_ecs_task_definition_config) {
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
    get ref_container_definitions(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.container_definitions`)
    }
    get ref_cpu(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.cpu`)
    }
    get ref_execution_role_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.execution_role_arn`)
    }
    get ref_family(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.family`)
    }
    get ref_ipc_mode(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.ipc_mode`)
    }
    get ref_memory(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.memory`)
    }
    get ref_network_mode(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.network_mode`)
    }
    get ref_pid_mode(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.pid_mode`)
    }
    get ref_placement_constraints(): Reference<_aws_ecs_task_definition__placement_constraints[]> {
        return new Reference(`${this._name}.${this._id}.placement_constraints`)
    }
    get ref_requires_compatibilities(): Reference<rstring[]> {
        return new Reference(`${this._name}.${this._id}.requires_compatibilities`)
    }
    get ref_revision(): Reference<number> {
        return new Reference(`${this._name}.${this._id}.revision`)
    }
    get ref_tags(): Reference<{[propName: string]: rstring}> {
        return new Reference(`${this._name}.${this._id}.tags`)
    }
    get ref_task_role_arn(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.task_role_arn`)
    }
    get ref_volume(): Reference<_aws_ecs_task_definition__volume[]> {
        return new Reference(`${this._name}.${this._id}.volume`)
    }
}

