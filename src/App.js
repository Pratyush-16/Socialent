
import './App.css';
import { Routes, Route} from 'react-router-dom';
import LandingPage from './frontend/pages/LandingPage/LandingPage';

import Signup from './frontend/pages/Signup/Signup';
import Login from "./frontend/pages/Login/Login";
import Home from './frontend/pages/Home/Home';
import Explore from './frontend/pages/Explore/Explore';
import { Navbar } from './frontend/components/Navbar/Navbar';
import Bookmarks from './frontend/pages/Bookmarks/Bookmarks';
import { RequireAuth } from './frontend/components/RequireAuth';
import LikedPost from './frontend/pages/LikedPost/LikedPost';
import ProfilePage from './frontend/pages/ProfilePage/ProfilePage';


function App() {
  return (
    <div className="App">
       <Navbar/>
      

      <Routes>
          
         
         
        

          <Route path="/" element={<RequireAuth><Home/></RequireAuth>}/>
            <Route path="/explore" element={<RequireAuth><Explore  /></RequireAuth>} />
          <Route path="/bookmarks" element={<RequireAuth><Bookmarks  /></RequireAuth>} />
          <Route path="/likedpost" element={<RequireAuth><LikedPost  /></RequireAuth>} />
          <Route path="/profile/:profileId" element={<RequireAuth><ProfilePage  /></RequireAuth>} />
          

          <Route path="/user" element={<LandingPage/>}/>
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} /> 
    
             
         
         
         

      </Routes>
    </div>
  );
}

export default App;
