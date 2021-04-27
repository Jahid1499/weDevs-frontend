import React, {Component} from 'react';
import {Button, Card, Form} from "react-bootstrap";
import logo from '../../asset/img/logo.png';

class Login extends Component {
    render() {
        return (
            <div className="w-100">
                <Card className="m-t-15" style={{ width: '25rem', margin: '0 auto', marginTop:'200px' }}>
                    <Card.Img variant="top" src={logo} />
                    <Card.Body>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Button className="btn-block" variant="primary" type="submit">
                                LogIn
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default Login;