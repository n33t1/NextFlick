import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";

import MovieList from "../../components/MovieList/MovieList";
import SearchBar from "../../components/SearchBar/SearchBar";

class FindMovieScreen extends Component {
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

  render() {
    return (
      <View>
        {/* <SearchBar /> */}
        <MovieList
          movies={this.props.movies}
          onItemSelected={this.itemSelectedHandler}
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
