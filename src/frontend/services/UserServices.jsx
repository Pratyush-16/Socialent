import axios from "axios";


export const updateFollowList = async (followUserId, token, dispatch) => {
    try {
      const { status, data } = await axios.post(
        `/api/users/follow/${followUserId}`,
        {},
        {
          headers: { authorization: token },
        }
      );
  
      if (status === 200 || status === 201) {
        console.log(data);
        dispatch({
          type: "updateUserFollower",
          payload: {
            updatedUser: data.user,
            updatedFollowedUser: data.followUser,
          },
        });
      }
    } catch (error) {
      console.error("addUserFollow", error);
    }
  };