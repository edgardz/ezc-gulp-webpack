import React from "react";

import css from './style.css';

export default class Test extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

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