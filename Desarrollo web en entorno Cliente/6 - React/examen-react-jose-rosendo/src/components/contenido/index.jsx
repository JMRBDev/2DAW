import React from 'react';

class Contenido extends React.Component {

    // Función que gestiona el cambio de estado de la clase App, para poner el nuevo lenguaje actual, recibe como parámetro el evento que ha accionado el callback
    languageChangeHandler = (event) => {
        // Llamada a la función callback recibida por props, pasando como parámetro el valor del lenguaje seleccionado
        this.props.handleLanguageChange(event.target.value);
    }

    render() {
        return (
            <div className="container">
                <div className="card">
                    <div className="card-body">
                        Idioma elegido: {" "}
                        {/**
                        * Select de idiomas. Cada vez que cambia su valor se ejecuta la función languageChangeHandler.
                        * Su valor por defecto es el lenguaje de las props.
                        */}
                        <select onChange={this.languageChangeHandler} defaultValue={this.props.lenguaje} className="form-select form-control" style={{ width: 'auto', display: 'inline-block' }} aria-label="Language selector">
                            <option value="ingles">Inglés</option>
                            <option value="sueco">Sueco</option>
                            <option value="aleman">Alemán</option>
                            <option value="frances">Francés</option>
                            <option value="espanol">Español</option>
                            <option value="portugues">Portugués</option>
                            <option value="leton">Letón</option>
                        </select> {" "}
                        Saludo: {" "}
                        {/**
                        * Mensaje pasado por las props en el lenguaje adecuado.
                        */}
                        {this.props.mensaje}
                    </div>
                </div>
            </div>
        );
    }
}

export default Contenido;
