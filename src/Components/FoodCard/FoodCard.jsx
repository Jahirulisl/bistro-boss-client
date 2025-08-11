// import { useContext } from "react";
// import { AuthContext } from "../../provider/AuthProvider";

import Swal from "sweetalert2";
import UseAuth from "../../hooks/UseAuth";
import { useLocation, useNavigate } from "react-router-dom";
import UseAxios from "../../hooks/UseAxios";


const FoodCard = ({ item }) => {
  //from menuItems start>
  const { name, image, price, recipe, _id } = item;
  //from menuItems end>

  //for come location 
  const location = useLocation();

  //user k akhana nia asa start>
  const { user } = UseAuth();
  //user k akhana nia asa end>

  //make navigate for login page>
  const navigate = useNavigate();
  //for axiossecure hooks
 const axiossecquer =UseAxios();
  //for add cart start>
  const handleAddToCart = food => {
    if (user && user.email) {
      //todo -- send cart item to the database
      console.log(user.email, food);
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price
      }
      axiossecquer.post('/carts', cartItem)
        .then(res => {
          console.log(res.data)
          if (res.data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${name} added to your cart`,
              showConfirmButton: false,
              timer: 1500
            });
          }
        })
    }
    else {
      Swal.fire({
        title: "you are not login",
        text: "plase login to add a cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login"
      }).then((result) => {
        if (result.isConfirmed) {
          //send the user to the login page
          navigate('/login', { state: { from: location } });
        }
      });
    }
  }
  //for add cart start>
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <img
          src={image}
          alt="Shoes" />
      </figure>
      <p className="absolute right-0 bg-slate-900 text-white mr-4 mt-4 px-2">${price}</p>

      <div className="card-body flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button onClick={() => handleAddToCart(item)}
            className="btn text-yellow-600 btn-outline bg-slate-100 borrder-0 border-b-4 mt-4">
            Add To Cart</button>
        </div>
      </div>

    </div>
  );
};

export default FoodCard;