import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./CounterSlice";


function App() {
  
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>React Reducer</h1>
      <div>
        <button onClick={() => dispatch(decrement())}>1씩 감소</button>
        <span>{count}</span>
        <button onClick={() => dispatch(increment())}>1씩 증가</button>
      </div>
    </div>
  );
}

export default App;
