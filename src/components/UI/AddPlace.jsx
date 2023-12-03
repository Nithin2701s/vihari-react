import React, { useEffect, useState } from "react";
import { useNavigate,useParams } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
const AddPlace = () => {
    const [tour,setTour]=useState([]);
    const {id}=useParams();
    
  const navigate=useNavigate();
    const [formData, setFormData] = useState({
    title:"",
    description:"",
    imagePath:"/Bangalore.jpg",

  });

  useEffect(()=>{
    const getTour=()=>{
        fetch('http://localhost:8000/tours/'+id).then((res)=>{
            return res.json();
        })
        .then((tourData)=>{
          setTour(tourData);
        })
        .catch((err)=>{
            console.error(err); 
        })
    };
    getTour();
  },[id]);

 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedTour = {
        ...tour,
        places: [...tour.places, formData],
      };
    fetch("http://localhost:8000/tours/"+id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTour),
    })
      .then((res) => {
        alert("Place added successfully");
        navigate('/admindb/opentour/'+id);
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
        <div className="container signup">
          <form onSubmit={handleSubmit}>
            <div className="row ">
              <div className="">
                <div className="row login-row">
                  
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
                          name="title"
                          placeholder="Tour Name"
                          fdprocessedid="2myzgp"
                          onChange={handleInputChange}
                          value={formData.title}
                        />
                        <span
                          className="invalid-form"
                          id="invalid-fname"
                        ></span>
                        <label htmlFor="floatingInputGroup1">Title:</label>
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
                          type="text"
                          className="form-control inputs"
                          id="lname"
                          name="description"
                          placeholder="Description"
                          fdprocessedid="2myzgp"
                          onChange={handleInputChange}
                          value={formData.description}
                        />
                        <span
                          className="invalid-form"
                          id="invalid-lname"
                        ></span>
                        <label htmlFor="floatingInputGroup1">
                          Description:
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <input
                  type="submit"
                  value="ADD PLACE"
                  className="btn btn-primary btn-submit-login"
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

export default AddPlace;
