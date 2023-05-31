/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */


import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../UseHooks/UseAuth";
import UseAdmin from "../UseHooks/UseAdmin";

const AdminRoutes = ({ children }) => {
  const location = useLocation();
  const { user, loading } = UseAuth();
  const [isAdmin,isAdminLoading] = UseAdmin();
  if (loading || isAdminLoading) {
    return (
      <>
        <progress
          className="block progress progress-warning w-96"
          value="0"
          max="100"
        ></progress>
        <progress
          className="block mt-20 progress progress-warning w-96"
          value="10"
          max="100"
        ></progress>
        <progress
          className="block mt-20 progress progress-warning w-96"
          value="40"
          max="100"
        ></progress>
        <progress
          className="block mt-20 progress progress-warning w-96"
          value="70"
          max="100"
        ></progress>
        <progress
          className="block mt-20 progress progress-warning w-96"
          value="100"
          max="100"
        ></progress>
      </>
    );
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoutes;
