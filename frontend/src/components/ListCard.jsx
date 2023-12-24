import React, { useState } from 'react';
import { FaCircle } from "react-icons/fa";
import { IoTriangle } from "react-icons/io5";

const MAX_DESCRIPTION_LENGTH = 35;

const VegetableIcon = ({ className }) => {
  return <FaCircle className={`bg-white border-2 border-green-700 p-[2.5px] rounded-md ${className}`} color="green" size={20} />;
};

const NonVegetableIcon = ({ className }) => {
  return <IoTriangle className={`rotate-180 bg-white border-2 border-red-500 p-[2.5px] rounded-md ${className}`} color="red" size={20} />;
};

const ListCard = ({ item, index }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const displayDescription = showFullDescription
    ? item.description
    : `${item.description.slice(0, MAX_DESCRIPTION_LENGTH)}...`;

    return (
        <div key={index * 3} className='w-full h-auto bg-white rounded-md border border-[#f1f1f1d0] flex flex-row gap-2 items-start p-2'>
        {/* <div key={index * 3} className='w-full h-auto min-h-[130px] bg-white rounded-md border border-[#f1f1f1d0] flex flex-row gap-2 items-start p-2'> */}
            {/* <div className='w-fit min-w-[130px] h-fit min-h-[130px]'>
                {item.img ? (
                    <img src={item.img} className='rounded-md min-w-[130px] min-h-[130px]' />
                    ) : (
                    <div className='w-[130px] h-[130px] animate-pulse flex items-center justify-center rounded-md bg-slate-400'>
                        <svg
                        className='w-[40px]'
                        version='1.1'
                        id='L9'
                        xmlns='http://www.w3.org/2000/svg'
                        xmlns:xlink='http://www.w3.org/1999/xlink'
                        x='0px'
                        y='0px'
                        viewBox='0 0 100 100'
                        enable-background='new 0 0 0 0'
                        xml:space='preserve'
                        >
                            <path fill='#fff' d='M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50'>
                                <animateTransform attributeName='transform' attributeType='XML' type='rotate' dur='1s' from='0 50 50' to='360 50 50' repeatCount='indefinite' />
                            </path>
                        </svg>
                    </div>
                )}

                {item.category_name!=="Drinks" &&
                    <div className='relative -top-[25px] left-[5px] h-0'>
                        {item.veg === 'true' ? <VegetableIcon /> : <NonVegetableIcon />}
                    </div>
                }
            </div> */}
            <div className='w-full flex flex-row items-start justify-between mt-1 mb-auto'>
                <div className='font-medium'>{item.name}</div>

                <div className='flex flex-col'>
                    <div className='flex flex-row justify-end font-semibold'>
                        {item.half_price ? <div className='mr-[5px]'>₹{item.half_price} /</div> : "" } ₹{item.full_price}
                    </div>
                    {item.half_qty && 
                        <div className='flex flex-row'>
                            {item.half_qty} / {item.full_qty}
                        </div>
                    }
                </div>
                    {/* <div className='text-xs'>
                        {displayDescription}
                        {item.description.length > MAX_DESCRIPTION_LENGTH && (
                            <button className='text-blue-500' onClick={toggleDescription}>
                            {showFullDescription ? 'Read Less' : 'Read More'}
                            </button>
                        )}
                    </div> */}
            </div>
            {/* <div className='flex flex-col gap-1 items-start justify-start mt-1 mb-auto'>
                <div className='font-medium'>{item.name}</div>
                    <div className=''>
                        <div className='flex flex-row font-semibold'>
                            {item.half_price ? <div className='mr-[5px]'>₹{item.half_price} /</div> : "" } ₹{item.full_price}
                        </div>
                        {item.half_qty && 
                            <div className='flex flex-row'>
                                {item.half_qty} / {item.full_qty}
                            </div>
                        }
                    </div>
                    <div className='text-xs'>
                    {displayDescription}
                    {item.description.length > MAX_DESCRIPTION_LENGTH && (
                        <button className='text-blue-500' onClick={toggleDescription}>
                        {showFullDescription ? 'Read Less' : 'Read More'}
                        </button>
                    )}
                </div>
            </div> */}
        </div>
    );
};

export default ListCard;
