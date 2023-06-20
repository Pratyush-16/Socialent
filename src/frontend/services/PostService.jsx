import axios from "axios";

export const getAllPost = async (dispatch) => {
  try {
    const response = await axios.get(`/api/posts`);
    console.log(response, "hello");
    dispatch({ type: "Get_All_Post", payload: response.data.posts });
  } catch (error) {
    console.log(error);
  }
};
