import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _data_aws_glue_script__dag_edge {
    source: rstring
    target: rstring
    target_parameter?: rstring
}

export interface __data_aws_glue_script__dag_node__args {
    name: rstring
    param?: rboolean
    value: rstring
}

export interface _data_aws_glue_script__dag_node {
    args: __data_aws_glue_script__dag_node__args[]
    id: rstring
    line_number?: rnumber
    node_type: rstring
}

export interface data_aws_glue_script_config {
    dag_edge: _data_aws_glue_script__dag_edge[]
    dag_node: _data_aws_glue_script__dag_node[]
    language?: rstring
    python_script?: rstring
    scala_code?: rstring
}

export class data_aws_glue_script implements Data {
    config: data_aws_glue_script_config
    private _is_data: boolean = true
    private _name: string = "aws_glue_script"
    private _id: string;
    constructor(id: string, config: data_aws_glue_script_config) {
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
    
    get ref_dag_edge(): Reference<_data_aws_glue_script__dag_edge[]> {
        return new Reference(`data.${this._name}.${this._id}.dag_edge`)
  }
    get ref_dag_node(): Reference<_data_aws_glue_script__dag_node[]> {
        return new Reference(`data.${this._name}.${this._id}.dag_node`)
  }
    get ref_language(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.language`)
  }
    get ref_python_script(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.python_script`)
  }
    get ref_scala_code(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.scala_code`)
  }
}

