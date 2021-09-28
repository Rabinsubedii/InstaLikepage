import React, { Component,useState,useEffect } from 'react'
import { Route, BrowserRouter as Router, Link, Switch } from 'react-router-dom'
import '../Css/Login.css'
import {useHistory} from 'react-router-dom'

export default function Signin () {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

     async function login(e)
     {
         e.preventDefault();
        console.warn(email, password)
        let credential = { email, username, password };
        let result = await fetch("http://127.0.0.1:8000/rest-auth/login/", {
            method: 'POST',
            Headers: {
                "Content-Type": "application/json",
                "Accept": 'application/json'
            },
            body: JSON.stringify(credential)

        });
        result = await result.json();
      
    }
    
    
        return (
            <div className="loginpage">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <div className="logincard">
                                <div className="loginpagetitle">
                                    <h4 className="text-center">My Account</h4>
                                    <p>Log in to manage your <a href="#" className="autom">automatic likes subscription</a>. Use the credentials that you entered during checkout.</p>
                                </div>

                                <form>
                                    
                                    <div class="form-group">
                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text">
                                                    <span class="fa fa-user"></span>
                                                </span>
                                            </div>
                                            <input type="text" onChange={(e)=>setEmail(e.target.value)}  class="form-control py-4" placeholder="Email" required="required" />
                                        </div>
                                    </div>

                         

                                    <div class="form-group">
                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text">
                                                    <i class="fa fa-lock"></i>
                                                </span>
                                            </div>
                                            <input type="password"  onChange={(e)=>setPassword(e.target.value)}class="form-control py-4" placeholder="Password" required="required" />
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <button type="submit" class="btn btn-primary btn-block" id="signinbrn" onClick={login} >Sign In</button>
                                    </div>
                                    <Link href="#" id="forgotpass" to='/forgot' >Forgot Password?</Link>
                                    <Link href="#" id="signup" to='/signup' >Don`t Have Account? Register Now</Link>
                                
                                       
                                 
                                </form>
                            </div>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                </div>
            </div>
        )
    }
