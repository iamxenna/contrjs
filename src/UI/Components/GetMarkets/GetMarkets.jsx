import React, {useContext, useState} from 'react';
import Web3Service from "../../../Services/Web3Service/Web3Service";
import {Button, Form} from "react-bootstrap";
import {Context} from "../../../Context/ContextWrapper";
import {ModalMarkets} from "../ModalMarkets/ModalMarkets";

export const GetMarkets = () => {

    const { getMarkets } = useContext(Context);

    const [showModel, setShowModel] = useState(false);

    const getMarketsHandler = async (e) => {
        e.preventDefault();
        const { target } = e;
        const data = await Web3Service.getMarkets(target[0].value);
        getMarkets(data.filter((el) => el.role === String(4)));
    }

    return (
        <Form onSubmit={getMarketsHandler} style={{width: "15rem", marginTop: "2rem"}}>

            <h5>Get Markets</h5>
            <Form.Group className="mb-3">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" placeholder="Enter Address" />
            </Form.Group>

            <Button type="submit" onClick={() => setShowModel(true)}>
                Submit
            </Button>

            <ModalMarkets showModel={showModel} setShowModel={setShowModel} />

        </Form>
    );
};
