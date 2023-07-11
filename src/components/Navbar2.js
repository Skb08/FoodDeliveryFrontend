import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar2() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-success">
                <div className="container-fluid ">
                    <Link className="navbar-brand fs-1 fst-italic" to="/">FastFood</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mb-2 ">
                            <li className="nav-item ">
                                <Link className="nav-link active fs-5 text-right" aria-current="page" to="/">Home</Link>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}
