import React from 'react';
import {Button, Form, Modal} from "react-bootstrap";

export const ModalWindow = ({ setShowModel, showModel, onSubmit }) => {

    const handleClose = () => setShowModel(false);

    return (
        <Modal show={showModel} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Secret Word</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={onSubmit} >
                    <Form.Group className="mb-3">
                        <Form.Label>Word</Form.Label>
                        <Form.Control type="password" placeholder="Enter Word" />
                    </Form.Group>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" type="submit" className="ms-3">
                        Save Changes
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};