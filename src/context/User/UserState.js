import { useState } from "react";
import userContext from "./userContext";

const host='http://localhost:4000'


const UserState = (props) => {
    
  // Vrifying user with the inputs
    const verifyUser= async(email,password)=>{

      // Verifying user with api call 
        const res = await fetch(`${host}/login`,{
			method:"POST",
			headers:{
				"Content-Type":"application/json",
			},
			body:JSON.stringify({email,password})
		  })

      // Returning response that contains unique token generated for the user
		  const response =await res.json()
		  return response
       }

  const createUser = async(firstName,lastName,email,password)=>{
  
      // Creating user with api call 
      const res = await fetch(`${host}/signup`,{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          firstName,
          lastName,
          email,
          password
        })
        })
        const response =await res.json()
        return response

  }

// search Details
const [searchDetails, setsearchDetails] = useState({srcname:'',destname:'',date:''})

const updateSearch=(srcname,destname,date)=>{
setsearchDetails({srcname,destname,date})
}
  return (
    <userContext.Provider value={{verifyUser,createUser,searchDetails,updateSearch}}>
        {props.children}
    </userContext.Provider>
  )
}

export default UserState


