import React from 'react';
import RestaurantCard from './RestaurantCard';
import { restaurantsList } from './Config';

const Restaurants = () => {
  return (
    <>
      <div className='restaurants w-[90%] mx-auto flex flex-wrap gap-5'>
        {restaurantsList.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
          );
        })}
      </div>
    </>
  );
};

export default Restaurants;
