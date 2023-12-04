import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../CSS/TravelPage.css';

const TravelPage = () => {
  const [query, setQuery] = useState('');
  const [cities, setCities] = useState([
    'Mumbai',
    'Delhi',
    'Bangalore',
    'Kolkata',
    'Chennai'
  ]);
  const onchange = (e)=>{
    setSearchDetails({...searchDetails,[e.target.name]:e.target.value.split(',')[0]})
  }
  const [searchDetails, setSearchDetails] = useState({srcname:'',destname:'',date:''})
  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&countrycodes=IN&q=${query}`);
        const data = await response.json();

        if (data.length > 0) {
          setCities(data.map(result => result.display_name));
        } else {
          setCities([]);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setCities([]);
      }
    };

    if (query.length >= 3) {
      fetchCities();
    } else {
      setCities([]);
    }
  }, [query]);

  // Predefined options for input field


  return (
    <div className="container-fluid travel-page">
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
                        <input type="text" id='srcname' value={searchDetails.srcname} name="srcname" placeholder="Source" style={{ backgroundColor: 'aliceblue' }} onChange={(e) => {setQuery(e.target.value); onchange(e)}} list="srcOptions" />
                        <datalist id="srcOptions">
                          {cities.map((option, index) => (
                            <option key={index} value={option}  onClick={()=>{setSearchDetails({...searchDetails,srcname:option.split(',')[0]})}}/>
                          ))}
                        </datalist>
                        <input type="text" name="destname" value={searchDetails.destname} onChange={(e)=>{setQuery(e.target.value); onchange(e)}} placeholder="Destination" style={{ backgroundColor: 'aliceblue' }} list="destOptions" />
                        <datalist id="destOptions">
                          {cities.map((option, index) => (
                            <option key={index} value={option} onClick={()=>{setSearchDetails({...searchDetails,destname:option.split(',')[0]})}} />
                          ))}
                        </datalist>
                        <input name="date" type="date" value={searchDetails.date} onChange={(e)=>{onchange(e)}} placeholder="Departure" required style={{ backgroundColor: 'aliceblue', width: '150px' }} />
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