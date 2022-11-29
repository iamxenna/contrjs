import React, {useContext, useState} from 'react';
import {Button, Form} from "react-bootstrap";
import Web3Service from "../../Services/Web3Service/Web3Service";
import {ModalWindow} from "../Components/ModalWindow/ModalWindow";
import {Context} from "../../Context/ContextWrapper";
import {useHistory} from "react-router-dom";

const Auth = () => {

    const [address, setAddress] = useState("");
    const [password, setPassword] = useState("");

    const { login } = useContext(Context);

    const navigation = useHistory();

    const [showModel, setShowModel] = useState(false);

    const loginSubmitHandler = async (e) => {
        e.preventDefault();
        const data = await Web3Service.authorize(address, password);
        if (data) {
            setShowModel(true);
        } else {
            alert("Invalid password");
        }
    }

    const wordCheckHandler = async (e) => {
        e.preventDefault();
        const word = e.target[0].value;
        const data = await Web3Service.checkWord(address, word);
        if (data) {
            login(data);
            navigation.push("/home");
        }
    }

    return (
        <>
            <Form onSubmit={loginSubmitHandler} style={{maxWidth: "15rem", margin: "0 auto", marginTop: "3rem"}}>

                <h1>Auth</h1>
                <Form.Group className="mb-3">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="Enter Address" onChange={({target}) => setAddress(target.value)} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter password" onChange={({target}) => setPassword(target.value)} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
                <ModalWindow setShowModel={setShowModel} showModel={showModel} onSubmit={wordCheckHandler} />
        </>
    );
};

export default Auth;