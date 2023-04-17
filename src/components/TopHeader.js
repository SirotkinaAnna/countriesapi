import { BsMoon } from "react-icons/bs";
function TopHeader() {
    return <nav className="bg-white flex justify-between px-20 py-6 drop-shadow-md">
        <h1 className="font-bold text-lg">Where in the world?</h1>
        <button className="flex justify-center items-center gap-2 text-sm"><BsMoon />Dark Mode</button>

    </nav>
}
export default TopHeader;