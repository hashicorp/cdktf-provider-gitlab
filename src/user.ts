// https://www.terraform.io/docs/providers/gitlab/r/user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Boolean, defaults to false. Whether to allow the user to create groups.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/user#can_create_group User#can_create_group}
  */
  readonly canCreateGroup?: boolean | cdktf.IResolvable;
  /**
  * The e-mail address of the user.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/user#email User#email}
  */
  readonly email: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/user#id User#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Boolean, defaults to false.  Whether to enable administrative privileges
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/user#is_admin User#is_admin}
  */
  readonly isAdmin?: boolean | cdktf.IResolvable;
  /**
  * Boolean, defaults to false. Whether a user has access only to some internal or private projects. External users can only access projects to which they are explicitly granted access.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/user#is_external User#is_external}
  */
  readonly isExternal?: boolean | cdktf.IResolvable;
  /**
  * The name of the user.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/user#name User#name}
  */
  readonly name: string;
  /**
  * The ID of the user's namespace. Available since GitLab 14.10.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/user#namespace_id User#namespace_id}
  */
  readonly namespaceId?: number;
  /**
  * The note associated to the user.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/user#note User#note}
  */
  readonly note?: string;
  /**
  * The password of the user.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/user#password User#password}
  */
  readonly password?: string;
  /**
  * Integer, defaults to 0.  Number of projects user can create.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/user#projects_limit User#projects_limit}
  */
  readonly projectsLimit?: number;
  /**
  * Boolean, defaults to false. Send user password reset link.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/user#reset_password User#reset_password}
  */
  readonly resetPassword?: boolean | cdktf.IResolvable;
  /**
  * Boolean, defaults to true. Whether to skip confirmation.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/user#skip_confirmation User#skip_confirmation}
  */
  readonly skipConfirmation?: boolean | cdktf.IResolvable;
  /**
  * String, defaults to 'active'. The state of the user account. Valid values are `active`, `deactivated`, `blocked`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/user#state User#state}
  */
  readonly state?: string;
  /**
  * The username of the user.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/user#username User#username}
  */
  readonly username: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/gitlab/r/user gitlab_user}
*/
export class User extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_user";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/gitlab/r/user gitlab_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserConfig
  */
  public constructor(scope: Construct, id: string, config: UserConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_user',
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
    this._canCreateGroup = config.canCreateGroup;
    this._email = config.email;
    this._id = config.id;
    this._isAdmin = config.isAdmin;
    this._isExternal = config.isExternal;
    this._name = config.name;
    this._namespaceId = config.namespaceId;
    this._note = config.note;
    this._password = config.password;
    this._projectsLimit = config.projectsLimit;
    this._resetPassword = config.resetPassword;
    this._skipConfirmation = config.skipConfirmation;
    this._state = config.state;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // can_create_group - computed: false, optional: true, required: false
  private _canCreateGroup?: boolean | cdktf.IResolvable; 
  public get canCreateGroup() {
    return this.getBooleanAttribute('can_create_group');
  }
  public set canCreateGroup(value: boolean | cdktf.IResolvable) {
    this._canCreateGroup = value;
  }
  public resetCanCreateGroup() {
    this._canCreateGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canCreateGroupInput() {
    return this._canCreateGroup;
  }

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
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

  // is_admin - computed: false, optional: true, required: false
  private _isAdmin?: boolean | cdktf.IResolvable; 
  public get isAdmin() {
    return this.getBooleanAttribute('is_admin');
  }
  public set isAdmin(value: boolean | cdktf.IResolvable) {
    this._isAdmin = value;
  }
  public resetIsAdmin() {
    this._isAdmin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAdminInput() {
    return this._isAdmin;
  }

  // is_external - computed: false, optional: true, required: false
  private _isExternal?: boolean | cdktf.IResolvable; 
  public get isExternal() {
    return this.getBooleanAttribute('is_external');
  }
  public set isExternal(value: boolean | cdktf.IResolvable) {
    this._isExternal = value;
  }
  public resetIsExternal() {
    this._isExternal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isExternalInput() {
    return this._isExternal;
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

  // namespace_id - computed: true, optional: true, required: false
  private _namespaceId?: number; 
  public get namespaceId() {
    return this.getNumberAttribute('namespace_id');
  }
  public set namespaceId(value: number) {
    this._namespaceId = value;
  }
  public resetNamespaceId() {
    this._namespaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceIdInput() {
    return this._namespaceId;
  }

  // note - computed: false, optional: true, required: false
  private _note?: string; 
  public get note() {
    return this.getStringAttribute('note');
  }
  public set note(value: string) {
    this._note = value;
  }
  public resetNote() {
    this._note = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noteInput() {
    return this._note;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetTfPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // projects_limit - computed: false, optional: true, required: false
  private _projectsLimit?: number; 
  public get projectsLimit() {
    return this.getNumberAttribute('projects_limit');
  }
  public set projectsLimit(value: number) {
    this._projectsLimit = value;
  }
  public resetProjectsLimit() {
    this._projectsLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectsLimitInput() {
    return this._projectsLimit;
  }

  // reset_password - computed: false, optional: true, required: false
  private _resetPassword?: boolean | cdktf.IResolvable; 
  public get resetPassword() {
    return this.getBooleanAttribute('reset_password');
  }
  public set resetPassword(value: boolean | cdktf.IResolvable) {
    this._resetPassword = value;
  }
  public resetResetPassword() {
    this._resetPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetPasswordInput() {
    return this._resetPassword;
  }

  // skip_confirmation - computed: false, optional: true, required: false
  private _skipConfirmation?: boolean | cdktf.IResolvable; 
  public get skipConfirmation() {
    return this.getBooleanAttribute('skip_confirmation');
  }
  public set skipConfirmation(value: boolean | cdktf.IResolvable) {
    this._skipConfirmation = value;
  }
  public resetSkipConfirmation() {
    this._skipConfirmation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipConfirmationInput() {
    return this._skipConfirmation;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      can_create_group: cdktf.booleanToTerraform(this._canCreateGroup),
      email: cdktf.stringToTerraform(this._email),
      id: cdktf.stringToTerraform(this._id),
      is_admin: cdktf.booleanToTerraform(this._isAdmin),
      is_external: cdktf.booleanToTerraform(this._isExternal),
      name: cdktf.stringToTerraform(this._name),
      namespace_id: cdktf.numberToTerraform(this._namespaceId),
      note: cdktf.stringToTerraform(this._note),
      password: cdktf.stringToTerraform(this._password),
      projects_limit: cdktf.numberToTerraform(this._projectsLimit),
      reset_password: cdktf.booleanToTerraform(this._resetPassword),
      skip_confirmation: cdktf.booleanToTerraform(this._skipConfirmation),
      state: cdktf.stringToTerraform(this._state),
      username: cdktf.stringToTerraform(this._username),
    };
  }
}
