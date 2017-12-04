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
import { Container, Header, DeckSwiper, Card, CardItem, Thumbnail, Left, Body, Icon } from 'native-base';
import {connect} from 'react-redux';
import {textDescChanged, changeFiles, changeTextIndex, sendTextData} from '../actions'

class TextAnnotation extends Component<{}> {

  onTextDescChange(text) {
    this.props.textDescChanged(text);
  }
  render() {

    const {files} = this.props;
    if(files.length != 0) {
    return (
      <View style={{ backgroundColor: '#263238', alignItems: 'center', flex: 1 }}>

        <Text style={{ color: 'white', fontSize: 15, width: '80%', marginTop: '5%', textAlign: 'center' }}>
        {this.props.files[0].addInfo} -</Text>


                <Text style={{ color: 'white', fontSize: 15, width: '80%', marginTop: '10%' }}>
                  {this.props.files[0].question}
                </Text>


                <TextInput style={{
                  paddingLeft: '4%',
                  marginTop: '10%',
                  width: '80%',
                  color: 'white',
                  backgroundColor: '#37474F',
                  marginBottom: 10,
                  fontSize: 15 }}
                  placeholder = "Description"
                  placeholderTextColor = 'white'
                  onChangeText = {this.onTextDescChange.bind(this)}
                  value={this.props.textDesc}
                />
                <TouchableOpacity style={{
                  marginTop: '20%',
                  padding: 10,
                  backgroundColor: '#0091EA',
                  width: '80%'}}
                  onPress={this.submit.bind(this)}>
                  <Text style={{ color: 'white', textAlign: 'center' }}>Submit</Text>
                </TouchableOpacity>
                </View>
    );
  }
  else {
  return (
    <View style={{ backgroundColor: '#263238', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <Text style={{ fontSize: 18, color: 'white', marginBottom: '20%' }}>
        Your task is complete. Thank you.
      </Text>
      <TouchableOpacity style={{
        padding:10,
        backgroundColor: '#0091EA',
        width: '70%',
        }}>
        <Text style={{

          textAlign: 'center',
        color: 'white',
        fontSize: 18 }}>Return</Text>
      </TouchableOpacity>
    </View>
  );
  }
}

submit() {
  if(this.props.textDesc !== '' && this.props.textDesc !== 'Description'){
    const {index, files, textDesc} = this.props;
    var toChange = files;
    var toIncrease = index;
    toIncrease++;
    toChange.shift();
    console.log(toChange);
    this.props.changeFiles(toChange);
    this.props.changeTextIndex(toIncrease);
    this.props.sendTextData(this.props.textDesc);
  }else {
    alert("Description box cannot be empty. Plesae try again.")
  }
}

}
const mapStateToProps = ({tasks}) => {
  const {files, textDesc, index, batchID} = tasks;
  return {files, textDesc, index, batchID};
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#263238',
    alignItems: 'center'
  },
  experimentheader: {
    color: 'white',
    fontSize: 25,
    marginBottom: '20%',
  },
  experimenttext: {
    color: 'white',
    fontSize: 15,
    width: '80%',
    textAlign: 'center',
    marginBottom: '12%',
  },
  experimentinstruction: {
    color: 'white',
    fontSize: 15,
    width: '80%',
    textAlign: 'center',
    marginBottom: '5%',
  },
  input: {
    paddingLeft: '6%',
    width: '80%',
    color: 'white',
    backgroundColor: '#37474F',
    marginBottom: 10,
    fontSize: 15
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
export default connect(mapStateToProps, {textDescChanged, changeFiles, changeTextIndex, sendTextData})(TextAnnotation);
