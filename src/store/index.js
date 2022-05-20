import { createStore } from "redux";

let reducerFunc = (state, action) => {
  if (action.type === "INC") {
    return { counter: state.counter + 1 };
  } else if (action.type === "DEC") {
    return { counter: state.counter - 1 };
  }

  return state;
};

let store = createStore(reducerFunc);

export default store;
