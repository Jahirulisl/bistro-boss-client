//from react hook form >
import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form"
import { AuthContext } from "../../provider/AuthProvider";
import { Link } from "react-router-dom";
const SignUp = () => {

  const { register, handleSubmit, formState: { errors }, } = useForm();

  //for conform singup worke use by hooks from auth provider strt step-1>
  const { createUser } = useContext(AuthContext);

  //for conform singup worke use by hooks from auth provider step-1 end>

  const onSubmit = (data) => {
    console.log(data);

    //for conform singup worke use by hooks from auth provider strt step-2>
    createUser(data.email, data.password)
      .then(result => {
        const logedUser = result.user;
        console.log(logedUser);
      })
    //for conform singup worke use by hooks from auth provider strt step-2>
  };

  return (
    <>
      {/* if you want use helmet start */}
      <Helmet>
        <title>Bistro Boss |sign up</title>
      </Helmet>
      {/* if you want use helmet end */}

      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Signup now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className='form-control'>
                <label className="label">Name</label>
                <input type="text" {...register("name", { required: true })} name='name' className="input" placeholder="Type Your Name" />
                {errors.name && <span className="text-red-600">Name is required</span>}
              </div>

              <div className='form-control'>
                <label className="label">Email</label>
                <input type="email" {...register("email", { required: true })} name='email' className="input" placeholder="Email" />

                {errors.email && <span className="text-red-600">Email is required</span>}
              </div>

              <div>
                <label className="label">Password</label>
                <input type="password" {...register("password", {
                  required: true, minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                })} className="input" placeholder="Password" />

                {/* password error strt */}
                {errors.password?.type === "required" && <p className="text-red-600">Password is requerd</p>
                }
                {/* password error end */}

                {/* 6 min length error strt */}
                {errors.password?.type === "minLength" && <p className="text-red-600">password must be 6 cherecter</p>
                }
                {/* 6 min length error end */}

                {/* 20 mx length error strt */}
                {errors.password?.type === "maxLength" && <p className="text-red-600">password must be less 20 cherecter</p>
                }
                {/* 20 mx length error end */}

                {/* if patren error show start */}
                {errors.password?.type === "pattern" && <p className="text-red-600">pattern must be one uppercase one lowercase one number one simbole need</p>
                }
                {/* if patren error show end */}

                <label className="lable">
                  <a href="#" className="lable-text-alt ling link-hover">Forgot password?</a>
                </label>

              </div>

              <div className="form-control mt-6">
                <input className="btn btn-primary " type="submit" value="Sign Up" />
              </div>
            </form>
            <p className="text-center"><small><Link to="/login">Already have an account</Link></small></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;