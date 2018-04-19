import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';

import LoginForm from '../../components/Forms/LoginForm';

import { userLogin, setUserInfo } from '../../store/actions/index';

import startMainTabs from '../MainTabs/startMainTabs';
import registerScreen from '../../screens/Register/Register';

class LoginScreen extends Component {
    static navigatorStyle = {
        navBarHidden: true,
        tabBarHidden: true
    };

    loginHandler = (payload) => {
        this.props.setUserInfo(payload);
        this.props.onUserLogin(payload);

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
        onUserLogin: (payload) => dispatch(userLogin(payload)),
        setUserInfo: (payload) => dispatch(setUserInfo(payload))
    };
};

export default connect(null, mapDispatchToProps)(LoginScreen);