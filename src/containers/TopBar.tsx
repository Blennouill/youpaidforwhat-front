import * as React from 'react';
import { NavbarBrand, NavbarToggler } from 'mdbreact';7
import Navbar from '../components/Navbar'; 

export default class TopBar extends React.Component {
  render() {
    return (
        <Navbar color="blue" dark expand="md" fixed="top" scrolling>
            <NavbarBrand href="/">
            UPaid4What
            </NavbarBrand>
        </Navbar>
    );
  }
}