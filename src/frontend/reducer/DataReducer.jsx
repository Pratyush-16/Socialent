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
          




              default:
                return state;
            }

            
            
           
        }



        
        
            