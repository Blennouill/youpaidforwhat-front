import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { history } from '../router';
import { Main, Footer } from 'mdbreact';

import TopBar from './TopBar';
import HomePage from './HomePage';

const logo = require('../logo.svg');

class App extends React.Component {
  render() {
    return (
      <div className="flyout">
          <TopBar />

          <div className="container-fluid text-center">
            <HomePage />
          </div>

          <Footer color="blue">
            <p className="footer-copyright mb-0">
              &copy; {(new Date().getFullYear())} Copyright: <a href="https://www.linkedin.com/in/kevinblenner"> Kevin Blenner </a>
            </p>
          </Footer>
        </div>
    );
  }
}

export default App;