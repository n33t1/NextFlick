import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';

import UserInfoForm from '../../components/Forms/UserInfoForm';

import startMainTabs from '../MainTabs/startMainTabs';

import { updatePassword } from '../../store/actions/index';

class UserSettings extends Component {
    updateUserHandler = (password) => {

        let payload = {}
        payload['userID'] = this.props.userID;
        payload['password'] = password;
        console.log("updateUserHandler" + JSON.stringify(payload));
        this.props.onUpdatePassword(payload);

        this.props.navigator.resetTo({
            screen: "movie-db.LoginScreen",
            title: 'Register',
            animated: false,
            backButtonHidden: true
        });

        this.props.navigator.toggleTabs({
            to: 'hidden', // required, 'hidden' = hide tab bar, 'shown' = show tab bar
            animated: true // does the toggle have transition animation or does it happen immediately (optional)
        });
    }

    cancelAccountHandler = () => {

        startMainTabs();
    }

    render () {
        return (
            <View>
                {/* <Text>Auth Screen</Text>
                <Button title="Login" onPress={this.loginHandler}/> */}
                <UserInfoForm 
                    onUpdateUserInfo={this.updateUserHandler}
                    onRegister={this.cancelAccountHandler}
                    userName={this.props.userName}
                    userID={this.props.userID}
                />
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        userName: state.user.userName,
        userID: state.user.userID
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onUpdatePassword: payload => dispatch(updatePassword(payload))
    };
  };  

export default connect(mapStateToProps, mapDispatchToProps)(UserSettings);