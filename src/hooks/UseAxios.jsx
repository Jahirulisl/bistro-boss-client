import axios from "axios";


export const axiossecquer = axios.create({
 baseURL:'http://localhost:5000',
  
});

const UseAxios = () => {
 return axiossecquer;
};

export default UseAxios;