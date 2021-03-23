import { useState } from 'react';
import './App.css';
import Ficha from './components/Ficha/Ficha';
import Form from './components/Form/Form';
import Button from './components/Input/Button';
import Input from './components/Input/Input';
import Navbar from './components/Navbar/Navbar';

import { fichas as fichasJSON } from './fichas.json';

const App = () => {
  const [listaFichas, setListaFichas] = useState(fichasJSON);
  const [nuevaFicha, setNuevaFicha] = useState({});

  const borrarFicha = (index) => {
    setListaFichas(
      listaFichas.filter((ficha, i) => {
        return i !== index;
      })
    );
  }

  const onChange = (element) => {
    console.log(element.target.name, element.target.value);

    setNuevaFicha({
      ...nuevaFicha,
      [element.target.name]: element.target.value,
    });
  }

  const anadirFicha = (event) => {
    event.preventDefault();
    setListaFichas([...listaFichas, nuevaFicha]);
  }

  const fichas = listaFichas.map((ficha, index) => {
    return (
      <Ficha key={index} ficha={ficha} index={index} borrarFicha={borrarFicha} />
    );
  });

  return (
    <div>
      <Navbar numeroFichas={fichas.length} />
      <div className="container d-flex flex-wrap">
        {fichas}
      </div>
      <Form onSubmit={anadirFicha}>
        <h3>Crear ficha</h3>
        <Input onChange={() => onChange} name="titulo" id="input-titulo-nuevo" placeholder="Título" />
        <Input onChange={() => onChange} name="responsable" id="input-responsable-nuevo" placeholder="Responsable" />
        <Input onChange={() => onChange} name="descripcion" id="input-descripcion-nuevo" placeholder="Descripción" />
        <Input onChange={() => onChange} name="prioridad" id="input-prioridad-nuevo" placeholder="Prioridad" />
        <Button>Añadir ficha</Button>
      </Form>
    </div>
  );
}

export default App;
