import React from "react";

import Button from "./Button";

const ButtonsGrid = ({ clickHandler }) => {

  const handleClick = (buttonName) => {
    clickHandler(buttonName);
  };

  return (
    <div className="buttons-grid">
      <div className="buttons-row">
        <Button nombre="7" handleClick={handleClick} />
        <Button nombre="8" handleClick={handleClick} />
        <Button nombre="9" handleClick={handleClick} />
        <Button nombre="x" handleClick={handleClick} />
      </div>
      <div className="buttons-row">
        <Button nombre="4" handleClick={handleClick} />
        <Button nombre="5" handleClick={handleClick} />
        <Button nombre="6" handleClick={handleClick} />
        <Button nombre="-" handleClick={handleClick} />
      </div>
      <div className="buttons-row">
        <Button nombre="1" handleClick={handleClick} />
        <Button nombre="2" handleClick={handleClick} />
        <Button nombre="3" handleClick={handleClick} />
        <Button nombre="+" handleClick={handleClick} />
      </div>
      <div className="buttons-row">
        <Button nombre="0" handleClick={handleClick} />
        <Button nombre="." handleClick={handleClick} />
        <Button nombre="=" handleClick={handleClick} />
      </div>
    </div>
  );
}

export default ButtonsGrid;