import React from 'react';
import { Text, TouchableOpacity } from 'react-native';


const Button = ({onPress, children}) => {
  const { buttonStyle, textStyle } = styles;
  return (
    <TouchableOpacity onPress={onPress} style={ buttonStyle }>
    <Text style={textStyle}>
      {children}
    </Text>
    </TouchableOpacity>
  )
};

const styles = {
  buttonStyle: {
      flex: 1,
      alignSelf: 'flex-end',
      backgroundColor: 'white',
      borderRadius: 5,
      borderWidth: 1,
      borderColor: 'transparent',
      marginLeft: 5,
      marginRight: 5
  },
  textStyle: {
    alignSelf: 'center',
    color: '#FFC107',
    fontSize: 20,
    fontWeight: '800',
    paddingBottom: 10,
    marginRight: 15
  }
};

export {Button};
