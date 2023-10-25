"use client"
import { useDispatch, useSelector } from "react-redux"
import { removeUser } from "../redux/slice";

const DisplayUser = () => {
  const userData = useSelector((data)=>data.usersData.users);
  const dispatch = useDispatch();

  return (
    <div className="displayUsers">
        {
          userData.map((user, index)=>(
            <ul key={index}>
              <li><span>{user.name}</span><button onClick={()=>dispatch(removeUser(user.id))}>x</button></li>
            </ul>
          ))
        }
    </div>
  )
}

export default DisplayUser