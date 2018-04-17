import { LOGIN_USER, REGISTER_USER } from "../actions/actionTypes";

// const initialState = {
//     // movies: [{key: 'a', name: "Zodiac"}, {key: 'b', name: "TSN"}],
//     movies: [],
//     selectedMovie: null
//   };

// const createUser = (newMovieName) => {
//     fetch('https://mywebsite.com/endpoint/', {
//       method: 'POST',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         MovieName: newMovieName
//       }),
//     });
//     alert(newMovieName);
// };

// const readUser = ({username, password}) => {
//     fetch('http://127.0.0.1:5000/loginUser', {
//       method: 'POST',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         username,
//         password
//       }),
//     });
//     alert(newMovieName);
// };

// const updateUser = (newMovieName) => {
//     // fetch('https://mywebsite.com/endpoint/', {
//     //   method: 'POST',
//     //   headers: {
//     //     Accept: 'application/json',
//     //     'Content-Type': 'application/json',
//     //   },
//     //   body: JSON.stringify({
//     //     MovieName: newMovieName
//     //   }),
//     // });
//     alert("updateUser");
// };

// const deleteUser = () => {
//     // fetch('https://mywebsite.com/endpoint/', {
//     //   method: 'POST',
//     //   headers: {
//     //     Accept: 'application/json',
//     //     'Content-Type': 'application/json',
//     //   },
//     //   body: JSON.stringify({
//     //     MovieName: newMovieName
//     //   }),
//     // });
//     alert("deleteUser");
// };

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_USER:
        return {
          ...state
        };
      case REGISTER_USER:
        return {
          ...state
        };
      default:
        return state;
    }
  };
  
  export default reducer;