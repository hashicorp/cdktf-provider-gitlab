// https://www.terraform.io/docs/providers/gitlab/r/service_pipelines_email
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServicePipelinesEmailConfig extends cdktf.TerraformMetaArguments {
  /**
  * Branches to send notifications for. Valid options are `all`, `default`, `protected`, and `default_and_protected`. Default is `default`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/service_pipelines_email#branches_to_be_notified ServicePipelinesEmail#branches_to_be_notified}
  */
  readonly branchesToBeNotified?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/service_pipelines_email#id ServicePipelinesEmail#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Notify only broken pipelines. Default is true.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/service_pipelines_email#notify_only_broken_pipelines ServicePipelinesEmail#notify_only_broken_pipelines}
  */
  readonly notifyOnlyBrokenPipelines?: boolean | cdktf.IResolvable;
  /**
  * ID of the project you want to activate integration on.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/service_pipelines_email#project ServicePipelinesEmail#project}
  */
  readonly project: string;
  /**
  * ) email addresses where notifications are sent.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/service_pipelines_email#recipients ServicePipelinesEmail#recipients}
  */
  readonly recipients: string[];
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/gitlab/r/service_pipelines_email gitlab_service_pipelines_email}
*/
export class ServicePipelinesEmail extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_service_pipelines_email";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/gitlab/r/service_pipelines_email gitlab_service_pipelines_email} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServicePipelinesEmailConfig
  */
  public constructor(scope: Construct, id: string, config: ServicePipelinesEmailConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_service_pipelines_email',
      terraformGeneratorMetadata: {
        providerName: 'gitlab',
        providerVersion: '3.14.0',
        providerVersionConstraint: '~> 3.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._branchesToBeNotified = config.branchesToBeNotified;
    this._id = config.id;
    this._notifyOnlyBrokenPipelines = config.notifyOnlyBrokenPipelines;
    this._project = config.project;
    this._recipients = config.recipients;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // branches_to_be_notified - computed: false, optional: true, required: false
  private _branchesToBeNotified?: string; 
  public get branchesToBeNotified() {
    return this.getStringAttribute('branches_to_be_notified');
  }
  public set branchesToBeNotified(value: string) {
    this._branchesToBeNotified = value;
  }
  public resetBranchesToBeNotified() {
    this._branchesToBeNotified = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchesToBeNotifiedInput() {
    return this._branchesToBeNotified;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // notify_only_broken_pipelines - computed: false, optional: true, required: false
  private _notifyOnlyBrokenPipelines?: boolean | cdktf.IResolvable; 
  public get notifyOnlyBrokenPipelines() {
    return this.getBooleanAttribute('notify_only_broken_pipelines');
  }
  public set notifyOnlyBrokenPipelines(value: boolean | cdktf.IResolvable) {
    this._notifyOnlyBrokenPipelines = value;
  }
  public resetNotifyOnlyBrokenPipelines() {
    this._notifyOnlyBrokenPipelines = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyOnlyBrokenPipelinesInput() {
    return this._notifyOnlyBrokenPipelines;
  }

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // recipients - computed: false, optional: false, required: true
  private _recipients?: string[]; 
  public get recipients() {
    return cdktf.Fn.tolist(this.getListAttribute('recipients'));
  }
  public set recipients(value: string[]) {
    this._recipients = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recipientsInput() {
    return this._recipients;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      branches_to_be_notified: cdktf.stringToTerraform(this._branchesToBeNotified),
      id: cdktf.stringToTerraform(this._id),
      notify_only_broken_pipelines: cdktf.booleanToTerraform(this._notifyOnlyBrokenPipelines),
      project: cdktf.stringToTerraform(this._project),
      recipients: cdktf.listMapper(cdktf.stringToTerraform)(this._recipients),
    };
  }
}
