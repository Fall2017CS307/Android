import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';
import { Card, CardSection, Button } from './common';

class ViewExperiment extends Component{
  render(){
    console.log(this.props);
    const {currentExperiment} = this.props;
    return (
      <View>
      <Text> The Experiment ID is {currentExperiment.id}</Text>
      <Text> You will be paid {currentExperiment.price} for performing this experiment</Text>
      <Text> Short description of the experiment: {currentExperiment.description}</Text>
      </View>
    );

  }
}

const mapStateToProps = ({ exp }) => {
  const {currentExperiment} = exp;
  console.log(currentExperiment);
  return {currentExperiment};
};

export default connect(mapStateToProps)(ViewExperiment);
