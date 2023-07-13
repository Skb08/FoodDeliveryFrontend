import React, { useState } from 'react'
import { Link} from 'react-router-dom';

export default function Navbar2() {
    const [show, setShow] = useState(false)

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-success fixed-top">
                <div className="container-fluid ">
                    <Link className="navbar-brand fs-1 fst-italic" to="/">FastFood</Link>
                    <button className="navbar-toggler" onClick={() =>setShow (!show)} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={show ? "collapse navbar-collapse show" : "collapse navbar-collapse"} id="navbarNav">
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
