import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import QuizView from '../../components/QuizView/QuizView';

class ActorQuiz extends Component {

    actorSelectedHandler = movieName => {
        // this.props.onAddMovie("movieName");
        this.props.navigator.push({
            screen: "movie-db.DirectorQuizScreen",
            title: 'DirectorQuizScreen',
            animated: false,
            backButtonHidden: true
        });
    }

    render () {
        return (
            <View>
                <QuizView 
                    onTagsSelected={this.actorSelectedHandler}
                    tags={this.props.tags}
                    tagType="actors"
                    prompt="Select actors you like: "
                />
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        tags: state.tags.tags.actors
    };
};

export default connect(mapStateToProps)(ActorQuiz);