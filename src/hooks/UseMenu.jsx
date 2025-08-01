
import { useEffect, useState } from "react";

const UseMenu = () =>{
 const [manue, setManue] = useState([]);
 const [loading,setLoading] = useState(true);
   useEffect(() => {
     fetch('http://localhost:5000/menu')
       .then(res => res.json())
       .then(data => {
         setManue(data);
         setLoading(false);
       });
   }, [])
   return [manue]
}


export default UseMenu;