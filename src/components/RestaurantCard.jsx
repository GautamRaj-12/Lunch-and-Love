import React from 'react';

const RestaurantCard = ({ image, name, rating, cuisines, place }) => {
  return (
    <>
      <div className='restaurant-card'>
        <img src={image} alt='' className='h-32 rounded w-44' />
        <h3>{name}</h3>
        <h4>{rating}</h4>
        <h5>{cuisines.join(',')}</h5>
        <h6>{place}</h6>
      </div>
    </>
  );
};

export default RestaurantCard;
