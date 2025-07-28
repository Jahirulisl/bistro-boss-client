import { Link } from "react-router-dom";
import Cover from "../../../Shard/Cover/Cover";
import MenuItem from "../../../Shard/MenuItems/MenuItem";

const ManueCatagory = ({ items, title, img }) => {
  return (
    <div className="pt-8">
      {title && <Cover img={img} title={title}></Cover>}
      <div className='grid md:grid-cols-2 gap-10 my-16'>
        {
          items.map(item => <MenuItem
            key={item._id} item={item}>
          </MenuItem>)
        }
      </div>
      <Link to="/order">
        <button className="btn btn-neutral btn-outline border-0 border-b-4 mt-4">Order favret food</button>
      </Link>
    </div>
  );
};

export default ManueCatagory;