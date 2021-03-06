// https://www.terraform.io/docs/providers/gitlab/r/project_approval_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectApprovalRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The number of approvals required for this rule.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/project_approval_rule#approvals_required ProjectApprovalRule#approvals_required}
  */
  readonly approvalsRequired: number;
  /**
  * A list of group IDs whose members can approve of the merge request.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/project_approval_rule#group_ids ProjectApprovalRule#group_ids}
  */
  readonly groupIds?: number[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/project_approval_rule#id ProjectApprovalRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the approval rule.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/project_approval_rule#name ProjectApprovalRule#name}
  */
  readonly name: string;
  /**
  * The name or id of the project to add the approval rules.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/project_approval_rule#project ProjectApprovalRule#project}
  */
  readonly project: string;
  /**
  * A list of protected branch IDs (not branch names) for which the rule applies.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/project_approval_rule#protected_branch_ids ProjectApprovalRule#protected_branch_ids}
  */
  readonly protectedBranchIds?: number[];
  /**
  * String, defaults to 'regular'. The type of rule. `any_approver` is a pre-configured default rule with `approvals_required` at `0`. Valid values are `regular`, `any_approver`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/project_approval_rule#rule_type ProjectApprovalRule#rule_type}
  */
  readonly ruleType?: string;
  /**
  * A list of specific User IDs to add to the list of approvers.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/project_approval_rule#user_ids ProjectApprovalRule#user_ids}
  */
  readonly userIds?: number[];
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/gitlab/r/project_approval_rule gitlab_project_approval_rule}
*/
export class ProjectApprovalRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_project_approval_rule";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/gitlab/r/project_approval_rule gitlab_project_approval_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectApprovalRuleConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectApprovalRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_project_approval_rule',
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
    this._approvalsRequired = config.approvalsRequired;
    this._groupIds = config.groupIds;
    this._id = config.id;
    this._name = config.name;
    this._project = config.project;
    this._protectedBranchIds = config.protectedBranchIds;
    this._ruleType = config.ruleType;
    this._userIds = config.userIds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // approvals_required - computed: false, optional: false, required: true
  private _approvalsRequired?: number; 
  public get approvalsRequired() {
    return this.getNumberAttribute('approvals_required');
  }
  public set approvalsRequired(value: number) {
    this._approvalsRequired = value;
  }
  // Temporarily expose input value. Use with caution.
  public get approvalsRequiredInput() {
    return this._approvalsRequired;
  }

  // group_ids - computed: false, optional: true, required: false
  private _groupIds?: number[]; 
  public get groupIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('group_ids')));
  }
  public set groupIds(value: number[]) {
    this._groupIds = value;
  }
  public resetGroupIds() {
    this._groupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdsInput() {
    return this._groupIds;
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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

  // protected_branch_ids - computed: false, optional: true, required: false
  private _protectedBranchIds?: number[]; 
  public get protectedBranchIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('protected_branch_ids')));
  }
  public set protectedBranchIds(value: number[]) {
    this._protectedBranchIds = value;
  }
  public resetProtectedBranchIds() {
    this._protectedBranchIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectedBranchIdsInput() {
    return this._protectedBranchIds;
  }

  // rule_type - computed: true, optional: true, required: false
  private _ruleType?: string; 
  public get ruleType() {
    return this.getStringAttribute('rule_type');
  }
  public set ruleType(value: string) {
    this._ruleType = value;
  }
  public resetRuleType() {
    this._ruleType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleTypeInput() {
    return this._ruleType;
  }

  // user_ids - computed: false, optional: true, required: false
  private _userIds?: number[]; 
  public get userIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('user_ids')));
  }
  public set userIds(value: number[]) {
    this._userIds = value;
  }
  public resetUserIds() {
    this._userIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdsInput() {
    return this._userIds;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      approvals_required: cdktf.numberToTerraform(this._approvalsRequired),
      group_ids: cdktf.listMapper(cdktf.numberToTerraform)(this._groupIds),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      protected_branch_ids: cdktf.listMapper(cdktf.numberToTerraform)(this._protectedBranchIds),
      rule_type: cdktf.stringToTerraform(this._ruleType),
      user_ids: cdktf.listMapper(cdktf.numberToTerraform)(this._userIds),
    };
  }
}
