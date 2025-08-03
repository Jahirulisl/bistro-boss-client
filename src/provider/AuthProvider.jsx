
import { createContext, useEffect, useState } from "react";

//from firebase authprovider>
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "../firebase/Firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);


const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  //make create user start>
 const createUser = (email,password)=>{
  setLoading(true)
  return createUserWithEmailAndPassword(auth,email,password);
 }
  //make create user end>

  //make signin start>
 const signin = (email,password)=>{
  setLoading(true);
  return signInWithEmailAndPassword(email,password);
 }
   //make signin end>

   //make logout start>
  const logout = ()=>{
    setLoading(true);
    return signOut(auth)
  }
    //make logout start>
  useEffect(() => {
    const unsubscrib = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      console.log('currrent user', currentUser);
      setLoading(false);
    });
    return () => {
      return unsubscrib();
    }
  }, [])
  const authInfo = {
    user,
    loading,
    createUser,
    signin,
    logout,
  }
  return (
    <AuthContext.Provider>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider; 