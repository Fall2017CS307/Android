import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ListView, View, Text, DrawerLayoutAndroid} from 'react-native';
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
      var navigationView = (
        <View style={{flex: 1, backgroundColor: '#fff'}}>
          <Text style={{margin: 10, fontSize: 20, textAlign: 'left'}}>Experiments</Text>
          <Text style={{margin: 10, fontSize: 20, textAlign: 'left'}}>Log out</Text>
        </View>
      );
      return(
    <DrawerLayoutAndroid
     drawerWidth={300}
     drawerPosition={DrawerLayoutAndroid.positions.Left}
     renderNavigationView={() => navigationView}>
      <View style={{ backgroundColor: '#263238', alignItems: 'center' }}>
       <Text style={{ fontSize: 35, color: 'white', marginTop: '8%', marginBottom: '5%', textAlign: 'center' }}>Experiments</Text>
      <ListView style={{ width: '95%'}}
        dataSource={this.dataSource}
        renderRow = {this.renderRow}
        />
      </View>
    </DrawerLayoutAndroid>
      );
    }
    return(
      // <ListView
      //   dataSource={this.dataSource}
      //   renderRow = {this.renderRow}
      //   />
      <Text> Login Successful </Text>
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
