import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import QuizView from '../../components/QuizView/QuizView';

import OnLoadMoviesScreen from './OnLoadMovies';

class GenreQuiz extends Component {
    genreSelectedHandler = movieName => {
        this.props.navigator.push({
            screen: "movie-db.OnLoadMoviesScreen",
            title: 'OnLoadMoviesScreen',
            animated: false,
            backButtonHidden: true
        });
    }

    render () {
        return (
            <View>
                <QuizView 
                    onTagsSelected={this.genreSelectedHandler}
                    tags={this.props.tags}
                    tagType="genres"
                />
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        tags: state.tags.tags.genres
    };
};

export default connect(mapStateToProps)(GenreQuiz);