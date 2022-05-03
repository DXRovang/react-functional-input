import {useState} from 'react'


const Input = () => {
const [name, setName] = useState('')

const handleSubmit = (e)=>{
  e.preventDefault()
  const result = { name }
  console.log(result)
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
</>
   );
}
 
export default Input;