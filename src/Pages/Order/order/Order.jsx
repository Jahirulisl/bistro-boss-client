
import { useState } from 'react';
import orderCoverImg from '../../../assets/shop/order.jpg'
import Cover from '../../Shard/Cover/Cover';
//for tabs from react osam 
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import UseMenu from '../../../hooks/UseMenu';
import OrderTab from './orderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Order = () => {

  // for category instant start>>
  const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
  //specfic produtct start>
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  // for category instant end>>

  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = UseMenu();//lode from usehooks.

  //from menu data start>
  
  const salad = menu.filter(item => item.category === 'salad');
  const pizza = menu.filter(item => item.category === 'pizza');
  const soup = menu.filter(item => item.category === 'soup');
  const dessert = menu.filter(item => item.category === 'dessert');
  const drinks = menu.filter(item => item.category === 'drinks');
  //from menu data end>
  return (
    <div className='text-center uppercase text-violet-600'>
      <Helmet>
        <title>Bistro Boss | order Food</title>
      </Helmet>
      <Cover img={orderCoverImg} title="Order Food" ></Cover>
      
      {/* tabs from react osam start */}
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dssert</Tab>
          <Tab>Drinks</Tab>
        </TabList>

        {/* for salad order  */}
        <TabPanel>
          <OrderTab items={salad}></OrderTab>
        </TabPanel>
        {/* for pizza order  */}
        <TabPanel>
          <OrderTab items={pizza}></OrderTab>
        </TabPanel>

        {/* for soup order  */}
        <TabPanel>
          <OrderTab items={soup}></OrderTab>
        </TabPanel>
        {/* for Dessert order  */}
        <TabPanel>
          <OrderTab items={dessert}></OrderTab>
        </TabPanel>
        {/* for Drinks order  */}
        <TabPanel>
          <OrderTab items={drinks}></OrderTab>
        </TabPanel>
      </Tabs>
      {/* tabs from react osam end */}
    </div>
  );
};

export default Order;