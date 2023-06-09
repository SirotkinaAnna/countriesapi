import { BsMoon, BsFillMoonFill } from "react-icons/bs";
import { useState } from "react";
function TopHeader() {
    const [mode, toggleMode] = useState(true);
    const allDiv = document.querySelectorAll("*");

    const handleDarkMode = () => {

        toggleMode(!mode);
        if (mode) {
            for (let i = 0; i < allDiv.length; i++) {
                allDiv[i].classList.add('dark')
            }
        }
        else if (!mode) {
            for (let i = 0; i < allDiv.length; i++) {
                allDiv[i].classList.remove('dark')
            }
        }
    }

    return <nav className="bg-white flex justify-between px-4 md:px-20 py-6 drop-shadow-md">
        <h1 className="md:font-bold text-md md:text-lg">Where in the world?</h1>
        <button className="flex justify-center items-center gap-2 text-sm" onClick={handleDarkMode}>{!mode ? <BsFillMoonFill /> : <BsMoon />}Dark Mode</button>

    </nav>
}
export default TopHeader;