import '../CSS/Login.css'
import Footer from './Footer'

const Login = () => {
	
  return (
	<>
    <div className="login-body">
	<div class="main">  	
	<input className='login-input' type="checkbox" id="chk" aria-hidden="true"/>

		<div class="signup">
			<form>
				<label for="chk" aria-hidden="true">Sign up</label>
				<input className='signup-input' type="text" name="txt" placeholder="First name" required=""/>
				<input className='signup-input' type="text" name="txt" placeholder="Last name" required=""/>
				<input className='signup-input' type="email" name="email" placeholder="Email" required=""/>
				<input className='signup-input' type="password" name="pswd" placeholder="Password" required=""/>
				<input className='signup-input' type="password" name="cpswd" placeholder="Confirm Password" required=""/>
				<button className='login-submit'>Sign up</button>
			</form>
		</div>

		<div class="login">
			<form>
				<label for="chk" aria-hidden="true">Login</label>
				<input className='login-input' type="email" name="email" placeholder="Email" required=""/>
				<input className='login-input' type="password" name="pswd" placeholder="Password" required=""/>
				<button className='login-submit'>Login</button>
			</form>
		</div>
</div>
</div>
 <Footer/>
</>
  )
}

export default Login