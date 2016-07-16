import * as React from "react";

const css = require('./style.css');

export interface AppProps {
  // compiler: string;
  // framework: string;
}

export class App extends React.Component<AppProps, {}> {
  render() {
    return (
      <div className={css.moduleTest}>
        <h1>Hello from Typescript and React!</h1>
        <div className="imageTest"></div>
        <div className={css.inlineImageTest}></div>
      </div>
     );
  }
}