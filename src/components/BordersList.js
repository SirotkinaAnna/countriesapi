import { useNavigate } from "react-router-dom";
function BordersList({ item, allData }) {
    const navigate = useNavigate();
    //  { this.item } = useLocation();

    const handleClick = () => {
        navigate('/country', {
            state: {
                item: item,
                allData
            }
        })
    }
    console.log("item", item)
    return <button className="px-4 py-2 shadow-md" onClick={handleClick}>{item.name}</button>
}
export default BordersList