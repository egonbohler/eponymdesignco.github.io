import React, { Component } from "react"

const TITLES = [
  'fast, beautiful websites.',
  'professional brand identites.',
  'elegant user experiences.',
  'effective print & digital marketing.'
];

class HeroSection extends Component {
  textInterval = 0;
  animationInterval = 0;
  state = { titleIndex: 0 };

  componentDidMount(){
    this.animateTitles();
  }

  animateTitles = () => {
    this.textInterval = setInterval(() => {
      const titleIndex = (this.state.titleIndex + 1) % TITLES.length;
      this.setState({ titleIndex });
    }, 8000);

    this.animationInterval = setInterval(()=>{
      let classList = document.getElementById('title').classList;
      if(classList.contains('is-visible')) {
        classList.replace('is-visible', 'is-hidden');
      } else {
        classList.replace('is-hidden', 'is-visible');
      }
    }, 4000)
  }

  componentWillUnmount(){
    clearInterval(this.textInterval);
    clearInterval(this.animationInterval);
  }

  render() {
    const title = TITLES[this.state.titleIndex];
    return(
      <div className="cd-intro behind">
        <h3 className="cd-headline rotate-1">
        <span>This is Eponym. We&apos;re known for creating&nbsp;</span>
        <span className="cd-words-wrapper">
          <b id="title" className="is-visible">{title}</b>
        </span>
        </h3>
      </div>
    )
}}

export default HeroSection
