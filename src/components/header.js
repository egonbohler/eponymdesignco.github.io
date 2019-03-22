import React from "react"
import { Link } from "gatsby"
import MenuButton from "./menuButton.js"
import MenuMobile from './MenuMobile.js';
import logo from "../img/logo_main.svg"

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuActive: false,
    };
  }

  toggleMenu = menuActive => {
    this.setState(prevState => ({
      menuActive: !prevState.menuActive,
    }));
  };

  render() {
    return (
      <div className="header">
          <div className="container">
            <div className="logo">
              <Link to={`/`}>
                <img alt="logo" src={logo}/>
              </Link>
            </div>
            <MenuMobile active={this.state.menuActive} />
            <MenuButton className="hamburger" toggleMenu={this.toggleMenu}/>
          </div>
        </div>

)
}}
export default Header;
