import React, {Component} from 'react';
import {ListView, View, Text, DrawerLayoutAndroid, Picker, TouchableOpacity} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Fab } from 'native-base';
import {connect} from 'react-redux';
import {getBatches} from '../actions';
import ExperimentItem from './ExperimentItem';

class Dashboard extends Component {

  renderRow(experiment) {
    //console.log(experiment);
    return <ExperimentItem experiment={experiment}/>;
  }

  render() {
    const {id} = this.props;
    if(this.props.taskList == null){
      this.props.getBatches(id);
      console.log("in");
    }
  if(this.props.taskList != null) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 != r2
    });
    console.log("IN");
    this.dataSource = ds.cloneWithRows(this.props.taskList);
    return (
      <View style={{ backgroundColor: '#263238', paddingBottom: '30%' }}>
      <Header>
          <Left>
            <Button transparent>
              <Icon name='list' />
            </Button>
          </Left>
          <Body>
            <Title style={{ fontSize: 20 }}>My Experiments</Title>
          </Body>
        </Header>
        <View style={{ alignItems: 'center' }}>
        <ListView style={{ width: '95%' }}
          dataSource={this.dataSource}
          renderRow = {this.renderRow}
          />
        </View>
      </View>
    );
  }
  else {
    return (
      <Text> Dashboard is empty </Text>
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
