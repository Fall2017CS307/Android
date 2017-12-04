import React, {Component} from 'react';
import {Text, View} from 'react-native';
import { Actions } from 'react-native-router-flux';
import {Spinner} from 'native-base';

class Dummy extends Component {
  loadImage() {
    Actions.imageAnnotation();
  }
  render() {
    this.loadImage();
    return (
      <View style={{ backgroundColor: '#263238', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Text style={{ color: 'white', fontSize: 24, marginBottom: '20%' }}>The next image is loading</Text>
        <Spinner color='white' />
      </View>
    )
  }
}

export default Dummy;
