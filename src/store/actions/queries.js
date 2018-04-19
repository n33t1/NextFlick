import { QUERY_SINGLE_FIELD, SET_QUERY_RES } from './actionTypes';

export const setQueryRes = searchRes => {
    return {
        type: SET_QUERY_RES,
        searchRes: searchRes
    };
};

export const querySingleField = payload => {
    console.log("querySingleField: " + JSON.stringify(payload));
    return dispatch => {
        fetch("http://127.0.0.1:5000/querySingleField", {
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
            console.log("querySingleField: " + JSON.stringify(parsedRes));
            dispatch(setQueryRes(parsedRes))
        });
    };
};