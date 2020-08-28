import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import { hot } from 'react-hot-loader/root';

const render = (Component) => {
  ReactDOM.render(<Component />, document.getElementById('root'));
}

render(hot(App));

