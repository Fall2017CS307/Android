import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ListView, View, Text, DrawerLayoutAndroid} from 'react-native';
import ExperimentItem from './ExperimentItem';
import {viewExperiments} from '../actions';

class ExperimentList extends Component{

  componentDidMount(){
    const {id} = this.props;
    console.log(this.props);
    this.props.viewExperiments(id);
    console.log("After Fetch");
  }

  renderRow(experiment) {
    return <ExperimentItem experiment={experiment}/>;
  }
  render(){
    console.log(this.props);
    const {id} = this.props;
    const {experiments} = this.props;
    //console.log(experiments);
    //console.log(id);
    //console.log(this.props.proceedExp);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 != r2
    });
    if(this.props.experiments == null){
      this.props.viewExperiments(id);
      console.log("IN");
    }
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
      <View>
       <Text style={{ fontSize: 25, color: 'black', marginTop: '5%', marginBottom: '5%' }}>Experiments</Text>
      <ListView
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
      <Text> TESaaT </Text>
      );
    }
}
const mapStateToProps = ({ exp, auth }) => {
  const { experiments, proceedExp } = exp;
  const { id }= auth;
  //console.log(exp.experiments);
  //console.log(exp.proceedExp);
  //console.log(auth.id);
  return {experiments, proceedExp, id};
}
export default connect(mapStateToProps, {viewExperiments})(ExperimentList);
