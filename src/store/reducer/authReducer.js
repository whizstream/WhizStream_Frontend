import { authConstants } from "../actions/authActions";

const initialState = {
  userDetails: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case authConstants.SET_USER_DETAILS:
      return {
        ...state,
        userDetails: action.userDetails,
      };
    default:
      return state;
  }
};

export default reducer;
