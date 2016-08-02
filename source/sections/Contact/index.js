import React from "react";
import { Link } from 'react-router';

import css from './style.css';

export default class Contact extends React.Component {
  render() {
    return (
      <div className={css.root}>
        <h1>Contact</h1>
        <Link to='/'>Landing</Link>
      </div>
     );
  }
}