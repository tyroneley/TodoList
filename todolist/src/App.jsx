import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthDetails from './components/auth/AuthDetails';
import SignIn  from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import { TodoWrapper } from './components/TodoWrapper';

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path='/todowrapper' component={TodoWrapper}></Route>
                </Routes>
            </Router>

            <h1 className="credits">Sir Tyrone Raphael Joseph Vargas - 2702219532</h1>
            <SignIn></SignIn>
            <SignUp></SignUp>
            <AuthDetails></AuthDetails>
            {/* <TodoWrapper /> */}
        </div>
    );
}

export default App;