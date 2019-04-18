import React from 'react';


class MenuButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hamburgerActive: false,
    };
  }

  handleToggle = () => {
    this.setState(prevState => ({
      hamburgerActive: !prevState.hamburgerActive,
    }));
    this.props.toggleMenu(this.state.hamburgerActive);
  };

  render() {
    console.log('this.props from menuButton component', this.props);
    return (
      <button
        id="toggle-main-menu-mobile"
        className={`hamburger hamburger--3dx ${
          this.state.hamburgerActive ? 'is-active' : ''
        }`}
        type="button"
        onClick={this.handleToggle}
        isTop = {this.props.isTop}
      >
        <span className="hamburger-box">
          <span className={`${this.props.currentPath === "/" && !this.props.isTop ? 'hamburger-inner-inverted' : 'hamburger-inner'}`}/>
          {/* add && logic to above ternary to check if the is-scrolled class is not present. If both true, invert. Need to get the state of isTop in props somehow.*/}
        </span>
      </button>
    )
  }}

  export default MenuButton
