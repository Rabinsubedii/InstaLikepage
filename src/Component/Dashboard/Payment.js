import React from 'react'
import { Route, BrowserRouter as Router, Link, Switch } from 'react-router-dom'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
export default function payment() {
    return (
        <div>

            <div class="" id="" tabindex="-1" role="dialog" aria-labelledby="" aria-hidden="">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Payment history</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <Link to='/bill'>   <span aria-hidden="true">&times;</span></Link>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div className="date">
                                <p>2021-06-18 07:56:57 (UTC)</p>
                            </div>

                            <div className="billdetailscard">
                                <div className="row">
                                    <FavoriteBorderIcon id="loveicon" />
                                    <div className="type">
                                        <p id="nameprice" className="typessjas">Type:</p>
                                        <p id="cardpricetime" className="typessjas">One-time</p>
                                    </div>

                                    <div className="type">
                                        <p id="nameprice">Amount:</p>
                                        <p id="cardpricetime" >$1.39</p>
                                    </div>

                                    <div className="type">
                                        <p id="nameprice" >Method:</p>
                                        <p id="cardpricetime">Mastercard •••• 9865</p>
                                    </div>
                                    <a id="manageside" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                        <ArrowBackIosIcon id="arrowicon"/>
                                    </a>
                           </div>
                                
                                <div class="collapse" id="collapseExample">
                                    <div class="card card-body">
                                        <div className="row">
                                         
                                     </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                      
                    </div>
                </div>
            </div>
        </div>
    )
}
