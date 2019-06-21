import React, { Component } from 'react';


class MenuButton extends Component {
  state = { hamburgerActive: false }

  handleToggle = () => {
    this.setState(prevState => ({
      hamburgerActive: !prevState.hamburgerActive,
    }));
    this.props.toggleMenu(this.state.hamburgerActive);
  };

  render() {
    return (
      <button
        aria-label="Open Navigation Menu"
        role="navigation"
        id="toggle-main-menu-mobile"
        className={`hamburger hamburger--3dx ${
          this.state.hamburgerActive ? 'is-active' : ''
        }`}
        type="button"
        onClick={this.handleToggle}
      >
        <span className="hamburger-box">
          <span className={`${(this.props.currentPath === "/" && this.props.isTop) || this.state.hamburgerActive ? 'hamburger-inner-inverted' : 'hamburger-inner'}`}/>
        </span>
      </button>
    )
  }}

  export default MenuButton
