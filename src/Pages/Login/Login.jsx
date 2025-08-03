//from simpole react chapta start>
import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../provider/AuthProvider';
//from simpole react chapta end>
const Login = () => {
  const captchRef = useRef(null);
  const [disabled,setDisable] = useState(true);
  
  //from authprovider use Authcontext >>
 const { signin} = useContext(AuthContext);


  useEffect(() => {
    loadCaptchaEnginge(6);
  }, [])
  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    //from authProvider usecontext and sign in start>>
     signin(email,password)
     .then(result => {
      const user = result.user;
      console.log(user);
     })
      //from authProvider usecontext and sign in end>>
  }
  const handleValidateCaptcha = () =>{
   const user_captcha_value = captchRef.current.value;
   if(validateCaptcha(user_captcha_value)){
     setDisable(false);
   }
   else{
      setDisable(true);
   }
  }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col md:flex-row-reverse">
        <div className="text-center lg:text-left md:w-1/2">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
            quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 md:w-1/2 max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label ">
                <span className='label-text'>Email</span>
              </label>

              <input type="email" name='email' className="input" placeholder="Email" />

              <label className="label">
                <span className='label-text'>Password</span>
              </label>

              <input type="password" name='password' className="input" placeholder="Password" />

              <label className="label mt-4">
                <span className='label-text'>Enter Captcha</span>
              </label>
              {/*Captcha Canvas render start> */}
              <div className='from-control'>
                <label>
                  <LoadCanvasTemplate />
                </label>

                <input ref={captchRef} type="text" name="captcha" placeholder=" Jahir Type the captcha above please" className="input input-bordered mt-2" />
              </div>
              <button onClick = {handleValidateCaptcha} className="btn btn-outline btn-xs mt-2">Validate</button>
              {/*Captcha Canvas render end> */}
              <div>
                <input disabled={disabled} className='btn btn-primary mt-4' type="Submit" value="Login" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;