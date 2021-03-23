import React from "react";

const Button = ({ handleClick, nombre }) => {

  const handleOnClick = () => {
    handleClick(nombre);
  };

  return (
    <div className={`button-container ${nombre === '0' ? 'zero' : ''}`}>
      <button className="button" onClick={handleOnClick}>{nombre}</button>
    </div>
  );
}

export default Button;