
import { useDispatch } from "react-redux"
import { filterByRegion } from "../store"
function FilterRegion({ children, setShow }) {
    const dispatch = useDispatch();
    const handleClick = () => {
        children ? dispatch(filterByRegion(children)) : dispatch(filterByRegion(''))
        setShow(false)
    }
    return <div className="text-gray-700 block px-4 py-2 font-semibold w-full cursor-pointer input-inside" onClick={handleClick} role="menuitem">{children ? children : <p className="font-light text-sm">Reset filter</p>}

    </div>
}
export default FilterRegion