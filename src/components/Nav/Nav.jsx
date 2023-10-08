import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css"
import { Link } from "react-router-dom"

export default function Nav({onSearch}) {


    return (
        <div className={style.nav}>

            <div className={style.links}>
                
                <Link to="/about">
                    <button className={style.botones}>About</button>
                </Link>

                <Link to="/home">
                    <button className={style.botones}>Home</button>
                </Link>

                <Link to="/favorites">
                    <button className={style.botones}>Favorites</button>
                </Link>

            </div>

            <div className={style.searchbar}>

            <SearchBar onSearch={onSearch}/>

            </div>

        </div>
    )


}

