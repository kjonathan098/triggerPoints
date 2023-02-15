import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import { GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
	apiKey: 'AIzaSyBTmIwVlYBNDYFFACLCjuHeoiyUN9wlDsA',
	authDomain: 'tp3d-web-registration.firebaseapp.com',
	projectId: 'tp3d-web-registration',
	storageBucket: 'tp3d-web-registration.appspot.com',
	messagingSenderId: '373219136242',
	appId: '1:373219136242:web:24363aece7b963f981366b',
	measurementId: 'G-FCQX1KTQSD',
}

// Initialize Firebase
initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()

// database

const db = getFirestore()

//collection
const colRef = collection(db, 'users')

export const fireBaseAPIHandler = {
	getUsers: async () => {
		const snapshot = await getDocs(colRef)
		console.log(snapshot)
	},
}
