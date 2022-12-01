import React, {useContext} from 'react';
import {Card, Modal} from "react-bootstrap";
import {Context} from "../../../Context/ContextWrapper";

export const ModalMarkets = ({ setShowModel, showModel }) => {

    const handleClose = () => setShowModel(false);

    const { marketsData } = useContext(Context);

    return (
        <Modal show={showModel} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Shops</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {marketsData.map(({name}) => (
                    <div key={name}>
                        <Card style={{ width: '18rem', marginBottom: "3px" }}>
                            <Card.Body>
                                <Card.Title>{name}</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </Modal.Body>
        </Modal>
    );
};
