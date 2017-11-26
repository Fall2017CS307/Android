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
import {ImageCrop} from 'react-native-image-cropper'

class ImageAnnotation extends Component<{}> {


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
              <TextInput style = {styles.input}
                placeholder = "Type of object"
                placeholderTextColor = 'white'
                onChangeText = {this.onEmailChange.bind(this)}
                value={this.props.email}
              />
            </CardItem>
          </Card>
        }
        />
  </View>

  )
}
capture(){
  this.refs.cropper.crop()
  .then(base64 => console.log(base64))
}

}

export default ImageAnnotation;
