export default function validation (data) {

    let errors = {}

    if (!data.email) {

        errors.email = "El email esta vacio"

    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email)) {

        errors.email = "El email no es valido"

    } else if (data.email.length > 35) {

        errors.email = "El email es muy largo"

    }

    if (!data.password) {

        errors.password = "No se ha ingresado una contraseña"

    } else if (!/\d/.test(data.password)) {

        errors.password = "Al menos un numero es requerido"

    } else if (data.password.length > 10 || data.password.length < 6) {

        errors.password = "La contraseña debe tener entre 6 y 10 caracteres"

    }

    return errors
}