import * as aws from "../client/aws";
import { TfModule, Variable } from "../client/core";

function makeState(): TfModule {
    const state = new TfModule();
    const aws_profile = state.variable(new Variable("aws_profile"))
    const aws_region = state.variable(new Variable("aws_region"))
    const prefix = state.variable(new Variable("prefix"))

    state.provider(new aws.aws_provider({
        region: aws_region.asReference(),
        profile: aws_profile.asReference()
    }))

    const image = state.data(new aws.data_aws_ami("image", {
        tags: {
            Name: "some-name",
        },
        most_recent: true
    }));
    const nodesLaunchConfig = state.resource(new aws.aws_launch_configuration("nodes", {
        name_prefix: `${prefix}-nodes`,
        image_id: image.ref_image_id,
        instance_type: "m4.large",
        root_block_device: [{
            volume_size: 20,
            delete_on_termination: true,
            volume_type: "gp2"
        }],
    }));
    state.resource(new aws.aws_autoscaling_group(
        `${prefix}-nodes`, {
            min_size: 0,
            max_size: 1,
            launch_configuration: nodesLaunchConfig.ref_name
        }
    ))
    
    return state;
}

function main() {
    const s = makeState()
    console.log(JSON.stringify(s))
}

main()