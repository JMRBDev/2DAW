import React from 'react';

const Ficha = ({ ficha, index, borrarFicha }) => {
    return (
        <div className="col-4">
            <div className="card m-2 mt-4">
                <div className="card-header">
                    <h3>{ficha.titulo}</h3>
                    <span className="badge bg-danger">{ficha.prioridad}</span>
                </div>
                <div className="card-body">
                    <p>{ficha.descripcion}</p>
                    <p>{ficha.responsable}</p>
                </div>
                <div className="card-footer">
                    <button className="btn btn-danger" onClick={() => borrarFicha(index)}>Eliminar</button>
                </div>
            </div>
        </div>
    );
}

export default Ficha;
