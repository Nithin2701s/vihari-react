import React, { useContext, useState} from 'react';
import busContext from '../../context/bus/busContext';
import '../CSS/PassengerDetails.css'
import Footer from './Footer';
import BusNav from './BusNav';
// import Razorpay from 'razorpay';


const PassengerDetails = () => {
  const { selectedSeats } = useContext(busContext);

  // Initialize forms for each selected seat
  const initialFormsData = selectedSeats.seats.reduce((acc, seat) => {
    acc[seat] = { name: '', age: '', gender: '' };
    return acc;
  }, {});

  const [formsData, setFormsData] = useState(initialFormsData);
  const [commonData, setCommonData] = useState({
    email: '',
    phoneNumber: '',
  });

  const handleCommonInputChange = (e) => {
    const { name, value } = e.target;
    setCommonData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePassengerInputChange = (seat, e) => {
    const { name, value } = e.target;
    setFormsData((prevData) => ({
      ...prevData,
      [seat]: {
        ...prevData[seat],
        [name]: value,
      },
    }));
  };

  const handlePayNow = () => {
    console.log('Payment logic goes here');
  };

  return (
    <>
    <BusNav/>
    <div className="container custom-container">
      <div className="row justify-content-center">
        <div className="col-md-8" style={{fontSize:'50px'}}>
          <h1>Passenger Details</h1>
          <form style={{boxShadow:'2px 1px 4px grey',padding:'1%'}}>
            <div className="form-group passenger-details my-3">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control passenger-input"
                id="email"
                placeholder="Enter your email"
                name="email"
                value={commonData.email}
                onChange={handleCommonInputChange} style={{fontSIze:'15px'}}
              />
            </div>
            <div className="form-group passenger-details my-3">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="text"
                className="form-control passenger-input"
                id="phoneNumber"
                placeholder="Enter your phone number"
                name="phoneNumber"
                value={commonData.phoneNumber}
                onChange={handleCommonInputChange} style={{fontSIze:'15px'}}
              />
            </div>
          </form>
          {selectedSeats.seats.map((seat) => (
            <form key={seat} className='my-5' style={{boxShadow:'2px 1px 4px grey',padding:'1%'}}>
              <h4>Seat {seat}</h4>
              <div className="form-group passenger-details my-3">
                <label htmlFor={`name-${seat}`}>Name</label>
                <input
                  type="text"
                  className="form-control passenger-input"
                  id={`name-${seat}`}
                  placeholder="Enter passenger name"
                  name="name"
                  value={formsData[seat].name}
                  onChange={(e) => handlePassengerInputChange(seat, e)}
                />
              </div>
              <div className="form-group passenger-details my-3">
                <label htmlFor={`age-${seat}`}>Age</label>
                <input
                  type="number"
                  className="form-control passenger-input"
                  id={`age-${seat}`}
                  placeholder="Enter passenger age"
                  name="age"
                  value={formsData[seat].age}
                  onChange={(e) => handlePassengerInputChange(seat, e)}
                  min={7}
                />
              </div>
              <div className="form-group passenger-details my-3">
                <label htmlFor={`gender-${seat}`}>Gender</label>
                <input
                  type="text"
                  className="form-control passenger-input"
                  id={`gender-${seat}`}
                  placeholder="Enter passenger gender"
                  name="gender"
                  value={formsData[seat].gender}
                  onChange={(e) => handlePassengerInputChange(seat, e)}
                />
              </div>
            </form>
          ))}
          <button className="btn btn-primary pay-now" onClick={handlePayNow}>
            Pay Now
          </button>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default PassengerDetails;
