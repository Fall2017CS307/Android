import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Button,
  TouchableOpacity
} from 'react-native';
import {connect} from 'react-redux';
import {emailChangedReset} from '../actions'
// Creating component
class PasswordReset extends Component {
  onEmailChange(text) {
    this.props.emailChangedReset(text);
  }
  _userReset() {

  }

  render() {

    return (
      <View style={styles.container}>
      <Image
      style={styles.logo}
      source={require('../images/logo.png')}
      />
        <TextInput style = {styles.input}
          placeholder = "Email"
          placeholderTextColor = 'white'
          onChangeText = {this.onEmailChange.bind(this)}
          value={this.props.userEmail}
        />
        <TouchableOpacity style={styles.inputButton}
          onPress={this._userReset}
        >
        <Text style={styles.inputButtonText}>
          Reset Password
        </Text>
        </TouchableOpacity>
      </View>
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

const mapStateToProps = ({ auth }) => {
  const {userEmail} = auth;
  return {userEmail};
}

// Exporting Component
export default connect(mapStateToProps, {emailChangedReset})(PasswordReset);
