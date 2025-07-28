import SectionTitle from '../../../Components/Section/SectionTitle';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shard/Cover/Cover';
//import imgs start>>
import menuImg from '../../../assets/menu/banner3.jpg';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import sladImg from '../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';


//import imgs end>>
import UseMenu from '../../../hooks/UseMenu';
import ManueCatagory from './manueCatagory/ManueCatagory';
const Menu = () => {
  const [menu] = UseMenu();
  const dessert = menu.filter(item => item.category === 'dessert');
  const pizza = menu.filter(item => item.category === 'pizza');
  const salad = menu.filter(item => item.category === 'salad');
  const soup = menu.filter(item => item.category === 'soup');
  const offered = menu.filter(item => item.category === 'offered');
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | menu</title>
      </Helmet>
      <Cover img={menuImg} title="our menu"></Cover>
      
      {/* main cover */}
      <SectionTitle subHeading="Don't miss" heading="Today's offer"></SectionTitle>
      {/* offered menu items */}
      <ManueCatagory items={offered}></ManueCatagory>

      {/*dessert  menu items */}
      <ManueCatagory items={dessert}
        title="Desert"
        img={dessertImg}
      ></ManueCatagory>
      {/*pizza  menu items */}
      <ManueCatagory items={pizza}
        title="pizza"
        img={pizzaImg}
      ></ManueCatagory>

      {/*Salad menu items */}
      <ManueCatagory items={salad}
        title="Salad"
        img={sladImg}
      ></ManueCatagory>

      {/*Salad menu items */}
      <ManueCatagory items={soup}
        title="soup"
        img={soupImg}
      ></ManueCatagory>

    </div>
  );
};

export default Menu;