import React, { Component } from 'react'
import axios from 'axios'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'

import Header from './Header';
import Footer from './Footer';

export default class Checkout extends Component{
    constructor(props){
        super(props);

        this.state = {
            id: '',
            name: '',
            first_name: '',
            last_name: '', 
            country: '', 
            address1: '', 
            address2: '', 
            city: '', 
            state: '', 
            zip: '', 
            phone: '', 
            email: ''
        }
    }


    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)

        axios
            // .post('http://localhost/yummypizza/public/api/auth/login', this.state)
            .post('https://damp-island-72638.herokuapp.com/api/auth/checkout', this.state)
            .then(response => {
                console.log(response);
                
                // var sub = true;
            })
            .catch(error => {
                console.log(error)
            })
    }


    componentDidMount(){
        //
    }

    render(){
        const { name,first_name, last_name, country, address1, address2, city, state, zip, phone, email } = this.state
        return(
            <div>
                <Header />
                
                {/* <!-- Breadcrumb Section Begin --> */}
                <section className="breadcrumb-section set-bg" data-setbg="img/breadcrumb.jpg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <div className="breadcrumb__text">
                                    <h2>Checkout</h2>
                                    <div className="breadcrumb__option">
                                        <Link to="./index.html">Home</Link>
                                        <span>Checkout</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- Breadcrumb Section End --> */}

                {/* <!-- Checkout Section Begin --> */}
                <section className="checkout spad">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h6><span className="icon_tag_alt"></span> Have a coupon? <Link to="#">Click here</Link> to enter your code
                                </h6>
                            </div>
                        </div>
                        <div className="checkout__form">
                            <h4>Billing Details</h4>
                            <form onSubmit={this.submitHandler}>
                                <div className="row">
                                    <div className="col-lg-8 col-md-6">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="checkout__input">
                                                    <p>Fist Name<span>*</span></p>
                                                    <input type="text" name="first_name" placeholder="First name" value={first_name} onChange={this.changeHandler}  />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="checkout__input">
                                                    <p>Last Name<span>*</span></p>
                                                    <input type="text" name="last_name" placeholder="Last name" value={last_name} onChange={this.changeHandler} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="checkout__input">
                                            <p>Country<span>*</span></p>
                                            <input type="text" name="country" placeholder="Country" value={country} onChange={this.changeHandler} />
                                        </div>
                                        <div className="checkout__input">
                                            <p>Address<span>*</span></p>
                                            <input type="text" placeholder="Street Address" className="checkout__input__add" name="address1" value={address1} onChange={this.changeHandler} />
                                            <input type="text" placeholder="Apartment, suite, unite ect (optional)" name="address2" value={address2} onChange={this.changeHandler} />
                                        </div>
                                        <div className="checkout__input">
                                            <p>Town/City<span>*</span></p>
                                            <input type="text" name="city" placeholder="Town/City" value={city} onChange={this.changeHandler} />
                                        </div>
                                        <div className="checkout__input">
                                            <p>State<span>*</span></p>
                                            <input type="text" name="state" placeholder="State" value={state} onChange={this.changeHandler} />
                                        </div>
                                        <div className="checkout__input">
                                            <p>Postcode / ZIP<span>*</span></p>
                                            <input type="text" name="zip" placeholder="Postcode/ZIP" value={zip} onChange={this.changeHandler} />
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="checkout__input">
                                                    <p>Phone<span>*</span></p>
                                                    <input type="text" name="phone" placeholder="Phone" value={phone} onChange={this.changeHandler} />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="checkout__input">
                                                    <p>Email<span>*</span></p>
                                                    <input type="email" name="email" placeholder="Email" value={email} onChange={this.changeHandler} />
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="checkout__order">
                                            <h4>Your Order</h4>
                                            <div className="checkout__order__products">Products <span>Total</span></div>
                                            <ul>
                                                <li>Vegetable’s Package <span>$75.99</span></li>
                                                <li>Fresh Vegetable <span>$151.99</span></li>
                                                <li>Organic Bananas <span>$53.99</span></li>
                                            </ul>
                                            <div className="checkout__order__subtotal">Subtotal <span>$750.99</span></div>
                                            <div className="checkout__order__total">Total <span>$750.99</span></div>
                                            
                                            <button type="submit" className="site-btn">PLACE ORDER</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
                {/* <!-- Checkout Section End --> */}
                <Footer />
            </div>
        )
    }
}

if (document.getElementById('checkout')) {
    ReactDOM.render(<Checkout />, document.getElementById('checkout'));
}
