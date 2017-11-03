import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ListView, View, Text} from 'react-native';
import ExperimentItem from './ExperimentItem';
import {viewExperiments} from '../actions';

class ExperimentList extends Component{
  componentWillMount() {
    this.props.viewExperiments();

  }
  renderRow(library) {
    return <ListItem experiment={experiment}/>;
  }
  render(){
    if(this.props.proceedExp==="go"){
      console.log(this.props.proceedExp);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 != r2
    });
    console.log("Print kar le bro");
    console.log(this.props.experiments);
    this.dataSource = ds.cloneWithRows(this.props.experiments);
    console.log(this.props.experiments);
    return(
      // <ListView
      //   dataSource={this.dataSource}
      //   renderRow = {this.renderRow}
      //   />
      <Text> TESaaT </Text>
      );
    }else {
      console.log(this.props.proceedExp);
      return (
        <View>
          <Text> Waiting for data </Text>
        </View>
      );
    }
  }
}
const mapStateToProps = ({ exp }) => {
  const { experiments, proceedExp } = exp;

  return {experiments};
}
export default connect(mapStateToProps, {viewExperiments})(ExperimentList);
