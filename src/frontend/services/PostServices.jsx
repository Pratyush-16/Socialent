import axios from "axios";

export const addNewPostService = async (token, post, dispatch) => {
  try {
    const {
      status,
      data: { posts },
    } = await axios.post(
      `/api/posts`,
      {
        postData: post,
      },
      {
        headers: { authorization: token },
      }
    );

    if (status === 200 || status === 201) {
      dispatch({
        type: "addNewPost",
        payload: {
          newpost: posts,
        },
      });
    }
  } catch (error) {
    console.log("addnewpost", error);
  }
};

export const postBookmarkService = async (
    postId,
    token,
    dispatch,
    username
  ) => {
    try {
      const { status, data } = await axios.post(
        `/api/users/bookmark/${postId}`,
        {},
        {
          headers: { authorization: token },
        }
      );
  
      if (status === 200 || status === 201) {
        dispatch({
          type: "addBookmark",
          payload: {
            username: username,
            bookmarkValue: data?.bookmarks,
          },
        });
      }


      console.log(data)
    } catch (error) {
      console.error("postBookmark", error);
    }
  };
  
  export const removeBookmarkService = async (
    postId,
    token,
    dispatch,
    username
  ) => {
    try {
      const { status, data } = await axios.post(
        `/api/users/remove-bookmark/${postId}`,
        {},
        {
          headers: { authorization: token },
        }
      );
  
      if (status === 200 || status === 201) {
        dispatch({
          type: "removeBookmark",
          payload: {
            username: username,
            bookmarkValue: data?.bookmarks,
          },
        });
      }
    } catch (error) {
      console.error("removebookmark", error);
    }
  };