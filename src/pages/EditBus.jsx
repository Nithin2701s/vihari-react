import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import AdminNavbar from "../components/UI/AdminNavbar";
const EditBus = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [formData, setFormData] = useState({
    srcname: "",
    destname: "",
    bname: "",
    deptime: "",
    arrtime: "",
    durtime: "",
    tktprice: "",
    btype: "",
  });

  useEffect(() => {

    fetch(`http://localhost:8000/buses/${id}`)
      .then((res) => res.json())
      .then((bus) => {

        setFormData({
          srcname: bus.srcname,
          destname: bus.destname,
          bname: bus.bname,
          deptime: bus.deptime,
          arrtime: bus.arrtime,
          durtime: bus.durtime,
          tktprice: bus.tktprice,
          btype: bus.btype,
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

    fetch(`http://localhost:8000/buses/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        alert("Bus updated successfully");
        navigate('/admindb/allbuses');
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
                  <h1 style={{ color: 'white', marginTop: '50px', fontSize: '30px' }}>Edit Bus</h1>
                  <div className="row login-row" style={{ marginTop: '50px', display: 'flex', flexDirection: 'column', marginLeft: '100px', width: '450px' }}>

                    {/* Source Name */}
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
                            name="srcname"
                            placeholder="Source Name"
                            fdprocessedid="2myzgp"
                            onChange={handleInputChange}
                            value={formData.srcname}
                          />
                          <span
                            className="invalid-form"
                            id="invalid-fname"
                          ></span>

                        </div>
                      </div>
                    </div>

                    {/* Destination Name */}
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
                            name="destname"
                            placeholder="Destination name"
                            fdprocessedid="2myzgp"
                            onChange={handleInputChange}
                            value={formData.destname}
                          />
                          <span
                            className="invalid-form"
                            id="invalid-lname"
                          ></span>

                        </div>
                      </div>
                    </div>


                    {/* Travels Name */}
                    <div className="col-md-6">
                      <div className="input-group mb-3 user">
                        <span className="input-group-text span">
                          <i className="fa fa-globe" aria-hidden="true"></i>
                        </span>
                        <div className="form-floating">
                          <input
                            type="text"
                            className="form-control inputs"
                            name="bname"
                            placeholder="Travels Name"
                            fdprocessedid="2myzgp"
                            onChange={handleInputChange}
                            value={formData.bname}
                          />
                          <span className="invalid-form" id="invalid-email"></span>
                        </div>
                      </div>
                    </div>

                    {/* Departure Time */}
                    <div className="col-md-6">
                      <div className="input-group mb-3 user">
                        <span className="input-group-text span">
                          <i className="fa fa-clock-o" aria-hidden="true"></i>
                        </span>
                        <div className="form-floating">
                          <input
                            type="time"
                            className="form-control inputs"
                            name="deptime"
                            placeholder="Departure time"
                            fdprocessedid="2myzgp"
                            onChange={handleInputChange}
                            value={formData.deptime}
                          />
                          <span className="invalid-form" id="invalid-email"></span>
                        </div>
                      </div>
                    </div>

                    {/* Arrival Time */}
                    <div className="col-md-6">
                      <div className="input-group mb-3 user">
                        <span className="input-group-text span">
                          <i className="fa fa-clock-o" aria-hidden="true"></i>
                        </span>
                        <div className="form-floating">
                          <input
                            type="time"
                            className="form-control inputs"
                            name="arrtime"
                            placeholder="Arrival Time"
                            fdprocessedid="2myzgp"
                            onChange={handleInputChange}
                            value={formData.arrtime}
                          />
                          <span className="invalid-form" id="invalid-email"></span>
                        </div>
                      </div>
                    </div>

                    {/* Duration Time */}
                    <div className="col-md-6">
                      <div className="input-group mb-3 user">
                        <span className="input-group-text span">
                          <i className="fa fa-clock-o" aria-hidden="true"></i>
                        </span>
                        <div className="form-floating">
                          <input
                            type="time"
                            className="form-control inputs"
                            name="durtime"
                            placeholder="Duration Time"
                            fdprocessedid="2myzgp"
                            onChange={handleInputChange}
                            value={formData.durtime}
                          />
                          <span className="invalid-form" id="invalid-email"></span>
                        </div>
                      </div>
                    </div>

                    {/* Ticket Price */}
                    <div className="col-md-6">
                      <div className="input-group mb-3 user">
                        <span className="input-group-text span">
                          <i class="fa fa-inr" aria-hidden="true"></i>
                        </span>
                        <div className="form-floating">
                          <input
                            type="text"
                            className="form-control inputs"
                            name="tktprice"
                            placeholder="Ticket price"
                            fdprocessedid="2myzgp"
                            onChange={handleInputChange}
                            value={formData.tktprice}
                          />
                          <span className="invalid-form" id="invalid-email"></span>
                        </div>
                      </div>
                    </div>

                    {/* Bus Type */}
                    <div className="col-md-6">
                      <div className="input-group mb-3 user">
                        <span className="input-group-text span">
                          <i className="fa fa-bus" aria-hidden="true"></i>
                        </span>
                        <div className="form-floating">
                          <input
                            type="text"
                            className="form-control inputs"
                            name="btype"
                            placeholder="Ac or Non-Ac"
                            fdprocessedid="2myzgp"
                            onChange={handleInputChange}
                            value={formData.btype}
                          />
                          <span className="invalid-form" id="invalid-email"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <input
                    type="submit"
                    value="Edit BUS"
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

export default EditBus