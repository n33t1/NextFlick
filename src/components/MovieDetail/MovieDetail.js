import React from "react";
import { Modal, View, Text, Button, StyleSheet } from "react-native";

const movieDetail = props => {
  let modalContent = null;

  if (props.selectedMovie) {
    modalContent = (
      <View>
        <Text style={styles.movieName}>{props.selectedMovie.name}</Text>
      </View>
    );
  }
  return (
    <Modal
      onRequestClose={props.onModalClosed}
      visible={props.selectedMovie !== null}
      animationType="slide"
    >
      <View style={styles.modalContainer}>
        {modalContent}
        <View>
          <Button title="Delete" color="red" onPress={props.onItemDeleted} />
          <Button title="Close" onPress={props.onModalClosed} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    margin: 22
  },
  movieName: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 28
  }
});

export default movieDetail;
