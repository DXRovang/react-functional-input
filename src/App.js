import './App.css';
import Input from './Input'
import {useState} from 'react'
function App() {

  const nn = [5,26,7,300,71,8]
  const [numbers, setNumbers] = useState(nn)
  const [words, setWords] = useState(["blue", "red", "green"])

  const spread = () =>{
    setNumbers(numbers=>[909,...numbers])
  }

  const changeWord = ()=>{
    let wc = []
    words.forEach(w => { 
      if (w === "red"){
        w = "pink"
      }
      wc.push(w)
    })
    console.log(wc)
    setWords(wc)

    // let r = words.map(w => { 
    //   if (w === "red"){
    //     w = "pink"
    //   }
    // })
    // setWords(r)
  }

  const spl = ()=>{
    let n = numbers
    console.log(n.slice(2,5))
  }

  return (
    <>
      <Input/>
      <div>
        Unsorted: {numbers.map(n=>n + "  ")}
      </div>
      <div>
        {numbers.filter(n=>(n>10)).map(n=>n + "  ")}
      </div>
      <div>
        <button onClick={spread}>spread</button>
      </div>
      <div>
      <button onClick={spl}>spl</button>
      </div>
      <div>
        {words.map(w=><div>{w}</div>)}
        <button onClick={changeWord}>Change</button>
      </div>

    </>
  );
}

export default App;
