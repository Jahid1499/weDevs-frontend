import React, {Component} from 'react';
import {Button, Card, CardGroup, Container} from "react-bootstrap";
import axios from "axios";
import {Link} from "react-router-dom";

class Product extends Component {
    state={
        product:[]
    }
    componentDidMount() {
        axios.get('http://localhost:8000/product')
            .then( (response)=> {
                this.setState({product:response.data})
                console.log(this.state.product);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        const myList = this.state.product;
        const myCard = myList.map((data)=>{
            return <Card className="mx-2 border">
                <Card.Img variant="top" className="h-50" src={data.image} />
                <Card.Body>
                    <Card.Title>{data.name}</Card.Title>
                    <Card.Text>
                        {data.description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Price : {data.price} tk</small>
                </Card.Footer>
                <Card.Footer className="text-center">
                    <Link to={`/product-details/${data.id}`} className="btn btn-success">View Details</Link>
                </Card.Footer>
            </Card>
        })
        return (
            <>
                <Container>
                    <CardGroup className="my-3">
                        {myCard}
                    </CardGroup>
                </Container>
            </>
        );
    }
}

export default Product;