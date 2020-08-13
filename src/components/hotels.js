import React from 'react';
import RoomImg from '../images/hotel-1.jpg'

function Hotels() {
  return (
      <>
        <div className="main flex hotel-main">
            <div className="fourth hotel-block">
                <div className="price">
                    <em>$100 </em>
                    <span>per night</span>
                </div>
                <img src={RoomImg} />
                <strong>Single Economy</strong>
            </div>
            <div className="fourth hotel-block">
                <div className="price">
                    <em>$100 </em>
                    <span>per night</span>
                </div>
                <img src={RoomImg} />
                <strong>Single Economy</strong>
            </div>
            <div className="fourth hotel-block">
                <div className="price">
                    <em>$100 </em>
                    <span>per night</span>
                </div>
                <img src={RoomImg} />
                <strong>Single Economy</strong>
            </div>
            <div className="fourth hotel-block">
                <div className="price">
                    <em>$100 </em>
                    <span>per night</span>
                </div>
                <img src={RoomImg} />
                <strong>Single Economy</strong>
            </div>
        </div>
      </>
  )
};

export default Hotels;