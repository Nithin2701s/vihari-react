import React from "react";
import { Link } from "react-router-dom";
import '../CSS/TravelPage.css';

const TravelPage = () => {
  return (
    <div className="container-fluid">
      <div className="position-relative">
        <img src="../b2.jpg" alt="" className="banner img-fluid" style={{ height: '700px', position: 'relative' }} />
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-sm-10 col-lg-8">
                <div className="section-travel">
                  <div className="search-form-container">
                    <form action="/searchbuses" className="form search-form" method="post">
                      <div className="search-form__elements">
                        <input type="text" name="srcname" placeholder="Source" style={{ backgroundColor: 'aliceblue' }} />
                        <input type="text" name="destname" placeholder="Destination" style={{ backgroundColor: 'aliceblue' }} />
                        <input name="date" type="date" placeholder="Departure" required style={{ backgroundColor: 'aliceblue', width: '150px' }} />
                      </div>
                      <Link to="">
                        <button className="btn btn-travel" type="submit">
                          Search
                        </button>
                      </Link>
                    </form>
                  </div>
                </div>
                <div className="heading">
                  <h1 id="animation-title" className="display-3 text-uppercase mb-3 travel">
                    Travel Tour
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelPage;