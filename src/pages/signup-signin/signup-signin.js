import React from 'react'
import './signup-signin.scss'
import SignIn from '../../components/sign-in/sign-in'
import Signup from '../../components/sign-up/sign-up'
const SignUpAndSignInPage = () => {
    return (
        <div className="sign-in-and-sign-up">
            <SignIn />
            <Signup />
        </div>
    )
}

export default SignUpAndSignInPage
