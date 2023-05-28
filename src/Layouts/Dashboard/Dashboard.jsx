import { NavLink, Outlet } from "react-router-dom";
import './DashBoard.css'
import { FaCalendarAlt,  FaHamburger, FaHome, FaLuggageCart,  FaShoppingBag, FaWallet } from "react-icons/fa";
const Dashboard = () => {
    return (
      <div>
        <div className="drawer drawer-mobile">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-center">
            <Outlet></Outlet>

            <label
              htmlFor="my-drawer-2"
              className="btn btn-primary drawer-button lg:hidden"
            >
              Open drawer
            </label>
          </div>
          <div className="drawer-side bg-yellow-600">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className=" menu p-4 w-80  text-base-content text-lg font-semibold">
              <li>
                <NavLink to="/dashboard/home" className="bg-transparent">
                  <FaHome />
                  User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/payment" className="bg-transparent">
                  <FaWallet />
                  payment History
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/reservations"
                  className="bg-transparent"
                >
                  <FaCalendarAlt />
                  Reservations
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myCart">
                  <FaLuggageCart />
                  My Cart
                </NavLink>
              </li>
              <div className="divider"></div>
              <li>
                <NavLink  className="bg-transparent">
                  <FaHome /> Home
                </NavLink>
              </li>
              <li>
                <NavLink className="bg-transparent">
                  <FaHamburger /> Menu
                </NavLink>
              </li>
              <li>
                <NavLink className="bg-transparent">
                  <FaShoppingBag /> Shop
                </NavLink>
              </li>
              <li>
                <NavLink className="bg-transparent"> Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
};

export default Dashboard;