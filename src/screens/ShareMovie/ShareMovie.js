import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import SearchBar from '../../components/SearchBar/SearchBar';
import MovieList from '../../components/MovieList/MovieList';

import { querySingleField } from '../../store/actions/index';

class ShareMovieScreen extends Component {
    onSearchTriggeredHandler = keyword => {
        let res = {};
        res["keyword"] = keyword;
        this.props.onSearchMovies(res);
    }

    onAddNewMovieHandler = () => {
        this.props.navigator.push({
            screen: "movie-db.AddMoviesScreen",
            title: 'Add Movie',
            animated: false,
            backButtonHidden: true
          });
    }

    itemSelectedHandler = key => {
        const selMovie = this.props.searchRes.find(movie => {
          return movie.key === key;
        });
        this.props.navigator.push({
          screen: "movie-db.MovieDetailSearchResScreen",
          title: selMovie.name,
          passProps: {
            selectedMovie: selMovie
          }
        });
      };

    render () {
        return (
            <View>
                <SearchBar onSearchTriggered={this.onSearchTriggeredHandler}/>
                <MovieList
                    movies={this.props.searchRes}
                    onItemSelected={this.itemSelectedHandler}
                    onAddNewMovie={this.onAddNewMovieHandler}
                />
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        searchRes: state.queries.searchRes
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSearchMovies: (keyword) => dispatch(querySingleField(keyword))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShareMovieScreen);