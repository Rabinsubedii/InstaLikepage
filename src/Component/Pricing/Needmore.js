import React from 'react'
import Slider from 'react-button-slider';
import Testo from './Testo';
import DiscreteSlider from './Bar'
export default function Needmore() {
    return (
        <div className="needmore">
            <h3 className="text-cente">Need more ?</h3>
            <div className="row">
                <div className="col-md-3"></div>

                <div className="col-md-6">
                    <div className="pricss">
                        <p>
                        You can arrange your own package with as many likes as you need. The bigger package you select, the more discount you'll get.
                        </p>
                    </div>
                </div>

                <div className="col-md-3"></div>
            </div>
            <DiscreteSlider />
            <Testo/>
        </div>
        
    )
}
