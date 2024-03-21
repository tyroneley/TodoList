import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';


const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((loginDetails) => {
                navigate('/todowrapper');
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const signUp = (e) => {
        navigate('/signup');
    }

    return (
        <div className="sign-in-container">
            <form onSubmit={signIn}>
                <h1 className="credits">Log In to your Account</h1>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                ></input>
                <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                ></input>
                <button type="submit">Log In</button>
            </form>

            <button onClick={signUp}>Sign Up</button>
        </div>
    );
};

export default SignIn