import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {loadingStart, loadingFinish} from '../actions/loading';

import Main from '../components/app';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(loadingStart());
    setTimeout(() => {
      return this.props.dispatch(loadingFinish());
    }, 2000)
  }

  render() {
    return <Main {...this.props} />
  }
}

function mapStateToProps(state) {
  const props = {};

  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = {};

  const actionMap = {actions: bindActionCreators(actions, dispatch), dispatch};

  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(App);