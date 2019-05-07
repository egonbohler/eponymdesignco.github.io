import React from 'react';
import { graphql, Link, StaticQuery } from 'gatsby';
import { IconContext } from "react-icons";
import { FaFacebookSquare, FaDribbbleSquare, FaInstagram} from 'react-icons/fa';

const Footer = props => {
  const { menuLinks } = props.data.site.siteMetadata;
  return(
    <div className="footer-strip">
      <div className="container">
        <div className="footer">
          <ul className="footer-menu">
          {
            menuLinks.map(link => (
              <li key={link.name}>
                <Link to={link.link}>{link.name}</Link>
              </li>
            ))
          }
          </ul>
          <IconContext.Provider value={{ color: "white", className: "global-class-name", size: "1.25em" }} style={{margin: '0 auto'}}>
            <div>
              <a href="https://www.facebook.com/eponym.design" target="_blank"><FaFacebookSquare style={{marginRight: '1em', opacity: '0.8'}} /></a>
              <a href="https://dribbble.com/" target="_blank"><FaDribbbleSquare style={{marginRight: '1em', opacity: '0.8'}} /></a>
              <a href="https://www.instagram.com/eponym.design/" target="_blank"><FaInstagram style={{ opacity: '0.8'}} /></a>
            </div>
          </IconContext.Provider>
        </div>
        <div>
          <div className="copyright">
            {`© ${new Date().getFullYear()} ${props.data.site.siteMetadata.title}`}
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
            menuLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={data => <Footer data={data} />}
  />
);
