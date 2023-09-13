let initState = {
  data: [],
};

let reducer = (state = initState, action) => {
  const { type, payload } = action;
  console.log(action)
  switch (type) {
    case "FETCH":
      return { ...state, data: payload };

    default:
      return state;
  }
};

export default reducer;
