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
    const [view,setView]=useState("grid2");

    // const data=[
    //     {
    //         id:1,
    //         img:img,
    //         name:"Name",
    //         rating:4.5,
    //         price:"₹320",
    //         time:"33 min",
    //         veg:true,            
    //     },
    //     {
    //         id:2,
    //         img:img,
    //         name:"Name",
    //         rating:4.5,
    //         price:"₹320",
    //         time:"33 min",
    //         veg:true,            
    //     },
    //     {
    //         id:3,
    //         img:img,
    //         name:"Name",
    //         rating:4.5,
    //         price:"₹320",
    //         time:"33 min",
    //         veg:true,            
    //     },
    //     {
    //         id:4,
    //         img:img,
    //         name:"Name",
    //         rating:4.5,
    //         price:"₹320",
    //         time:"33 min",
    //         veg:true,            
    //     },
    //     {
    //         id:5,
    //         img:img,
    //         name:"Name",
    //         rating:4.5,
    //         price:"₹320",
    //         time:"33 min",
    //         veg:true,            
    //     },
    //     {
    //         id:6,
    //         img:img,
    //         name:"Name",
    //         rating:4.5,
    //         price:"₹320",
    //         time:"33 min",
    //         veg:true,            
    //     },
    // ]


    return (
        <div className="w-full h-auto  no-scrollbar">
            {/* Navbar */}
            <div className='fixed flex flex-col w-full z-1'>
                <div className='bg-red-400 w-full px-4 sm:px-16 py-4 flex flex-row items-center justify-between'>
                    <div className='text-2xl font-bold'>
                        <MdRestaurantMenu />
                    </div>
                    <div className='text-2xl font-bold'>
                        Food-Menu
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
            <div className='bg-transparent fixed bottom-0 w-full flex flex-row justify-center'>
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
                        {/* <button className='text-black flex items-center justify-center rounded-full w-12 h-12 bg-red-200'>
                            <TfiLayoutGrid3Alt onClick={()=> setView("grid3")}/>
                        </button> */}
                    </div>
                </div>
            <div className='z-1 w-full px-4 sm:px-16 pt-36 pb-8'>
                
                {view=="list" && <ListView data={data}/>}
                {view=="grid2" && <Grid2View data={data}/>}
                {view=="grid3" && <Grid3View data={data}/>}
                
            </div>
        </div>
    )
}

export default App
