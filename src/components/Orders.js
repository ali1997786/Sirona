import React, { useState } from 'react';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';
import { Table } from 'reactstrap';

const Orders =()=>{
    return (
    <div>
      <Nav pills>
        <NavItem>
          <NavLink href="#" active>Awaiting</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" active>Pending</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Delivered</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Cancel Order</NavLink>
        </NavItem>
      </Nav>
      <Table>
      <thead>
        <tr>
          <th>S.no</th>
          <th>Date</th>
          <th>OrdersID</th>
          <th>Name</th>
          <th>Contact</th>
          <th>Address</th>
          <th>Action</th>
        </tr>
      </thead>
    </Table>
    </div>
  );
}

export default Orders;