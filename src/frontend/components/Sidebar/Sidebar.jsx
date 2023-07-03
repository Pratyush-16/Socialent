import { NavLink } from "react-router-dom";
import "./Sidebar.css"
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import { DataContext, useData } from "../../context/DataContext";
import { useContext } from "react";


const SideBar = () => {
  const {
    state: { userProfile },
    dispatch,
  } = useContext(DataContext);

  const sideBarAddPostHandler = () => {
    dispatch({
      type: "OpenPostModal",
      payload: {
        type: "newPost",
        value: null,
      },
    });
  };

  return (
    <section className="sideBar_container ">
      <ul className="sideBar_container-list flex-column ">
        <li className="sideBar_container-listItem">
          <NavLink to="/">
            <span>
              <HomeIcon />
            </span>
            <span className="home">Home</span>
          </NavLink>
        </li>
        <li className="sideBar_container-listItem">
          <NavLink to="/explore">
            <span>
              <ExploreIcon />
            </span>
            <span className="explore">Explore</span>
          </NavLink>
        </li>
        <li className="sideBar_container-listItem">
          <NavLink to="/bookmarks">
            <span>
              <BookmarkIcon />
            </span>
            <span className="bookmarks">Bookmarks</span>
          </NavLink>
        </li>
        <li className="sideBar_container-listItem">
          <NavLink to="/likedPost">
            <span>
              <FavoriteIcon />
            </span>
            <span className="likeposts">Like Posts</span>
          </NavLink>
        </li>
        <li className="sideBar_container-listItem">
          <NavLink to={`/profile/${userProfile?._id}`}>
            <span>
              <AccountCircleIcon />
            </span>
            <span className="profile">Profile</span>
          </NavLink>
        </li>
        <li className="sideBar_container-listItem">
          <span onClick={sideBarAddPostHandler} className="btn postBtn">
            Post
          </span>
        </li>
      </ul>
    </section>
  );
};

export default SideBar;


// import React, { useContext } from 'react'
// import "./Sidebar.css"
// import { DataContext } from '../../context/DataContext'
// import { AuthContext } from '../../context/AuthContext'
// import { getUserFollowingList } from '../../Utils/Utils'
// import { useNavigate } from 'react-router'
// import { updateFollowList } from '../../services/UserServices'

// export default function Sidebar() {

//     const {state: {users,userProfile},dispatch} = useContext(DataContext)
//     const {token} = useContext(AuthContext)
//     const navigate = useNavigate()

//     const currentUserFollowing = getUserFollowingList(userProfile)

//     const suggestProfile = users?.filter(
//         (user) =>
//           !currentUserFollowing?.includes(user.username) &&
//           user.username !== userProfile?.username
//       );

    
//      const profileHandler = (profileId) => {
//         navigate(`/profile/${profileId}`);
//       };

//      const followHandler = (e, followUserId) => {
//         e.stopPropagation();
//         updateFollowList(followUserId, token, dispatch);
//       };


//   return (
//     <div>

// <section className="suggestion_container">
//       <p className="suggestion_title">Who to follow?</p>
//       <ul className="flex-column">
//         {suggestProfile.slice(0, 5)?.map((profile) => (
//           <li
//             key={profile.username}
//             className="suggestionListItem"
//             onClick={() => profileHandler(profile._id)}
//           >
//             <div className="suggestionListItem_ImgContainer">
//               <img src={profile.profileImage} alt="profile" />
//             </div>

//             <div className="suggestionListItem_textContainer flex-column">
//               <span className="fullname">
//                 {profile?.firstname} {profile?.lastname}
//               </span>
//               <span className="username">@{profile.username}</span>
//             </div>

//             <div className="suggestionListItem_BtnContainer">
//               <button
//                 className="btn followBtn"
//                 onClick={(e) => followHandler(e, profile._id)}
//               >
//                 follow
//               </button>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </section>
      
//     </div>
//   )
// }
