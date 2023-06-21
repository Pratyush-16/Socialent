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

export const getAllUsers = async(dispatch) => {
  try{
    const result = await axios.get(`/api/users`);
    console.log(result, "userslist");
    dispatch({type: "Get_All_Users", value: getAllUsers?.data?.users,
    })
  }
  catch (error) {
    console.log(error);
  }
}
