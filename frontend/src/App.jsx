import { useState, useEffect } from "react";

import { MdRestaurantMenu } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

import data from "./components/data.jsx";
import ListCard from "./components/ListCard.jsx";

function App() {
    const categoryNames = [
        "Fried Rice", "Noodles", "Indian Thalis", "Chinese Thalis", "Maggi",
        "Chinese Main Course", "Indian Main Course", "Rolls", "Starters",
        "Biryani", "Momos", "Combos", "Rice", "Breads", "Desserts",
    ];
      const [visibleCategory, setVisibleCategory] = useState(null);

      const toggleVisibility = (category) => {
        setVisibleCategory((prevCategory) => (prevCategory === category ? null : category));
      };

    return (
        <div className="w-full h-auto  no-scrollbar">
            {/* Navbar */}
            <div className="flex flex-col w-full">
            {/* <div className="z-1 fixed flex flex-col w-full"> */}
                <div className="bg-red-400 w-full px-4 sm:px-16 py-6 flex flex-row items-center justify-between">
                <div className="text-2xl font-bold">
                    <MdRestaurantMenu />
                </div>
                <div className="text-2xl font-bold">Heaven Meal</div>
                <div className="text-2xl font-bold">
                    <FaUserCircle />
                </div>
                </div>
                {/* <div className="bg-yellow-300 flex flex-row items-center justify-center w-full py-2">
                <div className="bg-white flex flex-row items-center justify-center gap-2 w-full sm:w-3/4 lg:w-1/2 mx-4 lg:mx-0 px-4 py-2 rounded-md">
                    <input type="text" className="w-full" />
                    <button className="text-black">
                    <FaMagnifyingGlass />
                    </button>
                </div>
                </div> */}
            </div>

            {/* Main Menu */}
            <div className="w-full px-4 sm:px-16 pt-4 pb-8">
            {/* <div className="w-full px-4 sm:px-16 pt-36 pb-8"> */}
                <div className="flex flex-col gap-4">
                {categoryNames.map((name,index) => (
                    <div key={index} className="w-full">
                        <div onClick={() => toggleVisibility(name)} className="border rounded-md">
                            <div className="flex flex-row items-center justify-between px-4 py-2">
                                {name}
                                <FaChevronDown />
                            </div>
                        </div>
                        
                        <div>
                            {visibleCategory === name && 
                                <div className="w-full flex flex-col gap-2 pt-2">
                                    {data.filter(item => item.category_name === name).map((item, index) => (
                                    <div key={index}>
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
