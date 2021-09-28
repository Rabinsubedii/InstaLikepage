import React from 'react'
import '../Css/Blog.css'
import blogimage from '../../img/blog.jpg'
import b2 from '../../img/b2.jpg'
import b3 from '../../img/b3.jpg'
import b4 from '../../img/b4.jpg'
import b5 from '../../img/b5.jpg'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import mysg from '../../img/wave.svg'
export default function Blog() {
    return (
        <div>
          <section className="blogsection">
          <div className="container">
            
            <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-5">
              <div className="blogihead">
              <h3>Stormlikes blog</h3>
              <p>We bring you the best stories and articles. You'll find tips on Instagram growth and general social media advice as well as latest updates related to our services.</p>
            </div>
              </div>

              <div className="col-md-6"> </div>

              <div className="col-md-1"> </div>
              <div className="col-md-5">
                <div className="blogheadimage">
                  <img src={blogimage}/>
                </div>
               
              </div>
              <div className="col-md-5">
              <div className="blogcard">
                  <div className="tiitle">
                    <div className="row">
                      <div className="col-md-9">
                        <div className="content">
                        <h3>	How to Start an Insta Blog and Build a Steady Following</h3>
                    <p id="date">June 08, 2021</p>
                          <p className="cardpar">In recent years, blogging is one of the most classic trends that have taken over the web. The COVID-19 pandemic...</p>
                          <button className="btn btn btn-primary" id="continuereading" >continue reading <ArrowRightAltIcon id="arrowbtn"/> </button>
                   </div>
                      </div>
                      
                   </div>
                  </div>
                </div>
              </div>

            </div>
            </div>
        </section>
        <svg xmlns="http://www.w3.org/2000/svg" id="blogsvg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,192L48,202.7C96,213,192,235,288,229.3C384,224,480,192,576,181.3C672,171,768,181,864,186.7C960,192,1056,192,1152,202.7C1248,213,1344,235,1392,245.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        
        <div className="row" id="nextblog">
      
        <div className="col-md-1"> </div>
              <div className="col-md-5">
                <div className="nextblog">
                  <img src={b2}/>
                </div>
               
              </div>
              <div className="col-md-5">
              <div className="blogcard">
                  <div className="tiitle">
                    <div className="row">
                      <div className="col-md-9">
                        <div className="content">
                        <h3>	HowPricing Your Instagram Influencers - What You Need to Know</h3>
                    <p id="date">June 08, 2021</p>
                          <p className="cardpar">In recent years, blogging is one of the most classic trends that have taken over the web. The COVID-19 pandemic...</p>
                          <button className="btn btn btn-primary" id="continuereading" >continue reading <ArrowRightAltIcon id="arrowbtn"/> </button>
                   </div>
                      </div>
                      
                   </div>
                  </div>
                </div>
          </div>
          

          
        </div>


        <div className="row" id="nextblog">
      
      <div className="col-md-1"> </div>
            <div className="col-md-5">
              <div className="nextblog">
                <img src={b3}/>
              </div>
             
            </div>
            <div className="col-md-5">
            <div className="blogcard">
                <div className="tiitle">
                  <div className="row">
                    <div className="col-md-9">
                      <div className="content">
                      <h3>	Why Instagram Ads Are Important for Your Business</h3>
                  <p id="date">June 08, 2021</p>
                        <p className="cardpar">In recent years, blogging is one of the most classic trends that have taken over the web. The COVID-19 pandemic...</p>
                        <button className="btn btn btn-primary" id="continuereading" >continue reading <ArrowRightAltIcon id="arrowbtn"/> </button>
                 </div>
                    </div>
                    
                 </div>
                </div>
              </div>
        </div>
        

        
      </div>

      <div className="row" id="nextblog">
      
      <div className="col-md-1"> </div>
            <div className="col-md-5">
              <div className="nextblog">
                <img src={b4}/>
              </div>
             
            </div>
            <div className="col-md-5">
            <div className="blogcard">
                <div className="tiitle">
                  <div className="row">
                    <div className="col-md-9">
                      <div className="content">
                      <h3>7 Smart Ways to Automate Instagram Marketing for Your Business</h3>
                  <p id="date">June 08, 2021</p>
                        <p className="cardpar">In recent years, blogging is one of the most classic trends that have taken over the web. The COVID-19 pandemic...</p>
                        <button className="btn btn btn-primary" id="continuereading" >continue reading <ArrowRightAltIcon id="arrowbtn"/> </button>
                 </div>
                    </div>
                    
                 </div>
                </div>
              </div>
        </div>
        

        
      </div>
        
      <div className="row" id="nextblog">
      
      <div className="col-md-1"> </div>
            <div className="col-md-5">
              <div className="nextblog">
                <img src={b5}/>
              </div>
             
            </div>
            <div className="col-md-5">
            <div className="blogcard">
                <div className="tiitle">
                  <div className="row">
                    <div className="col-md-9">
                      <div className="content">
                      <h3>Instagram Ads and Apple’s New Privacy Policy: What's the Connection?</h3>
                  <p id="date">June 08, 2021</p>
                        <p className="cardpar">In recent years, blogging is one of the most classic trends that have taken over the web. The COVID-19 pandemic...</p>
                        <button className="btn btn btn-primary" id="continuereading" >continue reading <ArrowRightAltIcon id="arrowbtn"/> </button>
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
