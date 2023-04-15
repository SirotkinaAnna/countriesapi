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
    return <p onClick={handleClick}>{item.name}</p>
}
export default BordersList