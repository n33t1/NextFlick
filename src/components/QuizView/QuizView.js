import React, { Component } from "react";
import {
    View,
    StyleSheet,
    Button,
    Alert,
    Text,
    TextInput
} from 'react-native';
import { connect } from 'react-redux';

import { TagSelect } from 'react-native-tag-select';
import { updateTags } from "../../store/actions/index";

class QuizView extends Component {

  state = {
    data: this.props.tags,
    tagSelected: [],
    tagType: this.props.tagType
  };

  formSubmitHandler = () => {
    if (this.tag.totalSelected === 0) {
      return;
    }
    let tagType = this.state.tagType;
    let items = this.tag.itemsSelected;
    let payload = {}
    payload[tagType] = items;
    
    console.log("QuizView: " + JSON.stringify(payload));
    this.props.onSelectedTags(payload);
    this.props.onTagsSelected();
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.quizPrompt}>Payment:</Text>
        <View style={styles.tags}>
          <TagSelect
            data={this.state.data}
            max={5}
            ref={(tag) => {this.tag = tag}}
            onMaxError={() => {alert.alert('Ops', 'Max reached')}}
            itemStyle={styles.item}
            itemLabelStyle={styles.label}
            itemStyleSelected={styles.itemSelected}
            itemLabelStyleSelected={styles.labelSelected}
          />
        </View>
        <Button
          title="next"
          style={styles.button}
          onPress={this.formSubmitHandler}
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
    justifyContent: "space-between",
    alignItems: "center"
  },
  quizPrompt: {
    fontSize: 30
  },
  movieButton: {
    width: "30%"
  },
  tags: {
    paddingTop: "20%",
    paddingBottom: "20%",
    paddingLeft: "5%",
    paddingRight: "5%"
  },
  item: {
    borderWidth: 1,
    borderColor: '#333',    
    backgroundColor: '#FFF',
  },
  label: {
    color: '#333',
    fontSize: 20
  },
  itemSelected: {
    backgroundColor: '#333',
  },
  labelSelected: {
    color: '#FFF',
  }
});

// export default QuizView;

// const mapStateToProps = state => {
//   return {
//       // onLoadTags: () => dispatch(setTags())
//       tags: state.tags.tags
//   };
// };

const mapDispatchToProps = dispatch => {
  return {
    onSelectedTags: payload => dispatch(updateTags(payload))
  };
};

export default connect(null, mapDispatchToProps)(QuizView);