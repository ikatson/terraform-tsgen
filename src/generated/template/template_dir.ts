import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface template_dir_config {
    /**
     * Path to the directory where the templated files will be written    
     */
    destination_dir: rstring
    /**
     * Path to the directory where the files to template reside    
     */
    source_dir: rstring
    /**
     * Variables to substitute    
     */
    vars?: {[propName: string]: rstring}
}

export class template_dir implements Resource {
    config: template_dir_config
    private _is_data: boolean = false
    private _name: string = "template_dir"
    private _id: string;
    constructor(id: string, config: template_dir_config) {
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
    
    get ref_destination_dir(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.destination_dir`)
    }
    get ref_source_dir(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.source_dir`)
    }
    get ref_vars(): Reference<{[propName: string]: rstring}> {
        return new Reference(`${this._name}.${this._id}.vars`)
    }
}

