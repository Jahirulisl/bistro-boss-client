import axios from "axios";


const axiossecquer = axios.create({
 baseURL:'http://localhost:5000',
  
});

const UseAxios = () => {
 return axiossecquer;
};

export default UseAxios;