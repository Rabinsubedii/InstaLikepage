import React, { Component } from 'react'
import '../Css/Style.css'
import animated from '../../img/v.svg'
import firstcard from '../../img/firstcard.svg'
import secondcard from '../../img/secondcard.svg'
import thridcard from '../../img/thirdcard.svg'
import svgs from '../../img/a.svg'
import Second from '../SecondComponent/Second'
export default class Homepag extends Component {
    render() {
        return (
            <div className="homepage">
                <section>  
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-3">
                        <div className="homepagesubtitile">
                             <h3>Exclusive & Real Instagram Likes!</h3>
                        </div>

                        <div className="homepagesubtitile">
                        <p>   We're the only service in the world that provides you with likes from real people. Try our free trial and see for yourself.</p>
                        </div>

                        
                                
                        <div className="homepagebutton">
                            <button className="btn" id="getlike">Get 10 Free Likes Now</button>
                        </div>
                    </div>
                    <div className="col-md-3"></div>
                    <div className="col-md-4">
                    

                        <div className="round">
                        <div class="main-div">
                            <img src={animated} className="image-responsive animations" />
                        </div>
                        </div>

                        <div className="cardaimation">
                            <div className="row">
                                <div className="col-md-8">
                                    <div className="firstcard" data-aos="fade-left">
                                    <img src={firstcard} className="img-responsive" />
                                <p> Trusted by thousands of customers </p>
                                    </div>


                                  

                                    <div className="secondcard" id="secondcard" data-aos="fade-left">
                                    <img src={secondcard} className="img-responsive" />
                                    <p> Millions of likes delivered </p>
                                    </div>
                                    

                                      <div className="thirdcard" data-aos="fade-left">
                                    <img src={thridcard} className="img-responsive" />
                                <p> Unique features for your account growth </p>
                                    </div>
                                    
                             </div>
                            </div>
                        </div>
                    </div>
                </div>

               

              
                    <img id="landing-separator" src={svgs} />
                    
               </section>
               <Second id="secondpagemytest"></Second>

            </div>
        )
    }
}
