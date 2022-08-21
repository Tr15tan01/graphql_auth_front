import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/authContext'

export default function HomePage() {
    const { user, logout } = useContext(AuthContext)
    return (
        <div className='mt-3'>

            <h1 style={{ color: 'grey' }}>This is a Homepage</h1>
            {
                user ?
                    <>
                        <h3>{user.email} is logged in</h3>
                    </>
                    :
                    <>
                        <h2>o user data here</h2>
                    </>
            }
        </div>
    )
}
