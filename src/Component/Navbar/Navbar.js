import React from 'react'
import Homepage from '../Home/Homepag'
import Contact from './Contact'
import KBLOGO from '../../img/c.png'
import Signin from '../Login/Signin'
import Forgot from '../Login/Forgot'
import Price from '../Pricing/Pricing'
import Feature from '../Feature/Feature'
import Blog from '../Blog/Blog.js'
import Dashboard from '../Dashboard/Dashboard'
import Bill from '../Dashboard/Bill'
import Account from '../Dashboard/Account'
import Signup from '../Login/Signup'
import Payment from '../Dashboard/Payment'

import Purchase from '../Pricing/Purchase'
import { Route, BrowserRouter as Router, Link, Switch } from 'react-router-dom'
export default function Navbar() {
    return (
        <Router>
            
        <div>
        <nav class="navbar navbar-expand-lg navbar-light">
                    <a class="navbar-brand" href="#" ><img src={KBLOGO} className="navabrlogo"/></a> 
                    <button class="navbar-toggler navbar-dark" type="button" data-toggle="modal" data-target="#exampleModal">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <Link class="nav-link" id="navbarContent" href="#featurepage" to='/featurepage'>Features </Link>
                               
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" id="navbarContent" to="/price">Pricing</Link>
                            </li>

                            <li class="nav-item">
                                <Link class="nav-link" to='/con' id="navbarContent" href="#">Support</Link>
                            </li>

                            <li class="nav-item">
                                <Link class="nav-link" id="navbarContent" to='/blog' href="#">Blog</Link>
                            </li>

                            <li class="nav-item">
                                <Link class="nav-link" id="navbarContent" href="#">Free Trial</Link>
                            </li>


                            
                        </ul>
                        <form className="ml-auto" id="leftmenu">
                            <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link class="nav-link" to="/signin" id="loginbtn" href="#">Login</Link>
                                </li>
                                <li class="nav-item">
                                <Link class="nav-link btn btn-primary" to="/purchase"id="mybtn" href="#">Buy Likes</Link>
                                </li>
                            </ul>
                      
                        </form>
                    </div>
                    
                </nav>
                
                
                <div class="modal fade text-dark" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                     
                          
                            <div className="wholemodel">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                <ul class="navbar-nav">
                            <li class="nav-item active">
                                <a class="nav-link" id="navbarContent" href="#">Features </a>
                               
                            </li>
                            
                            <li class="nav-item">
                                <a class="nav-link" id="navbarContent" href="#">Pricing</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" id="navbarContent" href="#">Support</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" id="navbarContent" href="#">Blog</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" id="navbarContent" href="#">Free Trial</a>
                            </li>


                            
                        </ul>
                        <form className="ml-auto" id="leftmenu">
                            <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link class="nav-link nice" to='/signin'  id="ok" href="#">Login</Link>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link btn btn-primary" id="mybtn" href="#">Buy Likes</a>
                                </li>
                            </ul>
                      
                        </form>
                             </div>
                              
                            
                        </div>
                    </div>
                </div>

            </div>
            <Switch>
                <Route path="/dashboard" component={Dashboard}></Route>
                <Route path="/bill" component={Bill}></Route>
                <Route path="/account" component={Account}></Route>
                <Route path="/payment" component={Payment}></Route>
                <Route path="/" exact component={Homepage}></Route>
                <Route path="/forgot" component={Forgot}></Route>
                <Route path="/signin" component={Signin}></Route>
                <Route path="/signup" component={Signup}></Route>
                <Route path="/blog" component={Blog}></Route>
                <Route path="/purchase" component={Purchase}></Route>
                <Route path="/price" component={Price}></Route>
                <Route path="/featurepage"  component={Feature}></Route>

            </Switch>
            </Router>
    )
}
