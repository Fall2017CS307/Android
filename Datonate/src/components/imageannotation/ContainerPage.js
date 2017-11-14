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


class ConntainerPage extends Component {

  imageLoad() {
    // Open for connect to backend
  }
  render() {

    return (
      <ScrollableView style={styles.container}>

      </ScrollableView>
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
})(ContainerPage);
// Exporting Component
