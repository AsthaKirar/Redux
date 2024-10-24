import { useSelector,useDispatch } from "react-redux";
import { asyncdecrement,increment } from "./store/action/counterAction";
const App = () => {
  const dispatch = useDispatch();
  const {value} = useSelector((store)=>store.counter);
  const incrementhandler = (state)=>{
    dispatch(increment(value+1));
  }
  const decrementhandler = (state)=>{
    dispatch(asyncdecrement(value-1));
  }

  
  return (
    <>
    <div className="w-[80%] mt-10 p-5 bg-red-400 mx-auto">
      <h1 className="mb-10 text-2xl font-semibold">{value}</h1>
      <button onClick={incrementhandler} className="px-3 py-2 border  rounded-md mr-3 bg-green-400">Increment</button>
      <button onClick={decrementhandler} className="px-3 py-2 border bg-orange-600 rounded-md mr-3">decrement</button>
    </div>
    </>
  )
}

export default App