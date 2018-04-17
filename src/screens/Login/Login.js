import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';

import LoginForm from '../../components/LoginForm/LoginForm';

import { getMovies } from '../../store/actions/index';

import startMainTabs from '../MainTabs/startMainTabs';
import registerScreen from '../../screens/Register/Register';

class LoginScreen extends Component {
    loginHandler = () => {
        this.props.onLoadMovies();

        startMainTabs();
    }

    registerHandler = () => {
        this.props.navigator.push({
            screen: "movie-db.RegisterScreen",
            title: 'Register',
            animated: false,
            backButtonHidden: true
        });
    }

    render () {
        return (
            <View>
                {/* <Text>Auth Screen</Text>
                <Button title="Login" onPress={this.loginHandler}/> */}
                <LoginForm 
                    onLogin={this.loginHandler}
                    onRegister={this.registerHandler}
                />
            </View>
        );
    }
}

// export default LoginScreen;
const mapDispatchToProps = dispatch => {
    return {
        onLoadMovies: () => dispatch(getMovies())
    };
};

export default connect(null, mapDispatchToProps)(LoginScreen);