import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivatRoute = ({ children }) => {
  const location =useLocation();
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <span className="loading loading-spinner text-error"></span>
  }
  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{form:location}}
  replace></Navigate>


};

export default PrivatRoute;