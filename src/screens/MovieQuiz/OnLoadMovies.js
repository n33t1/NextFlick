import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';

import startMainTabs from '../MainTabs/startMainTabs';
import { generateMovieList } from "../../store/actions/index";

class GenreQuiz extends Component {
    genreSelectedHandler = movieName => {
        this.props.onLoadMovies(this.props.res);
        // console.log("res: " + JSON.stringify(movieList));
        startMainTabs();
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Your movie list is ready! </Text>
                <Button title="View Now!" onPress={this.genreSelectedHandler} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        paddingTop: "50%",
        alignItems: "center"
    },
    text: {
        fontSize: 30
    },
    button: {
        margin: 8
    }
});


const mapStateToProps = state => {
    return {
        res: state.tags.res
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLoadMovies: (payload) => dispatch(generateMovieList(payload))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GenreQuiz);