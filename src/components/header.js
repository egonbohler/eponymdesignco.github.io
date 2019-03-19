import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"

import { rhythm } from "../utils/typography"
import logo from "../img/logo_main.svg"
import MenuButton from "../components/menuButton.js"

const Header = ({toggleNavbar, isActive}) => (
  <div css={css`grid-area: a; display: grid; grid-template-columns: repeat(3, 1fr);`}>
    <Link to={`/`} css={css`grid-column: 2; justify-self: center;`}>
      <img alt="logo" src={logo} css={css`height: ${rhythm(6)}; width: ${rhythm(6)};`}/>
    </Link>
    <MenuButton
      css={css`height: ${rhythm(6)}; width: ${rhythm(6)}; grid-column: 3; justify-self: end;`}
      className={`button navbar-burger ${isActive ? 'is-active' : ''}`}
      data-target='navMenu'
      onClick={toggleNavbar}
    />
    <div className={`navbar-menu ${isActive ? 'is-active' : ''}`} id='navMenu'>

          <div className='navbar-end'>
            <Link className='navbar-item' to='/about'>
                            About
            </Link>
            <Link className='navbar-item' to='/pricing'>
                            Pricing
            </Link>
            <Link className='navbar-item' to='/blog'>
                            Blog
            </Link>
            <div className='navbar-item'>
              <div className='field is-grouped'>
                <p className='control'>
                  <Link
                    className='button is-primary is-outlined'
                    to='/contact'>
                            Contact Us
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>

  </div>
)

export default Header;
