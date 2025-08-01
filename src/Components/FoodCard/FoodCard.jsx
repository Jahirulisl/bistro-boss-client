
const FoodCard = ({item}) => {
  //from menuItems start>
   const { name, image, price, recipe } = item;
    //from menuItems end>
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
          <button className="btn text-yellow-600 btn-outline bg-slate-100 borrder-0 border-b-4 mt-4">Add To Cart</button>
        </div>
      </div>

    </div>
  );
};

export default FoodCard;