import React, {useContext, useState} from 'react';
import {Button, Form} from "react-bootstrap";
import {Context} from "../../../Context/ContextWrapper";
import Web3Service from "../../../Services/Web3Service/Web3Service";

export const CreateComment = () => {

    const { userData } = useContext(Context);
    const [commentId, setCommentId] = useState(1);

    const createCommentHandler = async (e) => {
        e.preventDefault();
        const { target } = e;
        await Web3Service.createComment(commentId, target[0].value, userData.address);
        setCommentId(commentId + 1);
    }

    return (
        <Form onSubmit={createCommentHandler} style={{marginTop: "2rem"}}>
            <h5>Create Comment</h5>
            <Form.Group className="mb-3">
                <Form.Label>Comment</Form.Label>
                <Form.Control type="text" placeholder="Enter Comment"></Form.Control>
            </Form.Group>

            <Button type="submit">
                Submit
            </Button>
        </Form>
    );
};
