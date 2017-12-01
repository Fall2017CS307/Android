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
import {descChanged, changeFiles} from '../actions'

class ImageAnnotation extends Component<{}> {
//   constructor(props) {
//   super(props);
//   this.state = {
//     image: 'http://i.imgur.com/tCatS2c.jpg',
//     height: 200,
//     width: 300,
//     zoom: 50,
//     showNew: true,
//     newImage: 'http://i.imgur.com/tCatS2c.jpg',
//   };
// }

/*
capture(){
    this.refs.cropper.crop()
    .then(res =>{
      this.setState({
        showNew: true,
        newImage: res,
      });
    })
  }
render() {
  const cards = [
{
  text: 'Card One',
  name: 'One',
},
{
  text: 'Card Two',
  name: 'Two',
},
];
  return (
  <View>
  <DeckSwiper
        dataSource={cards}
        renderItem={item =>
          <Card style={{ elevation: 3 }}>
            <CardItem>
            <ImageCrop
              ref={'cropper'}
              image={this.state.image}
              cropHeight={this.state.height}
              cropWidth={this.state.width}
              zoom={this.state.zoom}
              maxZoom={80}
              minZoom={20}
              panToMove={true}
              pinchToZoom={true}
            />
            </CardItem>
            <Text onPress={this.capture()}>Save</Text>
            <CardItem cardBody>
            </CardItem>
            <CardItem>
              <Icon name="heart" style={{ color: '#ED4A6A' }} />
            </CardItem>
          </Card>
        }
        />
  </View>

  )
}
*/

onDescChange(text) {
  this.props.descChanged(text);
}
render() {

  const {files} = this.props;
  return (
    <View style={{ backgroundColor: '#263238', alignItems: 'center', flex: 1 }}>
      <Text style={{ paddingTop: '5%' }}></Text>
      <ImageCrop
      style={{ width: '100%', height: '60%' }}
        ref={'cropper'}
        image={files[0].link}
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
        onChangeText = {this.onDescChange.bind(this)}
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
    </View>


  )
}
capture(){
  this.refs.cropper.crop()
  .then(base64 => console.log("1s"))
  const {files} = this.props;
  this.props.changeFiles(files);
}

}

const mapStateToProps = ({tasks}) => {
  const {files, desc} = tasks;
  return {files, desc};
}
export default connect(mapStateToProps, {descChanged, changeFiles})(ImageAnnotation);
