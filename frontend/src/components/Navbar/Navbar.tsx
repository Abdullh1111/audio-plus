import { NavLink } from "react-router-dom";
import {  CiSearch, CiShoppingCart } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between items-center py-4">
        <div>
          <a className="font-bold text-xl">Audio Supreme</a>
        </div>
        <ul className="lg:flex items-center md:gap-6 hidden">
          <li>
            <NavLink to="">Home</NavLink>
          </li>
          <li>
            <NavLink to="">Contacts</NavLink>
          </li>
          <li>
            <NavLink to="">About</NavLink>
          </li>
          <li>
            <NavLink to="">Sign In</NavLink>
          </li>
        </ul>
        <div className="flex items-center md:gap-6 gap-1">
          <div className="hidden md:flex">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="input input-error w-full pr-10 bg-[#F5F5F5] text-black"
          />
          <CiSearch className="text-2xl absolute right-48 lg:right-28 xl:right-[235px]  top-6"></CiSearch>
          </div>
          <CgProfile className="text-2xl"></CgProfile>
          <CiShoppingCart className="text-4xl"></CiShoppingCart>
        
        <div className=" lg:hidden">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content absolute right-1 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Homepage</a>
              </li>
              <li>
                <a>Portfolio</a>
              </li>
              <li>
                <a>About</a>
              </li>
            </ul>
          </div>
        </div>
        </div>
      </div>
      <hr />
      <div className="md:hidden flex mt-5">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="input input-error w-full pr-10 bg-[#F5F5F5] text-black"
          />
          <CiSearch className="text-2xl absolute right-2 top-28 lg:right-28 xl:right-[235px]"></CiSearch>
          </div>
    </div>
  );
};

export default Navbar;
