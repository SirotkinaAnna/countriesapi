import { createSlice } from "@reduxjs/toolkit";

const countrySlice = createSlice({
    name: 'country',
    initialState: {
        searchTerm: '',
        dataMy: [],
        region: ''

    },
    reducers: {
        changeSearchTerm(state, action) {
            state.searchTerm = action.payload
        },
        filterByRegion(state, action) {
            state.region = action.payload
        },
        fetchData(state, action) {
            state.dataMy = action.payload
        }

    }
})

export const { changeSearchTerm, filterByRegion, fetchData } = countrySlice.actions;
export const CountryReducer = countrySlice.reducer;