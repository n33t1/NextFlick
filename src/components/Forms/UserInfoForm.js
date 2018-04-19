import React, { Component } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

class UserInfoForm extends Component {
  state = {
    password: ""
  };

  constructor(props) {
    super(props);
  }

  passwordChangedHandler = val => {
    this.setState({
        password: val
    });
  };

  formSubmitHandler = () => {
    if (this.state.password.trim() === "") {
      return;
    }

    this.props.onUpdateUserInfo(this.state.password);
  };

  registerHandler = () => {
    this.props.onRegister();
  };

  render() {
    return (
      <View style={styles.inputContainer}>
        <Text style={styles.textInput}>{this.props.userName}</Text>
        <TextInput
          placeholder="password"
          secureTextEntry={true}
          value={this.state.password}
          onChangeText={this.passwordChangedHandler}
          style={styles.textInput}
        />
        <Button
          style={styles.formSubmitButton}
          title="Update"
          onPress={this.formSubmitHandler}
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

export default UserInfoForm;
