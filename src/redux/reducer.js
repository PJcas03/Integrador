const initialState = {
    myFavorites: []
}

const rootReducer = (state = initialState, {type, payload}) => {

    switch (type) {

        case 'ADD_FAV':

            let copy = state.myFavorites
            copy.push(payload)
            return {
                ...state, myFavorites: copy
            }

        case 'REMOVE_FAV':

            let copy2 = state.myFavorites.filter((char) => {
                return char.id !== Number(payload)
            })
            return {
                ...state, myFavorites: copy2
            }
           

        default:

            return {...state}
    }

} 

export default rootReducer