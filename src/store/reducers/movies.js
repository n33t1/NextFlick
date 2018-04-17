import {
  ADD_MOVIE,
  INIT_MOVIE,
  DELETE_MOVIE,
  SELECT_MOVIE,
  DESELECT_MOVIE,
  SET_MOVIES,
  QUERY_MOVIES,
  SET_MOVIE_LIST
} from "../actions/actionTypes";

import movieData from '../../assets/movies.json';

const postMovies = (newMovieName) => {
  // fetch('https://mywebsite.com/endpoint/', {
  //   method: 'POST',
  //   headers: {
  //     Accept: 'application/json',
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({
  //     MovieName: newMovieName
  //   }),
  // });
  alert(newMovieName);
};

const initialState = {
  // movies: [{key: 'a', name: "Zodiac"}, {key: 'b', name: "TSN"}],
  movies: [],
  tags: [],
  selectedMovie: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MOVIE:
      return {
        ...state,
        movies: state.movies.concat({
          key: Math.random(),
          name: action.movieName
        })
      };
    case INIT_MOVIE:
      return {
        ...state,
        movies: state.movies.concat({
          key: Math.random(),
          name: action.movieName
        })
      };
    case SET_MOVIE_LIST:
      return {
        ...state,
        movies: action.movies
      };
    case DELETE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter(movie => {
          return movie.key !== action.movieKey;
        })
      };
    case SELECT_MOVIE:
      return {
        ...state,
        selectedMovie: state.movies.find(movie => {
          return movie.key === action.movieKey;
        })
      };
    case DESELECT_MOVIE:
      return {
        ...state,
        selectedMovie: null
      };
    case SET_MOVIES: 
      console.log("reducer: " + action.movies);
      return {
        ...state,
        movies: action.movies
      };
    // case QUERY_MOVIES:
    //   return {
    //     ...state,
    //     movies: action.movies
    //   };
    default:
      return state;
  }
};

export default reducer;
