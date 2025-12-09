
function Display(data) {
    const {name,num,obj,arrnum}=data
  return (
    <>
    <h1>hello {name}</h1>
    <h2>The number is {num}</h2>
    <h3>The arr value name is {obj.name}</h3>
    <h3>The arr value gender is  {obj.gender}</h3>
    <h3>The arrnum valuea are :</h3>
    <ul>    
        {
            arrnum.map((value,index)=>{
                    return <li> {value} [index = {index}]</li>
            })
        }
    </ul>
   <h1>this is from Display()</h1>
   </>
  )
}

export default Display
