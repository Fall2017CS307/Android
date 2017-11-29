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

class ImageAnnotation extends Component<{}> {

capture(){
  this.refs.cropper.crop()
  .then(base64 => console.log(base64))
}
render() {
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

}

export default ImageAnnotation;
