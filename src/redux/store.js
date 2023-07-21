import { configureStore } from '@reduxjs/toolkit';
import characters from './characterSlice'
export default configureStore({
    reducer: {
        personajes: characters
    }
})