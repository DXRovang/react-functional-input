import './App.css';
import Input from './Input'
import Func from './Func'
import {useState} from 'react'
function App() {

  const nn = [5,26,7,300,71,8]
  const [numbers, setNumbers] = useState(nn)
  const [words, setWords] = useState(["blue", "red", "green", "red"])

  const spread = () =>{
    setNumbers(numbers=>[909,...numbers])
  }

  const changeWord = ()=>{
    let wc = []
    words.forEach((w, index) => { 
      if (w === "red"){
        w = "pink"
      }
      wc.push(w)
      console.log(index)
    })
    console.log(wc)
    
    setWords(wc)
  }

  const mapIndex = () =>{
    let list = numbers.map((_,index)=>(
      index
    ))
    console.log(list)
  }
  const spl = ()=>{
    let n = numbers
    console.log(n.slice(2,5))
  }
  const wordMap = words.map(w=><div>{w}</div>)
  const unNumMap = numbers.map(n=>n + "  ")
  const numFilt = numbers.filter(n=>(n>10)).map(n=>n + "  ")
  return (
    <>
      
      <div>
        Unsorted: {unNumMap}
      </div>
      <div>
        {numFilt}
      </div>
      <div>
        <button onClick={spread}>spread</button>
      </div>
      <div>
      <button onClick={spl}>spl</button>
      </div>
      <div>
        {wordMap}
        <button onClick={changeWord}>Change</button>
      </div>
      <Input/>
      <Func/>
      <div>
        {numbers}
        <button onClick={mapIndex}>click me</button>
      </div>
    </>
  );
}

export default App;
