import React, { useState } from 'react';
import Toast from 'react-bootstrap/Toast';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

/**
 * Este componente representa una notificación en la esquina superior izquierda de la web, que muestra información sobre el funcionamiento de la app.
 */
const ToastNotificacion = () => {
    const [mostrarToast, setMostrarToast] = useState(true);

    const handleEsconderToast = () => setMostrarToast(!mostrarToast);

    return (
        <Row style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
            <Col>
                <Toast show={mostrarToast} onClose={handleEsconderToast}>
                    <Toast.Header>
                        <strong className="mr-auto">Funcionamiento</strong>
                    </Toast.Header>
                    <Toast.Body>Para añadir un nuevo deseo escribe su nombre en el campo de texto "Nuevo deseo". Luego, haz clic fuera del campo de texto.</Toast.Body>
                </Toast>
            </Col>
        </Row>
    );
}

export default ToastNotificacion;
