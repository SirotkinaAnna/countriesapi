import { useState, useEffect } from "react"

import CountryList from "../CountryList";
import dataCountries from "../data.json"
import SearchBar from "../SearchBar";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../store";
function StartPage() {
    const [data, setData] = useState([]);
    const dispatch = useDispatch();
    const fetchCountries = async () => {
        // const response = await axios.get(' https://restcountries.com/v3.1/all')
        //  setData(response.data)
        //console.log(response.data)
        setData(dataCountries);
        dispatch(fetchData(dataCountries))
    }
    useEffect(() => {
        fetchCountries();

    }, [])
    const { dataMy } = useSelector(({ country: { dataMy, searchTerm, region } }) => {
        const filteredCars = dataMy.filter((item) =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase())

        )
            .filter((item) =>
                item.region.toLowerCase().includes(region.toLowerCase())
            )
        return {
            dataMy: filteredCars

        }

    })
    const newArray = dataMy.map((item) => {
        //console.log("1", item.name)
        return <CountryList key={item.name} item={item} allData={data}></CountryList>
    })
    return <>
        <SearchBar />
        <div className='grid md:grid-cols-4 gap-20 px-8 md:px-20 my-card py-6'>
            {newArray}</div></>


}
export default StartPage;