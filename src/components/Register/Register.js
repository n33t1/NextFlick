import React, { Component } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

import startMainTabs from '../../screens/MainTabs/startMainTabs';
import loginScreen from '../../screens/Login/Login';

class RegisterForm extends Component {
  state = {
    userName: "",
    password: "",
    passwordRe: ""
  };

  userNameChangedHandler = val => {
    this.setState({
        userName: val
    });
  };

  passwordChangedHandler = val => {
    this.setState({
        password: val
    });
  };

  confirmPasswordChangedHandler = val => {
    this.setState({
        passwordRe: val
    });
  };

  formSubmitHandler = () => {
    // if (this.state.userName.trim() === "" 
    //     || this.state.password.trim() === "") {
    //   return;
    // }

    // if (this.state.password !== this.state.passwordRe) {
    //     return;
    // }

    // this.props.registerUser();
    this.props.onRegisterSelected();
  };

  loginHandler = () => {
    this.props.onLoginSelected();
  };

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="email address or user name"
          value={this.state.userName}
          onChangeText={this.userNameChangedHandler}
          style={styles.textInput}
        />
        <TextInput
          placeholder="your password"
          value={this.state.password}
          onChangeText={this.passwordChangedHandler}
          style={styles.textInput}
        />
        <TextInput
          placeholder="confirm password"
          value={this.state.password}
          onChangeText={this.confirmPasswordChangedHandler}
          style={styles.textInput}
        />
        <Button
          style={styles.formSubmitButton}
          title="Register"
          onPress={this.formSubmitHandler}
        />
        <Button
          style={styles.formSubmitButton}
          title="Login"
          onPress={this.loginHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: "50%"
  },
  textInput: {
    width: "70%",
    height: 40,
    fontSize: 20
  },
  formSubmitButton: {
    width: "100%",
    backgroundColor: '#00aeef',
    borderColor: 'red',
    borderWidth: 5,
    borderRadius: 15 
  }
});

export default RegisterForm;
