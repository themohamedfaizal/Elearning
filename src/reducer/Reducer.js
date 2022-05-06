const initialState = {
    items: {},
    loading: false,
    error: null,
  };


  const PostReducer = (state = initialState, action) =>{
    switch (action.type) {
        case "ADDUSER_SUCCESS":
            return {
              ...state,
              loading: false,
              items: {...action.payload}
            };
        case "ADDUSER_FAILURE":
            return {
              ...state,
              loading: false,
              error: action.error,
            };
        case "VALIDATE_USER_SUCCESS":
            return {
                ...state,
                loading: false,
                items: {...action.payload}
            };
        case "VALIDATE_USER_FAILURE":
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        default:
            return state;
    }
  }

  export default PostReducer;
  export const currentUser = (state) => state.items.fname;