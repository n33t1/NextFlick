import { SELECT_TAGS, SET_TAGS, UPDATE_TAGS, GET_TAGS, SET_MOVIES } from './actionTypes';

export const selectTags = (optionType, values) => {
    return {
        type: SELECT_TAGS,
        optionType: optionType,
        values: values
    };
};

export const getTags = () => {
    return dispatch => {
        fetch("http://127.0.0.1:5000/genres.json")
        .catch(err => {
            alert("Something went wrong, sorry :/");
            console.log(err);
        })
        .then(res => res.json())
        .then(parsedRes => {
            // console.log("parsedRes: " + JSON.stringify(parsedRes[0].actors));
            // parsedRes.map(item => dispatch(setTags(item)))
            dispatch(setTags(parsedRes[0]))
        });
    }
};

export const setTags = tags => {
    return {
        type: SET_TAGS,
        tags: tags
    };
};

export const updateTags = tags => {
    return {
        type: UPDATE_TAGS,
        tags: tags
    };
};

export const setMovies = movies => {
    return {
        type: SET_MOVIES,
        movies: movies
    };
};

export const queryMovies = payload => {
    // console.log("queryMovies: " + JSON.stringify(payload));
    return dispatch => {
        fetch("http://127.0.0.1:5000/generateMovieList", {
            method: "POST",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        })
        .catch(err => {
            console.log(err);
            alert("Something went wrong, please try again!");
        })
        .then(res => res.json())
        .then(parsedRes => {
            // console.log("parsedRes: " + JSON.stringify(parsedRes));
            dispatch(setMovies(parsedRes))
            // return {
            //     type: QUERY_MOVIES,
            //     movies: parsedRes[0]
            // };
        });
    };
};