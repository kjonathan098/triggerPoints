import { initializeApp } from 'firebase/app'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore, collection, getDocs } from 'firebase/firestore'

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

// init

const db = getFirestore()
export const auth = getAuth()

//collection
const colRef = collection(db, 'users')

export const fireBaseAPIHandler = {
	getCurrentUser: async () => {
		getAuth().onAuthStateChanged((user) => {
			return user
		})
	},
	getUsers: async () => {
		const snapshot = await getDocs(colRef)
		console.log(snapshot)
	},
	signinWithGoogle: async () => {
		const provider = new GoogleAuthProvider()
		try {
			const result = await signInWithPopup(auth, provider)
			const user = result.user
		} catch (error) {
			console.log('error')
		}
	},
}
