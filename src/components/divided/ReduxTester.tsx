import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../store/redux";
import {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
} from "../../features/counter/counterSlice";

const ReduxTester = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch: AppDispatch = useDispatch();
  return (
    <div style={{ marginTop: "120px" }}>
      <button
        style={{ width: "30px", height: "30px", border: "1px solid black" }}
        onClick={() => dispatch(incrementByAmount(500))}
      >
        +5
      </button>
      <button
        style={{ width: "30px", height: "30px", border: "1px solid black" }}
        onClick={() => dispatch(increment())}
      >
        +
      </button>
      <span
        style={{ width: "30px", height: "30px", border: "1px solid black" }}
      >
        {count}
      </span>
      <button
        style={{ width: "30px", height: "30px", border: "1px solid black" }}
        onClick={() => dispatch(decrement())}
      >
        -
      </button>
      <button
        style={{ width: "30px", height: "30px", border: "1px solid black" }}
        onClick={() => dispatch(decrementByAmount(200))}
      >
        -5
      </button>
    </div>
  );
};

export default ReduxTester;
