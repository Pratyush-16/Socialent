import React, { useContext, useState } from "react";
import "./AddPost.css"
import { AuthContext } from "../../context/AuthContext";
import { DataContext } from "../../context/DataContext";
import { postDataFunction } from "../../Utils/Utils";
import { addNewPostFunc } from "../../Utils/Utils";
export default function AddPost  () {
  const [newPostData, setNewPostData] = useState({
    message: "",
    files: [],
  });

  const { token } = useContext(AuthContext);

  const {
    state: { userProfile },
    dispatch,
  } = useContext(DataContext);

  

  const postHandler = (e) => postDataFunction(e, setNewPostData, newPostData);

  const addNewPostHandler = () =>
  addNewPostFunc(newPostData, setNewPostData, token, dispatch);


  return (
    <div className="addPost_container flex-column">
      <div className="addPost_InfoContainer ">
        <div className="addPost_ImgContainer">
          <img src={userProfile?.profileImage} alt="profile" />
        </div>
        <div className="addPost_message">
          <label htmlFor="addPostMessage"></label>
          <textarea
            placeholder="What's on your mind?"
            id="addPostMessage"
            maxLength={200}
            name="message"
            value={newPostData.message}
            onChange={postHandler}
          >
            {newPostData.message}
          </textarea>
        </div>
      </div>

      <div className="addPost_BtnContainer flex-column">
        
        <div className="addPost_footer">
          

          <button onClick={addNewPostHandler} className="btn postBtn">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};
