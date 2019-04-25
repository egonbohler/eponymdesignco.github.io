import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';

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
