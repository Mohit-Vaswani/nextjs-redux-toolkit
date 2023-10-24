"use client"
import { useState } from "react"
import { useDispatch } from "react-redux";
import { addUser } from "../redux/slice";

const AddUser = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch()

  const handleAddUser = () => {
    if(name.trim() !== ""){
      dispatch(addUser(name))
      setName("");
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter"){
      handleAddUser()
    }
  }

  return (
    <div className="simpleBox">
        <h2>Add User</h2>
        <input 
        type="text" 
        value={name} 
        placeholder="Add Users" 
        onKeyUp={handleKeyPress}
        onChange={(e)=>setName(e.target.value)} 
        />
        <button onClick={handleAddUser} >Add Users</button>
    </div>
  )
}

export default AddUser