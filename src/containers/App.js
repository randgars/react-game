import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {loadingStart, loadingFinish} from '../actions/loading';
import {addClick, deleteClick} from '../actions/clicks';
import setCursorCoordinates from '../actions/setCursorCoordinates';
import setCircleCoordinates from '../actions/setCircleCoordinates';
import setAreaSize from '../actions/setAreaSize';

import Main from '../components/app';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(loadingStart());
    setTimeout(() => {
      return this.props.dispatch(loadingFinish());
    }, 500)
  }

  render() {
    return <Main {...this.props} />
  }
}

function mapStateToProps(state) {
  const props = {
    clicks: state.clicks.clicks,
    cursor: state.coordinates.cursor,
    circle: state.coordinates.circle,
    area: state.coordinates.area
  };

  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = {
    addClick,
    deleteClick,
    setCursorCoordinates,
    setCircleCoordinates,
    setAreaSize
  };

  const actionMap = {actions: bindActionCreators(actions, dispatch), dispatch};

  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(App);