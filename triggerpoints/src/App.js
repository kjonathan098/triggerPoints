import './App.css'
import Login from './components/1_Login_Signup_Menu/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Tp3dApp from './components/2_App/Tp3dApp'
import { fireBaseAPIHandler } from './firebase'
import { useEffect } from 'react'
function App() {
	useEffect(() => {
		fireBaseAPIHandler.getUsers()
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
