import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  static defaultProps = {
    numberWord: ['one', 'two', 'three', 'four', 'five', 'six']
  };

  constructor(props) {
    super();
    this.handleLock = this.handleLock.bind(this);
  }

  handleLock(){
      this.props.handleClick(this.props.idx);
  }

  render() {
    let face = this.props.numberWord[this.props.val-1]
    let classes = `Die fas fa-dice-${face} fa-5x`
    if (this.props.locked) classes += " Die-locked"
    if (this.props.rolling&&!this.props.locked) classes += " Die-rolling"
    return (
      <i
        className={classes}
        onClick={this.handleLock}
        disabled={this.props.disabled}
      />
    );
  }
}

export default Die;
