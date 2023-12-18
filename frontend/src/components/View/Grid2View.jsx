import React from 'react'
import { FaCircle } from "react-icons/fa";
import { IoTriangle } from "react-icons/io5";
import img from "../../assets/PrimeCheesyL.jpg"

const VegetableIcon = ({ className }) => {
    return <FaCircle className={`z-10 border-2 border-green-700 p-0.5 rounded-md ${className}`} color="green" size={22} />;
  };
  
  const NonVegetableIcon = ({ className }) => {
    return <IoTriangle className={`z-10 rotate-180 border-2 border-red-500 p-0.5 rounded-md ${className}`} color="red" size={22} />;
  };

const Grid2View = ({data}) => {
    return (
        <div className='grid grid-cols-2 gap-4'>
            {data.map((item, index) => (
                <div key={index} className='w-full h-auto bg-white shadow-xl border-2 border-slate-100 rounded-md flex flex-col lg:flex-row gap-2 items-center justify-between p-2'>
                    <div className='w-full flex flex-col items-end justify-center border-2 border-slate-200'>
                        {img
                            ?
                                <img src={img} className='mx-auto '/>
                            :
                                <div className='w-full h-28 rounded-md bg-gray-300'>
                                </div>
                        }  
                        {item.veg=='true'
                            ?  
                                <VegetableIcon className="z-10 relative right-1.5 -top-7" />
                            :
                                <NonVegetableIcon className="z-10 relative right-1.5 -top-7" />
                        } 
                        
                    </div>
                    <div className='w-full h-full flex flex-col items-between justify-start gap-2 px-2'>
                        <div className='w-full flex flex-row items-center justify-between'>
                            <div>
                                {item.catalogue_name}
                            </div>
                            
                        </div>
                        <div className='w-full flex flex-row items-center justify-between'>
                            <div>
                                ₨ : {item.full_price}
                            </div>
                            <div>
                                4.2
                            </div>
                        </div>
                        <button className='bg-[#4338ca] w-full rounded-sm py-1 text-white font-bold'>
                            Add
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Grid2View