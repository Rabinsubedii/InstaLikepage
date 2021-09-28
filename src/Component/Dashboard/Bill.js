import React from 'react'
import AlarmOnIcon from '@material-ui/icons/AlarmOn';
import SettingsIcon from '@material-ui/icons/Settings';
import DescriptionIcon from '@material-ui/icons/Description';
import Dashboard from './Dashboard';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import { Route, BrowserRouter as Router, Link, Switch } from 'react-router-dom'
export default function Bill(history) {
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
                            <div className="col-md-10">
                                <div className="dashboardheading">
                                    <h3>Billing & Subscriptions</h3>
                               
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
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="billcard">
                                            <Link id="yourpayment"  to='/payment'>   <LocalAtmIcon id="billiconn" />   Your payment history </Link>
                                        </div>
                                        
                                        <div className="subhead">
                                        <h5 >Subscriptions</h5>
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
