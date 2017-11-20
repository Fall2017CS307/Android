import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';
import { Button } from './common';
import {assignExperiment} from '../actions';

class ViewExperiment extends Component{
  onSelectPress() {
    const { currentExperiment, id } = this.props;
    this.props.assignExperiment(id, currentExperiment.id);
  }
  render(){

    //console.log(this.props);
    const {currentExperiment} = this.props;
    return (
      <View>
      <Text> The Experiment ID is {currentExperiment.id}</Text>
      <Text> You will be paid {currentExperiment.price} for performing this experiment</Text>
      <Text> Short description of the experiment: {currentExperiment.description}</Text>
      <Button onPress={this.onSelectPress.bind(this)}>
        Start Task
      </Button>
      </View>
    );

  }
}

const mapStateToProps = ({ exp, auth }) => {
  const {currentExperiment} = exp;
  const {id} = auth;
  //console.log(currentExperiment);
  return {currentExperiment, id};

};

export default connect(mapStateToProps, {assignExperiment})(ViewExperiment);
