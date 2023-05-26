/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const location = useLocation()
    const {user,loading} = useContext(AuthContext)
    if(loading){
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
    if(user){
        return children
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default PrivateRoute;