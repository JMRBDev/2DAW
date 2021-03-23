import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Alert from 'react-bootstrap/Alert';

import AnadirDeseo from './components/AnadirDeseo'; // Componente campo de texto para añadir nuevos deseos
import Deseo from './components/ListaDeseos'; // Componente de lista de deseos
import CustomNavbar from './components/CustomNavbar'; // Componente de Navbar
import ToastNotificacion from './components/ToastNotificacion'; // Componente de notificación con instrucciones
import { deseos as deseosJSON } from './data/deseos.json'; // Coger datos de data/deseos.json

const App = () => {
  const [misDeseos, setDeseos] = useState(deseosJSON); // Definición de estado

  /**
   * Recibe un parámetro que representa al objeto que se va a eliminar de misDeseos (estado).
   * Usa el método setDeseos que igualam misDeseos a una filtración de misDeseos, que devuelve un array con todos los deseos excepto el que se pasa por parámetro, por tanto, queda eliminado.
   * @param {Object} deseo
   */
  const handleEliminar = (deseo) => {
    // TODO: Cambiar setDeseos para que sea correcta la mutación del estado.
    setDeseos(misDeseos.filter((deseoEncontrado) => {
      return deseoEncontrado !== deseo;
    }));
  }

  /**
   * Recibe un parámetro que representa el nombre del nuevo deseo que se va a crear.
   * Si el nombre del nuevo deseo no es null, no está vacío y no es un conjunto de espacios, usa el método setDeseos usando el valor actual de misDeseos, pero añadiendo el nuevo deseo.
   * El nuevo deseo tiene como id la longitud de misDeseos +1.
   * @param {String} nuevoDeseo
   */
  const handleAnadirNuevoDeseo = (nuevoDeseo) => {
    if (nuevoDeseo.trim()) {
      // TODO: Cambiar setDeseos para que sea correcta la mutación del estado.
      setDeseos([...misDeseos,
      {
        id: misDeseos.length + 1,
        nombre: nuevoDeseo
      }]);
    }
  }

  return (
    <>
      <CustomNavbar />

      <Container className="my-4">
        <ToastNotificacion />

        <h1>Lista de deseos</h1>
        <h5>Añade tu regalo favorito</h5>

        <ListGroup variant="flush">
          { // Si misDeseos tiene contenido, muestra la lista de deseos. En caso contrario muestra una alerta de que no existen deseos.
            misDeseos.length > 0 ?
              misDeseos.map((deseo) => {
                return (
                  <ListGroup.Item><Deseo key={deseo.id} deseo={deseo} eliminar={() => handleEliminar(deseo)} /></ListGroup.Item>
                );
              }) :
              <Alert variant="info">
                Aún no hay ningún deseo en la lista. ¡Añade tu primer deseo abajo!
              </Alert>
          }
        </ListGroup>


        <AnadirDeseo anadirDeseo={(nuevoDeseo) => handleAnadirNuevoDeseo(nuevoDeseo)} />
      </Container>
    </>
  );
}

export default App;
