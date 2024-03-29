import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import AdminNavbar from "../components/UI/AdminNavbar";
const EditTour = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [formData, setFormData] = useState({
    tourName: "",
    tourPrice: 0,
    imagePath: "/Bangalore.jpg",
  });

  useEffect(() => {

    fetch(`http://localhost:8000/tours/${id}`)
      .then((res) => res.json())
      .then((tour) => {

        setFormData({
          tourName: tour.tourName,
          tourPrice: tour.tourPrice,
          imagePath: tour.imagePath,
        });
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:8000/tours/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        alert("Tour updated successfully");
        navigate('/admindb/alltours');
      })
      .catch((err) => {
        console.error(err.message);
      });
  };



  return (
    <div><AdminNavbar />
      <div className="add-tour" style={{ backgroundColor: 'white' }}>
        <div className="main">
          <div className="container addtour" style={{ fontSize: '15px', color: 'black', backgroundColor: 'blue' }}>
            <form onSubmit={handleSubmit}>
              <div className="row ">
                <div className="">
                  <h1 style={{ color: 'white', marginTop: '50px', fontSize: '30px' }}>Edit Tour</h1>
                  <div className="row login-row" style={{ marginTop: '170px', display: 'flex', flexDirection: 'column', marginLeft: '100px', width: '450px' }}>
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

                        </div>
                      </div>
                    </div>


                    <div className="col-md-6">
                      <div className="input-group mb-3 user">
                        <span className="input-group-text span">
                          <i class="fa fa-inr" aria-hidden="true"></i>
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

                        </div>
                      </div>
                    </div>
                  </div>

                  <input
                    type="submit"
                    value="EDIT TOUR"
                    className="btn btn-primary btn-submit-login" style={{ fontSize: '15px' }}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditTour