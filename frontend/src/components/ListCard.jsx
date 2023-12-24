import React from 'react'
import { FaCircle } from "react-icons/fa";
import { IoTriangle } from "react-icons/io5";

const VegetableIcon = ({ className }) => {
    return <FaCircle className={`border-2 border-green-700 p-0.5 rounded-md ${className}`} color="green" size={20} />;
};
  
const NonVegetableIcon = ({ className }) => {
    return <IoTriangle className={`rotate-180 border-2 border-red-500 p-0.5 rounded-md ${className}`} color="red" size={20} />;
};

const ListCard = ({item,index}) => {
  return (
    <div key={index*3} className='w-full h-auto bg-white rounded-md border border-[#f1f1f1d0] flex flex-row gap-2 items-center justify-between p-2'>
            {/* <div className='w-fit min-w-[150px]'>
                {item.img
                    ?
                        <img src={item.img} className=''/>
                    :
                        <div className='w-full h-24 rounded-md bg-red-300'>
                        </div>
                }   
            </div> */}
            <div className='flex flex-row gap-2 items-center'>
                <div className=''>
                    {item.veg=='true'
                        ?  
                            <VegetableIcon />
                        :
                            <NonVegetableIcon />
                    } 
                </div>
                <div>
                    {item.catalogue_name}
                </div>
            </div>
            <div>
                ₹<span>{item.full_price}</span>
            </div>
            
        </div>
  )
}

export default ListCard