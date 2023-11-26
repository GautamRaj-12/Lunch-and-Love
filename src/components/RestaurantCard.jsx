import React from 'react';

const RestaurantCard = ({
  name,
  avgRating,
  cuisines,
  cloudinaryImageId,
  areaName,
}) => {
  const IMG_CDN_URL = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/`;
  return (
    <>
      <div className='flex-wrap border-2 restaurant-card w-[15%]'>
        <img
          src={IMG_CDN_URL + cloudinaryImageId}
          alt=''
          className='h-32 rounded w-[100%]'
        />
        <h2>{name}</h2>
        <h3>{areaName}</h3>
        <h4>{avgRating}</h4>
        <h5 className='word-wrap'>{cuisines.join(', ')}</h5>
      </div>
    </>
  );
};

export default RestaurantCard;
