import { createSlice } from "@reduxjs/toolkit";

const countrySlice = createSlice({
    name: 'search',
    initialState: {
        searchTerm: '',
        data: [],

    },
    reducers: {
        changeSearchTerm(state, action) {
            state.searchTerm = action.payload
        },
        actionSearch(state, action) {
            state.data = ({


            })


        },
        firstSearch(state, action) {

        }

    }
})

export const { changeSearchTerm, actionSearch, firstSearch } = countrySlice.actions;
export const CountryReducer = countrySlice.reducer;