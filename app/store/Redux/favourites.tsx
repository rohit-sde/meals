import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
    name: "favorites",
    initialState: {
        ids: [] as string[]
    },
    reducers: {
        addFavorite: (state, action: { payload: { id: string } }) => {
            state.ids.push(action.payload.id);
        },
        removeFavorite: (state, action: { payload: { id: string } }) => {
            state.ids.splice(state.ids.indexOf(action.payload.id), 1);
        }
    }
})

export const favoritesActions = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;


export type RootState = {
    favorites: {
        ids: string[]
    }
}