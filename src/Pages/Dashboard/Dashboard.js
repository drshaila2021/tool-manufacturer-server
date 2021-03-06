import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebae.init";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);

  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content  justify-center">
        <h2 className="text-2xl font-bold text-center my-8">
          Welcome to Dashboard
        </h2>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-50 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          {/* {!admin && (
            <li>
              <Link to="/dashboard">My Order</Link>
            </li>
          )} */}
          <li>
            <Link to="/dashboard">My Profile</Link>
          </li>
          {!admin && (
            <li>
              <Link to="/dashboard/myorder">My Order</Link>
            </li>
          )}

          {!admin && (
            <li>
              <Link to="/dashboard/addreview">Add A Review</Link>
            </li>
          )}
          {admin && (
            <li>
              <Link to="/dashboard/users">All Users</Link>
            </li>
          )}
          {admin && (
            <li>
              <Link to="/dashboard/orders">All Orders</Link>
            </li>
          )}
          {admin && (
            <li>
              <Link to="/dashboard/items">Manage Item</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
