import React from 'react'
import { Route, BrowserRouter as Router, Link, Switch } from 'react-router-dom'
export default function Forgot() {
    return (
        <div>
               <div className="loginpage">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <div className="logincard">
                                <div className="loginpagetitle">
                                    <h4 className="text-center">Forgot Password?</h4>
                                    <p>Enter your email to reset your password</p>
                                </div>

                                <form method="post">
                                    
                                    <div class="form-group">
                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text">
                                                    <span class="fa fa-user"></span>
                                                </span>
                                            </div>
                                            <input type="text" class="form-control py-4" placeholder="Email" required="required" />
                                        </div>
                                    </div>

                                  

                                    <div class="form-group">
                                        <button type="submit" class="btn btn-primary btn-block" id="signinbrn">Reset My Password</button>
                                    </div>
                                  
                                    <Link href="#" id="reset" to='/signin' >Reset  Password  Sucess? SignIn</Link>
                                
                                       
                                 
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
