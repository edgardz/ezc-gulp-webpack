const css = require('./style.css');

import * as React from "react";
import { Link } from 'react-router';

export interface Props {}

export class Contact extends React.Component<Props, {}> {
  render() {
    return (
      <div className={css.root}>
        <h1>Contact</h1>
        <Link to='/'>Landing</Link>
      </div>
     );
  }
}