import { useLocation, useNavigate } from "react-router-dom";
import BordersList from "../BordersList";
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
    // console.log(newArr)
    return <div>
        {name}
        {nativeName}
        <button onClick={handleBack}>Go back</button>
        {result}
    </div>
}
export default DetailsPage;