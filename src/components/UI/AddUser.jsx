import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
const AddUser = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
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
    // Add validation logic for password and confirm password if needed
    if (formData.password !== formData.confirmPassword) {
      alert("Password and Confirm Password do not match");
      return;
    }

    // Implement the logic to send user data to the server
    fetch("http://localhost:8000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        alert("User added successfully");
        navigate('/admindb/allusers');
      })
      .catch((err) => {
        console.error(err.message);
      });

    console.log("Form data submitted:", formData);
  };

  return (
    <div><AdminNavbar />
      <div className="add-tour" style={{ backgroundColor: 'white' }}>
        <div className="main">
          <div className="container addtour" style={{ fontSize: '15px', color: 'black', backgroundColor: 'blue' }}>
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="">
                  <h1 style={{ color: 'white', marginTop: '50px', fontSize: '30px' }}>Add User</h1>
                  <div className="row login-row" style={{ marginTop: '120px', display: 'flex', flexDirection: 'column', marginLeft: '100px', width: '450px' }}>
                    <div className="col-md-6">
                      <div className="input-group mb-3 user">
                        <span className="input-group-text span">
                          <i className="fa fa-user" aria-hidden="true"></i>
                        </span>
                        <div className="form-floating">
                          <input
                            type="text"
                            className="form-control inputs"
                            name="firstName"
                            placeholder="First Name"
                            onChange={handleInputChange}
                            value={formData.firstName}
                          />
                          <span className="invalid-form" id="invalid-firstName"></span>

                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="input-group mb-3 user">
                        <span className="input-group-text span">
                          <i className="fa fa-user" aria-hidden="true"></i>
                        </span>
                        <div className="form-floating">
                          <input
                            type="text"
                            className="form-control inputs"
                            name="lastName"
                            placeholder="Last Name"
                            onChange={handleInputChange}
                            value={formData.lastName}
                          />
                          <span className="invalid-form" id="invalid-lastName"></span>

                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="input-group mb-3 user">
                        <span className="input-group-text span">
                          <i className="fa fa-envelope" aria-hidden="true"></i>
                        </span>
                        <div className="form-floating" >
                          <input
                            type="email"
                            className="form-control inputs"
                            name="email"
                            placeholder="Email"
                            onChange={handleInputChange}
                            value={formData.email}
                          />
                          <span className="invalid-form" id="invalid-email"></span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-group mb-3 user">
                        <span className="input-group-text span">
                          <i className="fa fa-lock" aria-hidden="true"></i>
                        </span>
                        <div className="form-floating">
                          <input
                            type="password"
                            className="form-control inputs"
                            name="password"
                            placeholder="Password"
                            onChange={handleInputChange}
                            value={formData.password}
                          />
                          <span className="invalid-form" id="invalid-password"></span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-group mb-3 user">
                        <span className="input-group-text span">
                          <i className="fa fa-lock" aria-hidden="true"></i>
                        </span>
                        <div className="form-floating">
                          <input
                            type="password"
                            className="form-control inputs"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            onChange={handleInputChange}
                            value={formData.confirmPassword}
                          />
                          <span
                            className="invalid-form"
                            id="invalid-confirmPassword"
                          ></span>

                        </div>
                      </div>
                    </div>
                  </div>
                  <input
                    type="submit"
                    value="ADD USER"
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
};

export default AddUser;
