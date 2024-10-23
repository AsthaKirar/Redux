import { useSelector,useDispatch } from "react-redux";
import { asyncdecrement,increment } from "./store/action/counterAction";
const App = () => {
  const dispatch = useDispatch();
  const data = useSelector((state)=>state);
  console.log(data);
  return (
    <div>App</div>
  )
}

export default App