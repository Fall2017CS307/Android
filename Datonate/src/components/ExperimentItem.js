import React, {Component} from 'react';
import {Text, TouchableWithoutFeedback, View, LayoutAnimation, TouchableOpacity } from 'react-native';
import { Card, CardSection, Button } from './common';
import {connect} from 'react-redux';
import {selectExperiment} from '../actions';

class ExperimentItem extends Component{
  onSelectPress() {
    const {experiment} = this.props;
    this.props.selectExperiment(experiment);
  }
  renderDescription(){
    const { titleStyle, experimenttitle, experimentprice, select } = styles;
    const {experiment}=this.props;
      return (
        <Card>
        <CardSection>
          <Text style={experimenttitle}>
            { experiment.description }
          </Text>
        </CardSection>
        <CardSection>
          <Text style={experimentprice}>
          Experiment gives ${ experiment.price }
          </Text>
        </CardSection>
        <Button onPress={this.onSelectPress.bind(this)}>
          SELECT
        </Button>
        </Card>
      );
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

  },
  experimenttitle: {
    color: 'black',
    fontSize: 25
  },
  experimentprice: {
    color: 'black',
    fontSize: 18,
    textAlign: 'left',
  },

}

const mapStateToProps = ({ exp, auth }) => {
  const { experiments, proceedExp } = exp;
  const { id }= auth;
  console.log(exp.experiments);
  console.log(exp.proceedExp);
  console.log(auth.id);
  return {experiments, proceedExp, id};
}

export default connect(mapStateToProps, {selectExperiment})(ExperimentItem);
