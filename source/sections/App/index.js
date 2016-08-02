import React from "react";
import { connect } from 'react-redux';

import doRefreshPlatform from '../../redux/actions/doRefreshPlatform';

import getPlatform from '../../redux/selectors/getPlatform';

import css from './style.css';

class App extends React.Component {

  componentWillMount() {
    window.addEventListener('resize', this.props.doRefreshPlatform);
  }

  render() {
    return (
      <div className={css.root}>
        {this.props.children}
      </div>
     );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    platform: getPlatform(state),
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    doRefreshPlatform: () => dispatch(doRefreshPlatform())
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
