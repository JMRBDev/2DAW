import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Deseo = ({ deseo, eliminar }) => {
    return (
        <Row className="my-2">
            <Col className="">
                <span className="mr-3">{deseo.nombre}</span>
                <Button variant="danger" onClick={eliminar}>Eliminar</Button>
            </Col>
        </Row>
    );
}

export default Deseo;
