
import { useState } from "react";
import { BsSearch } from 'react-icons/bs'
import { RiArrowDropDownLine } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import { changeSearchTerm } from "../store";
import FilterRegion from "./FilterRegion";

function SearchBar() {
    const dispatch = useDispatch();
    const searchTerm = useSelector((state) => {
        return state.country.searchTerm
    })
    const region = useSelector((state) => {
        return state.country.region
    })

    const handleSearchTermChange = (event) => {

        dispatch(changeSearchTerm(event.target.value))
    }
    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow(!show)

    }

    return <section className="px-4 md:px-20 py-10 my-card flex justify-between flex-col md:flex-row">
        <div className="flex w-full px-4 py-2 mb-10 md:mb-0 md:w-1/3 rounded-lg shadow-md bg-white items-center input-inside" >
            <div className="w-1/6 flex justify-center h-full items-center text-slate-500 input-inside rounded-lg"> <BsSearch /></div>
            <input className="w-5/6 h-full  px-2 py-2 rounded-lg border-none " id="input" placeholder="Search for a country..." value={searchTerm}
                onChange={handleSearchTermChange} />

        </div>
        <div className="relative inline-block text-left w-2/3 md:w-1/6 ">
            <div>
                <button type="button" onClick={handleClick} className="inline-flex w-full justify-between  gap-x-1.5 rounded-md bg-white px-4 py-4 text-sm font-semibold text-gray-900 shadow-md input-inside">
                    <span> {region ? region : "Filter by Region"}</span> <span className="text-xl input-inside"><RiArrowDropDownLine /></span>

                </button>
            </div>


            {show && <div className="absolute right-0 z-10 mt-2 w-full md:w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none input-inside" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" >
                <div className="py-1 rounded-md" role="none">
                    <FilterRegion setShow={setShow}></FilterRegion>
                    <FilterRegion setShow={setShow}>Africa</FilterRegion>
                    <FilterRegion setShow={setShow}>America</FilterRegion>
                    <FilterRegion setShow={setShow}>Asia</FilterRegion>
                    <FilterRegion setShow={setShow}>Europe</FilterRegion>
                    <FilterRegion setShow={setShow}>Oceania</FilterRegion>
                </div>
            </div>}
        </div>
    </section>
}
export default SearchBar;