import React from 'react';
import RestaurantCard from './RestaurantCard';

const Restaurants = () => {
  const restaurantsList = [
    {
      name: 'Burger King',
      image:
        'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf',
      cuisines: ['Burger', 'American'],
      rating: '4.2',
      place: 'Esplanade',
    },
    {
      name: 'Dariole',
      image:
        'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/muxbcwaegpr6mdogtach',
      cuisines: ['Bakery', 'Desserts'],
      rating: '4.5',
      place: 'Elgin',
    },
    {
      name: 'Kookie Jar',
      image:
        'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/tg3exxqko24fbnkyizhe',
      cuisines: ['Desserts, Snacks', 'Bakery', 'Icecream'],
      rating: '4.7',
      place: 'Esplanade',
    },
  ];
  return (
    <>
      <div className='restaurants w-[90%] mx-auto flex gap-5'>
        {restaurantsList.map((restaurant) => {
          return <RestaurantCard {...restaurant} />;
        })}
      </div>
    </>
  );
};

export default Restaurants;
