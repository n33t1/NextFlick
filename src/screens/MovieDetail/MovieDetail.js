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
    let payload = {}
    payload['movieId'] = this.props.selectedMovie.key;
    payload['userId'] = this.props.userID;

    this.props.onDeleteMovie(payload);
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
          <View style={styles.movieBlock}>{this.props.selectedMovie.attributes.actors.map(actor => <Text style={styles.movieText}>{actor}</Text>)}</View>
          <View style={styles.movieBlock}>{this.props.selectedMovie.attributes.genre.map(genre => <Text style={styles.movieText}>{genre}</Text>)}</View>
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
    fontSize: 28,
    paddingBottom: "5%"
  },
  movieText: {
    textAlign: "center",
    fontSize: 18
  },
  deleteButton: {
    alignItems: "center",
    paddingTop:"5%"
  },
  movieBlock: {
    paddingTop: "5%"
  }
});

const mapStateToProps = state => {
  return {
      userID: state.user.userID
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDeleteMovie: key => dispatch(deleteMovie(key))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);
