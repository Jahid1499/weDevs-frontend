import React, {Component} from 'react';
import {Button, Container, Table} from "react-bootstrap";
import axios from "axios";

class Order extends Component {
    state={
        order:[]
    }

    componentDidMount() {
        axios.get('http://localhost:8000/order-details/2')
            .then( (response)=> {
                this.setState({order:response.data})
                //console.log(this.state.product);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    cancleOrder=(id)=>{

    }
    render() {

        const myList = this.state.order;
        const myOrder = myList.map((data)=>{
            return <tr>
                <td>{data.id}</td>
                <td>{data.product_id}</td>
                <td>{data.payment_status}</td>
                <td>{data.order_status}</td>
                <td>{data.total}</td>
                <td>{data.quantity}</td>
                <td>{data.created_at}</td>
                <td><Button className="btn btn-danger" onClick={this.cancleOrder.bind(this, data.id)}>Cancel</Button></td>
            </tr>
        });
        return (
            <>
                <Container>
                    <Table striped bordered hover className="mt-3">
                        <thead>
                        <tr>
                            <th>#SL</th>
                            <th>Order No.</th>
                            <th>Product Id</th>
                            <th>Payment Status</th>
                            <th>Order Status</th>
                            <th>Total</th>
                            <th>Quantity</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {myOrder}
                        </tbody>
                    </Table>
                </Container>
            </>
        );
    }
}

export default Order;