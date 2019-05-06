import React from 'react';
import Img from 'gatsby-image';

const ProjectPreview = props => (
  <div className="project-preview">
    <Img
      fluid={props.previewImg.childImageSharp.fluid}
      alt={props.title}
      className="preview-img"
      objectFit="cover"
      objectPosition="50% 50%"
    />
    <div className="preview-text">
      <h3 className="overflow">{props.title}</h3>
      <span className="overflow">{props.date}</span>
    </div>
  </div>
)

export default ProjectPreview;
