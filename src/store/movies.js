import { createSlice } from "@reduxjs/toolkit";

const initialMovieState = {
  movies: [],
  searchMovies: [],
  ratedMovies: [],
};

const moviesSlice = createSlice({
  name: "movies",
  initialState: initialMovieState,
  reducers: {
    addMovies(state, action) {
      state.movies = action.payload;
    },
    addSearchMovies(state, action) {
      state.searchMovies = action.payload;
      state.searchMovies.sort((a, b) => {
        return b.popularity - a.popularity;
      });
    },
    filterByRating(state, action) {
        state.ratedMovies = [];
        const [rating, type] = action.payload;
        
        if(rating > 0){
            if(type === 'search'){
                state.searchMovies.forEach((mov) => {
                    if(mov.vote_average >= rating * 2 - 2  && mov.vote_average <= rating * 2){
                        state.ratedMovies.push(mov)
                    }
                })
            } else {
                state.movies.forEach((mov) => {
                    if(mov.vote_average >= rating * 2 - 2  && mov.vote_average <= rating * 2){
                        state.ratedMovies.push(mov)
                    }
                })
            }
        } else {
            if(type === 'search') {
                state.ratedMovies = state.searchMovies
            } else {
                state.ratedMovies = state.movies
            }
        }
    },
  },
});

export const moviesActions = moviesSlice.actions;

export default moviesSlice.reducer;
