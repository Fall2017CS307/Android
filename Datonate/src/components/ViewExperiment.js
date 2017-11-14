import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';

class ViewExperiment extends Component{
  render(){
    const {currentExperiment} = this.props;
    return (
      <Text> The Experiment ID is {currentExperiment.id}</Text>
      <Text> You will be paid {currentExperiment.price} for performing this experiment</Text>
      <Text> Short description of the experiment: {currentExperiment.description}</Text>
    );

  }
}

const mapStateToProps = ({ exp }) => {
  const {currentExperiment} = exp;
  return {currentExperiment};
};

export default connect(mapStateToProps)(ViewExperiment);
