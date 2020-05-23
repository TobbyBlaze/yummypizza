import React, { Component } from 'react'
import axios from 'axios'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'

import Header from './Header';
import Footer from './Footer';

export default class ShCart extends Component{
    constructor(props){
        super(props);

        this.state = {
            
            carts: [],
            errorMsg: ''
            
        }
    }

    componentDidMount(){
        var a=localStorage.getItem("authen");
        axios

            .get('http://localhost/yummypizza/public/api/auth/shcart', {
                // .get('https://damp-island-72638.herokuapp.com/api/auth/shcart', {
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer '+a,
                    // 'Authorization': 'Bearer '.$accessToken,
                    // 'withCredentials': true
                }
            })
            .then(response => {
                console.log(response.data.goods.data)
                this.setState({ goods: response.data.goods.data })
                // if (this._isMounted) {
                    // this.setState({ goods: response.data.goods.data })
                // }
            })
            .catch(error => {
                console.log(error)
                this.setState({errorMsg: 'Error retrieving data'})
            })

    }

    render(){
        const { carts, errorMsg } = this.state
        return(
            <div>
                <Header />
                
                {/* <!-- Breadcrumb Section Begin --> */}
                <section className="breadcrumb-section set-bg" data-setbg="img/breadcrumb.jpg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <div className="breadcrumb__text">
                                    <h2>Shopping Cart</h2>
                                    <div className="breadcrumb__option">
                                        <Link to="./index.html">Home</Link>
                                        <span>Shopping Cart</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- Breadcrumb Section End --> */}

                {/* <!-- Shoping Cart Section Begin --> */}
                <section className="shoping-cart spad">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="shoping__cart__table">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th className="shoping__product">Products</th>
                                                <th>Price</th>
                                                <th>Quantity</th>
                                                <th>Total</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="shoping__cart__item">
                                                    <img src="img/cart/cart-1.jpg" alt="" />
                                                    <h5>Vegetable’s Package</h5>
                                                </td>
                                                <td className="shoping__cart__price">
                                                    $55.00
                                                </td>
                                                <td className="shoping__cart__quantity">
                                                    <div className="quantity">
                                                        <div className="pro-qty">
                                                            <input type="text" value="1" />
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="shoping__cart__total">
                                                    $110.00
                                                </td>
                                                <td className="shoping__cart__item__close">
                                                    <span className="icon_close"></span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="shoping__cart__btns">
                                    <Link to="#" className="primary-btn cart-btn">CONTINUE SHOPPING</Link>
                                    <Link to="#" className="primary-btn cart-btn cart-btn-right"><span className="icon_loading"></span>
                                        Upadate Cart</Link>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="shoping__continue">
                                    <div className="shoping__discount">
                                        <h5>Discount Codes</h5>
                                        <form action="#">
                                            <input type="text" placeholder="Enter your coupon code" />
                                            <button type="submit" className="site-btn">APPLY COUPON</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="shoping__checkout">
                                    <h5>Cart Total</h5>
                                    <ul>
                                        <li>Subtotal <span>$454.98</span></li>
                                        <li>Total <span>$454.98</span></li>
                                    </ul>
                                    <Link to="#" className="primary-btn">PROCEED TO CHECKOUT</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- Shoping Cart Section End --> */}

                <Footer />
            </div>
        )
    }
}

if (document.getElementById('ShCart')) {
    ReactDOM.render(<ShCart />, document.getElementById('ShCart'));
}
