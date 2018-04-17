import { Navigation } from "react-native-navigation";
import { Provider } from "react-redux";

import LoginScreen from "./src/screens/Login/Login";
import RegisterScreen from './src/screens/Register/Register';
import ShareMovieScreen from "./src/screens/ShareMovie/ShareMovie";
import FindMovieScreen from "./src/screens/FindMovie/FindMovie";
import MovieDetailScreen from "./src/screens/MovieDetail/MovieDetail";
import DirectorQuizScreen from './src/screens/MovieQuiz/DirectorQuiz';
import ActorQuizScreen from './src/screens/MovieQuiz/ActorQuiz';
import GenreQuizScreen from './src/screens/MovieQuiz/GenreQuiz';
import OnLoadMoviesScreen from './src/screens/MovieQuiz/OnLoadMovies';
import MovieDetailSearchResScreen from './src/screens/MovieDetail/MovieDetailSearchRes';
import configureStore from "./src/store/configureStore";

const store = configureStore();

// Register Screens
Navigation.registerComponent(
  "movie-db.LoginScreen",
  () => LoginScreen,
  store,
  Provider
);

Navigation.registerComponent(
  "movie-db.ShareMovieScreen",
  () => ShareMovieScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "movie-db.FindMovieScreen",
  () => FindMovieScreen,
  store,
  Provider
);

Navigation.registerComponent(
  "movie-db.MovieDetailScreen",
  () => MovieDetailScreen,
  store,
  Provider
)

Navigation.registerComponent(
  "movie-db.RegisterScreen",
  () => RegisterScreen,
  store,
  Provider
)

Navigation.registerComponent(
  "movie-db.DirectorQuizScreen",
  () => DirectorQuizScreen,
  store,
  Provider
)

Navigation.registerComponent(
  "movie-db.ActorQuizScreen",
  () => ActorQuizScreen,
  store,
  Provider
)

Navigation.registerComponent(
  "movie-db.GenreQuizScreen",
  () => GenreQuizScreen,
  store,
  Provider
)

Navigation.registerComponent(
  "movie-db.OnLoadMoviesScreen",
  () => OnLoadMoviesScreen,
  store,
  Provider
)

Navigation.registerComponent(
  "movie-db.MovieDetailSearchResScreen",
  () => MovieDetailSearchResScreen,
  store,
  Provider
)

// Start a App
Navigation.startSingleScreenApp({
  screen: {
    screen: "movie-db.LoginScreen",
    title: "Login"
  }
});
