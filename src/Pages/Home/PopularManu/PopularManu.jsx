import React, { useLayoutEffect, useState, } from 'react';
import SectionTitle from '../../../Components/Section/SectionTitle';
import MenuItem from '../../Shard/MenuItems/MenuItem';


const PopularManu = () => {
  const [manue,setManue]= useState([]);
  useLayoutEffect(()=>{
    fetch('Manue.json')
    .then(res =>res.json())
    .then(data=>{
      const popularItems = data.filter(item =>item.category === 'popular');
      setManue(popularItems)
    });
  },[])
  return (
    <section className="mb-12">
       <SectionTitle
       heading="From Our Menu"
       subHeading="Popular Items"
       ></SectionTitle>
       <div className='grid md:grid-cols-2 gap-10'>
        {
          manue.map(item=> <MenuItem 
          key={item._id} item={item}>
          </MenuItem>)
        }
       </div>
    </section>
  );
};

export default PopularManu;