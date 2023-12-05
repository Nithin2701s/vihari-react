import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../components/CSS/AdminDasboard.css";
import Bus1 from "../Assets/bus1.png";
import AdminNavbar from "../components/UI/AdminNavbar";
const AllBuses = () => {    
  const [Buses, setAllBuses] = useState([]);

  useEffect(() => {
    const getAllBuses = () => {
      fetch("http://localhost:8000/buses")
        .then((res) => {
          return res.json();
        })
        .then((buses) => {
          setAllBuses(buses);
        })
        .catch((err) => {
          console.error(err.message);
        });
    };

    getAllBuses();
  }, []);
  const handleDeleteBus = (busId) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this bus?');
    if (confirmDelete) {
      fetch(`http://localhost:8000/buses/${busId}`, {
        method: "DELETE",
      })
        .then((res) => {
          alert("Bus deleted successfully");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };
  return (
    <div>
      <AdminNavbar />
      <div>
        <h1>Buses Details</h1>
      </div>
      <Link to="/admindb/addbus">
        <button className="addnew btn btn-success" type="button" style={{ fontSize: '15px' }}>
          <i className="fa fa-user-plus"></i>&nbsp; Add New Bus
        </button>
      </Link>
      <hr />
      <div className="row-bus ">
        <div className="bus-count col-sm-3">
          <span style={{ fontWeight: 600 }} id="bus-count">
            Total
          </span>
          <span style={{ fontWeight: 600 }}> BUSES</span> <span>found</span>
        </div>
        <div className="col-sm-2">Departure</div>
        <div className="col-sm-2">Duration</div>
        <div className="col-sm-2">Arrival</div>
        <div className="col-sm-2">Fare</div>
      </div>
      <hr />

      <div className="container-fluid bus-details">
        {Buses.map((fod) => (
          <div className="row bus-item" key={fod.id}>
            <div className="col-sm-3">
              <img src={Bus1} alt="Bus" className="bus-img" />
              <span className="bus-name">{fod.bname}</span>
            </div>
            <div className="col-sm-2 px-5">
              <span className="departure timings">{fod.deptime}</span>
              <span className="depart">{fod.srcname}</span>
            </div>
            <div className="col-sm-2 px-5">
              <span className="duration">
                <b>{fod.durtime}</b>
              </span>
            </div>
            <div className="col-sm-2 px-5">
              <span className="Arrival timings">{fod.arrtime}</span>
              <span className="depart">{fod.destname}</span>
            </div>
            <div className="col-sm-2">
              <span className="rupees Arrival">
                <i className="fa-solid fa-indian-rupee-sign"></i>
              </span>
              <span className="price Arrival">{fod.tktprice}</span>
              <div style={{ marginLeft: 200 }}>
                <Link to={`/admindb/editbus/${fod.id}`}>
                  <button className="btn btn-success"> Edit Bus</button>
                </Link>
                <button
                  type="button"
                  style={{ marginTop: 15 }}
                  className="delete-bus-btn btn btn-danger"
                  data-bus-id={fod.id}
                  onClick={() => handleDeleteBus(fod.id)}
                >
                  Delete
                </button>
              </div>
            </div>
            <div className="col-sm-2">
              <span className="A-C">{fod.btype}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBuses;
