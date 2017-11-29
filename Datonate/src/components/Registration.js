import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  ScrollView,
  TextInput,
  Image,
  Button,
  TouchableOpacity
} from 'react-native';
import {Dropdown} from 'react-native-material-dropdown';
import {connect} from 'react-redux';
import { firstNameChanged, lastNameChanged, numberChanged, regEmailChanged, regPassWordChanged, registerUser} from '../actions';

class Registration extends Component {
  onFirstNameChange(text) {
    this.props.firstNameChanged(text);
  }
  onLastNameChange(text) {
    this.props.lastNameChanged(text);
  }
  onNumberChange(text) {
    this.props.numberChanged(text);
  }
  onRegEmailChange(text) {
    this.props.regEmailChanged(text);
  }
  onRegPassWordChange(text) {
    this.props.regPassWordChanged(text);
  }
  onSelectGender(text) {
    console.log(text);
  }
  userRegister(){
    const {firstName, lastName, number, regEmail, regPassword} = this.props;
    this.props.registerUser({firstName, lastName, number, regEmail, regPassword});
  }
  render(){
    let genderData = [{
    value: 'Male',
  }, {
    value: 'Female',
  }, {
    value: "",
  }];
  let skillData = [{
    value: 'No preference',
      }, {
    value: 'High School Diploma',
      }, {
    value: "Bachelors",
    }, {
    value: "Masters",
  }, {
    value: "Ph.D"
  }];
  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
    <Image
    style={styles.logo}
    source={require('../images/logo.png')}
    />
      <TextInput style = {styles.input}
        placeholder = "First Name"
        placeholderTextColor = 'white'
        onChangeText = {this.onFirstNameChange.bind(this)}
        value={this.props.firstName}
      />
      <TextInput style = {styles.input}
        placeholder = "Last Name"
        placeholderTextColor = 'white'
        onChangeText = {this.onLastNameChange.bind(this)}
        value={this.props.lastName}
      />
      <TextInput style={styles.input}
        placeholder = "Phone number"
        keyboardType = 'numeric'
        placeholderTextColor = 'white'
        onChangeText = {this.onNumberChange.bind(this)}
        value = {this.props.number}
        maxLength = {10}  //setting limit of input
        />
      <TextInput style = {styles.input}
        placeholder = "Email"
        placeholderTextColor = 'white'
        onChangeText = {this.onRegEmailChange.bind(this)}
        value={this.props.regEmail}
      />
      <TextInput style = {styles.input}
        secureTextEntry = {true}
        placeholder = "Password"
        placeholderTextColor = 'white'
        onChangeText = {this.onRegPassWordChange.bind(this)}
        value={this.props.regPassword}
      />
      <Dropdown
        label='Select Gender'
        data={genderData}
        containerStyle={{ width: 100 }}
        textColor="#FFFFFF"
        onChangeText={this.onSelectGender.bind(this)}
      />
      <Dropdown
        label='Select Skill'
        data={skillData}
        containerStyle={{ width: 180 }}
        textColor="#FFFFFF"
        onChangeText={this.onSelectGender.bind(this)}
      />
      <TouchableOpacity style={styles.inputButton}
        onPress={this.userRegister.bind(this)}>
      <Text style={styles.inputButtonText}>
        Register
      </Text>
      </TouchableOpacity>
    </ScrollView>
  );
  }
}

const styles = StyleSheet.create({
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
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#263238',
    alignItems: 'center'
  }
});
const mapStateToProps = ({ auth }) => {
  const { firstName, lastName, number, regEmail, regPassword} = auth;

  return { firstName, lastName, number, regEmail, regPassword};
};
export default connect(mapStateToProps, {
  firstNameChanged, lastNameChanged, numberChanged, regEmailChanged, regPassWordChanged, registerUser
})(Registration);
