import React, {Component} from 'react';
import {Text, View} from 'react-native';
import { Actions } from 'react-native-router-flux';
import {Spinner} from 'native-base';

class TextDummy extends Component {
  loadText() {
    Actions.textAnnotation();
  }
  render() {
    this.loadText();
    return (
      <View style={{ backgroundColor: '#263238', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Text style={{ color: 'white', fontSize: 24, marginBottom: '20%' }}>The next image is loading</Text>
        <Spinner color='white' />
      </View>
    )
  }
}

export default TextDummy;
