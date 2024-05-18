import axios from 'axios'
import React, { useEffect } from 'react'
// import { connect } from 'react-redux

function Login() {
useEffect(() => {
    async function getData() {
        const response = await axios.post(
            "https://ecomerce-backend-fawn-eight.vercel.app/api/auth",
       
            {
                email: "user@gmail.com",
                password: "test123",
            }
        );
        console.log(response.data);
       
    }
    getData();
}, []);



  
    return (
        <div className='Main'>
            <div >
                <h1>Log IN</h1>
                <label htmlFor="email">Enter Email </label>
                    <input type="email" id='email' placeholder='Enter email address' />
                <br />
                <label htmlFor="password"> enter Password</label>
                <input type="password" id='password' />
            </div>
            
      </div>
    )
  
};



export default Login;