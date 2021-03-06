// https://www.terraform.io/docs/providers/gitlab/r/project_freeze_period
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectFreezePeriodConfig extends cdktf.TerraformMetaArguments {
  /**
  * The timezone.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/project_freeze_period#cron_timezone ProjectFreezePeriod#cron_timezone}
  */
  readonly cronTimezone?: string;
  /**
  * End of the Freeze Period in cron format (e.g. `0 2 * * *`).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/project_freeze_period#freeze_end ProjectFreezePeriod#freeze_end}
  */
  readonly freezeEnd: string;
  /**
  * Start of the Freeze Period in cron format (e.g. `0 1 * * *`).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/project_freeze_period#freeze_start ProjectFreezePeriod#freeze_start}
  */
  readonly freezeStart: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/project_freeze_period#id ProjectFreezePeriod#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The id of the project to add the schedule to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/project_freeze_period#project_id ProjectFreezePeriod#project_id}
  */
  readonly projectId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/gitlab/r/project_freeze_period gitlab_project_freeze_period}
*/
export class ProjectFreezePeriod extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_project_freeze_period";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/gitlab/r/project_freeze_period gitlab_project_freeze_period} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectFreezePeriodConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectFreezePeriodConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_project_freeze_period',
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
    this._cronTimezone = config.cronTimezone;
    this._freezeEnd = config.freezeEnd;
    this._freezeStart = config.freezeStart;
    this._id = config.id;
    this._projectId = config.projectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cron_timezone - computed: false, optional: true, required: false
  private _cronTimezone?: string; 
  public get cronTimezone() {
    return this.getStringAttribute('cron_timezone');
  }
  public set cronTimezone(value: string) {
    this._cronTimezone = value;
  }
  public resetCronTimezone() {
    this._cronTimezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cronTimezoneInput() {
    return this._cronTimezone;
  }

  // freeze_end - computed: false, optional: false, required: true
  private _freezeEnd?: string; 
  public get freezeEnd() {
    return this.getStringAttribute('freeze_end');
  }
  public set freezeEnd(value: string) {
    this._freezeEnd = value;
  }
  // Temporarily expose input value. Use with caution.
  public get freezeEndInput() {
    return this._freezeEnd;
  }

  // freeze_start - computed: false, optional: false, required: true
  private _freezeStart?: string; 
  public get freezeStart() {
    return this.getStringAttribute('freeze_start');
  }
  public set freezeStart(value: string) {
    this._freezeStart = value;
  }
  // Temporarily expose input value. Use with caution.
  public get freezeStartInput() {
    return this._freezeStart;
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

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cron_timezone: cdktf.stringToTerraform(this._cronTimezone),
      freeze_end: cdktf.stringToTerraform(this._freezeEnd),
      freeze_start: cdktf.stringToTerraform(this._freezeStart),
      id: cdktf.stringToTerraform(this._id),
      project_id: cdktf.stringToTerraform(this._projectId),
    };
  }
}
