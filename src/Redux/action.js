import axios from "axios";

export const getdata = (dispatch) => {
  axios
    .get("https://octalogic-assignment-jsonserver.onrender.com/Courses")
    .then((res) => {dispatch({ type: "FETCH", payload: res.data }); console.log(res.data)})
    .catch((error) => console.log(error));
};
