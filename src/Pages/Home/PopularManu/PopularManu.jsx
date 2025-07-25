import React, { useState } from 'react';
import SectionTitle from '../../../Components/Section/SectionTitle';
import MenuItem from '../../Shard/MenuItems/MenuItem';

const PopularManu = () => {
  const [manue,setManue]= useState()
  useLayoutEffect(()=>{
    fetch('manue.json')
    .then(res =>res.json())
    .then(data=>{
      const popularItems = data.filter(item =>item.category === 'popular');
      setManue(popularItems)
    })
  },[])
  return (
    <section>
       <SectionTitle
       heading="From Our Menu"
       subHeading="Popular Items"
       ></SectionTitle>
       <div>
        {
          menu.map(item=> <MenuItem 
          key={item._id}>
          item={item}
          </MenuItem>)
        }
       </div>
    </section>
  );
};

export default PopularManu;