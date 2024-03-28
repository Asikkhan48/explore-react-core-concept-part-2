import { useState } from "react"

export default function Payer() {

    const [count, setCount] = useState(0)
    
    const payerStyle = {
        border: "2px solid pink",
        margin: "10px",
        padding: "10px",
        borderRadius: "20px"

    }

    const handleAdd =() =>{
        const newCount = count + 1
        setCount(newCount)
    }

    const handleRemove = () =>{
        const newCount = count - 1
        setCount(newCount)
    }



    return (
        <div style={payerStyle}>
            <h3>Player: {count}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}