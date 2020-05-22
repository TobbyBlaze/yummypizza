import React, { Component } from 'react'
import axios from 'axios'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import HeaderHome from './HeaderHome';
import Footer from './Footer';

export default class Home extends Component{
    // _isMounted = false;
    constructor(props){
        super(props);

        this.state = {
            goods: [],
            good: {
                file : '',
                name : '',
                description : '',
                price : '',
                category : '',
            },
            errorMsg: ''
            
        }
    }

    addCart = () => {
        axios

            .post('http://localhost/yummypizza/public/api/storecart', this.state.good, {
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
                    'Content-Type': 'application/json',
                    // 'Authorization': 'Bearer '+a,
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

    componentDidMount(){
        // this._isMounted = true;
        var a=localStorage.getItem("authen");
        axios

            .get('http://localhost/yummypizza/public/api', {
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
                    'Content-Type': 'application/json',
                    // 'Authorization': 'Bearer '+$accessToken,
                    'Authorization': 'Bearer '+a,
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

    componentWillUnmount() {
        // fix Warning: Can't perform a React state update on an unmounted component
        this.setState = (state,callback)=>{
            return;
        };
    }

    

    // componentWillUnmount() {
    //     this._isMounted = false;
    // }

    render(){
        const { goods, errorMsg } = this.state
        return(
            
            <div>
                <HeaderHome />
                {/* {goods.map(good=>
                <div key={good.id}>
                    {good.name}
                </div>
                )} */}
                
                {/* <!-- Categories Section Begin --> */}
                <section className="categories">
                    <div className="container">
                        <div className="row">
                            <div className="categories__slider owl-carousel">
                                <div className="col-lg-3">
                                    <div className="categories__item set-bg" data-setbg="img/categories/cat-1.jpg">
                                        <h5><Link to="#">Fresh Fruit</Link></h5>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="categories__item set-bg" data-setbg="img/categories/cat-2.jpg">
                                        <h5><Link to="#">Dried Fruit</Link></h5>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="categories__item set-bg" data-setbg="img/categories/cat-3.jpg">
                                        <h5><Link to="#">Vegetables</Link></h5>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="categories__item set-bg" data-setbg="img/categories/cat-4.jpg">
                                        <h5><Link to="#">drink fruits</Link></h5>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="categories__item set-bg" data-setbg="img/categories/cat-5.jpg">
                                        <h5><Link to="#">drink fruits</Link></h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- Categories Section End --> */}

                {/* <!-- Featured Section Begin --> */}
                <section className="featured spad">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title">
                                    <h2>Featured Product</h2>
                                </div>
                                <div className="featured__controls">
                                    <ul>
                                        <li className="active" data-filter="*">All</li>
                                        <li data-filter=".oranges">Oranges</li>
                                        <li data-filter=".fresh-meat">Fresh Meat</li>
                                        <li data-filter=".vegetables">Vegetables</li>
                                        <li data-filter=".fastfood">Fastfood</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row featured__filter">
                            {goods.map((good, i)=>
                            <div className="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat">
                                <div className="featured__item">
                                    <div className="featured__item__pic set-bg" data-setbg="img/featured/feature-1.jpg">
                                        <ul className="featured__item__pic__hover">
                                            <li><Link to="#"><i className="fa fa-heart"></i></Link></li>
                                            <li><Link to="" onClick={this.addcart}><i className="fa fa-shopping-cart"></i></Link></li>
                                        </ul>
                                    </div>
                                    <div className="featured__item__text">
                                        <div key={i}>
                                        <h6><Link to={good.id.toString()}>{good.name}</Link></h6>
                                        <h5>$30.00</h5>
                                        
                                            {good.name}
                                            <li><Link to={good.name}><i className="fa fa-heart"></i></Link></li>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )}
                        </div>
                    </div>
                </section>
                {/* <!-- Featured Section End --> */}

                <Footer />
            </div>
        )
    }
}

// if (document.getElementById('home')) {
//     ReactDOM.render(<Home />, document.getElementById('home'));
// }
