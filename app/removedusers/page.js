"use client"
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const page = () => {    
    const userData = useSelector((data) => data.users)
    console.log(userData)
    const dispatch = useDispatch();

    return (
        <div style={{ margin: "2rem" }}>
            <h1>Removed Users</h1>
            {
                userData.map((user, index) => (
                    <ul key={index}>
                        <li>{user.name}</li>
                    </ul>
                ))
            }
        </div>
    )
}

export default page