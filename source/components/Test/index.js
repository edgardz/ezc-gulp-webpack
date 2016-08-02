import React from "react";

import css from './style.css';

export default class Test extends React.Component {
  render() {
    return (
      <div className={css.root}>
        <h1>Test Component</h1>
        <div className="imageTest"></div>
        <div className={css.inlineImageTest}></div>
      </div>
     );
  }
}