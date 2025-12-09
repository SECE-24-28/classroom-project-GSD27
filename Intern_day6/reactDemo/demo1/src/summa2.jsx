import { useState } from "react"


// without setIsNew

// function Display1()
// {
//     const [name, setName] = useState("Raghul")
//     console.log("Display 1 : my name is",{name})
//     function ChangeName(Name)
//     {
//         console.log("Display 1 : my new name is", {Name})
//         setName(Name)
//     }

//     return(
//         <>
//             <h1>Display 1: my old name is {name}</h1>
//             <button onClick={()=>{ChangeName('Raghul Sekar')}}>Click Here to change name !!</button>
//         </>
//     )
// }

// export default Display1


//with setNew

function Display1()
{
    const [name, setName] = useState("Raghul")
    const [New,setNew] = useState(false);
    console.log("Display 1 : my name is",{name})
    function ChangeName(Name)
    {
        console.log("Display 1 : my new name is", {Name})
        setName(Name)
        setNew(true)
    }

    return(
        <>
            <h1> Display 1: {New ? "my new name is" : "my old name is"} {name}</h1>
            <button onClick={()=>{ChangeName('Raghul Sekar')}}>Click Here to change name !!</button>
        </>
    )
}

export default Display1
