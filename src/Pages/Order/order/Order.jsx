
import { useState } from 'react';
import orderCoverImg from '../../../assets/shop/order.jpg'
import Cover from '../../Shard/Cover/Cover';
//for tabs from react osam 
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import UseMenu from '../../../hooks/UseMenu';
import OrderTab from './orderTab/OrderTab';

const Order = () => {
  const [tabIndex,setTabIndex] = useState(0);
  const [menu] = UseMenu();//lode from usehooks.

  //from menu data start>
  const dessert = menu.filter(item => item.category === 'dessert');
  const pizza = menu.filter(item => item.category === 'pizza');
  const salad = menu.filter(item => item.category === 'salad');
  const soup = menu.filter(item => item.category === 'soup');
  const drinks = menu.filter(item => item.category === 'drinks');
  //from menu data end>
  return (
    <div>
      <Cover img={orderCoverImg} title="Order Food" ></Cover>
      {/* tabs from react osam start */}
      <Tabs defaultIndex={tabIndex} onSelect={(index) =>setTabIndex(index)}>
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