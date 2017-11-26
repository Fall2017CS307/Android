import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Icon, Left, Body, Right } from 'native-base';
import {connect} from 'react-redux';
import { Button, CardSection } from './common';
import {assignExperiment} from '../actions';

class ViewExperiment extends Component{
  onSelectPress() {
    console.log("IN");
    const { currentExperiment, id } = this.props;
    this.props.assignExperiment(id, currentExperiment.id);
  }
  render(){

    //console.log(this.props);
    const {currentExperiment} = this.props;
    return (
      <Card>
        <CardItem>
          <Left>
            <Body>
              <Text style={{ marginLeft: '36%', paddingTop: '5%', paddingBottom: '8%' }}>
                <Icon active name="analytics" style={{ fontSize: 100, color: '#39729b' }} />
              </Text>
              <Text style={{ fontSize: 22, color: 'black' }}>{currentExperiment.description}{"\n"}</Text>
              <Text style={{ paddingBottom: '10%' }}>
                <Icon name="person" />
                <Text note style={{ fontSize: 18, color: 'black' }}>  By [Experimenter]</Text>
              </Text>
              <View style={{ backgroundColor: '#f4f4f4' }}>
              <Text style={{ paddingLeft: '4%', paddingTop: '2%' }}>
                <Icon name="albums" style={{ color: '#b80000' }} />
                <Text style={{ fontSize: 18, color: 'black' }}>  Experiment ID : <Text style={{ fontWeight: '800' }}>{currentExperiment.id}</Text></Text>
              </Text>
              <Text style={{ paddingLeft: '4%', paddingTop: '2%' }}>
                <Icon active name="cash" style={{ color: '#85bb65' }} />
                <Text style={{ fontSize: 18, color: 'black' }}>  Reward : <Text style={{ fontWeight: '800' }}>${ currentExperiment.price }</Text></Text>
              </Text>
                  <Text style={{ paddingLeft: '4%', paddingTop: '2%' }}>
                    <Icon active name="time" style={{ color: '#FFCC00' }} />
                    <Text> </Text>
                    <Text style={{ fontSize: 18, color: 'black' }}>  Deadline : <Text style={{ fontWeight: '800' }}>11/28</Text></Text>
                  </Text>

              <TouchableOpacity onPress={this.onSelectPress.bind(this)}
              style={{ paddingTop: '10%', width: '20%', marginLeft: '37%', paddingBottom: '6%' }}>
              <Text style={{ textAlign: 'center' }}>
                <Icon active name="play" style={{ fontSize: 19, color: '#007FFF' }} />
                <Text style={{ fontSize: 18, color: '#007FFF' }}>  Start</Text>
              </Text>
              </TouchableOpacity>
              </View>

            </Body>
          </Left>
        </CardItem>
      </Card>
    );

  }
}

const styles = StyleSheet.create({
  pageView: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#263238',
    alignItems: 'center'
  },
  header: {
    height: '20%',
    marginTop: '0%',
    justifyContent: 'center',
    paddingBottom: 20,
  },
  headerText: {
    color: 'white',
    fontSize: 35
  },
  subtextview: {
    height: '60%',
    width: '90%',
    alignItems: 'center',
    backgroundColor: 'grey'
  },
  subtextheader: {
    fontSize: 20,
    color: 'black',
  },
  subtextsub: {
    fontSize: 40,
    color: 'white',
  },
});




const mapStateToProps = ({ exp, auth }) => {
  const {currentExperiment} = exp;
  const {id} = auth;
  //console.log(currentExperiment);
  return {currentExperiment, id};

};

export default connect(mapStateToProps, {assignExperiment})(ViewExperiment);
