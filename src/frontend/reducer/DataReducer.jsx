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
                        item.id === action.payload.currentUser.id
                          ? { ...item, bookmarks: [...action.payload.value] }
                          : item
                      ),
                    ],
                  };
                }
          
                return state;
              }
              default:
                return state;
            }
            
           
        }



        
        
            