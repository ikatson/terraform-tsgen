import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface template_provider_config {
}

export class template_provider implements Provider {
    config: template_provider_config
    constructor(config: template_provider_config) {
      this.config = config;
    }
    toJSON() {
      return {
          template: [this.config]
      }
    }
    
}

