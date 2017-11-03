import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ListView, View, Text} from 'react-native';
import ExperimentItem from './ExperimentItem';
import {viewExperiments} from '../actions';

class ExperimentList extends Component{
  componentWillMount() {
    this.props.viewExperiments();

  }
  renderRow(experiment) {
    return <ExperimentItem experiment={experiment}/>;
  }
  render(){
    console.log(this.props.proceedExp);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 != r2
    });
    //console.log("Print kar le bro");
    if(this.props.experiments!==null){
      //console.log("Printing 55");
      //console.log(this.props.experiments.api);
      this.dataSource = ds.cloneWithRows(this.props.experiments);
      return(
      <ListView
        dataSource={this.dataSource}
        renderRow = {this.renderRow}
        />
      );
    }
    return(
      // <ListView
      //   dataSource={this.dataSource}
      //   renderRow = {this.renderRow}
      //   />
      <Text> TESaaT </Text>
      );
    }
}
const mapStateToProps = ({ exp }) => {
  const { experiments, proceedExp } = exp;
  console.log(exp.experiments);
  console.log(exp.proceedExp);
  return {experiments, proceedExp};
}
export default connect(mapStateToProps, {viewExperiments})(ExperimentList);
