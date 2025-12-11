import { useParams } from "react-router-dom";

 const Users = ()=>{
    const data = useParams()
    return(
        <>
        <h1>MY USER {data.id}</h1>
        </>
    )
}
export default Users;