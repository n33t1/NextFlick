import React, { Component } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

class LoginForm extends Component {
  state = {
    userName: "",
    password: ""
  };

  constructor(props) {
    super(props);
  }

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

  formSubmitHandler = () => {
    if (this.state.userName.trim() === "" 
        || this.state.password.trim() === "") {
      return;
    }

    let payload = {};
    payload['userName'] = this.state.userName;
    payload['password'] = this.state.password;
    
    this.props.onLogin(payload);
  };

  registerHandler = () => {
    this.props.onRegister();
  };

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="user name"
          value={this.state.userName}
          onChangeText={this.userNameChangedHandler}
          style={styles.textInput}
        />
        <TextInput
          placeholder="password"
          secureTextEntry={true}
          value={this.state.password}
          onChangeText={this.passwordChangedHandler}
          style={styles.textInput}
        />
        <Button
          style={styles.formSubmitButton}
          title="Login"
          onPress={this.formSubmitHandler}
        />
        <Button
          style={styles.formSubmitButton}
          title="Register"
          onPress={this.registerHandler}
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

export default LoginForm;