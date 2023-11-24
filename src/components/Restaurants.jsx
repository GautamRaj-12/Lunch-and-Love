import React, { useState } from 'react';
import RestaurantCard from './RestaurantCard';
import { restaurantsList } from './Config';

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState(restaurantsList);
  const [searchInputText, setSearchInputText] = useState('');

  const changeInput = (e) => {
    setSearchInputText(e.target.value);
  };

  const filterData = () => {
    const data = restaurants.filter((restaurant) => {
      return restaurant.info.name.includes(searchInputText);
    });
    setRestaurants(data);
  };

  return (
    <>
      <div className='w-[90%] mx-auto my-5'>
        <input
          type='text'
          value={searchInputText}
          placeholder='Search your favourite Restaurant'
          className='w-1/2 mr-2 border-2 border-gray-300 rounded outline-none'
          onChange={changeInput}
        />
        <button
          className='p-1 font-semibold text-gray-500 rounded bg-amber-400'
          onClick={filterData}
        >
          Search
        </button>
      </div>
      <div className='restaurants w-[90%] mx-auto flex flex-wrap gap-5'>
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
          );
        })}
      </div>
    </>
  );
};

export default Restaurants;
