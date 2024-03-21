import React, { useState } from 'react';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                navigate('/');
            }).catch((error) => {
                console.log(error);
            });
    }

    return (
        <div className="sign-in-container">
            <form onSubmit={signUp}>
                <h1 className="credits">Create a new account</h1>
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