import { configureStore } from "@reduxjs/toolkit";
import { CountryReducer, changeSearchTerm, actionSearch, firstSearch } from "./countrySlice";

const store = configureStore({
    reducer: {
        search: CountryReducer
    }

})

export { store, changeSearchTerm, actionSearch, firstSearch };
