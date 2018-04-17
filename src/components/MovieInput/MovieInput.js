import React, { Component } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

class MovieInput extends Component {
  state = {
    movieName: ""
  };

  componentDidMount() {
    
  }

  movieNameChangedHandler = val => {
    this.setState({
      movieName: val
    });
  };

  movieSubmitHandler = () => {
    if (this.state.movieName.trim() === "") {
      return;
    }

    this.props.onMovieAdded(this.state.movieName);
  };

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="An awesome movie"
          value={this.state.movieName}
          onChangeText={this.movieNameChangedHandler}
          style={styles.movieInput}
        />
        <Button
          title="Add"
          style={styles.movieButton}
          onPress={this.movieSubmitHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    // flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  movieInput: {
    width: "70%"
  },
  movieButton: {
    width: "30%"
  }
});

export default MovieInput;
