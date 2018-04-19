import { SET_USER_INFO  } from './actionTypes';
import { setMovieList } from './movies';

// export const userLogin = (payload) => {
//     return dispatch => {
//         fetch("http://127.0.0.1:5000/getUserMovieList")
//         .catch(err => {
//             alert("Something went wrong, sorry :/");
//             console.log(err);
//         })
//         .then(res => res.json())
//         .then(parsedRes => {
//             console.log("loginUser: " + JSON.stringify(parsedRes));
//             // parsedRes.map(item => dispatch(setTags(item)))
//             let temp = {"userID":2, "userName": "test"};
//             dispatch(setUserInfo(temp));
//             dispatch(setMovieList(parsedRes));
//         });
//     }
// };

export const userLogin = (payload) => {
    return dispatch => {
        fetch('http://127.0.0.1:5000/userLogin', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
        })
        .catch(err => {
        console.log(err);
        alert("Something went wrong, please try again!");
        })
        .then(res => res.json())
        .then(parsedRes => {
            // we want to return user id and username here
            console.log("loginUser: " + JSON.stringify(parsedRes));
            let userInfo = parsedRes.userInfo;
            dispatch(setUserInfo(userInfo));
            let movieList = parsedRes.movieList;
            dispatch(setMovieList(movieList));
        });
    }
};

export const setUserInfo = payload => {
    return {
        type: SET_USER_INFO,
        userID: payload.userID,
        userName: payload.userName
    };
};

export const updatePassword = password => {
    return dispatch => {
        fetch('http://127.0.0.1:5000/updatePassword', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({password}),
        })
        .catch(err => {
            console.log(err);
            alert("Something went wrong, please try again!");
        });
    }
}

export const userRegister = (payload) => {
    return dispatch => {
        fetch('http://127.0.0.1:5000/userRegister', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
        })
        .catch(err => {
        console.log(err);
        alert("Something went wrong, please try again!");
        })
        .then(res => res.json())
        .then(parsedRes => {
            // we want to return user id and username here
            console.log("userRegister: " + JSON.stringify(parsedRes));
            let userInfo = parsedRes.userInfo;
            dispatch(setUserInfo(userInfo));
            let movieList = parsedRes.movieList;
            dispatch(setMovieList(movieList));
        });
    }
};