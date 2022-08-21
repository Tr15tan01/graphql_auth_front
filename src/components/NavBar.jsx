import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/authContext'

export default function NavBar() {
    const navigate = useNavigate()
    const { user, logout } = useContext(AuthContext)

    const onLogout = () => {
        logout()
        navigate('/')
    }
    console.log({ user })
    return (
        <div className="ui container mt-3">
            <div className="ui secondary teal inverted  menu">
                <Link className="active item" to="/">
                    Home
                </Link>
                <Link className="item" to="/register">
                    Register
                </Link>
                <Link className="item" to="/login">
                    Login
                </Link>
                <div className="right menu">
                    <div className="item">
                        <div className="ui icon input">
                            <input type="text" placeholder="Search..." />
                            <i className="search link icon"></i>
                        </div>
                    </div>
                    <Link className="ui item" to="#" onClick={onLogout}>
                        Logout
                    </Link>
                </div>
            </div>
        </div>
    )
}
