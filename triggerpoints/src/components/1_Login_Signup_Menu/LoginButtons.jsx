import React from 'react'
import { fireBaseAPIHandler } from '../../firebase'

const LoginButtons = ({ functions }) => {
	const signInWithGoogle = () => {
		fireBaseAPIHandler.signinWithGoogle()

		// log event
	}
	return (
		<>
			<div className="login_options_containers">
				<button onClick={signInWithGoogle}>Sign in with Google</button>
				<button onClick={functions.navigateToApp}>Sign in with Facebook</button>
			</div>
			<div className="register_container">
				<p>Dont have an account?</p>
				<p onClick={functions.loginSwitcher} className="register_button">
					Register here
				</p>
			</div>
		</>
	)
}

export default LoginButtons
