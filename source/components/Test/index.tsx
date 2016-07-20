const css = require('./style.css');

import * as React from "react";

export interface Props {
  // compiler: string;
  // framework: string;
}

export class Test extends React.Component<Props, {}> {
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