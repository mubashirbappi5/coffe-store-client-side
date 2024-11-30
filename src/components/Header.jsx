import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const links = (
    <>
      <li>
        <NavLink to={'/'} className="btn btn-ghost text-white">Home</NavLink>
      </li>
      <li>
        <NavLink to={'/about'} className="btn btn-ghost text-white">About Us</NavLink>
      </li>
      <li>
        <NavLink to={'/contact'} className="btn btn-ghost text-white">contact Us</NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-hader p-6 font-mainfamily flex justify-between">
      <div className="flex justify-center items-center">
        <img
          src="https://i.ibb.co.com/x72NGL0/logo1.png"
          className="w-10"
          alt=""
        />
        <h1 className="text-white font-bold text-2xl text-center">
          Espresso Emporium
        </h1>
      </div>
      <div>
        <ul className="flex gap-2">{links}</ul>
      </div>
      <div className="flex gap-4">
        <Link to={'/login'}>
          
          <button className="btn">Login</button>
        </Link>
        <Link to={'/signup'}>
          <button className="btn">Sign up</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
