import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

const header = () => {
  return (
    <div className="flex justify-between px-[150px] bg-stone-50">
      <div>
        <img src={`${logo}`} className="h-[100px]" alt="" />
      </div>
      <ul className="flex justify-center items-center gap-10">
        <li className="hover:text-orange-400">
          <NavLink
            className={({ isActive }) => `${isActive ? "text-orange-400" : ""}`}
            to={`/`}
          >
            <Link to="/">Home</Link>
          </NavLink>
        </li>
        <li className="hover:text-orange-400">
          <NavLink
            className={({ isActive }) => `${isActive ? "text-orange-400" : ""}`}
            to={`/about`}
          >
            <Link to="/about">About</Link>
          </NavLink>
        </li>
        <li className="hover:text-orange-400">
          <NavLink
            className={({ isActive }) => `${isActive ? "text-orange-400" : ""}`}
            to={`/contact`}
          >
            <Link to="/contact">Contact</Link>
          </NavLink>
        </li>
        <li className="hover:text-orange-400">
          <NavLink
            className={({ isActive }) => `${isActive ? "text-orange-400" : ""}`}
            to={`/services`}
          >
            <Link to="/services">Services</Link>
          </NavLink>
        </li>
        <li className="hover:text-orange-400">
          <NavLink
            className={({ isActive }) => `${isActive ? "text-orange-400" : ""}`}
            to={`/products`}
          >
            <Link to="/products">Product</Link>
          </NavLink>
        </li>
        <li className="hover:text-orange-400">
          <NavLink
            className={({ isActive }) => `${isActive ? "text-orange-400" : ""}`}
            to={`/blog`}
          >
            <Link to="/blog">Blog</Link>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default header;
