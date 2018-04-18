import React, { Component } from "react";
import { ScrollView, View, TextInput, Button, StyleSheet, Text } from "react-native";

import { TagSelect } from 'react-native-tag-select';

class AddMovieForm extends Component {
  state = {
    movieName: "",
    director: "",
    actor1: "",
    actor2: "",
    actor3: "",
    character1: "",
    character2: "",
    character3: "",
    genres: [
        { "id": 1, "label": 'directors1' },
        { "id": 2, "label": 'directors card' },
        { "id": 3, "label": 'directors card' },
        { "id": 4, "label": 'directors payment' },
        { "id": 5, "label": 'directors23' }
    ],
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
    if (this.tag.totalSelected === 0) {
      return;
    }

    if (this.state.movieName.trim() === "" 
      || this.state.director.trim() === ""
      || this.state.actor1.trim() === ""
      || this.state.year.trim() === ""
      || this.state.actor2.trim() === ""
      || this.state.actor3.trim() === ""
      || this.state.character1.trim() === ""
      || this.state.character2.trim() === ""
      || this.state.character3.trim() === "") {
      return;
    }
    let tagItems = this.tag.itemsSelected;
    let payload = {}
    payload['genres'] = tagItems;
    payload['actors'] = [this.state.actor1, this.state.actor2, this.state.actor3];
    payload['characters'] = [this.state.character1, this.state.character2, this.state.character3];
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
          <View style={styles.actorView}>
            <TextInput
                placeholder="character 1"
                value={this.state.character1}
                onChangeText={val => this.setState({character1: val})}
                style={styles.actorInput}
            />
            <TextInput
                placeholder="cast by"
                value={this.state.actor1}
                onChangeText={val => this.setState({actor1: val})}
                style={styles.actorInput}
            />
          </View>
          <View style={styles.actorView}>
            <TextInput
                placeholder="character 2"
                value={this.state.character2}
                onChangeText={val => this.setState({character2: val})}
                style={styles.actorInput}
            />
            <TextInput
                placeholder="cast by"
                value={this.state.actor2}
                onChangeText={val => this.setState({actor2: val})}
                style={styles.actorInput}
            />
          </View>
          <View style={styles.actorView}>
            <TextInput
                placeholder="character 3"
                value={this.state.character3}
                onChangeText={val => this.setState({character3: val})}
                style={styles.actorInput}
            />
            <TextInput
                placeholder="cast by"
                value={this.state.actor3}
                onChangeText={val => this.setState({actor3: val})}
                style={styles.actorInput}
            />
          </View>
          <Text style={styles.text}>Select Movie Genre: </Text>
          <View style={styles.tags}>
            <TagSelect
              data={this.state.genres}
              max={5}
              ref={(tag) => {this.tag = tag}}
              onMaxError={() => {alert.alert('Ops', 'Max reached')}}
            />
          </View>
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
    paddingTop: "5%"
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
