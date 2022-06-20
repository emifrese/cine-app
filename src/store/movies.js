import { createSlice } from "@reduxjs/toolkit";


const initialMovieState = {
    movies: []
}

const moviesSlice = createSlice({
    name: 'movies',
    initialState: initialMovieState,
    reducers: {
        addMovies(state, action) {
            state.movies = action.payload;
        }
    }
})

export const moviesActions = moviesSlice.actions;

export default moviesSlice.reducer;