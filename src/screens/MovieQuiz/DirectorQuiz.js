import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import QuizView from '../../components/QuizView/QuizView';

class DirectorQuiz extends Component {
    directorSelectedHandler = movieName => {
        this.props.navigator.push({
            screen: "movie-db.YearQuizScreen",
            title: 'YearQuizScreen',
            animated: false,
            backButtonHidden: true
        });
    }


    render () {
        return (
            <View>
                <QuizView 
                    onTagsSelected={this.directorSelectedHandler}
                    tags={this.props.tags}
                    tagType="directors"
                    prompt="Select directors you like: "
                />
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        tags: state.tags.tags.directors
    };
};

export default connect(mapStateToProps)(DirectorQuiz);