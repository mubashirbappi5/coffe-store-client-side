import React, { useContext } from "react";
import SocialLogin from "./SocialLogin";
import { AuthContext } from './../AuthProvider/AuthProvider';

const Signup = () => {
    const {signupuser} = useContext(AuthContext)

    const handlesignUP = (e)=>{
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
       
        signupuser(email,password)
        .then(res=>{
            console.log(res.user)
        })
        .catch(error=>{
            console.log(error)
        })

    }
  return (
   <>
   <h1 className="text-center font-bold text-2xl my-10">Join Now & Explore more</h1>
    <div className="  md:flex justify-between items-center md:gap-10 ">
        
        <div className="card bg-base-100 w-full max-h-md max-w-sm md:mx-5 mx-auto shrink-0 ">
          <form onSubmit={handlesignUP} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter your Name"
                className="input input-bordered"
                name="name"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder=" Enter your email"
                className="input input-bordered"
                name="email"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                name="password"
                required
              />
              
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Join</button>
            </div>
            <div className="divider "></div>
       
           
          </form>
         
        </div>
        <div className="">
            <h1 className="font-semibold text-center my-5">Social Login</h1>
            <SocialLogin/>
        </div>
        <div className=" md:w-6/12">
          <img src="https://i.ibb.co.com/xfhwxdp/undraw-Sign-up-n6im.png" alt="" />
        </div>
      </div>
   </>
  );
};

export default Signup;
