import React from 'react';
import { Link } from 'gatsby'
import Img from 'gatsby-image';
import 'aos/dist/aos.css';


const ServicePreview = props => {
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
          <div className="project-excerpt">
            <div>
              <p>{props.excerpt}</p>
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
        <div className={props.position}>
          <div className="preview-text">
            <span className="hr-active"/>
            <h3 className="overflow">{props.title}</h3>
          </div>
          <div className="project-excerpt">
            <p>{props.excerpt}</p>
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
              fluid={props.coverImage.childImageSharp.fluid}
              alt={props.title}
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

export default ServicePreview;
