const initialState = {
  data: [],
};
console.log(initialState.data);
export const reducers = (state = initialState, action) => {
  const { type, payload } = action;

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        data: payload,
      };
    default:
      state;
  }
};
