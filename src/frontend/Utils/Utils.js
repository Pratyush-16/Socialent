import {addNewPostService} from "../services/PostServices"

export const addNewPostFunc = (newPostData, setNewPostData, token, dispatch) => {
    newPostData.message.length > 1 &&
      addNewPostService(token, newPostData, dispatch);
      setNewPostData({
        message: "",
        files: [],
      });
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

    