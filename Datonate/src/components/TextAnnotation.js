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


class TextAnnotation extends Component<{}> {
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
      <View style={styles.container}>
      <DeckSwiper
            dataSource={cards}
            renderItem={item =>
              <Card style={{ elevation: 3 }}>
                <CardItem>
                  <Left>
                    <Body>
                      <Text>{styles.experimentheader}</Text>
                      <Text note> Emotions </Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                </CardItem>
                <CardItem>
                  <Icon name="heart" style={{ color: '#ED4A6A' }} />
                  <Text>{item.name}</Text>
                </CardItem>
              </Card>
            }
          />
      </View>
    );
  }
}
const mapStateToProps = ({tasks}) => {
  const {files} = tasks;
  return {files};
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
export default TextAnnotation;
