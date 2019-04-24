import React from 'react';
import { graphql, Link, StaticQuery } from 'gatsby';


const Footer = props => {
  return(
    <div className="footer-strip">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="footer">
              <ul className="footer-menu">
                <li>
                  {' '}
                  <Link to="/">Home</Link>
                </li>
                <li>
                  {' '}
                  <Link to="/contact">Contact</Link>
                </li>
                <li className="copyright">
                  {`© ${new Date().getFullYear()} ${props.data.site.siteMetadata.title}`}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => <Footer data={data} />}
  />
);
