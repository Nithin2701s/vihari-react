import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
const AddTour = () => {
  const navigate=useNavigate();
    const [formData, setFormData] = useState({
    tourName:"",
    tourPrice:0,
    imagePath:"/Bangalore.jpg",
    places:[]

  });

 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    fetch("http://localhost:8000/tours", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        alert("Tour added successfully");
        navigate('/admindb/alltours');
      })
      .catch((err) => {
        console.error(err.message);
      });
    console.log("Form data submitted:", formData);
    
  };

  return (
    <div><AdminNavbar/>
    <div className="login-body">
      <div className="main">
        <div className="container signup" style={{marginTop:'200px'}}>
          <form onSubmit={handleSubmit}>
            <div className="row ">
              <div className="">
                <div className="row login-row" style={{display:'flex',flexDirection:'column',marginLeft:'100px',width:'450px'}}>
                  <div className="col-md-6">
                    <div className="input-group mb-3 user">
                      <span className="input-group-text span">
                        <i className="fa fa-map-marker" aria-hidden="true"></i>
                      </span>
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control inputs"
                          id="f-name"
                          name="tourName"
                          placeholder="Tour Name"
                          fdprocessedid="2myzgp"
                          onChange={handleInputChange}
                          value={formData.tourName}
                        />
                        <span
                          className="invalid-form"
                          id="invalid-fname"
                        ></span>
                        <label htmlFor="floatingInputGroup1">Tour Name</label>
                      </div>
                    </div>
                  </div>

                  
                  <div className="col-md-6">
                    <div className="input-group mb-3 user">
                      <span className="input-group-text span">
                        <i className="fa fa-map-marker" aria-hidden="true"></i>
                      </span>
                      <div className="form-floating">
                        <input
                          type="number"
                          className="form-control inputs"
                          id="lname"
                          name="tourPrice"
                          placeholder="Tour Price"
                          fdprocessedid="2myzgp"
                          onChange={handleInputChange}
                          value={formData.tourPrice}
                        />
                        <span
                          className="invalid-form"
                          id="invalid-lname"
                        ></span>
                        <label htmlFor="floatingInputGroup1">
                          Tour Price
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <input
                  type="submit"
                  value="ADD TOUR"
                  className="btn btn-primary btn-submit-login" style={{fontSize:'15px'}}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AddTour;
