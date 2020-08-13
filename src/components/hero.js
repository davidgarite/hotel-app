import React from 'react';
import hero from '../images/hero.jpg'
import pin from '../images/map-pin.png'

function Hero() {
  return (
      <>
        <div className="mainstage flex">
            <img src={hero} alt="Hero Image" />
            <div className="info">
                <h1>Hotel Finder</h1>
                <h2>Making your travels a little bit eaiser.</h2>
                  <div className="input-con">
                  <input type="text" autocomplete="off" aria-autocomplete="list" aria-controls="react-autowhatever-1" placeholder="Enter an address, neighborhood, city, or ZIP code" aria-label="Search: Suggestions appear below" />
                    <img src={pin} alt="map pin" />
                  </div>
            </div>
        </div>
      </>
  )
};

export default Hero;