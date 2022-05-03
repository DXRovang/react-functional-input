import './App.css';
import Input from './Input'
import {useState} from 'react'
function App() {

  const [numbers, setNumbers] = useState([5,26,7,300,71,8])
  // const sorted = numbers.sort((a,b)=>a-b).map(n=>n + "  ")

  const spread = () =>{
    setNumbers(numbers=>[...numbers, 909])
  }
  return (
    <>
      <Input/>
      <div>
        {numbers.map(n=>n + "  ")}
      </div>
      <div>
        {numbers.filter(n=>(n>10)).map(n=>n + "  ")}
      </div>
      <div>
        {/* {sorted} */}
      </div>
      <div>
        <button onClick={spread}>spread</button>
      </div>
    </>
  );
}

export default App;
