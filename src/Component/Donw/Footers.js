import React from 'react'
import footerimg from '../../img/c.png'
import '../Css/footer.css'
export default function Footers() {
    return (
        <div className="footer">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#eee0e0" fill-opacity="1" d="M0,192L48,186.7C96,181,192,171,288,186.7C384,203,480,245,576,234.7C672,224,768,160,864,160C960,160,1056,224,1152,250.7C1248,277,1344,267,1392,261.3L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
             <section className="footer">
                <div className="footerheding">
                    <h3>Let's get you 10 free likes!</h3>
                    </div>

                    <div className="footersubheading">
                        <p>Simply enter your username, select your photos and see the likes<p>come in. <strong>No registration or password required !</strong> </p></p>
                </div>
                
                <div className="row mt-5">
                    <div className="col-md-4">

                    </div>
                    <div className="col-md-4">
                        <form className="footerform"> 
                            <input className="form-control" type="text" />
                            <button className="btn btn-danger gobtn">Go !</button>
                        </form>
                    </div>
                    <div className="col-md-2">

                    </div>
                </div>

                <div className="footerlast">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-2"></div>
                            <div className="coo-md-2">
                                <div className="footerimg">
                                    <img src={footerimg}/>
                                </div>
                            </div>

                            <div className="col-md-3">
                            </div>

                            <div className="col-md-4 our" >
                                <div className="row">
                                    <div className="col-md-4 firstss">
                                        <p class="footernavhead">Products</p>

                                        <ul class="navbar-nav">
                                            <li class="nav-item">
                                                <a class="nav-link" id="footernav" href="#">Home</a>
                                                <a class="nav-link" id="footernav" href="#">Features</a>
                                                <a class="nav-link" id="footernav" href="#">Pricing</a>
                                                <a class="nav-link" id="footernav" href="#">Free Likes</a>
                                            </li>
                                           
                                        </ul>
                                    </div>

                                    <div className="col-md-4 secondsss">
                                        <p class="footernavheads">Pages</p>
                                        <ul class="navbar-nav">
                                            <li class="nav-item">
                                                <a class="nav-link" id="footernav" href="#">Dashboard</a>
                                                <a class="nav-link" id="footernav" href="#">Rewards</a>
                                                <a class="nav-link" id="footernav" href="#">Blog</a>
                                                <a class="nav-link" id="footernav" href="#">Reviews</a>
                                            </li>
                                           
                                        </ul>
                                    </div>

                                    <div className="col-md-4 thirdsss">
                                        <p class="footernavhead">Resouces</p>
                                        <ul class="navbar-nav">
                                            <li class="nav-item">
                                                <a class="nav-link" id="footernav" href="#">Supports</a>
                                                <a class="nav-link" id="footernav" href="#">Term Of Service</a>
                                                <a class="nav-link" id="footernav" href="#">Privacy Policy</a>
                                            </li>
                                           
                                        </ul>
                                    </div>
                                </div>
                         
                            </div>
                          
                        </div>
                        <div class="row">
                            <div className="col-md-2"></div>
                            <div className="col-md-9">
                            <div className="text-white"><hr id="hrcolor"/> </div>
                            </div>
                            <div className="col-md-1"></div>
                        </div>
                        
                        <div className="container">
                            <div className="row">
                                <div className="col-md-2"></div>
                                <div className="col-md-3">
                                    <div className="copyrighttext">
                                    <p>NextCode AB · Vasagatan 36, 111 20, Stockholm, Sweden @stormlikes.com
                                     <br/>  Copyright © 2021 · Stormlikes </p>
                                  </div>
                                </div>
                                <div className="col-md-3"></div>
                                <div className="col-md-3">
                                    <select className="form-control hi">
                                        <option className=""> English  </option>
                                        <option className=""> Nepali  </option>
                                        <option>Hindi</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
            </section>
        </div>
    )
}
