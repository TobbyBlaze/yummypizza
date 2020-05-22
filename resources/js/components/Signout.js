import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


export default class Signout extends Component {

    constructor(props) {
        super(props)
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        console.log($('meta[name="csrf-token"]').attr('content'))
        var a=localStorage.getItem("authen");
        console.log(a)

        axios
            // .get('http://127.0.0.1:8000/api/auth/logout',{
                .get('https://damp-island-72638.herokuapp.com/api/auth/logout',{
                headers: {

                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer '+a,
                    // 'withCredentials': true
                }
            })
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
        return (
            <div>
                <h1>Sign out</h1>
                <form onSubmit={this.submitHandler}>
                    <button type="submit">Sign out</button>
                </form>
            </div>
        );
    }
}

if (document.getElementById('signout')) {
    ReactDOM.render(<Signout />, document.getElementById('signout'));
}