import { NavLink, Outlet } from "react-router-dom";
import './DashBoard.css'
import { FaBook,  FaCalendarAlt,  FaHamburger, FaHome, FaList, FaLuggageCart,  FaPhoneAlt,  FaShoppingBag, FaUsers, FaUtensils, FaWallet } from "react-icons/fa";
import useCart from "../../UseHooks/useCart";
const Dashboard = () => {
  const isAdmin =true;
    const [,cart] = useCart();
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
              {isAdmin ? (
                <>
                  <li>
                    <NavLink to="/dashboard/home" className="bg-transparent">
                      <FaHome />
                      Admin Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/payment" className="bg-transparent">
                      <FaUtensils />
                      Add Items
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/reservations"
                      className="bg-transparent"
                    >
                      <FaList />
                      manage Items
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/reservations"
                      className="bg-transparent"
                    >
                      <FaBook />
                      manage Bookings
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/dashboard/users"
                      className="bg-transparent"
                    >
                      <FaUsers />
                      All Users
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  {" "}
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
                    {" "}
                    <NavLink to="/dashboard/myCart" className="">
                      <FaLuggageCart />
                      My Cart
                      <div className="badge badge-secondary border border-white rounded-xl">
                        +{cart?.length || 0}
                      </div>
                    </NavLink>
                  </li>
                </>
              )}
              <div className="divider"></div>
              <li>
                <NavLink className="bg-transparent">
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
                <NavLink className="bg-transparent">
                  <FaPhoneAlt /> Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
};

export default Dashboard;