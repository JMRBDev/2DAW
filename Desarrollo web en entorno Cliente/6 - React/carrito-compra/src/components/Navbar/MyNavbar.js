import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import Icono from '../Icono/Icono';

const MyNavbar = ({ articulos }) => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <Icono icon={faShoppingCart} />
          <Badge pill className="mx-4 px-3" variant="info">{articulos || 0}</Badge>Artículos - Jose Rosendo</Navbar.Brand>
      </Navbar>
    </div>
  );
}

export default MyNavbar;
