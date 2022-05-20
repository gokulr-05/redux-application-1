import { createStore } from "redux";

let reducerFunc = (state, action) => {
  if (action.type === "INC") {
    return { counter: state.counter + 1, showCounter: state.showCounter };
  } else if (action.type === "DEC") {
    return { counter: state.counter - 1, showCounter: state.showCounter };
  } else if (action.type === "INCVAL") {
    return {
      counter: state.counter + action.value,
      showCounter: state.showCounter,
    };
  } else if (action.type === "showcounter") {
    return {
      showCounter: !state.showCounter,
      counter: state.counter,
    };
  }

  return state;
};

let store = createStore(reducerFunc, { counter: 0, showCounter: true });

export default store;
