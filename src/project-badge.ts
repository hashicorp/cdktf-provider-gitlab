// https://www.terraform.io/docs/providers/gitlab/r/project_badge
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectBadgeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/project_badge#id ProjectBadge#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The image url which will be presented on project overview.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/project_badge#image_url ProjectBadge#image_url}
  */
  readonly imageUrl: string;
  /**
  * The url linked with the badge.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/project_badge#link_url ProjectBadge#link_url}
  */
  readonly linkUrl: string;
  /**
  * The id of the project to add the badge to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/gitlab/r/project_badge#project ProjectBadge#project}
  */
  readonly project: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/gitlab/r/project_badge gitlab_project_badge}
*/
export class ProjectBadge extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gitlab_project_badge";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/gitlab/r/project_badge gitlab_project_badge} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectBadgeConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectBadgeConfig) {
    super(scope, id, {
      terraformResourceType: 'gitlab_project_badge',
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
    this._id = config.id;
    this._imageUrl = config.imageUrl;
    this._linkUrl = config.linkUrl;
    this._project = config.project;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // image_url - computed: false, optional: false, required: true
  private _imageUrl?: string; 
  public get imageUrl() {
    return this.getStringAttribute('image_url');
  }
  public set imageUrl(value: string) {
    this._imageUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUrlInput() {
    return this._imageUrl;
  }

  // link_url - computed: false, optional: false, required: true
  private _linkUrl?: string; 
  public get linkUrl() {
    return this.getStringAttribute('link_url');
  }
  public set linkUrl(value: string) {
    this._linkUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get linkUrlInput() {
    return this._linkUrl;
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

  // rendered_image_url - computed: true, optional: false, required: false
  public get renderedImageUrl() {
    return this.getStringAttribute('rendered_image_url');
  }

  // rendered_link_url - computed: true, optional: false, required: false
  public get renderedLinkUrl() {
    return this.getStringAttribute('rendered_link_url');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      image_url: cdktf.stringToTerraform(this._imageUrl),
      link_url: cdktf.stringToTerraform(this._linkUrl),
      project: cdktf.stringToTerraform(this._project),
    };
  }
}
