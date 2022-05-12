// https://www.terraform.io/docs/providers/gitlab/d/user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGitlabUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * The public email address of the user. **Note**: before GitLab 14.8 the lookup was based on the users primary email address.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/user#email DataGitlabUser#email}
  */
  readonly email?: string;
  /**
  * The ID of the user's namespace. Requires admin token to access this field. Available since GitLab 14.10.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/user#namespace_id DataGitlabUser#namespace_id}
  */
  readonly namespaceId?: number;
  /**
  * The ID of the user.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/user#user_id DataGitlabUser#user_id}
  */
  readonly userId?: number;
  /**
  * The username of the user.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/d/user#username DataGitlabUser#username}
  */
  readonly username?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/gitlab/d/user gitlab_user}
*/
export class DataGitlabUser extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_user";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/gitlab/d/user gitlab_user} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGitlabUserConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataGitlabUserConfig = {}) {
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
    this._email = config.email;
    this._namespaceId = config.namespaceId;
    this._userId = config.userId;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // avatar_url - computed: true, optional: false, required: false
  public get avatarUrl() {
    return this.getStringAttribute('avatar_url');
  }

  // bio - computed: true, optional: false, required: false
  public get bio() {
    return this.getStringAttribute('bio');
  }

  // can_create_group - computed: true, optional: false, required: false
  public get canCreateGroup() {
    return this.getBooleanAttribute('can_create_group');
  }

  // can_create_project - computed: true, optional: false, required: false
  public get canCreateProject() {
    return this.getBooleanAttribute('can_create_project');
  }

  // color_scheme_id - computed: true, optional: false, required: false
  public get colorSchemeId() {
    return this.getNumberAttribute('color_scheme_id');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // current_sign_in_at - computed: true, optional: false, required: false
  public get currentSignInAt() {
    return this.getStringAttribute('current_sign_in_at');
  }

  // email - computed: true, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // extern_uid - computed: true, optional: false, required: false
  public get externUid() {
    return this.getStringAttribute('extern_uid');
  }

  // external - computed: true, optional: false, required: false
  public get external() {
    return this.getBooleanAttribute('external');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_admin - computed: true, optional: false, required: false
  public get isAdmin() {
    return this.getBooleanAttribute('is_admin');
  }

  // last_sign_in_at - computed: true, optional: false, required: false
  public get lastSignInAt() {
    return this.getStringAttribute('last_sign_in_at');
  }

  // linkedin - computed: true, optional: false, required: false
  public get linkedin() {
    return this.getStringAttribute('linkedin');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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

  // note - computed: true, optional: false, required: false
  public get note() {
    return this.getStringAttribute('note');
  }

  // organization - computed: true, optional: false, required: false
  public get organization() {
    return this.getStringAttribute('organization');
  }

  // projects_limit - computed: true, optional: false, required: false
  public get projectsLimit() {
    return this.getNumberAttribute('projects_limit');
  }

  // skype - computed: true, optional: false, required: false
  public get skype() {
    return this.getStringAttribute('skype');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // theme_id - computed: true, optional: false, required: false
  public get themeId() {
    return this.getNumberAttribute('theme_id');
  }

  // twitter - computed: true, optional: false, required: false
  public get twitter() {
    return this.getStringAttribute('twitter');
  }

  // two_factor_enabled - computed: true, optional: false, required: false
  public get twoFactorEnabled() {
    return this.getBooleanAttribute('two_factor_enabled');
  }

  // user_id - computed: true, optional: true, required: false
  private _userId?: number; 
  public get userId() {
    return this.getNumberAttribute('user_id');
  }
  public set userId(value: number) {
    this._userId = value;
  }
  public resetUserId() {
    this._userId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }

  // user_provider - computed: true, optional: false, required: false
  public get userProvider() {
    return this.getStringAttribute('user_provider');
  }

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // website_url - computed: true, optional: false, required: false
  public get websiteUrl() {
    return this.getStringAttribute('website_url');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      email: cdktf.stringToTerraform(this._email),
      namespace_id: cdktf.numberToTerraform(this._namespaceId),
      user_id: cdktf.numberToTerraform(this._userId),
      username: cdktf.stringToTerraform(this._username),
    };
  }
}