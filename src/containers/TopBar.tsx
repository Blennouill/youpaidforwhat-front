import * as React from 'react';

export default class TopBar extends React.Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark double-nav  fixed-top scrolling-navbar">
            <div className="float-left">
                <a href="#" data-activates="slide-out" className="button-collapse">
                    <i className="fa fa-bars"/>
                </a>
            </div>
            <div className="breadcrumb-dn mr-auto">
                <p>UPaid4What</p>
            </div>
        </nav>
    );
  }
}