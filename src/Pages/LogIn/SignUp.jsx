/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";


const SignUp = () => {
  const {createUser} = useContext(AuthContext)
 
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data)
    createUser(data.email, data.password)
    .then(res => {
      const loggedUser = res.user;
      console.log(loggedUser)
    })
  };
  console.log(watch("example"));
   
    
    return (
      <div>
        <Helmet>
          <title>BRISTO BOSS | SIGN UP</title>
        </Helmet>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col ">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">SIGNUP!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      name="name"
                      {...register("name", { required: true })}
                      type="text"
                      placeholder="Your Name"
                      className="input input-bordered"
                    />
                    {errors.name && (
                      <span className="text-red-600 font-semibold">
                        Your name is required
                      </span>
                    )}
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      name="email"
                      {...register("email", { required: true })}
                      type="email"
                      placeholder="Your Email"
                      className="input input-bordered"
                    />
                    {errors.email && (
                      <span className="text-red-600 font-semibold">
                        Your email is required
                      </span>
                    )}
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      name="password"
                      {...register("password", {
                        required: true,
                        minLength: 6,
                        maxLength: 20,
                        // pattern :/^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z])$/
                      })}
                      type="password"
                      placeholder="password"
                      className="input input-bordered"
                    />
                    {errors.password?.type === "required" && (
                      <span className="text-red-600 font-semibold">
                        Password is required
                      </span>
                    )}
                    {errors.password?.type === "minLength" && (
                      <span className="text-red-600 font-semibold">
                        at least 6 characters
                      </span>
                    )}
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn btn-primary" type="submit">
                      SIGN UP
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SignUp;