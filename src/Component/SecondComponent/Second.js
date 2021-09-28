import React from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite';
import Feature from '../Feature/Feature'
import svg from '../../img/x.svg'
export default function Second() {
    return (
        <div>
            <section className="second" id="secondclass">
            <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-5">
                        <div className="secondcomponentnhead"><h3 className="text-dark">Try, and be amazed.</h3></div>
                        
                        <div className="secondcomponentparagraph">
                        <p>We have features such as <strong>Country+Gender Targeting</strong> that you can't find with any other service because our likes are from real Instagrammers.</p>
                        <p>There's no catch. We have the lowest prices on the market because we're the first-hand providers. Don't believe us? Try our <a href="#">free trial</a>, no password or registration required.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="secondcomponentbutton">
                        <a className="btn">We have proudly delivered <br/>  <FavoriteIcon className="heartbutton" > </FavoriteIcon> <span className="digit">1,187,557,201</span></a>
                        </div>
              
                    </div>
                </div>
            </section >
  
            <Feature> </Feature>
        </div>
    )
}
