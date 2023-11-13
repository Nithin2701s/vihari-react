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
        mode:'no-cors',
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

  return (
    <userContext.Provider value={{verifyUser,createUser}}>
        {props.children}
    </userContext.Provider>
  )
}

export default UserState


