import React, { Component } from 'react'
import { Route, BrowserRouter as Router, Link, Switch } from 'react-router-dom'
import axios from 'axios';
export default class Signup extends Component {
    constructor() {
        super()
        {
            this.state = {
                input: {},
                message: {}
            }
        }
        this.passwordConfirm = this.passwordConfirm.bind(this);
        this.handle = this.handle.bind(this);
    }
    passwordConfirm(e) {
        var inputpassword = this.state.input;
        inputpassword[e.target.name] = e.target.value;
        this.setState({
            inputpassword
        });
    }
    validation() {
        var message = {};
        if (this.state.input["password"] !== this.state.input["confirmpass"]) {
            message["password"] = "Password  & confirm password is wrong";
        }
        else if (this.state.input["password"] > 5) {
            message["password"] = "Password must be 8-16 digit .";
        }
        else if (this.state.input["password"] > 16) {
            message["password"] = "Password must be less than 16 ."
        }
        else {
            message["confirmpass"] = "";
        }
        this.setState({
            message: message
        });
    }
    handle(e) {
        e.preventDefault();
        if (this.validation()) {
            var input = {};
            input["password"] = "";
            input["confirmpass"] = "";
        }
    }
    render() {
        return (
            <div>
                <div className="loginpage">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3"></div>
                            <div className="col-md-6">
                                <div className="logincard">
                                    <div className="loginpagetitle">
                                        <h4 className="text-center">Register Account</h4>
                                    </div>
                                    
                                    <form method="post" onSubmit={this.handle}>
                                        <div class="form-group">
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text">
                                                        <span class="fa fa-user"></span>
                                                    </span>
                                                </div>
                                                <input type="text" class="form-control py-4" placeholder="Full User Name" required="required" />
                                            </div>
                                        </div>


                                        <div class="form-group">
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text">
                                                        <span class="fa fa-envelope"></span>
                                                    </span>
                                                </div>
                                                <input type="email" class="form-control py-4" placeholder="Email" required="required" />
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text">
                                                        <i class="fa fa-lock"></i>
                                                    </span>
                                                </div>
                                                <input type="password" name="password" className="form-control" value={this.state.input.password} onChange={this.passwordConfirm} id="exampleInputPassword1" required placeholder="Password" required />
                                            </div>
                                        </div>


                                        <div class="form-group">
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text">
                                                        <i class="fa fa-lock"></i>
                                                    </span>
                                                </div>
                                                <input type="password" name="confirmpass" className="form-control" value={this.state.input.confpassword} onChange={this.passwordConfirm} id="exampleInputPassword2" required placeholder="Confirm Passwsord" required />
                                            </div>
                                        </div>



                                        <div class="form-group">
                                            <button type="submit" class="btn btn-primary btn-block" id="signinbrn">SignUp</button>

                                        </div>
                                        <strong>
                                        <div className="text-danger text-center">{this.state.message.password}</div>
                                        <div className="text-danger text-center">{this.state.message.confirmpass}</div>
                                    </strong>

                                        <Link href="#" id="signin" to='/signin' >Already Have Account? SignIn</Link>



                                    </form>
                                </div>
                            </div>
                            <div className="col-md-3"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
