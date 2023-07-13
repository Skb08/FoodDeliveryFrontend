import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import Modal from '../Modal';
import Cart from '../screens/Cart';
import { useCart } from '../components/ContextReducer';

export default function Navbar() {

    const [cartView, setCartView] = useState(false)
    const [show, setShow] = useState(false)
    let data = useCart();
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("authToken");
        navigate("/login")
    }

    return (
        <>
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-success  " >
                    <div className="container-fluid">
                        <Link className="navbar-brand fs-1 fst-italic" to="/">FastFood</Link>
                        <button className="navbar-toggler" onClick={() =>setShow (!show)} type="button" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon "></span>
                        </button>
                        <div className={show ? "collapse navbar-collapse show" : "collapse navbar-collapse"}  id="navbarNav">
                            <ul className="navbar-nav mb-2 me-auto">
                                <li className="nav-item">
                                    <Link className="nav-link active fs-5" aria-current="page" to="/">Home</Link>
                                </li>
                                {(localStorage.getItem('authToken'))
                                    ? <li className="nav-item">
                                        <Link className="nav-link active fs-5" aria-current="page" to="/myOrder">My Orders</Link>
                                    </li>
                                    : ""
                                }

                            </ul>
                            {(!localStorage.getItem('authToken')) ?
                                <div className='d-flex'>
                                    <Link className="btn bg-white text-success mx-1" to="/login">Login</Link>
                                    <Link className="btn bg-white text-success mx-1" to="/createuser">Signup</Link>
                                </div>
                                : <div>
                                    <div className='btn bg-white text-success mx-2' onClick={() => { setCartView(true) }}>My Cart{" "}
                                        <Badge pill bg='danger'> {data.length} </Badge>
                                    </div>
                                    {cartView ? <Modal onClose={() => { setCartView(false) }}><Cart /></Modal> : null}
                                    <div className='btn bg-white text-danger mx-2' onClick={handleLogout}>Logout</div>
                                </div>
                            }
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}
