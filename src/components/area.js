import React, {Component} from 'react';
import '../styles/area.scss';

import Circle from './circle';

export default class Area extends Component {
  constructor(props) {
    super(props);
    this.addClick = this.addClick.bind(this);
    this.mouseMove = this.mouseMove.bind(this);
  }

  componentDidMount() {
    const areaWidth = this.area.clientWidth;
    const areaHeight = this.area.clientHeight;
    this.props.actions.setAreaSize(areaWidth, areaHeight);
  }

  addClick() {
    const {cursor, circle, actions} = this.props;
    if ((cursor.x > circle.left &&  cursor.x < circle.right) && (cursor.y > circle.top && cursor.y < circle.bottom)) {
      return actions.addClick();
    } else {
      return actions.deleteClick();
    }
  }

  mouseMove(event) {
    const {cursor, circle, actions, area} = this.props;
    
    const cursorX = event.clientX - this.area.offsetLeft;
    const cursorY = event.clientY - this.area.offsetTop;

    actions.setCursorCoordinates(cursorX, cursorY);
    debugger
    if ((cursorX > circle.left &&  cursorX < circle.right) &&
        (cursorY > circle.top && cursorY < circle.bottom)) {
      this.circle.changePosition(area.width, area.height);
    }
  }

  render() {
    const {actions, circle} = this.props;
    return (
      <div ref={(ref) => this.area = ref} className="area" onClick={this.addClick} onMouseMove={this.mouseMove}>
        <Circle
          ref={(ref) => this.circle = ref}
          actions={actions}
          circle={circle}
        />
      </div>
    )
  }
}