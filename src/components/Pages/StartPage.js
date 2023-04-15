import { useState, useEffect } from "react"
import axios from "axios";
import CountryList from "../CountryList";
import dataCountries from "../data.json"
function StartPage() {
    const [data, setData] = useState([])
    const fetchCountries = async () => {
        // const response = await axios.get(' https://restcountries.com/v3.1/all')
        //  setData(response.data)
        //console.log(response.data)
        setData(dataCountries);
    }
    useEffect(() => {
        fetchCountries();
    }, [])
    const newArray = data.map((item) => {
        //console.log("1", item.name)
        return <CountryList key={item.name} item={item} allData={data}></CountryList>
    })
    return <div className='grid grid-cols-4 gap-x-20 px-20'>
        {newArray}</div>


}
export default StartPage;