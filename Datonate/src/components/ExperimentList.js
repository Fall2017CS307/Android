import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ListView, View, Text} from 'react-native';
import ExperimentItem from './ExperimentItem';
import {viewExperiments} from '../actions';

class ExperimentList extends Component{

  renderRow(experiment) {
    return <ExperimentItem experiment={experiment}/>;
  }
  render(){
    const {id} = this.props;
    console.log(id);
    this.props.viewExperiments(id);
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
      <View style={{ backgroundColor: '#263238', flex: 1,
      justifyContent: 'center', backgroundColor: '#263238', alignItems: 'center' }}>
      <Text style={{ fontSize: 25, color: 'white', marginTop: '5%', marginBottom: '5%' }}>Experiments</Text>
      <ListView
        dataSource={this.dataSource}
        renderRow = {this.renderRow}
        />
      </View>
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
const mapStateToProps = ({ exp, auth }) => {
  const { experiments, proceedExp } = exp;
  const { id }= auth;
  console.log(exp.experiments);
  console.log(exp.proceedExp);
  console.log(auth.id);
  return {experiments, proceedExp, id};
}
export default connect(mapStateToProps, {viewExperiments})(ExperimentList);
