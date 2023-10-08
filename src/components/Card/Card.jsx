import { connect } from "react-redux";
import style from "./Card.module.css"
import { Link } from 'react-router-dom'
import { useState, useEffect } from "react";
import {addFav, removeFav} from '../../redux/actions'

function Card(props) {

   const {onClose, name, status, species, gender, origin, image, id, addFav, removeFav, myFavorites} = props

   const [isFav, setIsFav] = useState(false)

   const handleFavorite = () => {
      isFav ? removeFav(id) : addFav(props)
      setIsFav(!isFav)
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={style.container}>

         { isFav ? (
            <button className={style.favorito} onClick={handleFavorite}>❤️</button>
         ) : (
            <button className={style.favorito} onClick={handleFavorite}>🤍</button>
         )}

         <button className={style.equis} onClick={() => onClose(id)}>X</button>

         <Link to={`/detail/${id}`}>
            <h2 className={`${style.texto} ${style.nombre}`}>{name}</h2>
         </Link>

         <h2 className={`${style.texto} ${style.status}`}>{status}</h2>
         <h2 className={`${style.texto} ${style.especie}`}>{species}</h2>
         <h2 className={`${style.texto} ${style.genero}`}>{gender}</h2>
         <h2 className={`${style.texto} ${style.origen}`}>{origin}</h2>
         <img className= {style.portrait} src={image} alt='RickCard' />
      </div>
   );
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => {
         dispatch(addFav(character))
      },
      removeFav: (id) => {
         dispatch(removeFav(id))
      }
   }     
}

const mapStateToProps = (state) => {

   return { myFavorites: state.myFavorites }

}

export default connect(mapStateToProps, mapDispatchToProps)(Card)


