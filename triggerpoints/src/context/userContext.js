import React, { createContext, useEffect, useState } from 'react'

export const userContext = createContext({})

function UserProvider({ children }) {
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	return (
		<userContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>{children}</userContext.Provider>
	)
}

export default UserProvider
