import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

//make a hooks for user and other>>
const UseAuth = () => {
 const auth = useContext(AuthContext);
 return auth;
};

export default UseAuth;