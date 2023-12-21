import { useState } from 'react'

import { MdRestaurantMenu } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaList } from "react-icons/fa";
import { TfiLayoutGrid2Alt } from "react-icons/tfi";
import { TfiLayoutGrid3Alt } from "react-icons/tfi";
import data from "./components/data.jsx"

import img from "../src/assets/PrimeCheesyL.jpg"

import ListView from './components/View/ListView';
import Grid2View from './components/View/Grid2View';
import Grid3View from './components/View/Grid3View';

function App() {

    return (
        <div className="w-full h-auto  no-scrollbar">
            {/* Navbar */}
            <div className='fixed flex flex-col w-full z-1'>
                <div className='bg-red-400 w-full px-4 sm:px-16 py-4 flex flex-row items-center justify-between'>
                    <div className='text-2xl font-bold'>
                        <MdRestaurantMenu />
                    </div>
                    <div className='text-2xl font-bold'>
                        Heaven Meal
                    </div>
                    <div className='text-2xl font-bold'>
                        <FaUserCircle />
                    </div>
                </div>
                <div className='bg-yellow-300 flex flex-row items-center justify-center w-full py-2'>
                    <div className='bg-white flex flex-row items-center justify-center gap-2 w-full sm:w-3/4 lg:w-1/2 mx-4 lg:mx-0 px-4 py-2 rounded-md'>
                        <input type="text" className='w-full'/>
                        <button className='text-black'>
                            <FaMagnifyingGlass/>
                        </button>
                    </div>
                </div>
            </div>
            {/* <div className='bg-transparent fixed bottom-0 w-full flex flex-row justify-center'>
                    <div className='flex flex-row items-center gap-3 pb-8'>
                    <button
                        className='text-black flex items-center justify-center rounded-full w-12 h-12 bg-red-200'
                        onClick={()=> setView("list")}
                    >
                        <FaList/>
                    </button>
                    <button
                        className='text-black flex items-center justify-center rounded-full w-12 h-12 bg-red-200'
                        onClick={()=> setView("grid2")}
                    >
                        <TfiLayoutGrid2Alt/>
                    </button>
                    <button className='text-black flex items-center justify-center rounded-full w-12 h-12 bg-red-200'>
                        <TfiLayoutGrid3Alt onClick={()=> setView("grid3")}/>
                    </button>
                </div>
            </div> */}
            <div className='z-1 w-full px-4 sm:px-16 pt-36 pb-8'>
                <div className='flex flex-col gap-4'>
                {data.map((item, index) => (
                    <ListView item={item} index={index}/>
                ))}
                </div>
            </div>
        </div>
    )
}

export default App
