import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";

import { createMovie } from '../../store/actions/index';

import startMainTabs from '../MainTabs/startMainTabs';
import AddMovieForm from '../../components/AddMovieForm/AddMovieForm';
// import FindMovieScreen from '../FindMovie/FindMovie';

class FindMovieScreen extends Component {
    onAddPressedHandler = payload =>{
        this.props.onAddMovie(payload);

        console.log("QuizView: " + JSON.stringify(payload));
        startMainTabs();
        // this.props.navigator.push({
        //     screen: "movie-db.ShareMovieScreen",
        //     title: 'My List',
        //     animated: false,
        //     backButtonHidden: true
        // });
    };

    render() {
        return (
        <View>
            <AddMovieForm 
                onAddPressed={this.onAddPressedHandler}/>
        </View>
        );
    }
}

const mapStateToProps = state => {
  return {
    movies: state.movies.movies
  };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddMovie: (payload) => dispatch(createMovie(payload))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FindMovieScreen);
