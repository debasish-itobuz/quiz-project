import { NavLink } from "react-router-dom";
import plus from "../src/images/plus-solid.svg";


export default function Home({arr}){ //calling arr as props and using curly braces to destructure it
    return(
        <>
        <div className="flex gap-5 justify-between mx-[10rem] mt-[4rem] mb-[3rem]">
        <p className="text-3xl w-[100%]">My Quizzes</p>
        <button className="flex gap-3 w-[15%] items-center bg-green-500 rounded-lg p-2"><img src={plus} className=" w-[15%]"/><span >Create New</span></button>
        {/* <button className="text-xl"><span className="text-3xl">+</span>Create New</button> */}
        </div>
        <ul className="flex gap-10 mx-[10rem] flex-wrap justify-between">
          {arr.map((element) => (
          <NavLink to="/question">
              <li className="flex flex-col w-[17rem] bg-white rounded-lg">
                <div>
                <img src={element.img} className="w-[100%] rounded-lg"></img>
                </div>
                <div className="p-3">
                <p className="mx-3 font-semibold">{element.name}</p>
                <p>
                    <span className="mx-3 ">{element.questions}</span>
                    <span>|</span>
                    <span className="mx-3">{element.time}</span></p>
                </div>
                
              </li>
            </NavLink>
                   ))}
                   </ul>
                 </>
    )
}