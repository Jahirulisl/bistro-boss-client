import axios from "axios";
//make axiospublic fromo axios doc instance st
const axiosPublic = axios.create({
  baseURL: 'http://localhost:5000'
});
//make axiospublic fromo axios doc instance end

const UseAxiosPublic = () => {
 return axiosPublic;
};

export default UseAxiosPublic;