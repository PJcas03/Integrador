import style from "./DetailChar.module.css"

export default function DetailChar ({character}) {
    
    return (

        <div className={style.generalDetailChar}>
            <div className={style.detailChar}>
                <h1 className={style.nombre}>{character?.name}</h1>
                <h2>Estatus: {character?.status}</h2>
                <h2>Especie: {character?.species}</h2>
                <h2>Origen: {character?.origin?.name}</h2>
                <h2>Genero: {character?.gender}</h2>
            </div>
            <div className={style.portrait}>
                <img className={style.imagen} src={character?.image}/>
            </div>
        </div>

    )

}