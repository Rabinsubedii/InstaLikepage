import React from 'react'
import '../Css/feature.css'
import truck from '../../img/truck.svg';
import c from '../../img/c.svg';
import r from '../../img/r.svg';
import Pricing from '../Pricing/Pricing'
import much from '../../img/muchmore.svg'
export default function Feature() {
    return (
        <div >
           
            <section className="featurecomponent" id="featurepage">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,192L48,186.7C96,181,192,171,288,186.7C384,203,480,245,576,234.7C672,224,768,160,864,160C960,160,1056,224,1152,250.7C1248,277,1344,267,1392,261.3L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
                <div className="featureheading">
                    <h3>Stormlikes provides likes  from <br /> real accounts!</h3>
                    <div className="featuresubheading">
                        <p>You heard it. We don’t sell likes from high quality or ghost accounts. <p>Every like that you get comes from a real, active Instagram user.</p></p>
                    </div>
                </div>

                {/* card */}
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-2"></div>
                        
                        {/* secondcard */}
                        <div className="col-md-3">
                                <div class="card" id="card">
                                        <img class="card-img-top" src={truck} alt="Card image cap" />
                                        <div class="card-body">
                                            <h5 class="card-title">Instant Delivery</h5>
                                            <p class="card-text">You’ll see results immediately. Likes will be dropping in as soon as you place an order!</p>
                                        </div>
                                    </div>
                        </div>
                        
                        <div className="col-md-3">
                                <div class="card" id="card">
                                        <img class="card-img-top" src={r} alt="Card image cap" />
                                        <div class="card-body">
                                            <h5 class="card-title">Real Likes</h5>
                                            <p class="card-text">You’ll be amazed by the accounts that will like your images. None of our competitors can match that.</p>
                                        </div>
                                    </div>
                        </div>
                        
                        <div className="col-md-3">
                                <div class="card" id="card">
                                        <img class="card-img-top" src={c} alt="Card image cap" />
                                        <div class="card-body">
                                            <h5 class="card-title">Cheapest Prices</h5>
                                            <p class="card-text">You can get this awesome service for as little as $1.39. No strings attached.</p>
                                        </div>
                                    </div>
                                </div>
                            

                        {/* thirdcard */}
                     
                </div>
               </div>

                <div className="muchmore">
                    <h3>... and much more!</h3>

                    <div className="container">
                        <div className="row">
                            <div className="col-md-2"></div>
                            <div className="col-md-5">
                                {/* <img src={much}/> */}
                            </div>

                            <div className="col-md-5"></div>
                        </div>
                    </div>
                </div>

            </section>
            <Pricing/>
        </div>
    )
}


// <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,96L48,133.3C96,171,192,245,288,250.7C384,256,480,192,576,186.7C672,181,768,235,864,234.7C960,235,1056,181,1152,170.7C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>