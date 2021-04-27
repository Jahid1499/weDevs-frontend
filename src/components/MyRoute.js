import React, {Component} from 'react';
import {Route ,Switch} from 'react-router-dom'
import Home from "./pages/Home";
import Order from "./pages/Order";
import ProductDetails from "./pages/ProductDetails";
import Login from "./pages/Login";

class MyRoute extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/order" component={Order}/>
                    <Route path="/product-details/:productId" component={ProductDetails}/>
                    <Route path="/login" component={Login}/>
                </Switch>
            </div>
        );
    }
}

export default MyRoute;