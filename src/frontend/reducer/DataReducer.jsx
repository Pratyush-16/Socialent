export const initialState = {
    posts:[],
    userProfile:{}
}

export const dataReducer = (state,action)=> {
        switch(action.type){
            case "Get_All_Post":{
                return {
                    ...state, posts:[...action.payload]
                }
            }

                default: {
                return state
                }
        }

}
