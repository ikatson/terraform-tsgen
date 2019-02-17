import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _data_template_cloudinit_config__part {
    content: rstring
    content_type?: rstring
    filename?: rstring
    merge_type?: rstring
}

export interface data_template_cloudinit_config_config {
    base64_encode?: rboolean
    gzip?: rboolean
    part: _data_template_cloudinit_config__part[]
    /**
     * rendered cloudinit configuration    
     */
    rendered?: rstring
}

export class data_template_cloudinit_config implements Data {
    config: data_template_cloudinit_config_config
    private _is_data: boolean = true
    private _name: string = "template_cloudinit_config"
    private _id: string;
    constructor(id: string, config: data_template_cloudinit_config_config) {
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
    
    get ref_base64_encode(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.base64_encode`)
  }
    get ref_gzip(): Reference<boolean> {
        return new Reference(`data.${this._name}.${this._id}.gzip`)
  }
    get ref_part(): Reference<_data_template_cloudinit_config__part[]> {
        return new Reference(`data.${this._name}.${this._id}.part`)
  }
    get ref_rendered(): Reference<string> {
        return new Reference(`data.${this._name}.${this._id}.rendered`)
  }
}

