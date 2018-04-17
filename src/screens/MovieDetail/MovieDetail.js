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
import { deleteMovie } from "../../store/actions/index";

class MovieDetail extends Component {
  movieDeletedHandler = () => {
    let temp = {}
    temp['id'] = this.props.selectedMovie.key;
    this.props.onDeleteMovie(temp);
    this.props.navigator.pop();
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.movieName}>{this.props.selectedMovie.attributes.movieName}</Text>
          <Text>{this.props.selectedMovie.attributes.director}</Text>
          <View>{this.props.selectedMovie.attributes.actors.map(actor => <Text>{actor}</Text>)}</View>
          <View>{this.props.selectedMovie.attributes.genre.map(genre => <Text>{genre}</Text>)}</View>
        </View>
        <View>
          <TouchableOpacity onPress={this.movieDeletedHandler}>
            <View style={styles.deleteButton}>
              <Icon size={30} name="ios-trash" color="red" />
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
  deleteButton: {
    alignItems: "center"
  }
});

const mapDispatchToProps = dispatch => {
  return {
    onDeleteMovie: key => dispatch(deleteMovie(key))
  };
};

export default connect(null, mapDispatchToProps)(MovieDetail);
