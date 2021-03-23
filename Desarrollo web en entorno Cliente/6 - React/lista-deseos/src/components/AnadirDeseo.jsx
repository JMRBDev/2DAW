import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const AnadirDeseo = ({ anadirDeseo }) => {
    return (
        <Row className="mt-4">
            <Col md="3">
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text id="nuevo-deseo-input">📖</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl placeholder="Nuevo deseo" aria-label="Nuevo deseo" aria-describedby="nuevo-deseo-input" onBlur={(event) => anadirDeseo(event.target.value)} />
                </InputGroup>
            </Col>
        </Row>
    );
}

export default AnadirDeseo;
