const css = require('./style.css');

import * as React from 'react';
import { Link } from 'react-router';

import { Test } from '../../components/Test';


export interface Props {}

export class Landing extends React.Component<Props, {}> {
  render() {
    return (
      <div className={css.root}>
        Landing
        <Test />
        <Link to='/contact'>Contact</Link>
      </div>
     );
  }
}