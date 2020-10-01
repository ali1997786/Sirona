import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const Menus = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div className="bg-success">
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto">DashBoard</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-1 text-left" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar className="text-left">
            <NavItem>
              <NavLink href="/DashBoard" action>DashBoard</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Orders" action>Orders</NavLink>
            </NavItem>
            <NavItem>
              <NavLink  href="/Delivery" action >Delivery staff</NavLink>
            </NavItem>
            <NavItem>
              <NavLink >Userbase</NavLink>
            </NavItem>
            <NavItem>
              <NavLink >Control Panel</NavLink>
            </NavItem>
            <NavItem>
              <NavLink >Logout</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}


export default Menus;