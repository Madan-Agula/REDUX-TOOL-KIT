import { useDispatch } from "react-redux"
import { decrement, increment, reset } from "../features/counterSlice"



export default function Count(){
     const dispatch = useDispatch()
     console.log("iam in Display")
    return <div>
            <button onClick={()=>dispatch(decrement())}>-</button>
            <button onClick={()=>dispatch(reset({
                value : 0
            }))}>Reset</button>
            <button onClick={()=>dispatch(increment())}>+</button>
        </div>
}