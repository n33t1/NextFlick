import React, { Component } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

class SearchBar extends Component {
  state = {
    queryContent: ""
  };

  componentDidMount() {
    
  }

  queryContentChangedHandler = val => {
    this.setState({
      queryContent: val
    });
  };

  searchSubmitHandler = () => {
    if (this.state.queryContent.trim() === "") {
      return;
    }

    this.props.onSearchTriggered(this.state.queryContent);
  };

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter movie/actor/director name"
          value={this.state.queryContent}
          onChangeText={this.queryContentChangedHandler}
          style={styles.queryInput}
        />
        <Button
          title="Search"
          style={styles.searchButton}
          onPress={this.searchSubmitHandler}
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
    justifyContent: "space-around",
    alignItems: "center",
    paddingLeft: "3%",
    paddingRight: "3%",
    paddingTop: "1%",
    paddingBottom: "1%",
  },
  queryInput: {
    width: "75%",
    padding: "2%"
  },
  searchButton: {
    width: "25%"
  }
});

export default SearchBar;
