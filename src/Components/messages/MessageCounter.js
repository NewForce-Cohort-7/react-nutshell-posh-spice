import { useState } from "react"
export const Counter = () => {

    let [counter, setCounter] = useState(0)






    return (
        <div className="counterBox">
        <button
        onClick={()=> {
            let currentNumber = counter + 1
            setCounter(currentNumber)
        }}
        > 👍 add to the counter</button>

        <p>{counter}</p>
        </div>
    )
}