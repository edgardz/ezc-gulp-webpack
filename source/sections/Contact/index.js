import React from "react";
import { Link } from 'react-router';

import css from './style.css';

export default class Contact extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={css.root}>
        <h1>Contact</h1>
        <Link to='/'>Landing</Link>
      </div>
     );
  }
}