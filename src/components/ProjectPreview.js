import React from 'react';
import Img from 'gatsby-image';
import 'aos/dist/aos.css';

const ProjectPreview = props => {
  const { tags } = props;
  const isBrowser = typeof window !== 'undefined';
  const AOS = isBrowser ? require('aos') : undefined;

  AOS.init();
  return(
    <div
      className={props.position}
      data-aos={props.fadeDirection}
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-once="true"
    >
    {
      props.position === "left" ?
      (
        <div className={props.position}>
          <div className="preview-text">
            <span className="hr-active"/>
            <h3 className="overflow">{props.title}</h3>
          </div>
          <div className="preview-cover">
            <Img
              fluid={props.coverImage.childImageSharp.fluid}
              alt={props.title}
              className="cover-image"
              objectFit="cover"
            />
          </div>
          <div className="project-preview">
            <Img
              fluid={props.previewImg.childImageSharp.fluid}
              alt={props.title}
              className="preview-img"
              objectFit="cover"
            />
          </div>
          <div className="project-excerpt">
            <div>
              <p className="tag">Tags:</p>
              {
                tags.map((tag, index) =>{
                  return(<p key={index} className="tag">{tag}</p>)
                })
              }
            </div>
            <p>{props.excerpt}</p>
            <h5 className="see-more">See More</h5>
          </div>
        </div>
      )
      :
      (
        <div className={props.position}>
          <div className="preview-text">
            <span className="hr-active"/>
            <h3 className="overflow">{props.title}</h3>
          </div>
          <div className="project-excerpt">
            <div>
              <p className="tag">Tags:</p>
              {
                tags.map((tag, index) =>{
                  return(<p key={index} className="tag">{tag}</p>)
                })
              }
            </div>
            <p>{props.excerpt}</p>
            <h5 className="see-more">See More</h5>
          </div>
          <div className="preview-cover">
            <Img
              fluid={props.coverImage.childImageSharp.fluid}
              alt={props.title}
              className="cover-image"
              objectFit="cover"
            />
          </div>
          <div className="project-preview">
            <Img
              fluid={props.previewImg.childImageSharp.fluid}
              alt={props.title}
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

export default ProjectPreview;
