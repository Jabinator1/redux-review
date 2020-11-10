const initialState = {
    title: "",
    poster: "",
    rating: null,
    movies: []
}

//# only there for insurance
const SET_MOVIE_INFO = "SET_MOVIE_INFO"

//# Action Builder
export const setMovieInfo = (title, poster, rating) => ({
    type: SET_MOVIE_INFO,
    payload: {title, poster, rating}
})

//# reducer
const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MOVIE_INFO:
            return {...state, ...action.payload}
        default:
            return state
    }
}

export default moviesReducer