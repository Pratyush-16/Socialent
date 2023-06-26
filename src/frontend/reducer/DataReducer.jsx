export const initialState = {
    posts:[],
    users:[],
    userProfile:{},
    // bookmarks:[]
}

export const dataReducer = (state,action)=> {
        switch(action.type){
            case "InitialServerData": {
                if (action.payload.type === "allPosts") {
                  return { ...state, posts: action.payload.value };
                }
          
                if (action.payload.type === "allUsers") {
                  return {
                    ...state,
                    users: action.payload.value,
                    userProfile: action.payload.currentUser,
                  };
                }
          
                if (action.payload.type === "userBookmarkData") {
                  return {
                    ...state,
                    users: [
                      ...state.users.map((item) =>
                        item._id === action.payload.currentUser._id
                          ? { ...item, bookmarks: [...action.payload.value] }
                          : item
                      ),
                    ],
                  };
                }
          
                return state;

              }

              case "getProfileDetails": {
                return {
                  ...state,
                  profileDetails: action.payload,
                };
              }


              case "addBookmark": {
                const updatedUserData = state.users.map((user) => {
                  return user.username === action.payload.username
                    ? {
                        ...user,
                        bookmarks: [...action.payload.bookmarkValue],
                      }
                    : user;
                });
          
                return {
                  ...state,
                  users: updatedUserData,
                  userProfile: {
                    ...state.userProfile,
                    bookmarks: [...action.payload.bookmarkValue],
                  },
                };
              } 

              case "removeBookmark": {
                const updatedUserData = state.users.map((user) => {
                  return user.username === action.payload.username
                    ? {
                        ...user,
                        bookmarks: [...action.payload.bookmarkValue],
                      }
                    : user;
                });
                return {
                  ...state,
                  users: updatedUserData,
                  userProfile: {
                    ...state.userProfile,
                    bookmarks: [...action.payload.bookmarkValue],
                  },
                };
              } 
          



              case "addNewPost": {
                return {
                  ...state,
                  posts: action.payload.newpost,
                  isPostModalOpen: false,
                  isPostEdited: false,
                  postModalDetails: null,
                };
              }


              case "likedPost": {
                return {
                  ...state,
                  posts: [...action.payload],
                };
              }
          
              case "removeLikedPost": {
                return {
                  ...state,
                  posts: [...action.payload],
                };
              }

              case "openProfileModal": {
                return {
                  ...state,
                  isProfileModalOpen: true,
                  profileModalDetails: action.payload,
                };
              }

              case "updateUserFollower": {
                return {
                  ...state,
                  users: [
                    ...state.users.map((item) => {
                      return item._id !== action.payload.updatedUser._id &&
                        item._id !== action.payload.updatedFollowedUser._id
                        ? item
                        : item._id === action.payload.updatedUser._id
                        ? action.payload.updatedUser
                        : action.payload.updatedFollowedUser;
                    }),
                  ],
                  userProfile: action.payload.updatedUser,
                };
              }

              case "updateEditedProfile": {
                const updatedUserPost = {
                  firstname: action.payload.firstname,
                  lastname: action.payload.lastname,
                  profileImage: action.payload.profileImage,
                };
          
                return {
                  ...state,
                  users: [
                    ...state.users.map((item) =>
                      item._id === action.payload._id ? action.payload : item
                    ),
                  ],
          
                  userProfile: action.payload,
                  posts: [
                    ...state.posts.map((item) =>
                      item.username === action.payload.username
                        ? { ...item, ...updatedUserPost }
                        : item
                    ),
                  ],
                  isProfileModalOpen: false,
                  profileModalDetails: null,
                };
              }
          

          




              default:
                return state;
            }

            
            
           
        }



        
        
            