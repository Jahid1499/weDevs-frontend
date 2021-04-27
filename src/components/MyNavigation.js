import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import {Container, Nav, Navbar} from "react-bootstrap";

class MyNavigation extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light" variant="light">
                    <Container>
                        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                        <Nav className="ml-auto">
                            <Nav.Link><NavLink activeStyle={{color:"green"}} to="/">Home</NavLink></Nav.Link>
                            <Nav.Link><NavLink activeStyle={{color:"green"}} to="/order">Order</NavLink></Nav.Link>
                            <Nav.Link><NavLink activeStyle={{color:"green"}} to="/login">Login</NavLink></Nav.Link>

                        </Nav>
                    </Container>
                </Navbar>
                {/*<ul>
                    <li><NavLink activeStyle={{color:"green"}} to="/">Home</NavLink></li>
                </ul>*/}
            </div>
        );
    }
}

export default MyNavigation;