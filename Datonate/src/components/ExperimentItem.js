import React, {Component} from 'react';
import {Text, TouchableWithoutFeedback, View, LayoutAnimation } from 'react-native';
import { Card, CardSection } from './common';
import {connect} from 'react-redux';
import {selectExperiment} from '../actions';

class ExperimentItem extends Component{
  renderDescription(){
    const { titleStyle } = styles;
    const {experiment}=this.props;
      return (
        <Card>
        <CardSection>
          <Text>
          { experiment.description }
          </Text>
        </CardSection>
        <CardSection>
          <Text>
          { experiment.price }
          </Text>
        </CardSection>
        </Card>
      );
  }
  onSelectPress() {
    const {id} = this.props.experiment;
    this.props.selectExperiment(id);
  }
  render() {
    const {titleStyle} = styles;
    const {description} = this.props.experiment;
    return (
    <View>

    {this.renderDescription()}
    </View>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
    height: '4%',
    marginBottom: '2%',
    color: 'black',

  }
}

export default ExperimentItem;
