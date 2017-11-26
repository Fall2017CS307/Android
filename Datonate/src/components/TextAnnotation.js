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
  constructor(props) {
    super(props);
    this.state = {
      experimentname: 'Emotions (1)',
      experimentinstruction: 'Please describe your emotions after reading this',
      experimenttext: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sollicitudin diam nec lacus elementum, id pharetra massa finibus.Nulla viverra ornare elit ut faucibus. Integer vel fringilla diam.',
      experimentresponse: '',
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
                      <Text note>{ this.state.experimentname }</Text>
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
