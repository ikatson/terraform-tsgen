import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface template_file_config {
    filename?: rstring
    /**
     * rendered template    
     */
    rendered?: rstring
    /**
     * Contents of the template    
     */
    template?: rstring
    /**
     * variables to substitute    
     */
    vars?: {[propName: string]: rstring}
}

export class template_file implements Resource {
    config: template_file_config
    private _is_data: boolean = false
    private _name: string = "template_file"
    private _id: string;
    constructor(id: string, config: template_file_config) {
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
    
    get ref_filename(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.filename`)
    }
    get ref_rendered(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.rendered`)
    }
    get ref_template(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.template`)
    }
    get ref_vars(): Reference<{[propName: string]: rstring}> {
        return new Reference(`${this._name}.${this._id}.vars`)
    }
}

