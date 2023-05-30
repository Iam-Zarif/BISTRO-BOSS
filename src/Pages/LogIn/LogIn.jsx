/* eslint-disable no-unused-vars */
import { useContext, useEffect,  useState } from "react";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../Providers/AuthProviders";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const LogIn = () => {
  const navigate = useNavigate();
  const location = useLocation();
    const from = location.state?.from?.pathname || "/";
  const { signIn } = useContext(AuthContext);
  const [disable, setDisable] = useState(true);

  const handleValidateCaptcha = (e) => {
   
    const captchaValue = e.target.value;
    console.log(captchaValue);
    if (validateCaptcha(captchaValue)) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const user = { email, password };
    console.log(user);
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User Logged In Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <Helmet>
        <title>BISTRO BOSS | LOGIN</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleLogin}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    name="password"
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control border p-5 mt-5 rounded-xl">
                  <label className="label">
                    <LoadCanvasTemplate />
                  </label>
                  <input
                    onBlur={handleValidateCaptcha}
                    name="captcha"
                    type="text"
                    placeholder="captcha"
                    className="input input-bordered"
                  />
                  <button className="btn-sm btn mt-3"> Validate Captcha</button>
                </div>
                <div className="form-control mt-6">
                  <button
                    disabled={false}
                    className="btn btn-primary"
                    type="submit"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div>
            <h1>
              New to BRISTO BOSS?{" "}
              <Link to="/signUp" className="btn">
                SIGN UP
              </Link>
            </h1>
          </div>
          <div>
            <Link to="/" className="btn btn-outline">
              Home
            </Link>
          </div>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
