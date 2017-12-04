import React, {Component} from 'react';
import {Text} from 'react-native';
import { Actions } from 'react-native-router-flux';

class Dummy extends Component {
  loadImage() {
    Actions.imageAnnotation();
  }
  render() {
    this.loadImage();
    return (
      <Text> Image is being loaded </Text>
    )
  }
}

export default Dummy;
