import axios from "axios";

/*********************paser le tocken au headers*********************** */

const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common["token"] = token;
  } else {
    delete axios.defaults.headers.common["token"];
    console.log(axios.defaults.headers.common["token"]);
  }
};
export default setAuthToken;
