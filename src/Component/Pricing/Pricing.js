import React from 'react'
import '../Css/Pricing.css'
import user from '../../img/user.svg'
import secure from '../../img/secure.svg'
import timer from '../../img/timer.svg'
import feature from '../../img/featuressupport.svg'
import { Route, BrowserRouter as Router, Link, Switch } from 'react-router-dom'
import FavoriteIcon from '@material-ui/icons/Favorite';
import Needmore from './Needmore'
export default function Pricing() {
    return (
        <div className="pricing">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f5f5f5" fill-opacity="1" d="M0,192L48,186.7C96,181,192,171,288,186.7C384,203,480,245,576,234.7C672,224,768,160,864,160C960,160,1056,224,1152,250.7C1248,277,1344,267,1392,261.3L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
            <div className="priceheading">
                <h3>Pricing tailored for you</h3>
            </div>

            <div className="row">
                <div className="col-md-3"></div>

                <div className="col-md-6">
                    <div className="pricesubheading">
                        <p>
                            We provide you with the best packages for all your needs. You'll find something that suits you, no matter if you're looking to buy likes for your personal Instagram or a company account.
                        </p>
                    </div>
                </div>

                <div className="col-md-3"></div>
            </div>

            <div className="container" id="prccard">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-3">
                        <div className="topbutton"><a className="btn" >25%  OFF</a></div>
                        <div class="card" id="pricecard">
                            <div id="nice">
                                <p className="text-center">  <FavoriteIcon className="likes"  ></FavoriteIcon> <span className="text-white">50 Likes</span></p>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#8ee73a" fill-opacity="1" d="M0,128L48,138.7C96,149,192,171,288,154.7C384,139,480,85,576,80C672,75,768,117,864,154.7C960,192,1056,224,1152,218.7C1248,213,1344,171,1392,149.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
                            <div class="card-body">
                                <p> <img src={user} /> Likes from Real Users</p>
                                <p> <img src={secure}/> No Password Required</p>
                                <p> <img src={timer}/>  Starts within 5 seconds</p>
                                <p> <img src={feature}/>  24/7 Support</p>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="price">
                                    <p> <span>$</span>  <a>1.39</a></p>
                                   </div>
                                 
                               </div>
                            </div>

                            <div className="cardbtn">
                                <button className="btn" to='/purchase'  ><Link to='/purchase' className="text-white">Purchase</Link> </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                    <div className="topbutton"><a className="btn" >30%  OFF</a></div>
                        <div class="card"   id="pricecard">
                            <div id="nice">
                                <p className="text-center">  <FavoriteIcon className="likes"  ></FavoriteIcon> <span className="text-white">100 Likes</span></p>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#8ee73a" fill-opacity="1" d="M0,128L48,138.7C96,149,192,171,288,154.7C384,139,480,85,576,80C672,75,768,117,864,154.7C960,192,1056,224,1152,218.7C1248,213,1344,171,1392,149.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
                            <div class="card-body">
                                <p> <img src={user} /> Likes from Real Users</p>
                                <p> <img src={secure}/> No Password Required</p>
                                <p> <img src={timer}/>  Starts within 5 seconds</p>
                                <p> <img src={feature}/>  24/7 Support</p>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="price">
                                    <p> <span>$</span>  <a>2.49</a></p>
                                   </div>
                                 
                               </div>
                            </div>
                            <div className="cardbtn">
                            <button className="btn" to='/purchase'  ><Link to='/purchase' className="text-white">Purchase</Link> </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                    <div className="topbutton"><a className="btn" >40%  OFF</a></div>
                        <div class="card"  id="pricecard" >
                            <div id="nice">
                                <p className="text-center">  <FavoriteIcon className="likes"  ></FavoriteIcon> <span className="text-white">250 Likes</span></p>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#8ee73a" fill-opacity="1" d="M0,128L48,138.7C96,149,192,171,288,154.7C384,139,480,85,576,80C672,75,768,117,864,154.7C960,192,1056,224,1152,218.7C1248,213,1344,171,1392,149.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
                            <div class="card-body">
                                <p> <img src={user} /> Likes from Real Users</p>
                                <p> <img src={secure}/> No Password Required</p>
                                <p> <img src={timer}/>  Starts within 5 seconds</p>
                                <p> <img src={feature} />  24/7 Support</p>
                            </div>
                            <div className="managesectioncard">
                            <div className="row">
                                <div className="col-md-12 "id="myprice" >
                                    <div className="price">
                                    <p> <span>$</span>  <a>4.49</a></p>
                                   </div>
                                 
                               </div>
                            </div>
                            <div className="cardbtn">
                            <button className="btn" to='/purchase'  ><Link to='/purchase' className="text-white">Purchase</Link> </button>
                            </div>
                            
                            </div>
                        </div>
                    </div><div className="col-md-3"></div>
                </div>
            </div>
            <Needmore/>

        </div>

    )
}
