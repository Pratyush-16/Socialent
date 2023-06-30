import {addNewPostService} from "../services/PostServices"

export const validateOnlyString = (input) => {
  return /^[a-z A-Z]+$/.test(input);
};


export const addNewPostFunc = (newPostData, setNewPostData, token, dispatch) => {
    newPostData.message.length > 1 &&
      addNewPostService(token, newPostData, dispatch);
      setNewPostData({
        message: "",
        files: [],
      });
    };  

    export const getUserFollowingList = (currentUser) => {
      return currentUser?.following?.map((item) => item?.username);
    };
    

    export const postDataFunction = (e, setNewPostData, newPostData) => {
        e.stopPropagation();
        const { name, value, files } = e.target;
        const filesUrl =
          files && [...files]?.map((file) => URL.createObjectURL(file));
      
        setNewPostData({
          ...newPostData,
          [name]: name === "message" ? value : [...newPostData.files, filesUrl],
        });
      };

    