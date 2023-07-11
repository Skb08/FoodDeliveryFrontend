import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import Navbar2 from '../components/Navbar2';
import { BASE_URL } from './Url';

export default function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${BASE_URL}/api/loginuser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password })

    });
    const json = await response.json();
    console.log(json);

    if (!json.success) {
      alert("Enter valid cradentials");
    }
    if (json.success) {
      localStorage.setItem("userEmail",credentials.email);
      localStorage.setItem("authToken",json.authToken);
      // console.log(localStorage.getItem("authToken"));
      navigate("/")
    }
    
  }

  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value })
  }
  return (
    <>
    <Navbar2/>
      <div className='container d-flex justify-content-center align-items-center' style={{height:"88vh"}}>
        
        <form className='card p-4  rounded' onSubmit={handleSubmit} style={{height:"450px",width:"370px"}}>
          <h4 className='mb-4 text-center font-weight-bold'>Login Form</h4>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" name='password' value={credentials.password} onChange={onChange} id="exampleInputPassword1" />
          </div>

          <button type="submit" className="m-3 btn btn-success ">Submit</button>
          <Link to="/createuser" className='m-3 btn btn-danger '>I'm a new user</Link>
        </form>
      </div>
    </>
  )
}
