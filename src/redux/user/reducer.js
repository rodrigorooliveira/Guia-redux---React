import UserActionTypes from "./action-types";

const initalState = {
    currentUser: null,
}

const userReducer = (state = initalState, action) => {
   switch (action.type) {
      case UserActionTypes.LOGIN: 
        return { ...state, currentUser: action.payload};
      case UserActionTypes.LOGOUT:
         return { ...state, currentUser: null};
      default: 
         return state;     
   };
};
export default userReducer;