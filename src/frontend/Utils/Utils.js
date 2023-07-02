import { useContext, useState } from "react";
import {addNewPostService} from "../services/PostServices"
import { DataContext } from "../context/DataContext";


 export const timeAgo = (date) => {
  let currentDate = new Date();
  let yearDiff = currentDate.getFullYear() - new Date(date).getFullYear();

  if (yearDiff > 0) return `${yearDiff} year${yearDiff === 1 ? "" : "s"} ago`;

  let monthDiff = currentDate.getMonth() - new Date(date).getMonth();
  if (monthDiff > 0)
    return `${monthDiff} month${monthDiff === 1 ? "" : "s"} ago`;

  let dateDiff = currentDate.getDate() - new Date(date).getDate();
  if (dateDiff > 0) return `${dateDiff} day${dateDiff === 1 ? "" : "s"} ago`;

  let hourDiff = currentDate.getHours() - new Date(date).getHours();
  if (hourDiff > 0) return `${hourDiff} hour${hourDiff === 1 ? "" : "s"} ago`;

  let minuteDiff = currentDate.getMinutes() - new Date(date).getMinutes();
  if (minuteDiff > 0)
    return `${minuteDiff} minute${minuteDiff === 1 ? "" : "s"} ago`;
  return `a few seconds ago`;
};

export const useSearch = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const {
    state: { users },
  } = useContext(DataContext);

  const searchHandler = (e) => {
    setSearchInput(e.target.value);

    const result = users.filter((user) => {
      return user.firstname
        .toLowerCase()
        .toString()
        .startsWith(e.target.value.trim().toLowerCase());
    });
    setSearchResult(result);
  };

  const clearSearchHandler = () => {
    setSearchInput("");
  };

  return {
    searchInput,
    searchHandler,
    searchResult,
    clearSearchHandler,
  };
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

      export const deletePreviewFunction = (id, data, setData) => {
        setData({
          ...data,
          files: data.files.filter((item, index) => index !== id),
        });
      };
    