import { useState } from "react"
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { setDoc, doc, serverTimestamp } from "firebase/firestore"
import { db } from "../firebase.config"
import {toast} from 'react-toastify'
import { ReactComponent as ArrowRightIcon } from '../assets/svg/keyboardArrowRightIcon.svg'
import visibilityIcon from  "../assets/svg/visibilityIcon.svg"
import { Link, useNavigate } from "react-router-dom"
import OAuth from "../components/OAuth"


function SignUp() {

  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email : '',
    password : ''
  })
  const {name, email, password} = formData

  const navigate = useNavigate()

  const onChange = (e) => {
    setFormData((prevValue) => ({
      ...prevValue,
      [e.target.id] : e.target.value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const auth = getAuth()
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)

      const user = userCredential.user

      updateProfile(auth.currentUser, {
        displayName : name
      })

      const formDataCopy = {...formData}
      delete formDataCopy.password
      formDataCopy.timestamp = serverTimestamp()

      await setDoc(doc(db, 'users', user.uid),formDataCopy)

      navigate('/')
    } catch (error) {
      toast.error('Something went wrong with registration')
    }
  }

  return (
    <>
      <div className="pageContainer">
        <header>
          <div className="pageHeader">
            Welcome Back
          </div>
        </header>

        <form onSubmit={handleSubmit}>

          <input type="text" className="nameInput" 
          placeholder="Name" id="name" value={name} 
          onChange={onChange}
          />

          <input type="email" className="emailInput" 
          placeholder="Email" id="email" value={email} 
          onChange={onChange}
          />

          <div className="passwordInputDiv">
            <input type={showPassword ? 'text' : 'password'} className="passwordInput"
            placeholder="Password" id="password" value={password}
            onChange={onChange}
            />

            <img src={visibilityIcon} alt="show password" 
            className="showPassword" onClick={() => 
              setShowPassword((prevValue) => !prevValue)}
            />
          </div>
          <Link to='/forgot-password'
           className="forgotPasswordLink">
             Forgot Password
          </Link>

          <div className="signUpBar">
              <p className="signUpText">
                Sign Up
              </p>
              <button className="signUpButton">
                <ArrowRightIcon fill="#ffffff" width="34px" height="34px" />
              </button>
          </div>
        </form>

        <OAuth />

        <Link to='/sign-in' className="registerLink">
              Sign In Instead
        </Link>
      </div>
    </>
  )
}

export default SignUp