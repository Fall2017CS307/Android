import React, {Component} from 'react';
import {Text, ListView, View} from 'react-native';
import {connect} from 'react-redux';
import {getPastExps} from '../actions';
import ExperimentItem3 from './ExperimentItem3';


class PastExperimentList extends Component {

  renderRow(experiment) {
    //console.log(experiment);
    return <ExperimentItem3 experiment={experiment}/>;
  }

  render() {
    const {id}  = this.props;
    if(this.props.pastExpList == null) {
      this.props.getPastExps(id);
      console.log(this.props.pastExpList);
    }
    if(this.props.pastExpList != null){
      const ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 != r2
      });
      console.log("IN");
      this.dataSource = ds.cloneWithRows(this.props.pastExpList);
      return (
        <View style={{ backgroundColor: '#263238', height: '100%' }}>
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
