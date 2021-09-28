import React from 'react'
import visa from '../../img/visa.png'
import master from '../../img/mastercard.png'
import applepay from '../../img/apple-pay.png'
import discoverpay from '../../img/discover.png'
import express from '../../img/american-express.png'
import AlarmOnIcon from '@material-ui/icons/AlarmOn';
import SecurityIcon from '@material-ui/icons/Security';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
export default function Purchase() {
    return (
        <div>
            <section className="purchasesection">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">

                        </div>
                        <div className="col-md-5">
                            <div className="purchaseheding">
                                <h5>Checkout </h5>
                                <p>Purchase Instagram likes easily and safely. You can rest assured that your personal and payment data is encrypted.</p>
                            </div>

                            <div className="paymentlistmethod">
                                
                                <p> <SecurityIcon id="mypayicon">  </SecurityIcon>  Payments are processed through a PCI DSS compliant payment gateway and all communication is protected using 256-bit encryption.</p>
                                <p> <AlarmOnIcon id="mypayicon"/>  Control delivery speed and who will like your selected posts by modifying targeting settings.</p>
                                <p>  <AirportShuttleIcon id="mypayicon"/> Track delivery of your likes live. You will receive a link together with your receipt.</p>
                                <p>  <LiveHelpIcon id="mypayicon"/> Professional support all the way.</p>
                            </div>


                            <div className="selectcard">
                                <div className="titileselect">
                                    <h3>1. Select</h3>
                                    <hr id="selecther"/>
                                </div>

                                <form>
                                <label>Select package</label>
                                <select class="form-control" aria-label="Default select example">
                                    
                                    {/* <option selected>  <span> Open this select menu </span></option> */}
                                    <option value="1">50 likes for $1.39</option>
                                    <option value="2">100 likes for $2.49</option>
                                    <option value="3">250 likes for $4.49</option>
                                    <option value="4">500 likes for $6.79</option>
                                    <option value="5">750 likes for $9.79</option>
                                    </select>
                                    <div className="form-group mt-3">
                                        <label>Enter username</label>
                                        <input name="username"class="form-control"  id="purchaseinput" placeholder="Instagram Username" type="name" />
                                    </div>
                                </form>
                                <div className="privacy">
                                    <p>By clicking on <span id="conti">Continue</span>,you agree to our <span id="policy">terms of service</span> and confirm that you've read our <span id="policy">privacy policy</span>.</p>
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-primary btn-block" id="contbtn">Continue</button>
                                </div>
                            
                            </div>

                            <div className="paymentaccept">
                                <div className="accepttitile">
                                    <p>Accepted Payment Methods</p>
                                    <div className="row">
                                        <div className="col-md-3">

                                        </div>

                                        <div className="col-md-9">
                                        <div className="img">
                                                <img src={visa} />
                                                <img src={express} />
                                                <img src={applepay} />
                                                <img src={discoverpay} />
                                            <img src={master} />
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-2">

                        </div>
                    </div>
              </div>
            </section>
        </div>
    )
}
