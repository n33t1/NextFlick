import React from "react";
import { StyleSheet, FlatList, Text, View } from "react-native";

import ListItem from "../ListItem/ListItem";

// const data = ['The Social Network', 'Seven', 'Zodiac'];

// const movies = data.map((data, i) => 
//   <ListItem
//     movieName={data}
//     onItemPressed={() => props.onItemSelected(info.item.key)}
//   />
// );

const movieList = props => {
  return (
    <FlatList
      style={styles.listContainer}
      data={props.movies}
      renderItem={(info) => {
        console.log("info" + JSON.stringify(info));
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
  }
});

export default movieList;
