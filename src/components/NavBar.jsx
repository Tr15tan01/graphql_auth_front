import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <div className="ui container mt-3">
            <div className="ui secondary teal inverted  menu">
                <Link className="active item" to="/">
                    Home
                </Link>
                <Link className="item" to="/register">
                    Register
                </Link>
                <a className="item">
                    Friends
                </a>
                <div className="right menu">
                    <div className="item">
                        <div className="ui icon input">
                            <input type="text" placeholder="Search..." />
                            <i className="search link icon"></i>
                        </div>
                    </div>
                    <a className="ui item">
                        Logout
                    </a>
                </div>
            </div>
        </div>
    )
}
