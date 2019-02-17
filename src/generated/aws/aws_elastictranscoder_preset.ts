import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _aws_elastictranscoder_preset__audio {
    audio_packing_mode?: rstring
    bit_rate?: rstring
    channels?: rstring
    codec?: rstring
    sample_rate?: rstring
}

export interface _aws_elastictranscoder_preset__audio_codec_options {
    bit_depth?: rstring
    bit_order?: rstring
    profile?: rstring
    signed?: rstring
}

export interface _aws_elastictranscoder_preset__thumbnails {
    aspect_ratio?: rstring
    format?: rstring
    interval?: rstring
    max_height?: rstring
    max_width?: rstring
    padding_policy?: rstring
    resolution?: rstring
    sizing_policy?: rstring
}

export interface _aws_elastictranscoder_preset__video {
    aspect_ratio?: rstring
    bit_rate?: rstring
    codec?: rstring
    display_aspect_ratio?: rstring
    fixed_gop?: rstring
    frame_rate?: rstring
    keyframes_max_dist?: rstring
    max_frame_rate?: rstring
    max_height?: rstring
    max_width?: rstring
    padding_policy?: rstring
    resolution?: rstring
    sizing_policy?: rstring
}

export interface _aws_elastictranscoder_preset__video_watermarks {
    horizontal_align?: rstring
    horizontal_offset?: rstring
    id?: rstring
    max_height?: rstring
    max_width?: rstring
    opacity?: rstring
    sizing_policy?: rstring
    target?: rstring
    vertical_align?: rstring
    vertical_offset?: rstring
}

export interface aws_elastictranscoder_preset_config {
    arn?: rstring
    audio?: _aws_elastictranscoder_preset__audio[]
    audio_codec_options?: _aws_elastictranscoder_preset__audio_codec_options[]
    container: rstring
    description?: rstring
    name?: rstring
    thumbnails?: _aws_elastictranscoder_preset__thumbnails[]
    type?: rstring
    video?: _aws_elastictranscoder_preset__video[]
    video_codec_options?: {[propName: string]: rstring}
    video_watermarks?: _aws_elastictranscoder_preset__video_watermarks[]
}

export class aws_elastictranscoder_preset implements Resource {
    config: aws_elastictranscoder_preset_config
    private _is_data: boolean = false
    private _name: string = "aws_elastictranscoder_preset"
    private _id: string;
    constructor(id: string, config: aws_elastictranscoder_preset_config) {
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
    get ref_audio(): Reference<_aws_elastictranscoder_preset__audio[]> {
        return new Reference(`${this._name}.${this._id}.audio`)
    }
    get ref_audio_codec_options(): Reference<_aws_elastictranscoder_preset__audio_codec_options[]> {
        return new Reference(`${this._name}.${this._id}.audio_codec_options`)
    }
    get ref_container(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.container`)
    }
    get ref_description(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.description`)
    }
    get ref_name(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.name`)
    }
    get ref_thumbnails(): Reference<_aws_elastictranscoder_preset__thumbnails[]> {
        return new Reference(`${this._name}.${this._id}.thumbnails`)
    }
    get ref_type(): Reference<string> {
        return new Reference(`${this._name}.${this._id}.type`)
    }
    get ref_video(): Reference<_aws_elastictranscoder_preset__video[]> {
        return new Reference(`${this._name}.${this._id}.video`)
    }
    get ref_video_codec_options(): Reference<{[propName: string]: rstring}> {
        return new Reference(`${this._name}.${this._id}.video_codec_options`)
    }
    get ref_video_watermarks(): Reference<_aws_elastictranscoder_preset__video_watermarks[]> {
        return new Reference(`${this._name}.${this._id}.video_watermarks`)
    }
}

