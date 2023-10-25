"use client"
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeUser } from '../redux/slice'

const page = () => {
    const userData = useSelector((data) => data.usersData.users)
    const dispatch = useDispatch();

    return (
        <div style={{ margin: "2rem" }} >
            <h1>Removed Users</h1>
            <div className='removedUsers'>

                {
                    userData.map((user, index) => (
                        <ul key={index}>
                            <li>
                                <span>{user.name}</span>
                                <button onClick={() => dispatch(removeUser(user.id))}>X</button>
                            </li>
                        </ul>
                    ))
                }
            </div>
        </div>
    )
}

export default page