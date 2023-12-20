import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  decrementByAmount,
  increment,
  incrementByAmount,
} from "../store/slices/counter";

export function Counter() {
  const { counterValue } = useSelector((state) => state.counterReducer);
  const dispatch = useDispatch();

  return (
    <div>
      <span>{counterValue}</span>

      <br />
      <br />

      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>

      <span> </span>

      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>

      <br />
      <br />

      <button
        aria-label="Increment by value"
        onClick={() => dispatch(incrementByAmount(2))}
      >
        Increment By 2
      </button>

      <span> </span>

      <button
        aria-label="Decrement by value"
        onClick={() => dispatch(decrementByAmount(2))}
      >
        Increment By 2
      </button>
    </div>
  );
}
