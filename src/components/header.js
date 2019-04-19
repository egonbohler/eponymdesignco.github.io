import React, { Component } from "react"
import { Link } from "gatsby"
import MenuButton from "./menuButton.js"
import MenuMobile from './MenuMobile.js';
import logo from "../img/logo_main.svg"

class Header extends Component {
  state = { menuActive: false, isTop: true}

  toggleMenu = () => {
    this.setState(prevState => ({
      menuActive: !prevState.menuActive,
    }));
  };

  componentDidMount() {
    this.checkScroll();
  }

  checkScroll = () => {
    window.addEventListener('scroll', () => {
      let scrollAtTop = window.scrollY < 100;
      if (scrollAtTop !== this.state.isTop) {
          this.setState({ isTop: scrollAtTop }) // this doesn't do anything if it's just 'isTop'. There may be a namespace issue, or otherwise you're just setting a state of true to true again.
      }
    });
  }


  render() {
    return (
      <div id="nav" className="header sticky">
          <div className={`container ${this.state.isTop ? 'nav-top' : 'nav-scrolled'}`}>
            <div className="logo">
              <Link to={`/`}>
                <img alt="logo" src={logo} className={`${this.props.currentPath === '/' ?  'logo-inverted' : ''}`} />
              </Link>
            </div>
            <MenuMobile active={this.state.menuActive} />
            <MenuButton className= "hamburger" toggleMenu={this.toggleMenu} currentPath={this.props.currentPath} isTop={this.state.isTop} />
          </div>
        </div>

)
}}

export default Header;
