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
      <DeckSwiper
            dataSource={cards}
            looper="false"
            renderItem={item =>
              <Card style={{ elevation: 3, backgroundColor: '#263238', alignItems: 'center', flex: 1, paddingBottom: '10%' }}>
                <Text style={{ color: 'white', fontSize: 15, width: '80%', marginTop: '20%' }}>Lorem ipsum dolor sit amet,
                eu hinc posidonium theophrastus vix,
                tantas oporteat eu vix. Ius no unum vero
                liberavisse, ad aeterno virtute quo. Ut agam soleat
                ancillae vel, mel graeco oblique luptatum ad. Soluta
                noster his ne, magna dolor tacimates et per. Tempor
                antiopam et eum.</Text>
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
                />
                <TouchableOpacity style={{
                  marginTop: '20%',
                  padding: 10,
                  backgroundColor: '#0091EA',
                  width: '80%'}}>
                  <Text style={{ color: 'white', textAlign: 'center' }}>Submit</Text>
                </TouchableOpacity>
              </Card>
            }
          />
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
