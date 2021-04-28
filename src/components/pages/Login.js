import React, {Component} from 'react';
import {Button, Card, Form} from "react-bootstrap";
import logo from '../../asset/img/logo.png';
import axios from "axios";

class Login extends Component {

    state = {
        email:'',
        password:'',
        info:[]
    }

    loginProcess=()=>{
        let url = "http://localhost:8000/user-login";
        axios.get(url,{headers:{"Content-Type" : "application/x-www-form-urlencoded", email: this.state.email, password: this.state.password}})
            .then((response)=>{
                this.setState({info:response.data})
                console.log(response.data)
            }).catch((e)=>{
            alert(e)
        });

    }
    onChangeHandaler=(e)=>{
        let con = e.target.name;
        let val = e.target.value;
        this.setState({[con]:val})
    }


    render() {
        return (
            <div className="w-100">
                <Card className="m-t-15" style={{ width: '25rem', margin: '0 auto', marginTop:'200px' }}>
                    <Card.Img variant="top" src={logo} />
                    <Card.Body>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control onChange={this.onChangeHandaler} name="email" type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control name="password" type="password" placeholder="Password" />
                            </Form.Group>
                            <Button onClick={this.loginProcess} className="btn-block" variant="primary">
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