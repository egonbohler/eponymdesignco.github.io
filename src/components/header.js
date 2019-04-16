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
      isTop: true,
    };
  }

  toggleMenu = () => {
    this.setState(prevState => ({
      menuActive: !prevState.menuActive,
    }));
  };

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 10;
      if (isTop !== this.state.isTop) {
          this.setState({ isTop })
      }
    });
  }


  render() {
    return (
      <div id="nav" className={`header sticky ${this.state.isTop ? '' : 'nav-fill'}`}>
          <div className="container">
            <div className="logo">
              <Link to={`/`}>
                <img alt="logo" src={logo} className={`${this.props.currentPath === '/' ?  'logo-inverted' : ''}`} />
              </Link>
            </div>
            <MenuMobile active={this.state.menuActive} />
            <MenuButton className= "hamburger" toggleMenu={this.toggleMenu} currentPath={this.props.currentPath} />
          </div>
        </div>

)
}}
export default Header;
