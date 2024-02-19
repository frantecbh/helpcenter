import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth'
import { auth, googleProvider } from '../utils/firebase'
import { useEffect, useState } from 'react'

export function Auth() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [user, setUser] = useState({})

  console.log(auth?.currentUser)

  useEffect(() => {
    console.log()
  }, [user])

  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password)
    } catch (err) {
      console.error(err)
    }
  }

  const singInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider)
      setUser({
        uid: auth?.currentUser?.uid,
        email: auth?.currentUser?.email,
        displayName: auth?.currentUser?.displayName,
        photoURL: auth?.currentUser?.photoURL,
      })

      console.log(user)
    } catch (err) {
      console.error(err)
    }
  }

  const logout = async () => {
    try {
      await signOut(auth)
      setUser('')
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className="flex gap-2 flex-col w-full max-w-2xl">
      <input
        type="text"
        name=""
        id="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        name=""
        id="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={signIn} className="bg-green-800 text-white px-8 py-2">
        Login
      </button>
      <button
        onClick={singInWithGoogle}
        className="bg-green-800 text-white px-8 py-2"
      >
        Login Google
      </button>
      <button onClick={logout} className="bg-green-800 text-white px-8 py-2">
        Logout
      </button>
      {/* {user && (
        <img
          className="size-5 rounded-full"
          src={user.photoURL}
          alt=""
          srcSet=""
        />
      )} */}
    </div>
  )
}
