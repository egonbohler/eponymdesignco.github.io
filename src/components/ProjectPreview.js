import React, { Component } from 'react';
import Img from 'gatsby-image';
import 'aos/dist/aos.css';

class ProjectPreview extends Component {
  componentDidMount() {
    const AOS = require('aos');
    this.aos = AOS;
    this.aos.init();
  };

  componentDidUpdate() {
      this.aos.refresh();
  };

  render(){
    const { tags } = this.props;
    return(
      <div
        className={this.props.position}
        data-aos={this.props.fadeDirection}
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-once="true"
      >
      {
        this.props.position === "left" ?
        (
          <div className={this.props.position}>
            <div className="preview-text">
              <span className="hr-active"/>
              <h3 className="overflow">{this.props.title}</h3>
            </div>
            <div className="preview-cover">
              <Img
                fluid={this.props.coverImage.childImageSharp.fluid}
                alt={this.props.title}
                className="cover-image"
                objectFit="cover"
              />
            </div>
            <div className="project-preview">
              <Img
                fluid={this.props.previewImg.childImageSharp.fluid}
                alt={this.props.title}
                className="preview-img"
                objectFit="cover"
              />
            </div>
            <div className="brief">
              <div>
                <p className="tag">Tags:</p>
                {
                  tags.map((tag, index) =>{
                    return(<p key={index} className="tag">{tag}</p>)
                  })
                }
              </div>
              <p>{this.props.excerpt}</p>
              <h5 className="see-more">See More</h5>
            </div>
          </div>
        )
        :
        (
          <div className={this.props.position}>
            <div className="preview-text">
              <span className="hr-active"/>
              <h3 className="overflow">{this.props.title}</h3>
            </div>
            <div className="brief">
              <div>
                <p className="tag">Tags:</p>
                {
                  tags.map((tag, index) =>{
                    return(<p key={index} className="tag">{tag}</p>)
                  })
                }
              </div>
              <p>{this.props.excerpt}</p>
              <h5 className="see-more">See More</h5>
            </div>
            <div className="preview-cover">
              <Img
                fluid={this.props.coverImage.childImageSharp.fluid}
                alt={this.props.title}
                className="cover-image"
                objectFit="cover"
              />
            </div>
            <div className="project-preview">
              <Img
                fluid={this.props.previewImg.childImageSharp.fluid}
                alt={this.props.title}
                className="preview-img"
                objectFit="cover"
              />
            </div>
          </div>
        )
      }
      </div>
    )
  }
}

export default ProjectPreview;
