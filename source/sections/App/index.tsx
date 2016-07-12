import * as React from "react";

const css = require('./style.css');

export interface AppProps {
  compiler: string;
  framework: string;
}

export class App extends React.Component<AppProps, {}> {
  render() {
    console.log('sourcemap test');
    return (
      <div className={css.moduleTest}>
        <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>
        <div className="imageTest"></div>
        <div className={css.inlineImageTest}></div>
      </div>
     );
  }
}