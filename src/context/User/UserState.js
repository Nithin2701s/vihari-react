import userContext from "./userContext";

const host='http://localhost:4000'


const UserState = (props) => {
    const verifyUser= async(email,password)=>{
        const res = await fetch(`${host}/login`,{
			method:"POST",
			headers:{
				"Content-Type":"application/json",
			},
			body:JSON.stringify({email,password})
		  })
		  const response =await res.json()
		  return response
       }
  return (
    <userContext.Provider value={{verifyUser}}>
        {props.children}
    </userContext.Provider>
  )
}

export default UserState


