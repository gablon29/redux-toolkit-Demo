import { createSlice } from "@reduxjs/toolkit";

export const characterSlice = createSlice({
    name: 'characters', // nombre del slice
    initialState: { // el estado inicial del estado global
        characters: [], 
        detail: {},
    },
    reducers: {
        // una propiedad que contiene una funcion que recibe un stado y una action
        getallcharacters: (state, action) => { 
            state.characters = action.payload
        } 
    }
})
export const { getallcharacters } = characterSlice.actions; // exportamos la action por separado
export default characterSlice.reducer // contiene todos nuestros reducers