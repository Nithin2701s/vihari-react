import React from 'react';
import '../CSS/TourComponent.css';

const TourComponent = ({ image, name, price, duration, accommodation, transportation, reviews, link }) => {
  return (
    <div className="col-md-4 col-sm-6">
      <div className="single-package-item">
        <img src={image} alt="package-place" />
        <div className="single-package-item-txt">
          <h3 style={{color:'#3995a3'}}>{name} <span className="pull-right">₹{price}</span></h3>
          <div className="packages-para">
            <p>
              <span><i className="fa fa-angle-right"></i> {duration}</span>
            </p>
            <p><
              i className="fa fa-angle-right"></i> {accommodation}
            </p>
            <p>
              <span><i className="fa fa-angle-right"></i> {transportation}</span>
            </p>
            <p>
              <i className="fa fa-angle-right"></i> {reviews} reviews
            </p>
          </div>
          <div className="about-btn">
            <a href={link}><button className="about-view packages-btn">book now</button></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourComponent;