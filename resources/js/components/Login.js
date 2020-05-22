import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom'

export default class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
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
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)

        axios
            .post('http://localhost/yummypizza/public/api/auth/login', this.state)
            .then(response => {
                console.log(response);
                var authe = response.data.token;
                localStorage.setItem("authen",authe);
                console.log(authe);
                // var sub = true;
            })
            .catch(error => {
                console.log(error)
            })
    }

    
    redirecter = () => {
        // return redirect("/")
        // if(sub){}
        // setTimeout(function(){window.location.href = "/yummypizza/public"}, 6000);
        
    }
    // setTimeout(redirecter, 3000);

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
        const { email, password } = this.state
        return (
            <div>
                <div className="limiter">
                    <div className="container-login100">
                        <div className="wrap-login100 p-t-30 p-b-50">
                            <span className="login100-form-title p-b-41">
                                Account Login
                            </span>
                            <form onSubmit={this.submitHandler} className="login100-form validate-form p-b-33 p-t-5">

                                <div className="wrap-input100 validate-input" data-validate = "Enter email">
                                    <input className="input100" type="email" name="email" placeholder="Email" value={email} onChange={this.changeHandler}  />
                                    <span className="focus-input100" data-placeholder="&#xe82a;"></span>
                                </div>

                                <div className="wrap-input100 validate-input" data-validate="Enter password">
                                    <input className="input100" type="password" name="password" placeholder="Password" value={password} onChange={this.changeHandler}  />
                                    <span className="focus-input100" data-placeholder="&#xe80f;"></span>
                                </div>

                                <div className="container-login100-form-btn m-t-32">
                                    <button onClick={this.redirecter} type="submit" className="login100-form-btn">
                                        Login
                                    </button>
                                </div>
                                <br />
                                <h6>You do not have an account yet? <Link to="/yummypizza/public/signup">Sign up</Link> </h6>

                            </form>
                        </div>
                    </div>
                </div>
                

                <div id="dropDownSelect1"></div>
            </div>
        );
    }
}

if (document.getElementById('login')) {
    ReactDOM.render(<Login />, document.getElementById('login'));
}