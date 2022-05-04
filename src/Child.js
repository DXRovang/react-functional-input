const Child = ({test, setTest}) => {
  return ( 
    <div>
      {test.concat('. And in child. ')}
      <button onClick={()=>setTest(test=>test.concat(', I think.'))}>Click me</button>
    </div>
   );
}
 
export default Child;