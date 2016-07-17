const css = require('./style.css');

import * as React from "react";
import { Link } from 'react-router';

export interface Props {}

export class Contact extends React.Component<Props, {}> {
  render() {
    return (
      <div className={css.root}>
        Contact
        <Link to='/'>Landing</Link>
      </div>
     );
  }
}