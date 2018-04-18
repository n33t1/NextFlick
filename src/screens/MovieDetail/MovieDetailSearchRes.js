import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";

import Icon from "react-native-vector-icons/Ionicons";
import { addMovie } from "../../store/actions/index";

class MovieDetailSearchRes extends Component {
  movieAddHandler = () => {
    let temp = {}
    temp['id'] = this.props.selectedMovie.key;
    // {'id': 1}
    this.props.onAddMovie(temp);
    this.props.navigator.pop();
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.movieName}>{this.props.selectedMovie.attributes.movieName}</Text>
          <Text style={styles.movieText}>{this.props.selectedMovie.attributes.director}</Text>
          <Text style={styles.movieText}>{this.props.selectedMovie.attributes.year}</Text>
          <Text style={styles.movieText}>{this.props.selectedMovie.attributes.language}</Text>
          <View>{this.props.selectedMovie.attributes.actors.map(actor => <Text style={styles.movieText}>{actor}</Text>)}</View>
          <View>{this.props.selectedMovie.attributes.genre.map(genre => <Text style={styles.movieText}>{genre}</Text>)}</View>
        </View>
        <View>
          <TouchableOpacity onPress={this.movieAddHandler}>
            <View style={styles.deleteButton}>
              <Icon size={30} name="ios-add" color="red" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 22
  },
  movieName: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 28
  },
  movieText: {
    textAlign: "center",
    fontSize: 18
  },
  deleteButton: {
    alignItems: "center",
    paddingTop:"5%"
  }
});

const mapDispatchToProps = dispatch => {
  return {
    onAddMovie: key => dispatch(addMovie(key))
  };
};

export default connect(null, mapDispatchToProps)(MovieDetailSearchRes);
