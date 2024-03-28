// import { useState } from "react"

import { useState } from "react"

// export default function Counter(){

//     const [count, setCount] = useState(0);
    
//     const handleClick = () =>{
//         const newCount = count +1;
//         setCount(newCount)
//     }

//     const handleReduce = () =>{
//         const newCount = count -1;
//         setCount(newCount);
//     }

//     return (
//         <div style={{border: "2px solid yellow"}}>
//             <h3>Counter: {count}</h3>
//             <button onClick={handleClick}>Click Me</button>
//         </div>
//     )
// }


.............................

export default function Counter(){
    
    const [count,setCount] = useState(0);

    const handleClick = () =>{
        const newCount = count +1;
        setCount(newCount);
    }

    const handleReduce = () => {
        const newCount = count -1;
        setCount(newCount)
    }

    return(
        <div>
        <h1>Count: {count} </h1>
        <button onClick={handleClick}>Click Me</button>
        <button onClick={handleReduce}>Reduce</button>

        </div>
    )
}