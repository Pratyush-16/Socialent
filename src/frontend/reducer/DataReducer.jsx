export const initialState = {
    posts:[],
    users:[],
    userProfile:{},
    // bookmarks:[]
}

export const dataReducer = (state,action)=> {
        switch(action.type){
            case "Get_All_Post":{
                return {
                    ...state, posts:[...action.payload]
                }
            }

            case "Get_All_Users": {
                return{
                    ...state, users:action.payload.vlaue,
                    userProfile:action.payload.currentUser
                }
            }

                default: {
                return state
                }
        }

}
