import React, { Component } from 'react';
import { View, Text, Button, ImageBackground, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import LoginForm from '../../components/Forms/LoginForm';

import { userLogin, setUserInfo, getGenres } from '../../store/actions/index';

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
        this.props.loadGenres();

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
                <ImageBackground 
                    source={{uri: 'https://raw.githubusercontent.com/n33t1/movie/master/src/assets/Logo.png'}}
                    style={styles.backgroundImage}
                >
                    <LoginForm 
                        onLogin={this.loginHandler}
                        onRegister={this.registerHandler}
                    />
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    backgroundImage: {
        width: "100%",
        height: '100%',
        opacity:.9
    }
  });

  
// export default LoginScreen;
const mapDispatchToProps = dispatch => {
    return {
        onUserLogin: (payload) => dispatch(userLogin(payload)),
        setUserInfo: (payload) => dispatch(setUserInfo(payload)),
        loadGenres: () => dispatch(getGenres())
    };
};

export default connect(null, mapDispatchToProps)(LoginScreen);