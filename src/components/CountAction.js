import { useSelector } from "react-redux"



export default function CounterAction(){
    const count = useSelector((state)=>state.counterValue.value)
    console.log("iam in CounterAction")

    return <div>
         Counter : {count}
    </div>
}