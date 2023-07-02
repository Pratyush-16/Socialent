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

export const removeLikedPost = async (postId, token, dispatch) => {
  try {
    const { status, data } = await axios.post(
      `/api/posts/dislike/${postId}`,
      {},
      {
        headers: { authorization: token },
      }
    );

    if (status === 200 || status === 201) {
      dispatch({
        type: "removeLikedPost",
        payload: data?.posts,
      });
    }
  } catch (error) {
    console.error("removeLikedpost", error);
  }
};

export const addLikedPost = async (postId, token, dispatch) => {
  try {
    const { status, data } = await axios.post(
      `/api/posts/like/${postId}`,
      {},
      {
        headers: { authorization: token },
      }
    );

    if (status === 200 || status === 201) {
      dispatch({
        type: "likedPost",
        payload: data?.posts,
      });
    }
  } catch (error) {
    console.error("addLikedpost", error);
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

  export const getPostEditService = async (postId, dispatch) => {
    try {
      const {
        status,
        data: { post },
      } = await axios.get(`/api/posts/${postId}`);
  
      if (status === 200 || status === 201) {
        dispatch({
          type: "OpenPostModal",
          payload: {
            type: "edit",
            value: post,
          },
        });
      }
    } catch (error) {
      console.error("postEdit", error);
    }
  };

  export const postUpdateService = async (postId, post, token, dispatch) => {
    try {
      const {
        status,
        data: { posts },
      } = await axios.post(
        `/api/posts/edit/${postId}`,
        {
          postData: post,
        },
        {
          headers: { authorization: token },
        }
      );
  
      if (status === 200 || status === 201) {
        dispatch({
          type: "UpdatePost",
          payload: posts,
        });
      }
    } catch (error) {
      console.error("postEdit", error);
    }
  };