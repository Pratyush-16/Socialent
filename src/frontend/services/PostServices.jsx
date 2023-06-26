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