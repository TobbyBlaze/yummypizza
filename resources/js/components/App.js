import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import ShCart from './ShCart';
import PrDetails from './PrDetails';
import Checkout from './Checkout';
import Login from './Login';
import Signup from './Signup';
import Footer from './Footer';

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <Switch>
                        {/* <Route exact path='/Corover/public/' component={Country} /> */}
                        <Route exact path='./' component={Home} />
                        <Route exact path='/yummypizza/public/prdetails' component={PrDetails} />
                        <Route exact path='/yummypizza/public/shcart' component={ShCart} />
                        <Route exact path='/yummypizza/public/checkout' component={Checkout} />
                        <Route exact path='/yummypizza/public/login' component={Login} />
                        <Route exact path='/yummypizza/public/signup' component={Signup} />
                    </Switch>
                    {/* <Footer /> */}
                </div>
            </BrowserRouter>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}