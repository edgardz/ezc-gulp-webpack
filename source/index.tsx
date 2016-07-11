import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { App } from './sections/App';

ReactDOM.render(
  <App compiler='TypeScript' framework='React' />,
  document.getElementById('app')
);