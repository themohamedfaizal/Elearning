
import http from "../AxiosMW/http-common.js"

//let loggedIn = [];
export const addUserAction = (postData) => async (dispatch, getState) => {
//   dispatch({ type: "ADDUSER_REQUEST" });
 
  try {
    
    const response = await http.post("/users", postData);
    
    dispatch({ type: "ADDUSER_SUCCESS", payload: response.data });
    console.log("Data::", response.data);
   
   } catch (error) {
    dispatch({ type: "ADDUSER_FAILURE", error });
  }
};