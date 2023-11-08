
import '../CSS/Login.css'

const Login = () => {
  return (
    <div className="login-body">
	<div class="main">  	
	<input type="checkbox" id="chk" aria-hidden="true"/>

		<div class="signup">
			<form>
				<label for="chk" aria-hidden="true">Sign up</label>
				<input type="text" name="txt" placeholder="First name" required=""/>
				<input type="text" name="txt" placeholder="Last name" required=""/>
				<input type="email" name="email" placeholder="Email" required=""/>
				<input type="password" name="pswd" placeholder="Password" required=""/>
				<input type="password" name="cpswd" placeholder="Confirm Password" required=""/>
				<button>Sign up</button>
			</form>
		</div>

		<div class="login">
			<form>
				<label for="chk" aria-hidden="true">Login</label>
				<input type="email" name="email" placeholder="Email" required=""/>
				<input type="password" name="pswd" placeholder="Password" required=""/>
				<button>Login</button>
			</form>
		</div>
</div>
</div>
  )
}

export default Login