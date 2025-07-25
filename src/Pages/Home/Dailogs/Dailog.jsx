import React from 'react';
import dailog from '../../../assets/home/chef-service.jpg'

const Dailog = () => {
  return (
    <div className='mx-auto text-center mt-8'>
      <img src={dailog} alt="" />
      <div className='mx-auto text-center border-spacing-4 md:w-6/12 my-8 -mt-52 text-white py-4'>
        <h2 className='text-3xl uppercase'>BISTRO BOSS</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nisi ab eaque suscipit asperiores laboriosam totam veniam obcaecati, distinctio sequi?</p>
      </div>
    </div>
  );
};

export default Dailog;