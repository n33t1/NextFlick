import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';

import startMainTabs from '../MainTabs/startMainTabs';
import { userRegister, getMovieList } from "../../store/actions/index";

class GenreQuiz extends Component {
    genreSelectedHandler = () => {
        if (this.props.userID === null) {
            console.log("state.userName" + this.props.userName);
            console.log("state.password" + this.props.password);
            let payload = {}
            payload['userName'] = this.props.userName;
            payload['password'] = this.props.password;
            payload['QuizRes'] = this.props.res;
            this.props.onUserRegister(payload);
        } else {
            let payload = this.props.res;
            this.props.getMovieList(payload);
        }

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
        res: state.tags.res,
        userID: state.user.userID,
        userName: state.user.userName,
        password: state.user.password
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onUserRegister: (payload) => dispatch(userRegister(payload)),
        getMovieList: (payload) => dispatch(getMovieList(payload))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GenreQuiz);