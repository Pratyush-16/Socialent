import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./frontend/pages/LandingPage/LandingPage";

import Signup from "./frontend/pages/Signup/Signup";
import Login from "./frontend/pages/Login/Login";
import Home from "./frontend/pages/Home/Home";
import Explore from "./frontend/pages/Explore/Explore";
import  {Navbar } from "./frontend/components/Navbar/Navbar";
import Bookmarks from "./frontend/pages/Bookmarks/Bookmarks";
import { RequireAuth } from "./frontend/components/RequireAuth";
import LikedPost from "./frontend/pages/LikedPost/LikedPost";
import ProfilePage from "./frontend/pages/ProfilePage/ProfilePage";
import { useContext } from "react";
import { DataContext } from "./frontend/context/DataContext";
import PostModal from "./frontend/components/Modal/PostModal";
import ProfileModal from "./frontend/components/Modal/ProfileModal";

function App() {

  const {
    state: { isPostModalOpen, isProfileModalOpen },
  dispatch,
} = useContext(DataContext);



const closeModalOverlayHandler = (e) => {
if (
 e.target.className === "profileModal_overlay" ||
 e.target.className === "profileModal-section"
) {
 dispatch({
   type: "CloseProfileModal",
 });
}

if (
 e.target.className === "postModal_overlay" ||
 e.target.className === "postModal_section"
) {
 dispatch({
   type:"ClosePostModal",
 });
}
};
  return (
    <div className="App">
     
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
               <Navbar />
              <Home />
            </RequireAuth>
          }
        />
        <Route
          path="/explore"
          element={
            <RequireAuth>
               <Navbar />
              <Explore />
            </RequireAuth>
          }
        />
        <Route
          path="/bookmarks"
          element={
            <RequireAuth>
               <Navbar />
              <Bookmarks />
            </RequireAuth>
          }
        />
        <Route
          path="/likedpost"
          element={
            <RequireAuth>
               <Navbar />
              <LikedPost />
            </RequireAuth>
          }
        />
        <Route
          path="/profile/:profileId"
          element={
            <RequireAuth>
               <Navbar />
              <ProfilePage />
            </RequireAuth>
          }
        />

        <Route path="/user" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

      {isPostModalOpen && (
        <div
          className="postModal_overlay"
          onClick={(e) => {
            closeModalOverlayHandler(e);
          }}
        >
          <PostModal />
        </div>
      )}

      {isProfileModalOpen && (
        <div
          className="profileModal_overlay"
          onClick={(e) => {
            closeModalOverlayHandler(e);
          }}
        >
          <ProfileModal />
        </div>
      )}

      <div className="add-post-button">
        <button> Add Post</button>
      </div>

      
    </div>
  );
}

export default App;
