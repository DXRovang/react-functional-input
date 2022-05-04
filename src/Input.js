import {useState} from 'react'
import Child from './Child'

const Input = () => {

const listArray = ["John", "Amy", "Ted", "Jane", "Mark", "Sue"]
const [name, setName] = useState('')
const [test, setTest] = useState(' Here in Input')
const [list, setList] = useState(listArray)

const handleSubmit = (e)=>{
  e.preventDefault()
  const result = { name }
  console.log(result)
}

const updateList = () =>{
  let newArray = listArray.filter((_, index)=>(
    index !== 1
  ))

//  [ ...newArray.slice(0,1), "Pippo",...newArray.slice(1)]
  setList(
    [...newArray.slice(0,1), "Pippo",...newArray.slice(1)]
  )
}
  return ( 

<>
    <form 
    onSubmit={handleSubmit}
    >
    <label>
      Name:
      <input
        type="text"
        value={name}
        onChange={e=>setName(e.target.value)}
      >
      </input>
    </label>
    <input type="submit" value="Submit"/>
    </form>
    <div>{name}</div>
    <Child test={test} setTest={setTest}/>
    {list.map(item=><div>{item}</div>)}
    <button onClick={updateList}>update List</button>
</>
   );
}
 
export default Input;