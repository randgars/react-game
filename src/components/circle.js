import React, {Component} from 'react';
import '../styles/circle.scss';

import {getRandomPoint} from '../sources/helpers';

export default class Circle extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const circleTop = this.circle.offsetTop;
    const circleLeft = this.circle.offsetLeft;
    const circleBottom = this.circle.offsetTop + this.circle.clientHeight;
    const circleRight = this.circle.offsetLeft + this.circle.clientWidth;
    
    this.props.actions.setCircleCoordinates(circleTop, circleRight, circleBottom, circleLeft);
  }

  changePosition(areaWidth, areaHeight) {
    const circleTop = getRandomPoint(0, areaWidth);
    const circleLeft = getRandomPoint(0, areaHeight);
    this.circle.style.top = circleTop + 'px';
    this.circle.style.left = circleLeft + 'px';

    this.props.actions.setCircleCoordinates(circleTop, circleLeft + 30, circleTop + 30, circleLeft);
  }

  

  render() {
    return (
      <div ref={(ref) => this.circle = ref} className="circle"></div>
    )
  }
}