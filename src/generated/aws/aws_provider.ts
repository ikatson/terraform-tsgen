import {rstring, rboolean, rnumber, Reference, Data, Resource, HasID, Provider} from "../../client/core"

export interface _aws_provider__assume_role {
    /**
     * The external ID to use when assuming the role. If omitted, no external ID is passed to the AssumeRole call.    
     */
    external_id?: rstring
    /**
     * The permissions applied when assuming a role. You cannot use, this policy to grant further permissions that are in excess to those of the,  role that is being assumed.    
     */
    policy?: rstring
    /**
     * The ARN of an IAM role to assume prior to making API calls.    
     */
    role_arn?: rstring
    /**
     * The session name to use when assuming the role. If omitted, no session name is passed to the AssumeRole call.    
     */
    session_name?: rstring
}

export interface _aws_provider__endpoints {
    acm?: rstring
    /**
     * Use this to override the default endpoint URL constructed from the `region`.    
     */
    apigateway?: rstring
    /**
     * Use this to override the default endpoint URL constructed from the `region`.    
     */
    autoscaling?: rstring
    /**
     * Use this to override the default endpoint URL constructed from the `region`.    
     */
    cloudformation?: rstring
    /**
     * Use this to override the default endpoint URL constructed from the `region`.    
     */
    cloudwatch?: rstring
    /**
     * Use this to override the default endpoint URL constructed from the `region`.    
     */
    cloudwatchevents?: rstring
    /**
     * Use this to override the default endpoint URL constructed from the `region`.    
     */
    cloudwatchlogs?: rstring
    /**
     * Use this to override the default endpoint URL constructed from the `region`.    
     */
    devicefarm?: rstring
    /**
     * Use this to override the default endpoint URL constructed from the `region`.
It's typically used to connect to dynamodb-local.    
     */
    dynamodb?: rstring
    /**
     * Use this to override the default endpoint URL constructed from the `region`.    
     */
    ec2?: rstring
    ecr?: rstring
    ecs?: rstring
    /**
     * Use this to override the default endpoint URL constructed from the `region`.    
     */
    efs?: rstring
    /**
     * Use this to override the default endpoint URL constructed from the `region`.    
     */
    elb?: rstring
    /**
     * Use this to override the default endpoint URL constructed from the `region`.    
     */
    es?: rstring
    /**
     * Use this to override the default endpoint URL constructed from the `region`.    
     */
    iam?: rstring
    /**
     * Use this to override the default endpoint URL constructed from the `region`.
It's typically used to connect to kinesalite.    
     */
    kinesis?: rstring
    /**
     * Use this to override the default endpoint URL constructed from the `region`.    
     */
    kinesis_analytics?: rstring
    /**
     * Use this to override the default endpoint URL constructed from the `region`.    
     */
    kms?: rstring
    /**
     * Use this to override the default endpoint URL constructed from the `region`    
     */
    lambda?: rstring
    r53?: rstring
    /**
     * Use this to override the default endpoint URL constructed from the `region`.    
     */
    rds?: rstring
    /**
     * Use this to override the default endpoint URL constructed from the `region`.    
     */
    s3?: rstring
    /**
     * Use this to override the default endpoint URL constructed from the `region`.    
     */
    s3control?: rstring
    /**
     * Use this to override the default endpoint URL constructed from the `region`.    
     */
    sns?: rstring
    /**
     * Use this to override the default endpoint URL constructed from the `region`.    
     */
    sqs?: rstring
    /**
     * Use this to override the default endpoint URL constructed from the `region`.    
     */
    ssm?: rstring
    sts?: rstring
}

export interface aws_provider_config {
    /**
     * The access key for API operations. You can retrieve this
from the 'Security & Credentials' section of the AWS console.    
     */
    access_key?: rstring
    allowed_account_ids?: rstring[]
    assume_role?: _aws_provider__assume_role[]
    /**
     * Use this to override the default endpoint URL constructed from the `region`.
It's typically used to connect to dynamodb-local.    
     */
    dynamodb_endpoint?: rstring
    endpoints?: _aws_provider__endpoints[]
    forbidden_account_ids?: rstring[]
    /**
     * Explicitly allow the provider to perform "insecure" SSL requests. If omitted,default value is `false`    
     */
    insecure?: rboolean
    /**
     * Use this to override the default endpoint URL constructed from the `region`.
It's typically used to connect to kinesalite.    
     */
    kinesis_endpoint?: rstring
    /**
     * The maximum number of times an AWS API request is
being executed. If the API request still fails, an error is
thrown.    
     */
    max_retries?: rnumber
    /**
     * The profile for API operations. If not set, the default profile
created with `aws configure` will be used.    
     */
    profile?: rstring
    /**
     * The region where AWS operations will take place. Examples
are us-east-1, us-west-2, etc.    
     */
    region: rstring
    /**
     * Set this to true to force the request to use path-style addressing,
i.e., http://s3.amazonaws.com/BUCKET/KEY. By default, the S3 client will
use virtual hosted bucket addressing when possible
(http://BUCKET.s3.amazonaws.com/KEY). Specific to the Amazon S3 service.    
     */
    s3_force_path_style?: rboolean
    /**
     * The secret key for API operations. You can retrieve this
from the 'Security & Credentials' section of the AWS console.    
     */
    secret_key?: rstring
    /**
     * The path to the shared credentials file. If not set
this defaults to ~/.aws/credentials.    
     */
    shared_credentials_file?: rstring
    /**
     * Skip the credentials validation via STS API. Used for AWS API implementations that do not have STS available/implemented.    
     */
    skip_credentials_validation?: rboolean
    /**
     * Skip getting the supported EC2 platforms. Used by users that don't have ec2:DescribeAccountAttributes permissions.    
     */
    skip_get_ec2_platforms?: rboolean
    skip_metadata_api_check?: rboolean
    /**
     * Skip static validation of region name. Used by users of alternative AWS-like APIs or users w/ access to regions that are not public (yet).    
     */
    skip_region_validation?: rboolean
    /**
     * Skip requesting the account ID. Used for AWS API implementations that do not have IAM/STS API and/or metadata API.    
     */
    skip_requesting_account_id?: rboolean
    /**
     * session token. A session token is only required if you are
using temporary security credentials.    
     */
    token?: rstring
}

export class aws_provider implements Provider {
    config: aws_provider_config
    constructor(config: aws_provider_config) {
      this.config = config;
    }
    toJSON() {
      return {
          aws: [this.config]
      }
    }
    
}

