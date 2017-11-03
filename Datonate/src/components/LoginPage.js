import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Button,
  TouchableOpacity
} from 'react-native';
import {connect} from 'react-redux';
import { emailChanged, passwordChanged, loginUser} from '../actions';


class LoginPage extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     email: '',
  //     password: ''
  //   }
  // }

  // _userLogin = (props) => {
  //   console.log("Here\n");
  //   console.log(this.state.email + "\n");
  //   console.log(this.state.password + "\n");
  //   var myRequest = new Request('http://65db2b5d.ngrok.io/api/login', {method: 'POST', body: JSON.stringify({
  //     email: this.state.email,
  //     password: this.state.password
  //   })
  // });
  //   fetch(myRequest)
  //   .then(function(response) {
  //       if(response.status == 200) {
  //         var responseString = response._bodyText.toString();
  //         if (responseString.includes('200')) alert("Login Successful");
  //         else alert("Login Failed");
  //       }
  //       else throw new Error('API fault detected.');
  //   })
  //   .then(function(response) {
  //       console.debug(response);
  //   })
  //   .catch(function(error) {
  //       console.log(error);
  //   });
  // }
  onEmailChange(text) {
    this.props.emailChanged(text);
  }
  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }
  userLogin() {
    const {email, password} = this.props;
    this.props.loginUser({email, password});
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
          value={this.props.email}
        />
        <TextInput style = {styles.input}
          secureTextEntry = {true}
          placeholder = "Password"
          placeholderTextColor = 'white'
          onChangeText = {this.onPasswordChange.bind(this)}
          value={this.props.password}
        />
        <TouchableOpacity style={styles.inputButton}
          onPress={this.userLogin.bind(this)}
        >
        <Text style={styles.inputButtonText}>
          Login
        </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.inputButton}
          onPress={()=> Actions.register()}
        >
        <Text style={styles.inputButtonText}>
          Register
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
  const { email, password, error} = auth;

  return { email, password, error};
};

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser
})(LoginPage);
// Exporting Component
