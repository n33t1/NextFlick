import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";

import { createMovie } from '../../store/actions/index';

import startMainTabs from '../MainTabs/startMainTabs';
import AddMovieForm from '../../components/AddMovieForm/AddMovieForm';
// import FindMovieScreen from '../FindMovie/FindMovie';

class FindMovieScreen extends Component {
    onAddPressedHandler = payload =>{
        Object.assign(payload, {"userID": this.props.userID});
        this.props.onAddMovie(payload);

        startMainTabs();
    };

    render() {
        return (
        <View>
            <AddMovieForm 
                onAddPressed={this.onAddPressedHandler}
                myGenres={this.props.myGenres}/>
        </View>
        );
    }
}

const mapStateToProps = state => {
  return {
    movies: state.movies.movies,
    userID: state.user.userID,
    myGenres: state.movies.genres
  };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddMovie: (payload) => dispatch(createMovie(payload))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FindMovieScreen);
