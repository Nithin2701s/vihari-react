import { useContext, useState } from 'react'
import '../CSS/Login.css'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'
import userContext from '../../context/User/userContext'


const Login = () => {
	const navigate=useNavigate()
	const {verifyUser} = useContext(userContext)
	const [loginCreds, setloginCreds] = useState({email:'',password:''})
    const onLoginInput =(e)=>{
      setloginCreds({...loginCreds,[e.target.name]:e.target.value})
	}
	const HandleLogin =async(e)=>{
        e.preventDefault()
       const response = await verifyUser(loginCreds.email,loginCreds.password)
		 if(response.success){
		 localStorage.token=response.authToken	
		   navigate('/')
		 }
		 else {
			if(response.error){
		alert(response.error)	
			}
		 }
      setloginCreds({email:'',password:''}) 
	
	}
  return (
	<>
    <div className="login-body">
	<div className="main">  	
	<input className='login-input' type="checkbox" id="chk" aria-hidden="true"/>

		<div className="signup">
			<form>
				<label htmlFor="chk" aria-hidden="true">Sign up</label>
				<input className='signup-input' type="text" name="txt" placeholder="First name" required=""/>
				<input className='signup-input' type="text" name="txt" placeholder="Last name" required=""/>
				<input className='signup-input' type="email" name="email" placeholder="Email" required=""/>
				<input className='signup-input' type="password" name="pswd" placeholder="Password" required=""/>
				<input className='signup-input' type="password" name="cpswd" placeholder="Confirm Password" required=""/>
				<button className='login-submit'>Sign up</button>
			</form>
		</div>

		<div className="login">
			<form>
				<label htmlFor="chk" aria-hidden="true">Login</label>
				<input className='login-input' type="email" name="email" onChange={onLoginInput} value={loginCreds.email} placeholder="Email" required/>
				<input className='login-input' type="password" name="password" onChange={onLoginInput} value={loginCreds.password} placeholder="Password" required/>
				<button className='login-submit' onClick={HandleLogin}>Login</button>
			</form>
		</div>
</div>
</div>
 <Footer/>
</>
  )
}

export default Login