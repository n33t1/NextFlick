import { ADD_MOVIE, DELETE_MOVIE, SELECT_MOVIE, DESELECT_MOVIE, INIT_MOVIE, SET_MOVIE_LIST } from './actionTypes';

// fakeData = {
//     genres: ['action', 'romance', 'adventure', 'thrill', 'sifi'],
//     actors: ['actor1', 'actor2', 'actor3', 'actor4', 'actor5'],
//     directors: ['director1','director2','director3','director4','director5']
// };


export const addMovie = key => {
    // return {
    //     type: ADD_MOVIE,
    //     key: key
    // };
    return dispatch => {
        fetch("http://127.0.0.1:5000/addMovie", {
            method: "POST",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(key)
        })
        .catch(err => {
            console.log(err);
            alert("Something went wrong, please try again!");
        })
        .then(res => res.json())
        .then(parsedRes => {
            console.log("addMovie: " + JSON.stringify(parsedRes));
            dispatch(setMovieList(parsedRes))
        });
    };
};

export const initMovie = (movieName) => {
    return {
        type: INIT_MOVIE,
        movieName: movieName
    };
};

export const selectMovie = (key) => {
    return {
        type: SELECT_MOVIE,
        movieKey: key
    };
};

export const deselectMovie = () => {
    return {
        type: DESELECT_MOVIE
    };
};

export const selectTags = (optionType, values) => {
    return {
        type: SELECT_TAGS,
        optionType: optionType,
        values: values
    };
};

export const getMovies = () => {
    return dispatch => {
        fetch("http://127.0.0.1:5000/getUserMovieList")
        .catch(err => {
            alert("Something went wrong, sorry :/");
            console.log(err);
        })
        .then(res => res.json())
        .then(parsedRes => {
            console.log("parsedRes: ");
            // parsedRes.map(item => dispatch(setTags(item)))
            dispatch(setMovieList(parsedRes))
        });
    }
};

export const setMovieList = movies => {
    return {
        type: SET_MOVIE_LIST,
        movies: movies
    }
}

export const deleteMovie = key => {
    // return {
    //     type: ADD_MOVIE,
    //     key: key
    // };
    return dispatch => {
        fetch("http://127.0.0.1:5000/deleteMovie", {
            method: "POST",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(key)
        })
        .catch(err => {
            console.log(err);
            alert("Something went wrong, please try again!");
        })
        .then(res => res.json())
        .then(parsedRes => {
            console.log("deleteMovie: " + JSON.stringify(parsedRes));
            dispatch(setMovieList(parsedRes))
        });
    };
};