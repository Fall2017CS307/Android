import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ListView, View, Text, DrawerLayoutAndroid, Picker, TouchableOpacity} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Fab } from 'native-base';
import ExperimentItem from './ExperimentItem';
import {viewExperiments, sortExperiments} from '../actions';
import { Actions } from 'react-native-router-flux';

import { Dropdown } from 'react-native-material-dropdown';

class ExperimentList extends Component{

  componentDidMount() {
    const {id} = this.props;
    console.log(this.props);
    this.props.viewExperiments(id);
    console.log("After Fetch");
  }

  renderRow(experiment) {
    console.log(experiment);
    return <ExperimentItem experiment={experiment}/>;
  }
  onSelectSort() {
    const {experiments} = this.props;
    this.props.sortExperiments(experiments);
  }
  onSelectView() {
    Actions.experimentList();
  }
  onSelectDash() {
    Actions.userList();
  }
  render(){

    console.log(this.props);
    const {id} = this.props;
    const {experiments} = this.props;
    //console.log(id);
    //this.props.viewExperiments(id);
    //console.log(this.props.proceedExp);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 != r2
    });
    //console.log("Print kar le bro");
    if (this.props.experiments == null) {
        this.props.viewExperiments(id);
        console.log("IN");
    }
    if(this.props.experiments !== null){
      //console.log("Printing 55");
      console.log(this.props.experiments);
      this.dataSource = ds.cloneWithRows(this.props.experiments);
      console.log(this.dataSource);
      var navigationView = (
        <View style={{flex: 1, backgroundColor: '#fff'}}>
          <Text style={{margin: 10, fontSize: 20, textAlign: 'left'}} onPress={this.onSelectView.bind(this)}>Experiments</Text>
          <Text style={{margin: 10, fontSize: 20, textAlign: 'left'}} onPress={this.onSelectDash.bind(this)}>My Experiments</Text>
          <Text style={{margin: 10, fontSize: 20, textAlign: 'left'}}>Log out</Text>
        </View>
      );

      return(
    <DrawerLayoutAndroid
     drawerWidth={300}
     drawerPosition={DrawerLayoutAndroid.positions.Left}
     renderNavigationView={() => navigationView}>
      <View style={{ backgroundColor: '#263238', paddingBottom: '30%' }}>
      <Header>
          <Left>
            <Button transparent>
              <Icon name='list' />
            </Button>
          </Left>
          <Body>
            <Title style={{ fontSize: 20 }}>Experiments</Title>
          </Body>
          <Right>
            <TouchableOpacity onPress={this.onSelectSort.bind(this)}><Text>Sort by price</Text></TouchableOpacity>
          </Right>
        </Header>
        <View style={{ alignItems: 'center' }}>
        <ListView style={{ width: '95%' }}
          dataSource={this.dataSource}
          renderRow = {this.renderRow}
          />
        </View>
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
  console.log(experiments);
  //console.log(exp.proceedExp);
  //console.log(auth.id);
  return {experiments, proceedExp, id};
}
export default connect(mapStateToProps, {viewExperiments, sortExperiments})(ExperimentList);
