import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import QuizView from '../../components/QuizView/QuizView';

class YearQuiz extends Component {
    languageSelectedHandler = movieName => {
        this.props.navigator.push({
            screen: "movie-db.LanguageQuizScreen",
            title: 'LanguageQuizScreen',
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
                    tagType="years"
                    prompt="Select a time frame: "
                />
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        tags: state.tags.tags.years
    };
};

export default connect(mapStateToProps)(YearQuiz);