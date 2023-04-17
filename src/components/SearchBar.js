
import { useState } from "react";
import { BsSearch } from 'react-icons/bs'
import { RiArrowDropDownLine } from "react-icons/ri";
function SearchBar() {
    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow(!show)
    }

    return <section className="px-20 py-10 my-card flex justify-between">
        <div className="flex w-1/3 rounded-lg shadow-md bg-white items-center" >
            <div className="w-1/6 flex justify-center h-full items-center text-slate-500 "> <BsSearch /></div>
            <input className="w-5/6 h-full  px-2 py-2 " id="input" placeholder="Search for a country..." />

        </div>
        <div className="relative inline-block text-left w-1/6 ">
            <div>
                <button type="button" onClick={handleClick} className="inline-flex w-full justify-between  gap-x-1.5 rounded-md bg-white px-4 py-4 text-sm font-semibold text-gray-900 shadow-md  hover:bg-gray-50">
                    <span> Filter by Region</span> <span className="text-xl"><RiArrowDropDownLine /></span>

                </button>
            </div>


            {show && <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                <div className="py-1" role="none">
                    <p className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1"  >Africa</p>
                    <p className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" >America</p>
                    <p className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" >Asia</p>
                    <p className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" >Europe</p>
                    <p className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" >Oceania</p>
                </div>
            </div>}
        </div>
    </section>
}
export default SearchBar;