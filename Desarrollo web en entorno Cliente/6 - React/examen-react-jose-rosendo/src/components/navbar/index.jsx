import React from 'react';

class Navbar extends React.Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">Examen React - 2º DAW B</a>
                <div className="collapse navbar-collapse" id="navbarText">
                    <span className="navbar-text ml-auto">
                        Jose Rosendo Bienvenido
                </span>
                </div>
            </nav>
        );
    }
}

export default Navbar;
