import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { DataContext } from '../../context/DataContext'
import { addNewPostService } from '../../services/PostServices'
import { postDataFunction } from '../../Utils/Utils'

export default function PostModal() {

    const[postModalData, setPostModalData] = useState({
        message: "",
        files: []
    })

    const {token} = useContext(AuthContext)

    const{state :{postModalDetails, isPostEdited},dispatch} = useContext(DataContext)

    const postModalHandler = (e) =>
    postDataFunction(e, postModalData, setPostModalData);

  const addNewPostHandler = () =>
    addNewPostService(postModalData, token, dispatch);

  const deletePreviewHandler = (id) =>
    deletePreviewFunc(id, postModalData, setPostModalData);

  const updatePostModalDataHandler = () => {
    const updatedPost = {
      ...postModalDetails,
      content: postModalData?.message,
      postImage:
        postModalData?.files?.length === 0 ? null : postModalData?.files,
    };
    postUpdateService(postModalDetails._id, updatedPost, token, dispatch);
  };

  const closePostModalHandler = () => {
    dispatch({
      type: ActionType.ClosePostModal,
    });
  };

    useEffect(() => {
      if (isPostEdited) {
        setPostModalData({
          message: postModalDetails?.content,
          files: postModalDetails?.postImage || [],
        });
      }
    }, [isPostEdited]);


    return(

    <div className="postModal_container flex-column">
    <div className="postModal_container-header">
      <span className="title">Edit Post</span>
      <span onClick={closePostModalHandler} className="closeModal">
        <HighlightOffIcon />
      </span>
    </div>
    <div
      className="postModal_InfoContainer"
      onClick={() => setEmojiModalOpen(false)}
    >
      <label htmlFor="postModalMessage"></label>
      <textarea
        placeholder="What's on your mind?"
        id="postModalMessage"
        maxLength={1000}
        name="message"
        value={postModalData.message}
        onChange={postModalHandler}
      >
        {postModalData.message}
      </textarea>
    </div>

    <div className="postModal_BtnContainer flex-column">
      <ul className="postModal_ImgUpload-container">
        {postModalData?.files?.map((file, id) => {
          return (
            <li className="newPostModalImg-container" key={id}>
              {file && (
                <img
                  src={file}
                  alt="post files"
                  width="150px"
                  height="150px"
                  className="newpostImg"
                />
              )}
              <span onClick={() => deletePreviewHandler(id)}> X</span>
            </li>
          );
        })}
      </ul>
      <div className="postModal_footer">
        <span>
          <label className="uploadImageLabel" htmlFor="postModalFile">
            <AddPhotoAlternateIcon />
          </label>
          <input
            type="file"
            id="postModalFile"
            accept="image/*"
            name="files"
            className="uploadImage"
            onChange={postModalHandler}
          />

          <span className="emojiPickerIcon">
            <AddReactionIcon onClick={emojiModalHandler} />
          </span>
        </span>

        {isPostEdited ? (
          <button
            onClick={updatePostModalDataHandler}
            className="btn updatepostBtn"
            disabled={
              postModalData.message.length === 0 ??
              postModalData.files.length === 0
            }
          >
            Update
          </button>
        ) : (
          <button
            onClick={addNewPostHandler}
            className="btn updatepostBtn "
            disabled={Boolean(
              postModalData.files.length === 0 &&
                postModalData.message.length === 0
            )}
          >
            Post
          </button>
        )}

       
      </div>
    </div>
  </div>
);
}
