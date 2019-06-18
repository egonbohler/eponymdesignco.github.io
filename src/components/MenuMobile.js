import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import { IconContext } from "react-icons";
import { FaFacebookSquare, FaDribbbleSquare, FaInstagram} from 'react-icons/fa';

const MenuMobile = props => {
  const { menuLinks } = props.data.site.siteMetadata;

  return (
    <div>
      <div
        id="main-menu-mobile"
        className={`main-menu-mobile ${props.active ? 'open' : ''}`}
      >
        <ul>
          {menuLinks.map(link => (
            <li key={link.name}>
              <Link to={link.link}>{link.name}</Link>
            </li>
          ))}
        </ul>
        <IconContext.Provider value={{ color: "white", className: "global-class-name", size: '2em'}}>
          <div style={{marginTop: '3em'}}>
            <a href="https://www.facebook.com/eponym.design" target="_blank" rel="noopener noreferrer"><FaFacebookSquare style={{margin: '1em'}} /></a>
            <a href="https://dribbble.com/" target="_blank" rel="noopener noreferrer"><FaDribbbleSquare style={{margin: '1em'}} /></a>
            <a href="https://www.instagram.com/eponym.design/" target="_blank" rel="noopener noreferrer"><FaInstagram style={{margin: '1em'}} /></a>
          </div>
        </IconContext.Provider>
      </div>
      <div id="overlay" className={`overlay ${props.active ? 'open' : ''}`}></div>
    </div>
  );
};

export default props => (
  <StaticQuery
    query={graphql`
      query MenuMobileQuery {
        site {
          siteMetadata {
            menuLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={data => <MenuMobile active={props.active} data={data} />}
  />
);
