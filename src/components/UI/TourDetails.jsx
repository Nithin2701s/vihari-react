import React, { useState, useEffect } from "react";
import AdminNavbar from "./AdminNavbar";
import { Link, useParams } from "react-router-dom";
import '../CSS/TourDetails.css'
import "../CSS/AllTours.css";
const TourDetails = () => {
  const [places, setPlaces] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getPlaces = () => {
      fetch("http://localhost:8000/tours/" + id)
        .then((res) => {
          return res.json();
        })
        .then((tour) => {
          setPlaces(tour.places);
        })
        .catch((err) => {
          console.error(err.message);
        });
    };
    getPlaces();
  }, [id]);

  return (
    <>
      <AdminNavbar />
      <div>
        <h1>Tour Place Details</h1>
      </div>
      <Link to={`/admindb/addplace/${id}`}>
        <button className="addnew btn btn-success" type="button">
          <i className="fa fa-user-plus"></i>&nbsp; Add New Place
        </button>
      </Link>
      <hr />

      {places.map((place) => (
        <div key={place.id} className="place-item-container" id={`place-item-${place.id}`}>
        <div className="place-image-container">
          <img
            className="place-image"
            src={`${place.imagePath}`}
            alt={"Place"}
          />
        </div>
        <div className="place-text">
          <h2 className="place-title">{place.title}</h2>
          <p className="place-description" name="description">
            {place.description}
          </p>
        </div>
      </div>
      
      ))}
    </>
  );
};

export default TourDetails;
