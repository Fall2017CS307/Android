import React, {Component} from 'react';
import {Text} from 'react-native';
import {connect} from 'react-redux';
import {getPastExps} from '../actions';

class PastExperimentList extends Component {
  render() {
    if(this.props.pastExpList == null) {
      const {id}  = this.props;
      this.props.getPastExps(id);
      console.log(this.props.pastExpList);
    }
    if(this.props.pastExpList != null){
      console.log(this.props.pastExpList);
      return (
        <Text> Dashboard is not empty </Text>
      );
    }
    else {
      return (
        <Text> Empty data </Text>
      )
    }
  }
}

const mapStateToProps = ({ userTasks, auth }) => {
  const {id} = auth;
  const {pastExpList} = userTasks;
  console.log(pastExpList);
  return {id, pastExpList};
};

export default connect(mapStateToProps, {getPastExps})(PastExperimentList);
