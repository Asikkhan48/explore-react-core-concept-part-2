import './App.css'
import Counter from './Counter'
import Friends from './Friends'
import Payer from './Payer'
import Users from './Users'
import Friends from './Friends'

function App() {

    function handleClick(){
      alert("button click")
    }

    const handleClick2 = () =>{
      alert("Click Button 2")
    }

    const addtoFive =() =>{
      alert(num+5);
    }

  return (
    <>
      
      <h3>React Core Concept 2</h3>
      <Friends></Friends>
      <Users></Users>


      <Counter></Counter>
      <Payer></Payer>


      <button onClick={handleClick}>Click Me</button>
      
      <button onClick={handleClick2}>Click-2</button>
      <button onClick={ () => alert("click-3") }>Click-3</button>

      <button onClick={ () => alert("click-4")} >Button-4</button>
      <button onClick={() => addtoFive(3)}>On Click</button>
    </>
  )
}

export default App
