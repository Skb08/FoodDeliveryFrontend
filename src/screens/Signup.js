import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar2 from '../components/Navbar2';
import { BASE_URL } from './Url';

export default function Signup(props) {
    const [credentials, setCredentials] = useState({name: 'test',email: "",password: "",geolocation: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`${BASE_URL}/api/createuser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: credentials.name,email: credentials.email,password: credentials.password,location: credentials.geolocation })

        });
        const json = await response.json();
        // console.log(json);

        if (!json.success) {
            alert("Enter valid cradentials");
        }
    }

    const onChange = (event) => {
        setCredentials({...credentials, [event.target.name]: event.target.value })
    }
    return (
        <>
            <Navbar2/>
            <div className='container d-flex justify-content-center align-items-center' style={{height:"88vh"}}>
                <form className='card p-4  rounded' style={{height:"590px",width:"410px"}} onSubmit={handleSubmit}>
                    <h4 className='mb-3 text-center font-weight-bold'>SignUp Form</h4>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" name='password' value={credentials.password} onChange={onChange} id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword2" className="form-label">Address</label>
                        <input type="text" className="form-control" name='geolocation' value={credentials.geolocation} onChange={onChange} id="exampleInputPassword2" />
                    </div>
                    <button type="submit" className="m-3 btn btn-success">Submit</button>
                    <Link to="/login" className='m-3 btn btn-danger'>Already a user</Link>
                </form>
            </div>
        </>

    );
};
