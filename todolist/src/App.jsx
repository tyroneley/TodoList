import './App.css';
import SignIn  from './components/auth/SignIn';
import { TodoWrapper } from './components/TodoWrapper';
import SignUp from './components/auth/SignUp';
import Profile from './components/auth/Profile';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <h1 className="credits">Sir Tyrone Raphael Joseph Vargas - 2702219532</h1>
            <Router>
                <Routes>
                    <Route path='/' element={<SignIn/>}></Route>
                    <Route path='/todowrapper' element={<TodoWrapper />}></Route>
                    <Route path='/signup' element={<SignUp />}></Route>
                    <Route path='/profile' element={<Profile  />}></Route>
                </Routes>
            </Router>

            {/* <TodoWrapper /> */}
        </div>
    );
}

export default App;