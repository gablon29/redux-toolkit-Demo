import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addChar } from './redux/charactersActions';
const Home = () => {
    
const dispatch = useDispatch()
const { characters } = useSelector(state => state.personajes)
useEffect(() => {
    dispatch(addChar());
}, [dispatch])

  return (
    <div>
        { characters && characters.map((char, i) => {
            return ( 
                <div key={i}>
                    <h2>{char.name}</h2>
                    <img src={char.image} alt={char.name}/>
                </div>
            )
        }
        )}
    </div>
  )
}

export default Home