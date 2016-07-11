import * as React from "react";

const styles = require('./styles.css');

export interface AppProps {
  compiler: string;
  framework: string;
}

export class App extends React.Component<AppProps, {}> {
  render() {
    console.log('sourcemap test');
    return (
      <div className={styles.cssModuleTest}>
        <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>
      </div>
     );
  }
}