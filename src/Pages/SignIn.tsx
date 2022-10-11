import React from 'react'
import { Container } from './SignInStyle'
import { AiOutlineGoogle } from 'react-icons/ai';

export default function SignIn() {
    return (
        <Container>
            <h1>Authentication with account</h1>

            <span>
                Sign in with your <strong>Google Account</strong>, making it easy to validate your account
            </span>

            <button type='button'>
                Sign in your Google Account <AiOutlineGoogle/>
            </button>
        </Container>
    )
}