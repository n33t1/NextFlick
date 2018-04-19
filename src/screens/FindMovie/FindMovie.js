import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";

import MovieList from "../../components/MovieList/MovieList";
import SearchBar from "../../components/SearchBar/SearchBar";

import AddMovieForm from '../../components/AddMovieForm/AddMovieForm';

class FindMovieScreen extends Component {
  componentWillMount() {
    console.log("IM CALLED");
  }

  itemSelectedHandler = key => {
    const selMovie = this.props.movies.find(movie => {
      return movie.key === key;
    });
    this.props.navigator.push({
      screen: "movie-db.MovieDetailScreen",
      title: selMovie.name,
      passProps: {
        selectedMovie: selMovie
      }
    });
  };

  onAddNewMovieHandler = () => {
    this.props.navigator.push({
        screen: "movie-db.AddMoviesScreen",
        title: 'Add Movie',
        animated: false,
        backButtonHidden: true
      });
  }

  render() {
    return (
      <View>
        {/* <AddMovieForm /> */}
        <MovieList
          movies={this.props.movies}
          onItemSelected={this.itemSelectedHandler}
          onAddNewMovie={this.onAddNewMovieHandler}
          onTakeQuiz={()=>{console.log("pressed!")}}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movies.movies
  };
};

export default connect(mapStateToProps)(FindMovieScreen);
