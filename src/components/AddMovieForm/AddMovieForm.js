import React, { Component } from "react";
import { ScrollView, View, TextInput, Button, StyleSheet, Text } from "react-native";

import { TagSelect } from 'react-native-tag-select';

class AddMovieForm extends Component {
  componentWillMount() {
    console.log("AddMovieForm" + this.props.myGenres);
  }

  state = {
    movieName: "",
    director: "",
    year: ""
  };

  movieNameChangedHandler = val => {
    this.setState({
        movieName: val
    });
  };

  directorChangedHandler = val => {
    this.setState({
        director: val
    });
  };

  yearChangedHandler = val => {
    this.setState({
        year: val
    });
  };

  formSubmitHandler = () => {
    if (this.state.movieName.trim() === "" 
      || this.state.director.trim() === ""
      || this.state.year.trim() === "") {
      return;
    }
    let payload = {}
    payload['year'] = this.state.year;
    payload['director'] = this.state.director;
    payload['movieName'] = this.state.movieName;

    this.props.onAddPressed(payload);
    // this.props.onTagsSelected();
    // this.props.onLogin();
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="movie name"
            value={this.state.movieName}
            onChangeText={val => this.setState({movieName: val})}
            style={styles.textInput}
          />
          <TextInput
            placeholder="director"
            value={this.state.director}
            onChangeText={val => this.setState({director: val})}
            style={styles.textInput}
          />
          <TextInput
            placeholder="year"
            value={this.state.year}
            onChangeText={val => this.setState({year: val})}
            style={styles.textInput}
          />
          <Button
            style={styles.formSubmitButton}
            title="Add movie!"
            onPress={this.formSubmitHandler}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: "20%"
  },
  actorView: {
    width: "70%",
    flexDirection: 'row'
  },
  actorInput: {
    height: 40,
    fontSize: 20,
    width: "50%"
  },
  textInput: {
    width: "70%",
    height: 40,
    fontSize: 20
  },
  text: {
    width: "70%",
    paddingTop: "2%",
    fontSize: 18,
    color: "dimgray"
  },
  formSubmitButton: {
    width: "100%",
    backgroundColor: '#00aeef',
    borderColor: 'red',
    borderWidth: 5,
    borderRadius: 15 
  },
  tags: {
    // paddingTop: "20%",
    paddingTop: "4%",
    // paddingBottom: "2%",
    width: "70%",
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  }
});

export default AddMovieForm;
