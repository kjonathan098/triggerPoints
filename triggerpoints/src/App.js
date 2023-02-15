import './App.css'
import Login from './components/1_Login_Signup_Menu/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Tp3dApp from './components/2_App/Tp3dApp'
import { useContext, useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import { userContext } from './context/userContext'

function App() {
	const { isLoggedIn, setIsLoggedIn } = useContext(userContext)
	console.log(isLoggedIn)

	onAuthStateChanged(auth, (user) => {
		setIsLoggedIn(user)
	})

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/app" element={<Tp3dApp />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
