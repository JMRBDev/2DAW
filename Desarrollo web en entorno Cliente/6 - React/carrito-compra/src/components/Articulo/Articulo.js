import React from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';

import Icono from '../Icono/Icono';

const Articulo = ({ nombre, cantidad }) => {
    return (
        <Row>
            <Col>
                <Row>
                    <Col xs={3}>
                        <h3><Badge variant="info">{nombre || "Artículo"}</Badge></h3>
                    </Col>
                    <Col xs={1}>
                        <h3><Badge variant="warning">{cantidad || "Cero"}</Badge></h3>
                    </Col>
                </Row>
            </Col>
            <Col xs={3}>
                <Row>
                    <Col xs={3}>
                        <Button><Icono icon={faPlusCircle} /></Button>
                    </Col>
                    <Col xs={3}>
                        <Button><Icono icon={faMinusCircle} /></Button>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export default Articulo;
