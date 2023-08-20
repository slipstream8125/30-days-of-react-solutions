import { useContext } from "react";
import { AppContext } from "../App";
export const Home=()=>{
    const{username}=useContext(AppContext);
    return (
        <div>
            <h1>This is the Home Page</h1>
            <h1>User : {username}</h1>
        </div>
    )
}