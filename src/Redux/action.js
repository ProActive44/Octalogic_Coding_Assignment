import axios from "axios";
import { ENROL, FETCH, STUD } from "./actionTypes";

export const getdata = (dispatch) => {
  axios
    .get("https://octalogic-assignment-jsonserver.onrender.com/Courses")
    .then((res) => dispatch({ type: FETCH, payload: res.data }))
    .catch((error) => console.log(error));
};

export const getEnrol = (dispatch) => {
  axios
    .get("https://octalogic-assignment-jsonserver.onrender.com/latestEnrol")
    .then((res) => dispatch({ type: ENROL, payload: res.data }))
    .catch((error) => console.log(error));
};

export const getStudents = (dispatch) => {
  axios
    .get("https://octalogic-assignment-jsonserver.onrender.com/Students")
    .then((res) => dispatch({ type: STUD, payload: res.data }))
    .catch((error) => console.log(error));
};
