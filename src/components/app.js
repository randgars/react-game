import React, {Component} from 'react';
import '../styles/app.scss';

import Area from './area';

export default class AppComponent extends Component {
  render() {
    return [
      <Area key="area"
        area={this.props.area}
        cursor={this.props.cursor}
        circle={this.props.circle}
        actions={this.props.actions}
      />,
      <p key="clicksCounter">{this.props.clicks}</p>,
      this.props.cursor && <p key="cursor">x: {this.props.cursor.x} y: {this.props.cursor.y}</p>,
      this.props.circle &&
      <p key="circle">
        top: {this.props.circle.top} right: {this.props.circle.right} bottom: {this.props.circle.bottom} left: {this.props.circle.left}
      </p>
    ]
  }
}