import { useState } from "react";
import style from "./SearchBar.module.css"

export default function SearchBar(props) {
   const {onSearch} = props

   const [id, setId] = useState("")

   const handleChange = (event) => {

      setId(event.target.value)


   }

   return (
      <div className={style.BarraGen}>
          <input className={style.barra} onChange={handleChange} value={id} type='search' />
         <button className={style.boton} onClick={() => onSearch(id)}>Agregar</button> 
      </div>
   );
}
