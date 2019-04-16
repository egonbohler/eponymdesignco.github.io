import React, { Component } from "react"

const TITLES = [
  'beautiful websites.',
  'dazzling user experiences.',
  'print designs.',
  'business processes.',
  'A/B tests.'
];

class HeroSection extends Component {
  state = {
    titleIndex: 0,
  };

  componentDidMount(){
    this.animateTitles();
  }

  animateTitles = () => {
    setInterval(() => {
      const titleIndex = (this.state.titleIndex + 1) % TITLES.length;
      this.setState({ titleIndex });
    }, 8000);
    setInterval(()=>{
      let classList = document.getElementById('title').classList;
      if(classList.contains('is-visible')) {
        classList.replace('is-visible', 'is-hidden');
      } else {
        classList.replace('is-hidden', 'is-visible');
      }
    }, 4000)
  }


  render() {
    const title = TITLES[this.state.titleIndex];
    return(
      <div className="cd-intro">
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
