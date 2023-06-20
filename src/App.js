
import './App.css';
import { Routes, Route} from 'react-router-dom';
import LandingPage from './frontend/pages/LandingPage/LandingPage';

import Signup from './frontend/pages/Signup/Signup';
import Login from "./frontend/pages/Login/Login";
import Home from './frontend/pages/Home/Home';
import Explore from './frontend/pages/Explore/Explore';


function App() {
  return (
    <div className="App">
      

      <Routes>
          <Route path="/" element={<LandingPage/>} />
        <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/explore" element={<Explore  />} />

      </Routes>
    </div>
  );
}

export default App;
