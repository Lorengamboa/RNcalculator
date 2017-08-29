import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import {PRIMARY_COLOR, SECUNDARY_COLOR} from '../../constants/colors';

const PrimaryButton = (props) => {
const { btnStyle, btnTxtStyle } = styles;
  return (
    <TouchableOpacity style={ btnStyle } onPress={props.onPress}>
      <Text style={ btnTxtStyle }>
        {props.label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnStyle: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: SECUNDARY_COLOR,
  },
  btnTxtStyle: {
    flex: 1,
    textAlignVertical: "center",
    textAlign: "center",
    color: PRIMARY_COLOR,
    fontSize: 36,
    fontWeight: '600',
  }
});

export default PrimaryButton;
