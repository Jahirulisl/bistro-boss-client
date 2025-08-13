import { FaGoogle } from "react-icons/fa";
import UseAuth from "../../hooks/UseAuth";
import UseAxiosPublic from "../../hooks/UseAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocailLogin = () => {
  //for navigate st
 const navigate = useNavigate();
  //for gogle signin hook/component str
 const {googleSignIn} = UseAuth();
 //for gogle signin hook/component end

   //make handleGoogleSignin st
 const handleGoogleSignIn = () =>{
   //data patabo axios akara str
 const axiospublic = UseAxiosPublic(); 
  googleSignIn()
  .then(result =>{
    console.log(result.user);
    const userInfo = {
      email: result.user?.email,
      name: result.user?.displayName,

    }

    axiospublic.post('/user', userInfo)
    .then(res =>{
      console.log(res.data);
      navigate('/');
    })
  })
 }
  return (
    <div className="p-8">
      <div className="divider"></div>
      <button onClick={handleGoogleSignIn} className="btn">
        <FaGoogle className="mr-2"></FaGoogle>
        Google
      </button>
    </div>
  );
};

export default SocailLogin;