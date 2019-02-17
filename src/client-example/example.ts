import { TfModule, Variable } from "../client/core";
import { aws_provider } from "../generated/aws/aws_provider";
import { data_aws_ami } from "../generated/aws/data_aws_ami";
import { aws_launch_configuration } from "../generated/aws/aws_launch_configuration";
import { aws_autoscaling_group } from "../generated/aws/aws_autoscaling_group";

function makeState(): TfModule {
    const state = new TfModule();
    const aws_profile = state.variable(new Variable("aws_profile"))
    const aws_region = state.variable(new Variable("aws_region"))
    const prefix = state.variable(new Variable("prefix"))

    state.provider(new aws_provider({
        region: aws_region.asReference(),
        profile: aws_profile.asReference()
    }))

    const image = state.data(new data_aws_ami("image", {
        tags: {
            Name: "some-name",
        },
        most_recent: true
    }));
    const nodesLaunchConfig = state.resource(new aws_launch_configuration("nodes", {
        name_prefix: `${prefix}-nodes`,
        image_id: image.ref_image_id,
        instance_type: "m4.large",
        root_block_device: [{
            volume_size: 20,
            delete_on_termination: true,
            volume_type: "gp2"
        }],
    }));
    state.resource(new aws_autoscaling_group(
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