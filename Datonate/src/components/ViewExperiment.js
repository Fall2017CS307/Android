import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import { Button, Card, CardSection } from './common';
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
      <CardSection>
      <Text> The Experiment ID is {currentExperiment.id}</Text>
      </CardSection>
      <CardSection>
      <Text> You will be paid {currentExperiment.price} for performing this experiment</Text>
      </CardSection>
      <CardSection>
      <Text> Short description of the experiment: {currentExperiment.description}</Text>
      </CardSection>
      <CardSection>
      <Button onPress={this.onSelectPress.bind(this)}>
        Start Task
      </Button>
      </CardSection>
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
