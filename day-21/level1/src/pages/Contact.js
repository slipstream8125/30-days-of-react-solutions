import { ChangeProfile } from "../components/ChangeProfile";
import { useContext } from "react";
import { AppContext } from "../App";
export const Contact=()=>{
    const{username,setUsername}=useContext(AppContext);
    return(
    <div>
    <h1>This is the Contact Page</h1>
    <h1>User : {username}</h1>
    <ChangeProfile setUsername={setUsername}/>
    </div>
    )
}