
import { useEffect, useState } from "react";

const UseMenu = () =>{
 const [manue, setManue] = useState([]);
 const [loading,setLoading] = useState(true);
   useEffect(() => {
     fetch('Manue.json')
       .then(res => res.json())
       .then(data => {
         setManue(data);
         setLoading(false);
       });
   }, [])
   return [manue]
}


export default UseMenu;