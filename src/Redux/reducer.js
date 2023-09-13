import { ENROL, FETCH, STUD } from "./actionTypes";

let initState = {
  data: [],
  enrol: [],
  stud: [],
};

let reducer = (state = initState, action) => {
  const { type, payload } = action;
  console.log(action);
  switch (type) {
    case FETCH:
      return { ...state, data: payload };

    case ENROL:
      return { ...state, enrol: payload };

    case STUD:
      return { ...state, stud: payload };

    default:
      return state;
  }
};

export default reducer;
