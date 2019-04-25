import React from 'react'
import { Link } from 'gatsby'

const NextProject = props => {
  const { prev, next } = props;
  console.log('prev', prev.frontmatter.title)
    return (
      <div className="next-project">
        <hr style={{ height: '0.15em', width: '20vw', maxWidth: '100px', backgroundColor: 'black', borderRadius: '1px'}}/>
        <div>
          {
            prev.frontmatter.title === "Contact Us" ?
            (
              <p>Ready to work together?</p>
            ) :
            (
              <p>Next Project</p>
            )
          }

          <Link to={prev.frontmatter.path}><h1>{prev.frontmatter.title}</h1></Link>
        </div>
      </div>
    )
}


export default NextProject;
