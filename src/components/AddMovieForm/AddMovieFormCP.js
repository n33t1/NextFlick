import React, { Component } from "react";
import { View, TextInput, Button, StyleSheet, Text } from "react-native";

import { TagSelect } from 'react-native-tag-select';

class LoginForm extends Component {
  state = {
    movieName: "",
    director: "",
    actors: [""],
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

  actorChangedHandler = (key, val) => {
    let actors = [...this.state.actors];
    actors[key] = val;
    this.setState({ actors });   
  };

  addActorHandler = () => {
    this.state.actors.push("")
    this.setState({ actors: this.state.actors })
    console.log(this.state.actors);
  }
//   formSubmitHandler = () => {
//     if (this.state.userName.trim() === "" 
//         || this.state.password.trim() === "") {
//       return;
//     }

    // this.props.loginUser({userName: this.state.userName, password: this.state.password});
    // this.props.onLogin();
//   };

  render() {
    let actorInputs = this.state.actors.map((actor, i) => {
        return (
            <TextInput
                key={i}
                placeholder="actor name"
                value={actor}
                onChangeText={val => this.actorChangedHandler(i, val)}
                style={styles.textInput}
            />
        )
    })

    return (
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="movie name"
          value={this.state.movieName}
          onChangeText={this.movieNameChangedHandler}
          style={styles.textInput}
        />
        <TextInput
          placeholder="director"
          value={this.state.director}
          onChangeText={this.directorChangedHandler}
          style={styles.textInput}
        />
        <TextInput
          placeholder="year"
          value={this.state.year}
          onChangeText={this.yearChangedHandler}
          style={styles.textInput}
        />
        <View style={styles.tags}>
          <TagSelect
            data={this.state.genres}
            max={5}
            ref={(tag) => {this.tag = tag}}
            onMaxError={() => {alert.alert('Ops', 'Max reached')}}
            // itemStyle={styles.item}
            // itemLabelStyle={styles.label}
            // itemStyleSelected={styles.itemSelected}
            // itemLabelStyleSelected={styles.labelSelected}
          />
        </View>
        {actorInputs}
        <Button
          style={styles.formSubmitButton}
          title="Add another actor"
          onPress={this.addActorHandler}
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
    paddingTop: "10%"
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
  },
  tags: {
    // paddingTop: "20%",
    paddingTop: "5%",
    paddingBottom: "5%",
    paddingLeft: "5%",
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  item: {
    borderWidth: 1,
    borderColor: '#333',    
    backgroundColor: '#FFF',
  },
  label: {
    color: '#333',
    fontSize: 10
  },
  itemSelected: {
    backgroundColor: '#333',
  },
  labelSelected: {
    color: '#FFF',
  }
});

export default LoginForm;
