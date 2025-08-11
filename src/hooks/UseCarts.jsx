 // this is hooks for loade cart>

 //api call,axios(axios secuer),tan stack

import { useQuery } from "@tanstack/react-query";
import UseAxios from "./UseAxios";
import UseAuth from "./UseAuth";

const UseCarts = () => {
  //for hooks start>
 const axiossecquer =UseAxios();
  //for hooks end>
 
  //user anlam start>
 const {user} = UseAuth();
  //user ana end>
 const {refetch,data: cart = [] } = useQuery({
  queryKey: ['cart',user?.email],
  queryFn: async() =>{
     const res =await axiossecquer.get(`/cart?email=${user.email}`);
     return res.data;
  }
 })
 return [cart,refetch]

};

export default UseCarts;