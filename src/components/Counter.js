import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
const Counter = () => {
  let dispatchFunc = useDispatch();
  let counter = useSelector((state) => {
    return state.counter;
  });

  let showCounterr = useSelector((state) => {
    return state.showCounter;
  });

  let inc = (e) => {
    dispatchFunc({ type: "INC" });
  };
  let dec = (e) => {
    dispatchFunc({ type: "DEC" });
  };

  let incVal = (e) => {
    dispatchFunc({ type: "INCVAL", value: 5 });
  };

  let toggleCounterHandler = () => {
    dispatchFunc({ type: "showcounter" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounterr && <div className={classes.value}>{counter}</div>}
      <div className="my-3 d-flex align-items-center gap-3 justify-content-center">
        <button onClick={inc} className="btn btn-primary text-capitalize">
          increment
        </button>
        <button onClick={incVal} className="btn btn-primary text-capitalize">
          increase by 5
        </button>
        <button onClick={dec} className="btn btn-primary text-capitalize">
          decrement
        </button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
