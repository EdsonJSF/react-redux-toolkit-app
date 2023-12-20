import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../store/slices/counter";

export function Counter() {
  const { counterValue } = useSelector((state) => state.counterReducer);
  const dispatch = useDispatch();

  return (
    <div>
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <span>{counterValue}</span>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
    </div>
  );
}
