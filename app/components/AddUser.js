"use client"
import { useState } from "react"
import { useDispatch } from "react-redux";
import { addUser } from "../redux/slice";

const AddUser = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch()

  const userDispatch = () => {
    dispatch(addUser(name))
  }

  return (
    <div className="simpleBox">
        <h2>Add User</h2>
        <input type="text" placeholder="Add Users" onChange={(e)=>setName(e.target.value)}/>
        <button onClick={userDispatch} >Add Users</button>
    </div>
  )
}

export default AddUser