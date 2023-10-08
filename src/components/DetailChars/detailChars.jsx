import axios from "axios"
import { useState } from "react"
import { useParams} from 'react-router-dom'
import { useEffect } from "react"
import DetailChar from "../DetailChar/DetailChar"

export default function DetailChars () {

    const [character, setCharacter] = useState({})

    const {id} = useParams()

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    return (
        <div>
            <DetailChar character={character}/>
        </div>
    )


}