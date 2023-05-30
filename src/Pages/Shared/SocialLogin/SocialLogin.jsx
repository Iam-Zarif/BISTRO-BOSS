import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../Providers/AuthProviders";
import { useLocation, useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const handleGoogle =() =>{
        googleSignIn()
        .then(result =>{
            const loggedInUser = result.user;
            console.log(loggedInUser);

const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email };
             fetch("http://localhost:5000/users", {
               method: "POST",
               headers: {
                 "content-type": "application/json",
               },
               body: JSON.stringify(saveUser),
             })
               .then((res) => res.json())
               .then((data) => {
                 if (data.insertedId) {
                  
                   
                   navigate(from, { replace: true });
                 }
               });
             
        })
    }
    return (
      <div>
        <div className="divider"></div>
        <button onClick={handleGoogle} className="btn btn-circle btn-outline text-center">
          <FaGoogle/>
        </button>
      </div>
    );
};

export default SocialLogin;