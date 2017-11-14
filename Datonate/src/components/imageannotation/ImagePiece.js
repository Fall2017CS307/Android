import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Button,
  TouchableOpacity,
  ScrollableView
} from 'react-native';
import {connect} from 'react-redux';
import {Surface} from "gl-react-native";
import GL from "gl-react";


class ImagePiece extends Component {

  var box;

  imageLoad() {
    // Open for connect to backend
  }

  handleTouch(event) {
    var touchX = event.nativeEvent.locationX / window.width;
    var touchY = 1.0 - event.nativeEvent.locationY / window.height;

    if (this.distance(touchX, touchY / ratio, box.position()[0], box.position()[1]) < radius) {
	      this.kickBall(touchX > box.position()[0] ? -50.0 : 50.0, 500.0);
    }
  }

  setBox(x, y) {
     box.setTarget(new b2Vec2(x, y));
  }

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
      onPanResponderGrant: (evt, gestureState) => {
        this.handleTouch(evt);
      }
    });
    start();
  }

  componentDidMount() {
    this.componentDidUpdate()
  }

  render() {

    return (
      <Surface width={window.width} height={window.height}>
          <GL.Node
            uniforms={{ ratio, radius, location, angle, image }}
            shader={{ frag: Box }}
          />
        </Surface>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#263238',
    alignItems: 'center'
  },
  input: {
    paddingLeft: '6%',
    width: '80%',
    color: 'white',
    backgroundColor: '#37474F',
    marginBottom: 10,
    fontSize: 15
  },
  logo: {
    resizeMode: 'contain',
    height: '25%',
    marginBottom:'10%'
  },
  inputButton: {
    marginTop: 10,
    padding:10,
    backgroundColor: '#0091EA',
    width: '80%',
  },
  inputButtonText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '800'
  }
});

const mapStateToProps = ({ imageload }) => {
  const { email, password, error} = auth;

  return { email, password, error};
};

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser
})(ImagePiece);
// Exporting Component
