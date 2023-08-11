import { NavLink } from "react-router-dom";

export default function Question(){
    return(
        <>
        Hiii...Question Page
        <NavLink to="/">
            <button className="bg-red-200 p-3">Back to Home Page</button>
            </NavLink></>
    )
}