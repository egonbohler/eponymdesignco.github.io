import React, { Component } from 'react';
import { Link } from 'gatsby'
import Img from 'gatsby-image';
import 'aos/dist/aos.css';


class ServicePreview extends Component {
  componentDidMount() {
    const AOS = require('aos');
    this.aos = AOS
    this.aos.init()
  };

  componentDidUpdate() {
    this.aos.refresh()
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
            <div className="project-excerpt">
              <div>
                <p>{this.props.excerpt}</p>
                <p>Past Client Work:</p>
                {
                  tags.map((tag, index) =>{
                    return(<Link to ={tag.path}><p key={index} className="see-more">{tag.title}</p></Link>)
                  })
                }
              </div>
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
            <div className="project-excerpt">
              <p>{this.props.excerpt}</p>
              <div>
                <p>Past Client Work:</p>
                {
                  tags.map((tag, index) =>{
                    return(<Link to ={tag.path}><p key={index} className="see-more">{tag.title}</p></Link>)
                  })
                }
              </div>
            </div>
            <div className="preview-cover">
              <Img
                fluid={this.props.coverImage.childImageSharp.fluid}
                alt={this.props.title}
                className="cover-image"
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

export default ServicePreview;
