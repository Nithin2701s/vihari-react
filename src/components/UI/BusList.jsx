import React, { useState } from 'react';
import bus1 from '../../Assets/bus1.png';
import bus3 from '../../Assets/bus3.jpg';
// import bus5 from '../../Assets/bus5.jpg';
import Layout from './Layout'
import Footer from './Footer';
import BusNav from './BusNav';
const BusList = () => {
  const [selectedBusName, setSelectedBusName] = useState();
  const [showSeats, setShowSeats] = useState(false);

  const buses = [
    { id: 1, name: 'APSRTC', route: 'Route 1', departure: '10:00 AM', arrival: '2:00 PM', duration: '4 hours', type: 'Express', fare: '320', image: bus1 },
    { id: 2, name: 'PSR travels', route: 'Route 2', departure: '12:00 PM', arrival: '4:00 PM', duration: '4 hours', type: 'Standard', fare: '230', image: bus3 },
    // Add more buses as needed
  ];
  const toggleSeats = (bus) => {
    if(showSeats && selectedBusName === bus.name){
    setShowSeats(!showSeats);
    }
    setSelectedBusName(bus.name);
    setShowSeats(true)
  };

  return (
    <> 
    <BusNav/>
   <div className="container-fluid mt-5">
      <h2 className="text-center mb-4">Bus List</h2>
      <table className="table" style={{fontSize:'60px',padding: '5px' }}>
        <thead>
         <tr>
            <th scope="col">Bus Image</th>
            <th scope="col">Bus Name</th>
            <th scope="col">Departure Time</th>
            <th scope="col">Arrival Time</th>
            <th scope="col">Duration</th>
            <th scope="col">Bus Type</th>
            <th scope="col">Fare (₹)</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {buses.map(bus => (
            <>
            <tr key={bus.id} className='bus-row'>
              <td>
                <img
                  src={bus.image}
                  alt=""
                  style={{ height: '80px', objectFit: 'cover' }}
                />
              </td>
              <td>{bus.name}</td>
              <td>{bus.departure}</td>
              <td>{bus.arrival}</td>
              <td>{bus.duration}</td>
              <td>{bus.type}</td>
              <td>₹{bus.fare}</td>
              <td>
                <button className="btn btn-primary" style={{ fontSize: '15px' }} onClick={() => toggleSeats(bus)}>
                  Select Seats
                </button>
              </td>
            </tr>
            <tr className='my-5'>
              <td colSpan='7' className='text-center' >
            {showSeats && selectedBusName === bus.name && (
                    <div>
                      <Layout bus={bus}/>
                    </div>
                  )}
              </td>
            </tr>
           </>
          ))}
        </tbody>
      </table>
    </div>
    <Footer/>
    </>
  );
};

export default BusList;
