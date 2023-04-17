import { useLocation, useNavigate } from "react-router-dom";
import BordersList from "../BordersList";
import { BsArrowLeft } from 'react-icons/bs'
import sortPopulation from "../hooks/population-tostring";
function DetailsPage() {
    const { state } = useLocation();
    const navigate = useNavigate();
    const handleBack = () => {
        navigate('/')
    }
    const { name, nativeName, flags, population, region, capital, subregion, topLevelDomain, currencies, languages, borders } = state.item;

    const newArr = state.allData.filter((item) => {
        //   console.log("borders", borders)
        if (borders) {
            for (let i = 0; i < borders.length; i++) {
                if (item.alpha3Code === borders[i])
                    return item
            }
        }
        else return 0;
        return 0;

    })
    const result = newArr.map((item) => {
        return <BordersList key={item.name} item={item} allData={state.allData} />
    })
    const allCurencies = currencies.map((item) => {
        return item.name
    })
    const allLanguages = languages.map((item) => {
        return item.name
    }).toString().replaceAll(',', ', ')

    return <>
        <button onClick={handleBack} className="my-16 rounded-lg mx-20 shadow-md px-6 py-2 flex items-center gap-2" ><BsArrowLeft /> Back</button>
        <div className="px-20 grid grid-cols-2 gap-20 ">
            <div className=" h-96"><img src={flags.png} alt={flags.alt} className="shadow-md w-full h-full" /></div>
            <div className="grid  content-between">
                <div><h2 className="font-bold text-2xl py-10"> {name}</h2>
                    <div className="flex justify-between ">
                        <div className="space-y-2"><p className=""><span className="font-bold">Native Name: </span> {nativeName}</p>
                            <p className=""><span className="font-bold">Population: </span>{sortPopulation(population)}</p>
                            <p className=""><span className="font-bold">Region: </span>{region}</p>
                            <p className=""><span className="font-bold">Sub Region: </span>{subregion}</p>
                            <p className=""><span className="font-bold">Capital: </span>{capital}</p>
                        </div>
                        <div className="space-y-2">
                            <p className=""><span className="font-bold">Top Level Domain: </span>{topLevelDomain}</p>
                            <p className=""><span className="font-bold">Currencies: </span>{allCurencies.toString()}</p>
                            <p className=""><span className="font-bold">Languages: </span>{allLanguages}</p>
                        </div>
                    </div></div>
                <div className="flex items-center pb-6">
                    <p><span className="font-bold">Border Countries: </span></p><div className="ps-2 space-x-2">{result}</div>
                </div>
            </div>
        </div>
    </>
}
export default DetailsPage;