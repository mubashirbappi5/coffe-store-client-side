import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
  const { signinuser} = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()
  const handlelogin = (e)=>{
    
    e.preventDefault()
        const form = e.target
       
        const email = form.email.value
        const password = form.password.value
       
    signinuser(email,password)
    .then(res=>{
      console.log(res.user)
      navigate(location?.state?location.state:'/')
      
    })
    .catch(error=>{
      console.log(error)
    })
  }
    return (
        <div>
          <h1 className='text-3xl font-bold text-center mt-6'>Login Now</h1>
         <div className='w-11/12 mx-auto flex justify-between items-center'>
         <div className="card bg-base-100 w-full max-w-sm shrink-0 border">
      <form onSubmit={handlelogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
    <div className='w-6/12'>
      <img src="https://i.ibb.co.com/JtRrZQJ/undraw-Drink-coffee-v3au.png" alt="" />
    </div>

         </div>
            
        </div>
    );
};

export default Login;