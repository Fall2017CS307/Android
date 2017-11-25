import React, {Component} from 'react';
import {Text} from 'react-native';
import {connect} from 'react-redux';
import {getBatches} from '../actions';

class Dashboard extends Component {
  render() {
    const {id} = this.props;
    if(this.props.taskList == null){
      this.props.getBatches(id);
    return (
      <Text> This is your daashboard! </Text>
    );
  }
  else {
    return (
      <Text> Implement UI here </Text>
    );
  }
  }
  
}

const mapStateToProps = ({ userTasks, auth }) => {
  const {taskList} = userTasks;
  const {id} = auth;
  console.log(taskList);
  return {id, taskList};

};

export default connect(mapStateToProps, {getBatches})(Dashboard);
