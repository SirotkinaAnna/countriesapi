import { useNavigate, useLocation } from "react-router-dom";
function CountryList({ item, allData }) {
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
    return <div className="h-full">
        <div className="h-40"><img className="h-full w-full" src={item.flags.png} alt={item.flags.alt} /></div>
        <h1 onClick={handleClick}>{item.name}</h1>
        <p><span className="bold">Population: </span>{item.population}</p>
    </div>
}
export default CountryList;