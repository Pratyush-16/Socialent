import { useContext, useEffect, useState } from "react";
import {addNewPostService} from "../services/PostServices"
import { DataContext } from "../context/DataContext";


export const validateOnlyString = (input) => {
  return /^[a-z A-Z]+$/.test(input);
};


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
    newPostData.message?.length > 1 &&
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
        const { name, value,  } = e.target;
       
      
        setNewPostData({
          ...newPostData,
          [name]: value 
        });
      };

      export const deletePreviewFunction = (id, data, setData) => {
        setData({
          ...data,
          files: data.files.filter((item, index) => index !== id),
        });
      };

      export const useClickedOutsideDropBox = (
        dropBoxstate,
        setDropBoxState,
        refState
      ) => {
        useEffect(() => {
          const checkIfClickedOutside = (e) => {
            // If the menu is open and the clicked target is not within the menu,
            // then close the menu
            if (
              dropBoxstate &&
              refState.current &&
              !refState.current.contains(e.target)
            ) {
              setDropBoxState(false);
            }
          };
      
          document.addEventListener("mousedown", checkIfClickedOutside);
      
          return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", checkIfClickedOutside);
          };
        }, [dropBoxstate, refState, setDropBoxState]);
      };


      export const userFeedPost = (posts, filterType, userFollowing, userInfo) => {
        //console.log(posts, filterType, userFollowing, userInfo ,"many console")
        let finaluserfeed = posts.filter(
          (post) =>
            userFollowing.includes(post.username) ||
            post.username === userInfo.username
        );
        if (filterType === 'Trending') {
          finaluserfeed = [...finaluserfeed].sort(
            (a, b) => b.likes.likeCount - a.likes.likeCount
          );
        } else {
          finaluserfeed =
            filterType === 'Oldest'
              ? [...finaluserfeed].sort(
                  (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
                )
              : [...finaluserfeed].sort(
                  (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
                );
        }
        return finaluserfeed;
      };
      
      