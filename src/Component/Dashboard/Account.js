import React from 'react'
import '../Css/Dashboard.css'
import AlarmOnIcon from '@material-ui/icons/AlarmOn';
import SettingsIcon from '@material-ui/icons/Settings';
import DescriptionIcon from '@material-ui/icons/Description';
import Dashboard from './Dashboard';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import { Route, BrowserRouter as Router, Link, Switch } from 'react-router-dom'
export default function Account(history) {
    console.log(history)
    const getColor = (curr) =>
    {
        if (history.location.pathname == curr) {
           return"#8075f2"
       }
        
       }
    return (
        <div>
            <section className="dashboard">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-1"></div>
                            <div className="col-md-9">
                                <div className="dashboardheading">
                                    <h3>Account Settings</h3>
                               
                                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                                    <div class="navbar-collapse">
                                    <ul class="navbar-nav mr-auto">
                                        <li class="nav-item active">
                                            <Link class="nav-link" to='/dashboard' style={{color:getColor('/dashboard')}}  id="active" href="#"> <AlarmOnIcon id="iconid" style={{color:getColor('/dashboard')}} /> Dashboard</Link>
                                        </li>
                                        <li class="nav-item active">
                                            <Link class="nav-link" to='/account' style={{color:getColor('/account')}} id="active" href="#"> <SettingsIcon id="iconid"  style={{color:getColor('/account')}}/> Account Settings</Link>
                                        </li>
                                        <li class="nav-item active">
                                            <Link class="nav-link" to='/bill' style={{color:getColor('/bill')}} id="active" href="#"> <DescriptionIcon id="iconid" style={{color:getColor('/bill')}} /> Billing & Subscriptions</Link>
                                        </li>
                                    </ul>
                                    </div>
                                </nav>
                                <div className="accountcard">
                                    <p className="yourdetails"> <PermIdentityIcon id="usericon" />  Your Details  </p>
                                    <hr id="accounthr" />
                                    <div className="accountcontent">
                                        <ul>
                                            <li id="emailandpass">Your e-mail address:</li>
                                            <li id="details">rabinsubedi008@gmail.com</li>


                                            <li id="emailandpass">Your Stormlikes password::</li>
                                            <li id="details" type="password">*****************</li>
                                        </ul>
                                        <div className="container">
                                        <div class="row">
                                            <div className="col-md-4">
                                                <button className="btn" id="changeemail">Change e-mail</button>
                                            </div>
                                            <div className="">
                                                <button className="btn" id="changepassword">Change password</button>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                               </div>
                            </div>
                        </div>
                    </div>
               </section>
        </div>
    )
}
