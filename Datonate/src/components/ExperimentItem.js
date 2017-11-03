import React, {Component} from 'react';
import {Text, TouchableWithoutFeedback, View, LayoutAnimation } from 'react-native';
import { CardSection } from './common';
import * as actions from '../actions';

class ExperimentItem extends Component{
  renderDescription(){
    const {experiment}=this.props;
      return (
        <CardSection>
          <Text style={{ flex: 1, color: 'black', fontSize: 15 }}>
            { experiment.price }
          </Text>
        </CardSection>
      );
  }
  render() {
    const {titleStyle} = styles;
    const {description} = this.props.experiment;
    return (
    <View>
    <CardSection>
      <Text style={titleStyle}>
        {description}
      </Text>
    </CardSection>
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
