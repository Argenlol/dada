import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { clientContext } from '../../context/ClientContext';

const SignIn = () => {
    const { loginUser } = useContext(clientContext)
    const history = useHistory()
    const [user, setUser] = useState({
        email: '',
        password: ''
    })
    function handleInput(e) {
        let obj = {
            ...user,
            [e.target.name]: e.target.value
        }
        setUser(obj)
    }
    function handleClick() {
        loginUser(user, history)
    }

    return (
        <>
            <h2>SIGNIN</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={handleInput} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={handleInput} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button onClick={handleClick} variant="primary" type="submit">
                    SIGNIN
                </Button>
            </Form>
        </>
    );
};

export default SignIn;