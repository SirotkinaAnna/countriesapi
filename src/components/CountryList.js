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
    return <div className="h-full bg-white input-inside  text-sm rounded-lg shadow-md">
        <div className="h-56 md:h-48 rounded-t-lg input-inside"><img className="h-full w-full rounded-t-lg " src={item.flags.png} alt="flag" /></div>
        <div className="px-8  md:h-max div-dark-border div-dark py-6 md:py-4"> <h1 onClick={handleClick} className="cursor-pointer text-lg font-bold text-base py-4">{item.name}</h1>
            <p className="pb-2"><span className="font-semibold">Population: </span>{sortPopulation(item.population)}</p>
            <p className="pb-2"><span className="font-semibold ">Region: </span>{item.region}</p>
            <p className="pb-6"><span className="font-semibold ">Capital: </span>{item.capital}</p></div>
    </div>
}
export default CountryList;