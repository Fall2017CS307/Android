import React, {Component} from 'react';
import {Text, TouchableWithoutFeedback, View, LayoutAnimation, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Icon, Left, Body, Right } from 'native-base';
import { CardSection, Button } from './common'; //Card
import {connect} from 'react-redux';
import {selectExperiment} from '../actions';

class ExperimentItem extends Component{
  onSelectPress() {
    const {experiment} = this.props;
    console.log("IN SEL");
    this.props.selectExperiment(experiment);
  }
  renderDescription(){
    const { titleStyle, experimenttitle, experimentprice, select } = styles;
    const {experiment}=this.props;
      return (
        <View>
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Body>
                  <Text style={{ fontSize: 22, color: 'black' }}>{experiment.description}{"\n"}</Text>
                
                </Body>
              </Left>
            </CardItem>
            <CardItem style={{ backgroundColor: '#f4f4f4' }}>
              <Left>
                <Text>
                  <Icon active name="cash" style={{ fontSize: 19, color: '#85bb65' }} />
                  <Text style={{ fontSize: 18, color: 'black' }}>  ${ experiment.price }</Text>
                </Text>
              </Left>
              <Body>
                <TouchableOpacity onPress={this.onSelectPress.bind(this)}>
                  <Text>
                    <Text>     </Text>
                    <Icon active name="play" style={{ fontSize: 19, color: '#007FFF' }} />
                    <Text style={{ fontSize: 18, color: '#007FFF' }}>  Start</Text>
                  </Text>
                </TouchableOpacity>
              </Body>
              <Right>
                  <Text>
                    <Icon active name="time" style={{ fontSize: 19, color: '#FFCC00' }} />
                    <Text> </Text>
                    <Text style={{ fontSize: 18, color: 'black' }}>11/28</Text>
                  </Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
        </View>
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

/*
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
*/

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
  //console.log(exp.experiments);
  //console.log(exp.proceedExp);
  //console.log(auth.id);
  return {experiments, proceedExp, id};
}

export default connect(mapStateToProps, {selectExperiment})(ExperimentItem);
