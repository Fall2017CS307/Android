import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Button,
  Picker,
  TouchableOpacity
} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';

class Payments extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  _userLogin = (props) => {
    console.log("Here\n");
    console.log(this.state.email + "\n");
    console.log(this.state.password + "\n");
    var myRequest = new Request('http://65db2b5d.ngrok.io/api/login', {method: 'POST', body: JSON.stringify({
      email: this.state.email,
      password: this.state.password
    })
  });
    fetch(myRequest)
    .then(function(response) {
        if(response.status == 200) {
          var responseString = response._bodyText.toString();
          if (responseString.includes('200')) alert("Login Successful");
          else alert("Login Failed");
        }
        else throw new Error('API fault detected.');
    })
    .then(function(response) {
        console.debug(response);
    })
    .catch(function(error) {
        console.log(error);
    });
  }

  render() {

    let data = [{
      value: 'Finding cars',
    }, {
      value: 'Street signs',
    }, {
      value: 'Emotions from passages',
    }];

    return (
      <View style={styles.container}>
        <Text style={styles.headertext}>Request Payment</Text>
        <Dropdown
        label='Select Experiment'
        containerStyle = {styles.dropdownstyle}
        data={data}
        />
        <TextInput style = {styles.input}
          placeholder = "Email"
          placeholderTextColor = 'white'
          onChangeText = {(email) => this.setState({email})}
          value={this.state.text}
        />
        <TextInput style = {styles.input}
          secureTextEntry = {true}
          placeholder = "Password"
          placeholderTextColor = 'white'
          onChangeText = {(password) => this.setState({password})}
          value={this.state.text}
        />
        <TouchableOpacity style={styles.inputButton}
          onPress={this._userLogin}
        >
        <Text style={styles.inputButtonText}>
          Request
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
  dropdownstyle: {
    marginBottom: '20%',
    width: '70%',
    backgroundColor: '#37474F',
  },
  headertext: {
    fontSize: 26,
    color: 'white',
    marginBottom: '20%',
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
// Exporting Component
export default Payments;
