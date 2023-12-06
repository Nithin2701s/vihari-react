import React, { useState } from 'react'
import busContext from './busContext'

const BusState = (props) => {
    const [selectedSeats, setselectedSeats] = useState({bus:null,seats:[]})
 const updateSeats = (bus,seats)=>{
    setselectedSeats({bus,seats:seats})
    console.log(selectedSeats)
 }
  return (
   <busContext.Provider value={{updateSeats,selectedSeats}}>
    {props.children}
   </busContext.Provider>
  )
}

export default BusState