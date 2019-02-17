import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface data_aws_ecs_container_definition_config {
    container_name: rstring
    cpu?: rnumber
    disable_networking?: rboolean
    docker_labels?: {[propName: string]: rstring}
    environment?: {[propName: string]: rstring}
    image?: rstring
    image_digest?: rstring
    memory?: rnumber
    memory_reservation?: rnumber
    task_definition: rstring
}

export class data_aws_ecs_container_definition implements Data {
    config: data_aws_ecs_container_definition_config
    private _is_data: boolean = true
    private _name: string = "aws_ecs_container_definition"
    private _id: string;
    constructor(id: string, config: data_aws_ecs_container_definition_config) {
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
    
    get ref_container_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.container_name`)
  }
    get ref_cpu(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.cpu`)
  }
    get ref_disable_networking(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.disable_networking`)
  }
    get ref_docker_labels(): Reference<{[propName: string]: rstring}> {
        return new Reference(`data.${this._name}.${this._id}.docker_labels`)
  }
    get ref_environment(): Reference<{[propName: string]: rstring}> {
        return new Reference(`data.${this._name}.${this._id}.environment`)
  }
    get ref_image(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.image`)
  }
    get ref_image_digest(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.image_digest`)
  }
    get ref_memory(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.memory`)
  }
    get ref_memory_reservation(): Reference<number> {
        return new Reference(`data.${this._name}.${this._id}.memory_reservation`)
  }
    get ref_task_definition(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.task_definition`)
  }
}

