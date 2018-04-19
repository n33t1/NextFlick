import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';

import RegisterForm from '../../components/Register/Register';
import LoginScreen from '../Login/Login';
import ActorQuizScreen from '../MovieQuiz/ActorQuiz';

import { getTags, setUserInfo } from '../../store/actions/index';

class RegisterScreen extends Component {
    // componentWillMount() {
    //     fetch("http://127.0.0.1:5000/genres.json")
    //     .catch(err => {
    //         alert("Something went wrong, sorry :/");
    //         console.log(err);
    //     })
    //     .then(res => res.json())
    //     .then(parsedRes => {
    //         parsedRes.map(item => this.props.setTags(item))
    //     });
    // }

    componentWillMount() {
        this.props.loadTags();
    }

    loginSelectedHandler = () => {
        // LoginScreen();
        this.props.navigator.push({
            screen: "movie-db.LoginScreen",
            title: 'Login',
            animated: false,
            backButtonHidden: true
        });
    }

    registerSelectedHandler = (payload) => {
        this.props.setUserInfo(payload);

        this.props.navigator.push({
            screen: "movie-db.ActorQuizScreen",
            title: 'ActorQuizScreen',
            animated: false,
            backButtonHidden: true
        });
    }

    render () {
        return (
            <View>
                <RegisterForm 
                    onRegisterSelected={this.registerSelectedHandler} 
                    onLoginSelected={this.loginSelectedHandler}    
                />
            </View>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadTags: () => dispatch(getTags()),
        setUserInfo: (payload) => dispatch(setUserInfo(payload))
    };
};

export default connect(null, mapDispatchToProps)(RegisterScreen);