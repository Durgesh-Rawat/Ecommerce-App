import './logincss.css';
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

function Signup(){

  const [name,setName] = useState('');
  const [email, setemail] = useState('');
  const [password,setpassword] = useState('');

    const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const res = await fetch('https://ecommerce-app-9is1.onrender.com/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json',
                  'Authorization': `Bearer ${token}`,
       },
      body: JSON.stringify({ email, password })
    });
  
    const data = await res.json();

    if (res.ok){
      localStorage.setItem('token',data.token);
      alert('signup successful');
      window.location.href = '/login';
    }
    else{
      alert(data.message);
    }
  }


    return(
        <div class="form-container">
    <h2 className='h2'>Sign Up</h2>
    <form className='form' onSubmit={handleSubmit} >
      <input type="text" placeholder="Full Name" onChange={ (e) => setName(e.target.value)} required/>
      <input type="email" placeholder="Email" onChange={ (e) => setemail(e.target.value)} required/>
      <input type="password" placeholder="Password" onChange={ (e) => setpassword(e.target.value)} required/>
      <button type="submit">Sign Up</button>
    </form>
    <p className="link">Already have an account?  <Link to="/login">Sign up</Link></p>
  </div>
    );
}

export default Signup
