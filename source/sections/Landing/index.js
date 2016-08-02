import React from 'react';
import { Link } from 'react-router';

import css from './style.css';

import Test from '../../components/Test';

export default class Landing extends React.Component {
  render() {
    return (
      <div className={css.root}>
        <h1>Landing!</h1>
        <Link to='/contact'>Contact</Link>
        <Test />
      </div>
     );
  }
}