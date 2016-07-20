const css = require('./style.css');

import * as React from "react";

export interface Props {
  // compiler: string;
  // framework: string;
}

export class App extends React.Component<Props, {}> {
  render() {
    return (
      <div className={css.root}>
        {this.props.children}
      </div>
     );
  }
}