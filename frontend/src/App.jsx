import { useState, useEffect } from "react";

import { MdRestaurantMenu } from "react-icons/md";
// import { FaUserCircle } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";
import { MdOutlineMenu } from "react-icons/md";


import data from "./components/data.jsx";
import ListCard from "./components/ListCard.jsx";
import HeavenMealLogo from "./assets/HeavenMealLogo.png"

function App() {
    const categoryNames = [
        "Fried Rice", "Noodles", "Indian Thalis", "Chinese Thalis", "Maggi",
        "Chinese Main Course", "Indian Main Course", "Rolls", "Starters",
        "Biryani", "Momos", "Combos", "Rice", "Breads", "Desserts",
    ];
      const [visibleCategory, setVisibleCategory] = useState(null);
      const [searchBar, setSearchBar] = useState('false');

      const toggleVisibility = (category) => {
        setVisibleCategory((prevCategory) => (prevCategory === category ? null : category));
      };

    return (
        <div className="w-full h-auto  no-scrollbar bg-hero backdrop-blur">
            {/* Navbar */}
            <div className="flex flex-col w-full ">
            {/* <div className="z-1 fixed flex flex-col w-full"> */}
                <div className="w-full px-8 sm:px-16 py-2 flex flex-row items-center justify-between bg-[#f1f1f1] shadow">
                    <div className="text-3xl font-bold">
                        <MdOutlineMenu />
                    </div>
                    <div>
                        <img className="w-[190px]" src={HeavenMealLogo} alt="Heaven Meal Logo" />
                    </div>
                    <div className="text-2xl font-bold"
                        onClick = {() => setSearchBar(!searchBar)}>
                        <FaMagnifyingGlass />
                    </div>
                </div>
                {searchBar && 
                    <div className="flex flex-row items-center justify-center w-full pt-4">
                        <div className="bg-[#f1f1f1] shadow flex flex-row items-center justify-center gap-2 w-full sm:w-3/4 lg:w-1/2 mx-4 lg:mx-0 px-4 py-2 rounded-md">
                            <input type="text" placeholder="What would you like to eat today?" className="w-full bg-[#f1f1f1] text-black" />
                                <button className="text-black">
                                <FaMagnifyingGlass />
                            </button>
                        </div>
                    </div>
                }
                
            </div>

            {/* Main Menu */}
            <div className="w-full px-4 sm:px-16 pt-2 pb-8">
                <div className="flex flex-col">
                    {categoryNames.map((name,index) => (
                        <div key={index} className="w-full">
                            <div onClick={() => toggleVisibility(name)} className="bg-white border rounded-md shadow my-2">
                                <div className="flex flex-row items-center justify-between px-5 py-2">
                                    <div className="text-xl font-gagalin">{name}</div>
                                    <FaChevronDown />
                                </div>
                            </div>
                            
                            <div className="px-2 h-fit">
                                {visibleCategory === name && 
                                    <div className="w-full flex flex-col gap-2">
                                        {data.filter(item => item.category_name === name).map((item, index) => (
                                        <div key={index} className="bg-white shadow">
                                            <ListCard item={item} index={index} />
                                        </div>
                                        ))}
                                    </div>
                                }
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
