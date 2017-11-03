import React, {Component} from 'react';
import {ListView, Text, View} from 'react-native';

class ExperimentList extends Component {
  //  componentWillMount() {
  //    const ds = new ListView.DataSource({
  //      rowHasChanged: (r1, r2) => r1!=r2
  //    });
  //    this.dataSource = ds.cloneWithRows(this.props.experiments);
  //    //fetch API to get experiments
  //    //Call method for every JSON object to pass props for display
   //
  //  }
  //  renderRow(experiment) {
  //         return <ExperimentItem experiment={experiment}>;
  //  }
   render() {
     return (
      //  <ListView>
      //    dataSource = {this.dataSource}
      //    renderRow = {this.renderRow}
      // </ListView>
      <View>
        <Text> HI </Text>
      </View>
    );
  }

}

export default ExperimentList;
