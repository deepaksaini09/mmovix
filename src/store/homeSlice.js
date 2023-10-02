import { createSlice } from "@reduxjs/toolkit";
const dataTitle = ' - movix entertainment where to watch, trailers, images gallery, cast and crew, release date'
export const homeSlice = createSlice({
    name: "home",
    initialState: {
        url: {},
        genres: {},
        contentTitle:dataTitle

    },
    reducers: {
        getApiConfiguration: (state, action) => {
            state.url = action.payload;
        },
        getGenres: (state, action) => {
            state.genres = action.payload;
        },
        getContentTitle:(state,action)=>{
            state.contentTitle = action.payload+dataTitle
        },


    },
});

// Action creators are generated for each case reducer function
export const { getApiConfiguration, getGenres,getContentTitle } = homeSlice.actions;

export default homeSlice.reducer;
