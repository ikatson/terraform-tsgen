import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _data_aws_glue_classifier__grok_classifier {
    classification: rstring
    custom_patterns?: rstring
    grok_pattern: rstring
}

export interface _data_aws_glue_classifier__json_classifier {
    json_path: rstring
}

export interface _data_aws_glue_classifier__xml_classifier {
    classification: rstring
    row_tag: rstring
}

export interface data_aws_glue_classifier_config {
    grok_classifier?: _data_aws_glue_classifier__grok_classifier[]
    json_classifier?: _data_aws_glue_classifier__json_classifier[]
    name: rstring
    xml_classifier?: _data_aws_glue_classifier__xml_classifier[]
}

export class data_aws_glue_classifier implements Data {
    config: data_aws_glue_classifier_config
    private _is_data: boolean = true
    private _name: string = "data_aws_glue_classifier"
    private _id: string;
    constructor(id: string, config: data_aws_glue_classifier_config) {
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
    
    get ref_grok_classifier(): Reference<_data_aws_glue_classifier__grok_classifier[]> {
        return new Reference(`data.${this._name}.${this._id}.grok_classifier`)
  }
    get ref_json_classifier(): Reference<_data_aws_glue_classifier__json_classifier[]> {
        return new Reference(`data.${this._name}.${this._id}.json_classifier`)
  }
    get ref_name(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.name`)
  }
    get ref_xml_classifier(): Reference<_data_aws_glue_classifier__xml_classifier[]> {
        return new Reference(`data.${this._name}.${this._id}.xml_classifier`)
  }
}

