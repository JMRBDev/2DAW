import React, { useState } from "react";

import Pantalla from "./Pantalla";
import ButtonsGrid from "./ButtonsGrid";

const App = () => {

  const [calcState, setCalcState] = useState({
    total: null,
    siguiente: null,
    signo: null,
  });

  const calcular = (calcState, boton) => {
    if (/[0-9]+/.test(boton)) {
      if (boton === '0' && calcState.siguiente === '0') {
        return;
      }

      if (calcState.signo) {
        if (calcState.siguiente) {
          return { siguiente: `${calcState.siguiente}${boton}` };
        }
        return { siguiente: boton };
      }

      if (calcState.siguiente) {
        const siguiente = calcState.siguiente === '0' ? boton : `${calcState.siguiente}${boton}`;
        return {
          siguiente: siguiente,
          total: null,
        };
      }

      return {
        siguiente: boton,
        total: null,
      };
    }

    if (boton === '.') {
      if (calcState.siguiente) {
        if (calcState.siguiente.includes('.')) {
          return;
        }

        return { siguiente: `${calcState.siguiente}.` };
      }

      return { siguiente: '0.' };
    }

    if (boton === '=') {
      if (calcState.siguiente && calcState.signo) {
        return {
          total: realizarOperacion(calcState.total, calcState.siguiente, calcState.signo),
          siguiente: null,
          signo: null,
        };
      } else {
        return;
      }
    }

    if (calcState.signo) {
      return {
        total: realizarOperacion(calcState.total, calcState.siguiente, calcState.signo),
        siguiente: null,
        signo: boton,
      };
    }

    if (!calcState.siguiente) {
      return { signo: boton };
    }

    return {
      total: calcState.siguiente,
      siguiente: null,
      signo: boton,
    };
  }

  const realizarOperacion = (num1, num2, operacion) => {
    const primerNumero = num1 || 0;
    const segundoNumero = num2 ? num2 : operacion === 'x' ? 1 : 0;

    if (operacion === '+') {
      return (parseFloat(primerNumero) + parseFloat(segundoNumero)).toString();
    }
    if (operacion === '-') {
      return (parseFloat(primerNumero) - parseFloat(segundoNumero)).toString();
    }
    if (operacion === 'x') {
      return (parseFloat(primerNumero) * parseFloat(segundoNumero)).toString();
    }
  };

  const handleClick = (buttonName) => {
    const newState = calcular(calcState, buttonName);

    if (newState) {
      setCalcState((prevState) => ({
        total: 'total' in newState ? newState.total : prevState.total ? prevState.total : 0,
        siguiente: 'siguiente' in newState ? newState.siguiente : prevState.siguiente ? prevState.siguiente : 0,
        signo: 'signo' in newState ? newState.signo : prevState.signo ? prevState.signo : null,
      }));
    }
  };

  return (
    <div className="App">
      <Pantalla value={calcState.siguiente || calcState.total || '0'} />
      <ButtonsGrid clickHandler={handleClick} />
    </div>
  );
}

export default App;