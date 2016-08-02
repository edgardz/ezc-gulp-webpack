import React from "react";

import css from './style.css';

export default class App extends React.Component {
  render() {
    return (
      <div className={css.root}>
        {this.props.children}
      </div>
     );
  }
}