import React, { useState } from 'react'
import { Container } from './SignInStyle'
import { AiOutlineGoogle } from 'react-icons/ai';
import { GoogleAuthProvider, signInWithPopup, User } from 'firebase/auth';
import { auth } from '../services/firebase'

export default function SignIn() {
    const [ user, setUser ] = useState<User>({} as User);


    function handleGoogleSignIn(){
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
        .then((result) => {
            setUser(result.user)
        }).catch((error) => {
            console.log(error)
        })
    }

    return (
        <Container>

            <div className='user'>
                {user.photoURL && <img src={user.photoURL}/>}
                <strong>{user.displayName}</strong>
                <small>{user.email}</small>
            </div>

            <h1>Authentication with account</h1>

            <span>
                Sign in with your <strong>Google Account</strong>, making it easy to validate your access
            </span>

            <button type='button' onClick={handleGoogleSignIn}>
                Sign in your Google Account <AiOutlineGoogle/>
            </button>
        </Container>
    )
}