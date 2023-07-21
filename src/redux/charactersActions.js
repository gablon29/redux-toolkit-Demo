import axios from 'axios';
import { getallcharacters } from './characterSlice';

export const addChar = () => (dispatch) => {
    axios.get("https://rickandmortyapi.com/api/character")
    .then(res => dispatch(getallcharacters(res.data.results)))
    .catch(error => console.error(error.message))
}