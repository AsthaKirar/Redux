export {increment} from "../reducers/counterSlice";
import {decrement} from "../reducers/counterSlice";
export const asyncdecrement = (value) =>(dispatch,getState)=>{
    console.log(getState());
    setTimeout(()=>{
        dispatch(decrement(value))
    },2000)
}