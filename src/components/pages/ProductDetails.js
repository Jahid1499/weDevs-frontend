import React, {Component} from 'react';
import {Button, Card, Col, Container, Row, Form} from "react-bootstrap";
import axios from "axios";

class ProductDetails extends Component {
    constructor({match}) {
        super();
        this.state={
            image:"",
            id:match.params.productId,
            name:"",
            description:"",
            price:"",
            total:'',
            mydata:'',
            quantity:''
        }
    }



    componentDidMount() {
        axios.get("http://localhost:8000/product/"+this.state.id)
            .then( (response)=> {
                this.setState({image:response.data[0].image, name:response.data[0].name, description:response.data[0].description, price:response.data[0].price})
                //console.log(response.data[0]);
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    sendMyData=(id)=>{
        axios.post('http://localhost:8000/product/order-store', {
            product_id: id,
            user_id: 2,
            payment_status:"Done",
            order_status:"Processing",
            total: this.state.total,
            quantity: this.state.quantity
        })
            .then(function (response) {
                alert("Successfully placed order")
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    quantityHandelar=(event)=>{
        let quantity = event.target.value;
        let total = this.state.price * quantity;
        this.setState({quantity:quantity, total:total})
    }

    render() {
        return (
            <>
                <Container>
                    <Row className="mt-3">
                        <Col>
                            <Card className="mx-2 border">
                                <Card.Img variant="top" className="h-50" src={this.state.image} />
                            </Card>
                        </Col>
                        <Col>
                            <Card className="mx-2 border">
                                <Card.Body>
                                    <Card.Title>{this.state.name}</Card.Title>
                                    <Card.Text>
                                        {this.state.description}
                                    </Card.Text>
                                </Card.Body>
                                <Form>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Quantity</Form.Label>
                                        <Form.Control onChange={this.quantityHandelar} type="number" placeholder="Please Enter Quantity" min="1"/>
                                    </Form.Group>
                                </Form>
                                <Card.Footer>
                                    <small className="text-muted">Price : {this.state.price} tk</small><br/>
                                    <small className="text-muted">Total : {this.state.total} tk</small>
                                </Card.Footer>
                                <Card.Footer className="text-center">
                                    <Button onClick={this.sendMyData.bind(this, this.state.id)} className="btn btn-success">Place Order</Button>
                                </Card.Footer>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default ProductDetails;