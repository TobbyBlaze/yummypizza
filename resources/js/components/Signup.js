import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom'

export default class Signup extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: '',
            name: '',
            last_name: '',
            email: '',
            password: '',
            confirm_password: ''
        }
    }

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         user : {
    //             name: '',
    //             first_name: '',
    //             last_name: '',
    //             reg_no: '',
    //             email: '',
    //             password: '',
    //             confirm_password: '',
    //             phone_number_1: '',
    //         },
    //     };
    // }

    changeHandler = e => {
        // this.setState({[e.target.name]: e.target.value})
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)

        axios
            // .post('localhost/yummypizza/public/api/auth/signup', this.state)
            // .post('http://localhost/yummypizza/public/api/auth/signup', this.state)
            .post('https://damp-island-72638.herokuapp.com/api/auth/signup', this.state)
            // , {
            //     headers: {

            //         'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
            //         // 'X-CSRF-TOKEN': document.querySelectorAll('meta[name=csrf-token]')[0].getAttributeNode('content').value,
            //         'Content-Type': 'application/json',
            //         // 'x-rapidapi-host': 'covid-193.p.rapidapi.com',
            //         // 'x-rapidapi-key': '8cfca8918dmsh742a6ebe24cf1c7p1af6e3jsn3bfa6e435b76',
            //         // 'Authorization': 'Bearer '+a,
            //         // 'withCredentials': true
            //     }
            // })
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    // componentDidMount(){

        // Axios.post("http://127.0.0.1:8000/api/auth/signup")

        // axios({
        //     method: 'post',
        //     url: 'http://127.0.0.1:8000/api/auth/signup',
        //     data: {
        //         name: '',
        //         first_name: '',
        //         last_name: '',
        //         reg_no: '',
        //         email: '',
        //         password: '',
        //         confirm_password: '',
        //         phone_number_1: '',
        //     }
        // });

        // axios.post("http://127.0.0.1:8000/api/auth/signup", this.state.user)
        // .then(function (response) {
        //     console.log(response);
        // })
        // .catch(function (error) {
        //     console.log(error);
        // });
    // }

    render() {
        const { id, name, last_name, email, password, confirm_password } = this.state
        return (
            <div>
                <div className="limiter">
                    <div className="container-login100">
                        <div className="wrap-login100 p-t-30 p-b-50">
                            <span className="login100-form-title p-b-41">
                                Account Sign up
                            </span>
                            <form onSubmit={this.submitHandler} className="login100-form validate-form p-b-33 p-t-5">

                                <div className="wrap-input100 validate-input" data-validate = "Enter first name">
                                    <input className="input100" type="text" name="name" placeholder="First name" value={name} onChange={this.changeHandler} />
                                    <span className="focus-input100" data-placeholder="&#xe82a;"></span>
                                </div>

                                <div className="wrap-input100 validate-input" data-validate = "Enterfirst name">
                                    <input className="input100" type="text" name="last_name" placeholder="Last name" value={last_name} onChange={this.changeHandler} />
                                    <span className="focus-input100" data-placeholder="&#xe82a;"></span>
                                </div>

                                <div className="wrap-input100 validate-input" data-validate = "Enter email">
                                    <input className="input100" type="email" name="email" placeholder="Email" value={email} onChange={this.changeHandler} />
                                    <span className="focus-input100" data-placeholder="&#xe82a;"></span>
                                </div>

                                <div className="wrap-input100 validate-input" data-validate="Enter password">
                                    <input className="input100" type="password" name="password" placeholder="Password" value={password} onChange={this.changeHandler} />
                                    <span className="focus-input100" data-placeholder="&#xe80f;"></span>
                                </div>

                                <div className="wrap-input100 validate-input" data-validate="Enter confirm password">
                                    <input className="input100" type="password" name="confirm_password" placeholder="Confirm Password" value={confirm_password} onChange={this.changeHandler} />
                                    <span className="focus-input100" data-placeholder="&#xe80f;"></span>
                                </div>

                                <div className="container-login100-form-btn m-t-32">
                                    <button type="submit" className="login100-form-btn">
                                        Sign up
                                    </button>
                                </div>
                                <br />
                                <h6>You already have an account? <Link to="/yummypizza/public/login">Log in</Link> </h6>


                            </form>
                        </div>
                    </div>
                </div>
                

                <div id="dropDownSelect1"></div>
            </div>
        );
    }
}

if (document.getElementById('signup')) {
    ReactDOM.render(<Signup />, document.getElementById('signup'));
}