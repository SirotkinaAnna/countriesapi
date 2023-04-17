import { useNavigate } from "react-router-dom";
import sortPopulation from "./hooks/population-tostring";
import { useSelector } from "react-redux";
function CountryList({ item, allData }) {
    const navigate = useNavigate();


    const handleClick = () => {
        navigate('/country', {
            state: {
                item: item,
                allData
            }
        })
    }
    return <div className="h-full bg-white text-sm rounded-lg shadow-md">
        <div className="h-40 rounded-t-lg"><img className="h-full w-full rounded-t-lg" src={item.flags.png} alt={item.flags.alt} /></div>
        <div className="px-6"> <h1 onClick={handleClick} className="cursor-pointer font-bold text-base py-4">{item.name}</h1>
            <p className="pb-2"><span className="font-bold">Population: </span>{sortPopulation(item.population)}</p>
            <p className="pb-2"><span className="font-bold ">Region </span>{item.region}</p>
            <p className="pb-6"><span className="font-bold ">Capital: </span>{item.capital}</p></div>
    </div>
}
export default CountryList;