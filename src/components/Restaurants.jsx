import React, { useEffect, useState } from 'react';
import RestaurantCard from './RestaurantCard';

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchInputText, setSearchInputText] = useState('');

  useEffect(() => {
    getRestaurants();
  }, []);

  const getRestaurants = async () => {
    const dataFetched = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.572646&lng=88.36389500000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
    );
    const jsonData = await dataFetched.json();
    const cards = jsonData?.data?.cards;

    const targetCardIndex = cards.findIndex((card) => {
      return (
        card?.card?.card?.gridElements?.infoWithStyle?.restaurants !== undefined
      );
    });
    if (targetCardIndex !== -1) {
      setRestaurants(
        cards[targetCardIndex]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRestaurants(
        cards[targetCardIndex]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } else {
      console.error('Something went wrong');
    }
  };

  //on changing input
  const changeInput = (e) => {
    setSearchInputText(e.target.value);
  };

  //filtering data based on search input text
  const filterData = () => {
    const data = restaurants.filter((restaurant) => {
      return restaurant?.info?.name
        ?.toLowerCase()
        .includes(searchInputText.toLowerCase());
    });
    setFilteredRestaurants(data);
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
        {searchInputText !== '' && filteredRestaurants.length === 0 ? (
          <h2>No restaurants Found</h2>
        ) : (
          filteredRestaurants?.map((restaurant) => {
            return <RestaurantCard {...restaurant.info} />;
          })
        )}
      </div>
    </>
  );
};

export default Restaurants;
