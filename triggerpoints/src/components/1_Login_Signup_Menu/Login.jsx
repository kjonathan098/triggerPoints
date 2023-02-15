import React, { useState } from 'react'
import './Login.css'
import loginImage from '../../media/login_image.png'
import { useNavigate } from 'react-router-dom'

import LoginButtons from './LoginButtons'

const Login = () => {
	const [isNewRegister, setIsNewRegister] = useState(false)
	const navigate = useNavigate()

	const functions = {
		navigateToApp: () => {
			navigate('/app')
		},
		loginSwitcher: () => {
			setIsNewRegister(true)
		},
	}

	return (
		<div className="App">
			<div id="left_master">
				<img src={loginImage} alt="tp3d app"></img>
			</div>
			<div></div>
			<div id="login_master_box">
				<div className="login_cotainer">
					<div className="title">
						<h3>Welcome to</h3>
						<h1>Trigger Points 3D</h1>
					</div>
					{isNewRegister ? <div>Registeer</div> : <LoginButtons functions={functions} />}
				</div>
			</div>
		</div>
	)
}

export default Login
