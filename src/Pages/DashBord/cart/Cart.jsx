import { FaTrashAlt } from "react-icons/fa";
import UseCarts from "../../../hooks/UseCarts";
import Swal from "sweetalert2";
import UseAxios from "../../../hooks/UseAxios";

const Cart = () => {
  const [cart,refetch] = UseCarts();
  //for total price count st
  const totalPrice = cart.reduce((total, item) => total + item.price, 0)
  //for total price count st

  //for axios st

  const axciosSecure = UseAxios();
  //for axios end
  const handleDelete = id => {
    //sweet alart for delete st
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axciosSecure.delete(`/cart/${id}`)
          .then(res => {
            if (res.data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
              refetch();
            }
          })
      }
    });
    //sweet alart for delete end

  }
  return (
    <div>
      <div className="flex justify-evenly items-center mb-8">
        <h2 className="4xl">Items:{cart.length}</h2>
        <h2 className="4xl">Total Price:{totalPrice}</h2>
        <button className="btn btn-primary">pay</button>
      </div>
      {/* for tabil from khala */}
      <div className="overflow-x-auto ">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>

              </th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* data thaka loop kora kora calabo */}

            {
              cart.map((item, index) => <tr key={item._id}>
                <th>
                  {index + 1}
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>

                  </div>
                </td>
                <td>
                  {item.name}
                </td>
                <td>$:{item.price}</td>
                <th>
                  <button onClick={() => handleDelete(item._id)} className="btn btn-ghost btn-lg">
                    <FaTrashAlt className="text-purple-700"></FaTrashAlt>
                  </button>
                </th>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;