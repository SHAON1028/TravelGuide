import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../context/UserContext';
import { MdOutlineFlight } from 'react-icons/md';
import { FaHotel,FaCcVisa,FaBook} from 'react-icons/fa';
import { AiFillCar} from "react-icons/ai";
import { GiCruiser } from "react-icons/gi";
import { MdFastfood } from "react-icons/md";



const Navbar = () => {
  const { user,logOut} = useContext(AuthContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLogOut = ()=>
{
  logOut()
  .then(()=>{})
  .catch(error=>console.log(error))
}

    return (
      <div className= "bg-gray-900">
      <div className= "px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className= "relative flex items-center justify-between">
          <a
            href="/"
            aria-label="Company"
            title="Company"
            className= "inline-flex items-center"
          >
            <svg
              className= "w-8 text-teal-accent-400"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              stroke="currentColor"
              fill="none"
            >
              <rect x="3" y="1" width="7" height="12" />
              <rect x="3" y="17" width="7" height="6" />
              <rect x="14" y="1" width="7" height="6" />
              <rect x="14" y="11" width="7" height="12" />
            </svg>
            <span className= "ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
              Company
            </span>
          </a>
          <ul className= "flex items-center hidden space-x-8 lg:flex">
            <li>
              <NavLink
                to="/"
                aria-label="Our product"
                title=""
                // className= "border-b-2 border-blue-500  hover:border-blue-500 text-lg tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                className={({ isActive }) =>
                isActive ? "border-b-2 border-blue-500  hover:border-blue-500 text-lg tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400" : undefined
              }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                aria-label="Our product"
                title=""
                className={({ isActive }) =>
                isActive ? "border-b-2 border-blue-500  hover:border-blue-500 text-lg tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400" : undefined
              }
              >
                Services
              </NavLink>
            </li>
            <li>
              <a
                to="/"
                aria-label="Product pricing"
                title="Product pricing"
                className={({ isActive }) =>
                isActive ? "border-b-2 border-blue-500  hover:border-blue-500 text-lg tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400" : undefined
              }
              >
                Pricing
              </a>
            </li>
            <li>
              <NavLink
                to="/blog"
                aria-label="About us"
                title=""
                className={({ isActive }) =>
                isActive ? "border-b-2 border-blue-500  hover:border-blue-500 text-lg tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400" : undefined
              }
              >
                Blog
              </NavLink>
            </li>
          </ul>
          <ul className= "flex items-center hidden space-x-8 lg:flex">
           {
              user?.uid ?
              <>
       <div className="avatar">      
              <img
       src={user.photoURL}
      style={{height:'40px'}}
      className="mr-3 h-6 sm:h-9 relative mx-auto rounded-3xl overflow-hidden ring ring-primary ring-offset-base-100 ring-offset-2"
      alt=""
      referrerPolicy="no-referrer"
    /> 
    </div> 


              <button onClick={handleLogOut} className="btn btn-outline btn-error">Logout</button>
              </>:
              <>
               <li>
              <Link
                to="/login"
                className= "inline-flex items-center justify-center h-12 px-6 text-base tracking-wide text-black font-bold transition duration-200 rounded-3xl shadow-md bg-green-500 hover:bg-blue-700 hover:text-white focus:shadow-outline focus:outline-none"
                aria-label="Sign up"
                title="Sign up"
              >
                Sign In
              </Link>
            </li>
              </>

           }
          </ul>
          <div className= "lg:hidden ">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className= "p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline m-10"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className= "w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className= "absolute top-0 left-0 w-full  ">
                <div className= "p-5 bg-gray-900 border rounded shadow-sm ">
                  <div className= "flex items-center justify-between mb-4">
                    <div>
                      <a
                        href="/"
                        aria-label="Company"
                        title="Company"
                        className= "inline-flex items-center"
                      >
                        <svg
                          className= "w-8 text-deep-purple-accent-400"
                          viewBox="0 0 24 24"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          stroke="currentColor"
                          fill="none"
                        >
                          <rect x="3" y="1" width="7" height="12" />
                          <rect x="3" y="17" width="7" height="6" />
                          <rect x="14" y="1" width="7" height="6" />
                          <rect x="14" y="11" width="7" height="12" />
                        </svg>
                        <span  className= "ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
                          Company
                        </span>
                      </a>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className= "p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className= "w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className= "space-y-4">
                      <li>
                        <NavLink
                          to="/"
                          aria-label="Our product"
                          title=""
                          className= "font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                        >
                          Home
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/services"
                          aria-label="Our product"
                          title=""
                          className={({ isActive }) =>
                          isActive ? "border-b-2 border-blue-500  hover:border-blue-500 text-lg tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400" : undefined
                        }
                        >
                          Services
                        </NavLink>
                      </li>
                      <li>
                        <a
                          href="/"
                          aria-label="Product pricing"
                          title="Product pricing"
                          className= "font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                        >
                          Pricing
                        </a>
                      </li>
                      <li>
                        <NavLink
                          to="/blog"
                          aria-label="About us"
                          title=""
                          className={({ isActive }) =>
                isActive ? "border-b-2 border-blue-500  hover:border-blue-500 text-lg tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400" : undefined
              }
                        >
                          Blog
                        </NavLink>
                      </li>
                      {
              user?.uid ?
              <>
              
              <button onClick={handleLogOut} className="btn btn-outline btn-error">Logout</button>
              </>:
              <>
               <li>
              <Link
                to="/login"
                className= "inline-flex items-center justify-center h-12 px-6 text-base tracking-wide text-black font-bold transition duration-200 rounded-3xl shadow-md bg-green-500 hover:bg-blue-700 hover:text-white focus:shadow-outline focus:outline-none"
                aria-label="Sign up"
                title="Sign up"
              >
                Sign In
              </Link>
            </li>
              </>

           }
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* list of services */}
      <div className="container text-center mx-auto p-4 mt-5">
  <div className="lg:flex justify-center rounded-md lg:text-lg" role="group">
    <button className="bg-black flex items-center text-green-500 hover:bg-blue-500 hover:text-white border-r-1 border-blue-500 rounded-l-lg px-4 py-1 mx-0 outline-none focus:shadow-outline"><MdOutlineFlight/> Flight</button>
    <button className="bg-black text-green-500 hover:bg-blue-500 hover:text-white border-l border-green-500  px-4 py-2 mx-0 outline-none flex items-center focus:shadow-outline"><FaHotel/> Hotels</button>
    <button className="bg-black text-green-500 hover:bg-blue-500 hover:text-white border-l border-green-500  px-4 py-2 mx-0 outline-none  flex items-center focus:shadow-outline"><AiFillCar/>Cars</button>
    <button className="bg-black text-green-500 hover:bg-blue-500 hover:text-white border-l border-green-500  px-4 py-2 mx-0 outline-none  flex items-center focus:shadow-outline"><GiCruiser/>Cruises</button>
    <button className="bg-black text-green-500 hover:bg-blue-500 hover:text-white border-l border-green-500  px-4 py-2 mx-0 outline-none  flex items-center focus:shadow-outline"><FaBook/>Tour Guide</button>
    <button className="bg-black text-green-500 hover:bg-blue-500 hover:text-white border-l  border-green-500 rounded-r-lg  flex items-center px-4 py-2 mx-0 outline-none focus:shadow-outline"><FaCcVisa/>Visa</button>
  </div>
</div>
    </div>
    );
};

export default Navbar;