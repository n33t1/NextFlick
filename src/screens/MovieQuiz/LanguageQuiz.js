import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import QuizView from '../../components/QuizView/QuizView';

class LanguageQuiz extends Component {
    languageSelectedHandler = movieName => {
        this.props.navigator.push({
            screen: "movie-db.GenreQuizScreen",
            title: 'GenreQuizScreen',
            animated: false,
            backButtonHidden: true
        });
    }


    render () {
        return (
            <View>
                <QuizView 
                    onTagsSelected={this.languageSelectedHandler}
                    tags={this.props.tags}
                    tagType="languages"
                    prompt="Any language you prefer? "
                />
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        tags: state.tags.tags.languages
    };
};

export default connect(mapStateToProps)(LanguageQuiz);