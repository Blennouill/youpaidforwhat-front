import * as React from 'react';

const logo = require('../logo.svg');

class App extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark double-nav  fixed-top scrolling-navbar">
          <div className="float-left">
              <a href="#" data-activates="slide-out" className="button-collapse">
                  <i className="fa fa-bars"></i>
              </a>
          </div>
          <div className="breadcrumb-dn mr-auto">
              <p>UPaid4What</p>
          </div>
          <ul className="nav navbar-nav nav-flex-icons ml-auto">
              <li className="nav-item">
                  <a className="nav-link">
                      <i className="fa fa-envelope"></i>
                      <span className="clearfix d-none d-sm-inline-block">Contact</span>
                  </a>
              </li>
              <li className="nav-item">
                  <a className="nav-link">
                      <i className="fa fa-gear"></i>
                      <span className="clearfix d-none d-sm-inline-block">Settings</span>
                  </a>
              </li>
              <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="fa fa-user"></i>
                      <span className="clearfix d-none d-sm-inline-block">Account</span>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                      <a className="dropdown-item" href="#">Action</a>
                      <a className="dropdown-item" href="#">Another action</a>
                      <a className="dropdown-item" href="#">Something else here</a>
                  </div>
              </li>
          </ul>
      </nav>
    );
  }
}

export default App;
