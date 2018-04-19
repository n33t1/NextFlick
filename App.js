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
import YearQuizScreen from './src/screens/MovieQuiz/YearQuiz';
import LanguageQuizScreen from './src/screens/MovieQuiz/LanguageQuiz';
import OnLoadMoviesScreen from './src/screens/MovieQuiz/OnLoadMovies';
import AddMoviesScreen from './src/screens/AddMovie/AddMovie';
import UserSettingsScreen from './src/screens/UserSettings/UserSettings';
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
  "movie-db.YearQuizScreen",
  () => YearQuizScreen,
  store,
  Provider
)

Navigation.registerComponent(
  "movie-db.LanguageQuizScreen",
  () => LanguageQuizScreen,
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

Navigation.registerComponent(
  "movie-db.AddMoviesScreen",
  () => AddMoviesScreen,
  store,
  Provider
);

Navigation.registerComponent(
  "movie-db.UserSettingsScreen",
  () => UserSettingsScreen,
  store,
  Provider
);

// Start a App
Navigation.startSingleScreenApp({
  screen: {
    screen: "movie-db.LoginScreen",
    title: 'Login'
  }
});
