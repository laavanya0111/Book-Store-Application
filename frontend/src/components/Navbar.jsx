import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div style={{ borderBottom: "1px solid white" }}>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container">
                    <a className="navbar-brand text-light" href="#">Book Store</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <Link className="nav-item nav-link active text-light" to='/'>
                                Home
                            </Link>
                            <Link className="nav-item nav-link active text-light" to='/books'>
                                Books
                            </Link>
                            <Link className="nav-item nav-link active text-light" to='/addbooks'>
                                Add Books
                            </Link>
                            <Link className="nav-item nav-link active text-light" to='/cart'>
                                Cart
                            </Link>
                            <li className="nav-item">
                                <a className="nav-link disabled text-light" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar