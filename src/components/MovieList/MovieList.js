import React from "react";
import { StyleSheet, FlatList, Text, View, Button } from "react-native";

import ListItem from "../ListItem/ListItem";

// const data = ['The Social Network', 'Seven', 'Zodiac'];

// const movies = data.map((data, i) => 
//   <ListItem
//     movieName={data}
//     onItemPressed={() => props.onItemSelected(info.item.key)}
//   />
// );

const movieList = props => {
  if (props.movies === undefined || props.movies.length == 0) {
    return (
      <View style={styles.container}>
        <Button 
          title="Take the quiz"
          onPress={props.onTakeQuiz}
          style={styles.button} />
        <Button 
          title="Add new movie"
          onPress={props.onAddNewMovie}
          style={styles.button} />
      </View>
    )
  }
  return (
    <FlatList
      style={styles.listContainer}
      data={props.movies}
      renderItem={(info) => {
        // console.log("info" + JSON.stringify(info));
        return (
          <ListItem
            movieName={info.item.attributes.movieName}
            onItemPressed={() => props.onItemSelected(info.item.key)}
          />
        )
      }}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  },
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "100%"
  },
  button: {
    fontSize: 20,
    paddingBottom: "50%"
  },
  text: {
    fontSize: 20,
  }
});

export default movieList;
