import React from 'react';


function HotelNav() {
  return (
      <>
        <div className="hotel-con flex main">
            <h1>Search Hotels</h1>
            <div className="room-type drop">
                <span>Room Type</span>
                <select>
                    <option>Single</option>
                    <option>Double</option>
                    <option>Queen</option>
                    <option>King</option>
                    <option>Suite</option>
                </select>
            </div>
            <div className="guests drop">
                <span>Guests</span>
                <select>
                    <option>One</option>
                    <option>Two</option>
                    <option>Three</option>
                    <option>Four</option>
                    <option>Five +</option>
                </select>
            </div>
            <div className="room-price">
                <span>Room Price</span>
                <div class="flex min-max">
                <select>
                    <option>Min</option>
                    <option>$100</option>
                    <option>$200</option>
                    <option>$300</option>
                    <option>$400</option>
                </select>
                <select>
                    <option>Max</option>
                    <option>$500</option>
                    <option>$600</option>
                    <option>$700</option>
                    <option>Any Price</option>
                </select>
                </div>
            </div>
            <div className="menu advanced flex">
                <span>Advanced</span>
                <div class="advance-menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
      </>
  )
};

export default HotelNav;