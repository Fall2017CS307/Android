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
import { Container, Header, Card, CardItem, DeckSwiper, Thumbnail, Left, Body, Icon } from 'native-base';
import {ImageCrop} from 'react-native-image-cropper';
import {connect} from 'react-redux';
import {descChanged} from '../actions';

class ImageAnnotation extends Component {

onChangeDescription(text) {
  this.props.descChanged(text);
}
render() {

  const {files} = this.props;

  return (
  <DeckSwiper
        dataSource={files}
        looping="false"
        renderItem={item =>
    <Card style={{ elevation: 3, backgroundColor: '#263238', alignItems: 'center', flex: 1, paddingBottom: '10%' }}>
      <Text style={{ paddingTop: '5%' }}></Text>
      <ImageCrop
      style={{ width: '100%', height: '60%' }}
        ref={'cropper'}
        image={item.link}
        cropHeight={200}
        cropWidth={300}
        zoom={50}
        maxZoom={80}
        minZoom={20}
        panToMove={true}
        pinchToZoom={true}
      />
      <TextInput style = {{
        paddingLeft: '4%',
        marginTop: '10%',
        width: '80%',
        color: 'white',
        backgroundColor: '#37474F',
        marginBottom: 10,
        fontSize: 15 }}
        placeholder = "Description"
        placeholderTextColor = 'white'
        onChangeText = {this.onChangeDescription.bind(this)}
        value={this.props.desc}
      />
      <TouchableOpacity style={{
        marginTop: '15%',
        padding:10,
        backgroundColor: '#0091EA',
        width: '80%',}}
        onPress={this.capture.bind(this)}>
        <Text style={{ color: 'white', textAlign: 'center' }} onPress={this.capture.bind(this)}>Submit</Text>
      </TouchableOpacity>
    </Card>
  }
  />


  )
}
capture(){
  this.refs.cropper.crop()
  .then(base64 => console.log(base64))
}

}
const mapStateToProps = ({tasks}) => {
  const {files, desc} = tasks;
  return {files, desc};
}
export default connect(mapStateToProps, {descChanged})(ImageAnnotation);
