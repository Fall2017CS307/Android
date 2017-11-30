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

class ImageAnnotation extends Component<{}> {
  constructor(props) {
  super(props);
  this.state = {
    image: 'http://i.imgur.com/tCatS2c.jpg',
    height: 200,
    width: 300,
    zoom: 50,
    showNew: true,
    newImage: 'http://i.imgur.com/tCatS2c.jpg',
  };
}

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
render() {
  return (
  <View>
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
    <Text onPress={this.capture.bind(this)}>Capture()</Text>
  </View>

  )
}
capture(){
  this.refs.cropper.crop()
  .then(base64 => console.log(base64))
}

}

const mapStateToProps = ({tasks}) => {
  const {files} = tasks;
  return {files};
}
export default connect(mapStateToProps)(ImageAnnotation);
