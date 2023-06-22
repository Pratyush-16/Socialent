import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { DataContext } from "../../context/DataContext";

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

  //   useEmoji(
  //     newPostData,
  //     setNewPostData
  //   );

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
            // onChange={postHandler}
          >
            {newPostData.message}
          </textarea>
        </div>
      </div>

      <div className="addPost_BtnContainer flex-column">
        <ul className="addPost_ImgUpload-container">
          {newPostData?.files?.map((file, id) => {
            return (
              <li className="newPostImg-container" key={id}>
                {file && (
                  <img
                    src={file}
                    alt="post files"
                    width="150px"
                    height="150px"
                    className="newpostImg"
                  />
                )}
                {/* <span onClick={() => deletePreviewHandler(id)}> X</span> */}
              </li>
            );
          })}
        </ul>
        <div className="addPost_footer">
          <span>
            <label className="uploadImageLabel" htmlFor="postFile">
              {/* <AddPhotoAlternateIcon /> */}
            </label>
            <input
              type="file"
              id="postFile"
              accept="image/*"
              name="files"
              className="uploadImage"
            //   onChange={postHandler}
            />
          </span>

          {/* <button onClick={addNewPostHandler} className="btn postBtn">
            Post
          </button> */}
        </div>
      </div>
    </div>
  );
};
