import { useState } from "react"
import validation from "./validation"
import style from "./Form.module.css"

export default function Form ({login}) {
    
    const [ errors, setErrors ] = useState({})

    const [ userData, setUserData ] = useState({
        email:"",
        password:""
    })

    const handleChange = (event) => {
        
        setErrors(validation(userData))
        setUserData({...userData, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {

        event.preventDefault()
        login(userData)

    }
    
    return (

        <div className={style.loginGeneral}>
            <a href="https://www.netflix.com/ad/title/80014749">
            <img className={style.imagen} src="https://avatarfiles.alphacoders.com/329/329296.jpg" alt="" />
            </a>
            <form className={style.login} onSubmit={handleSubmit}>
                <div className={style.email}>
                    <label className={style.emailText} htmlFor="">Email</label>
                    <input 
                    type="text" 
                    value={userData.email}
                    name="email"
                    onChange={handleChange}
                    />
                    {errors.email && <span>{errors.email}</span>}
                </div>

                <div className={style.password}>
                    <label className={style.passwordText} htmlFor="">Password</label>
                    <input 
                    type="text" 
                    value={userData.password}
                    name="password"
                    onChange={handleChange}
                    />
                    {errors.password && <span>{errors.password}</span>}
                </div>
                <button className={style.boton} type="submit">Submit</button>

            </form>
        </div>
        
    )
}