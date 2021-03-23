import React from 'react';
import Contenido from './components/contenido';
import Navbar from './components/navbar';

// Importar JSON con los datos de los mensajes en cada idioma
import mensajes from './data/mensajes.json';

class App extends React.Component {
  // Definir el estado inicial de la aplicación
  state = {
    lenguaje: Object.keys(mensajes)[0] || "Inglés", // Cojo la clave con index 0 del JSON, que en este caso es "ingles"
    mensaje: "Aquí se muestra el mensaje", // Cojo el valor con index 0 del JSON, que en este caso es "Hello"
  }

  // Controlar el cambio de lenguaje, este es el callback que se acciona al cambiar el valor del select y recibe como parámetro el lenguaje seleccionado
  handleLanguageChange = (lenguaje) => {
    // Cambiar el estado con el lenguaje seleccionado y el mensaje que le corresponde en el JSON
    this.setState({ lenguaje, mensaje: mensajes[lenguaje] });
  }

  render() {
    return (
      <>
        <Navbar />

        {/**
         *  Contenido de la aplicación. Recibe como props el lenguaje actual,
         * y el mensaje actual que están definidos en el estado.
         * También recibe el callback para gestionar el cambio de lenguaje. 
         */}
        <Contenido lenguaje={this.state.lenguaje} mensaje={this.state.mensaje} handleLanguageChange={this.handleLanguageChange} />
      </>
    );
  }
}

export default App;
