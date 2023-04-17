import { configureStore } from "@reduxjs/toolkit";
import { CountryReducer, changeSearchTerm, filterByRegion, fetchData } from "./countrySlice";

const store = configureStore({
    reducer: {
        country: CountryReducer
    }

})

export { store, changeSearchTerm, filterByRegion, fetchData };
