import React from 'react';
import { IMG_CDN_URL } from './Config';

const RestaurantCard = ({
  name,
  avgRating,
  cuisines,
  place,
  cloudinaryImageId,
}) => {
  return (
    <>
      <div className='flex-wrap border-2 restaurant-card w-[15%]'>
        <img
          src={IMG_CDN_URL + cloudinaryImageId}
          alt=''
          className='h-32 rounded w-[100%]'
        />
        <h3>{name}</h3>
        <h4>{avgRating}</h4>
        <h5 className='word-wrap'>{cuisines.join(', ')}</h5>
        <h6>{place}</h6>
      </div>
    </>
  );
};

export default RestaurantCard;
