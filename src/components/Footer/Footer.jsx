import React from "react";
import logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
const footer = () => {
  return (
    <div className="flex justify-around bg-stone-50">
      <div>
        <img src={`${logo}`} className="w-[200px]" alt="" />
      </div>
      <div className="flex gap-10">
        <div className="">
          <h4 className="text-xl my-4 uppercase font-mono">resource</h4>
          <ul>
            <li className="mb-2 capitalize hover:text-orange-300">
              <NavLink
                to={`/`}
                className={({ isActive }) =>
                  `${isActive ? "text-orange-400" : ""}`
                }
              >
                <Link to="/">Home</Link>
              </NavLink>
            </li>
            <li className="mb-2 capitalize hover:text-orange-300">
              <NavLink
                to={`/about`}
                className={({ isActive }) =>
                  `${isActive ? "text-orange-400" : ""}`
                }
              >
                <Link to="/about">About</Link>
              </NavLink>
            </li>
            <li className="mb-2 capitalize hover:text-orange-300">
              <NavLink
                to={`/contact`}
                className={({ isActive }) =>
                  `${isActive ? "text-orange-400" : ""}`
                }
              >
                <Link to="/contact">Contact</Link>
              </NavLink>
            </li>
            <li className="mb-2 capitalize hover:text-orange-300">
              <NavLink
                to={`/services`}
                className={({ isActive }) =>
                  `${isActive ? "text-orange-400" : ""}`
                }
              >
                <Link to="/services">Services</Link>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="">
          <h4 className="text-xl my-4 uppercase font-mono">follow us</h4>
          <ul>
            <li className="mb-2 capitalize hover:text-orange-300">
              <a href="#" target="_blank" rel="noopener noreferrer">
                github
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li className="mb-2 capitalize hover:text-orange-300">
              <a href="#" target="_blank" rel="noopener noreferrer">
                discord
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li className="mb-2 capitalize hover:text-orange-300">
              <a href="#" target="_blank" rel="noopener noreferrer">
                linkedin
                <i className="fab fa-youtube"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="">
          <h4 className="text-xl my-4 uppercase font-mono">legal</h4>
          <ul>
            <li className="mb-2 capitalize hover:text-orange-300">
              <a href="#" target="_blank" rel="noopener noreferrer">
                terms & condition
                <i className="far fa-file-alt"></i>
              </a>
            </li>
            <li className="mb-2 capitalize hover:text-orange-300">
              <a href="#" target="_blank" rel="noopener noreferrer">
                privacy policy
                <i className="far fa-file-alt"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default footer;
