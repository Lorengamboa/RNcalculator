import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ResultField = (props) => {
const { fieldStyle, fieldTxtStyle } = styles;

  return (
    <View style={ fieldStyle }>
      <Text style={ fieldTxtStyle }>
        {props.display}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  fieldStyle: {
    flex: 1,
    backgroundColor: 'grey',
    borderWidth: 1,
  },
  fieldTxtStyle: {
    flex: 1,
    color: '#fff',
    fontFamily: "Clockwork",
    fontSize: 80,
    fontWeight: '600',
    position: 'absolute',
    bottom:0,
    right:0
  }
});

export default ResultField;
