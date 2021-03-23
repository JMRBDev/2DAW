import React from 'react';

const Navbar = ({ numeroFichas }) => {
    return (
        <nav className="navbar navbar-dark bg-dark px-5">
            <a href="/" className="navbar-brand">Fichas</a>
            <span className="badge bg-primary ml-2">{numeroFichas}</span>
        </nav>
    );
}

export default Navbar;
