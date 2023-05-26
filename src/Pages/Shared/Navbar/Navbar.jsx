/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders";


const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () =>{
    logOut()
    .then(res =>{console.log(res)
    
    })
    .catch(error => console.log(error))
  }
    const navOpt = (
      <>
        {" "}
        <ul
          tabIndex={0}
          className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <Link>Item 1</Link>
          </li>
          <li tabIndex={0}>
            <Link className="justify-between">
              Parent
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
              </svg>
            </Link>
            
          </li>
          <li>
            <Link>Item 3</Link>
          </li>
        </ul>
      </>
    );
    return (
      <>
        <div className="navbar fixed z-10 bg-opacity-60 bg-black max-w-screen-xl">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              {navOpt}
              {/*  */}
            </div>
            <Link className="btn btn-ghost normal-case text-xl">
              BISTRO BOSS
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 font-bold text-white">
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to='/secret'>SECRET</Link>
              </li>
              <li>
                <Link to="/menu">OUR MENU</Link>
              </li>
              <li>
                <Link to="/order/salad">OUR SHOP</Link>
              </li>
            </ul>
          </div>
          <div className="navbar-end flex gap-8">
            {user ? (
              <>
                <p className="border px-4 py-2 rounded-xl text-xl font-bold">{user.displayName}</p>
              </>
            ) : (
              <>
                <Link className="btn" to="/login">
                  Login
                </Link>
              </>
            )}
            {user ? (
              <>
                <Link className="btn" onClick={handleLogOut}>
                  LOG OUT
                </Link>
              </>
            ) : (
              <>
                <Link className="btn" to="/SignUp">
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </>
    );
};

export default Navbar;