import React, { useState } from 'react';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import SignIn from './SignIn';
import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: 'todo',
        element: <SignIn/>
    }
])

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                <RouterProvider router={router} />
            }).catch((error) => {
                console.log(error);
            });
    }

    return (
        <div className="sign-in-container">
            <form onSubmit={signUp}>
                <h1>Create a new account</h1>
                <input
                    type="email"
                    placeholder="Enter your email here"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                >
                </input>
                <input
                    type="password"
                    placeholder="Enter your password here"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                >
                </input>
                <button type="submit">
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default SignUp