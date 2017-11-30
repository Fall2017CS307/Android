import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ListView, View, Text, DrawerLayoutAndroid, TouchableOpacity} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import ExperimentItem from './ExperimentItem';
import {viewExperiments, sortExperiments, logOutUser} from '../actions';
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
    //console.log(experiment);
    return <ExperimentItem experiment={experiment}/>;
  }
  onSelectSort() { // Add a parameter and check for type of sort
    const {experiments} = this.props;
    this.props.sortExperiments(experiments);
  }
  onSelectView() {
    Actions.experimentList();
  }
  onSelectDash() {
    Actions.userList();
  }
  onSelectPast() {
    Actions.pastUserList();
  }
  onSelectLogOut() {
    this.props.logOutUser();
    Actions.auth();
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
      if(this.props.isSortedByPrice === 'no'){
      console.log(this.props.experiments);
      this.dataSource = ds.cloneWithRows(this.props.experiments);
      console.log(this.dataSource);
      }
      else if(this.props.isSortedByPrice === 'yes') {
        this.dataSource = ds.cloneWithRows(this.props.sortedExperiments);
        console.log(this.dataSource);
      }
      var navigationView = (
        <View style={{flex: 1, backgroundColor: '#fff'}}>
          <Text style={{margin: 10, fontSize: 20, textAlign: 'left'}} onPress={this.onSelectView.bind(this)}>Experiments</Text>
          <Text style={{margin: 10, fontSize: 20, textAlign: 'left'}} onPress={this.onSelectDash.bind(this)}>My Experiments</Text>
          <Text style={{margin: 10, fontSize: 20, textAlign: 'left'}} onPress={this.onSelectPast.bind(this)}>Completed Experiments</Text>
          <Text style={{margin: 10, fontSize: 20, textAlign: 'left'}} onPress={this.onSelectLogOut.bind(this)}>Log out</Text>
        </View>
      );

      let data = [{
      value: 'Price',
    }, {
      value: 'Skill',
    }, {
      value: 'Random',
    }];

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
          <Dropdown
          label='Skill filter'
          data={data}
          containerStyle={{ width: 80, color: 'white' }}
          pickerStyle={{ marginTop: 22 }}
          textColor="black"
          onChangeText={this.onSelectSort.bind(this)}
          />
          <Dropdown
          label='Sort by'
          data={data}
          containerStyle={{ width: 80, color: 'white' }}
          pickerStyle={{ marginTop: 22 }}
          textColor="black"
          onChangeText={this.onSelectSort.bind(this)}
          />
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
      //<TouchableOpacity onPress={this.onSelectSort.bind(this)}><Text>Sort by price</Text></TouchableOpacity>

      <Text> Login Successful </Text>
      );
    }
}
const mapStateToProps = ({ exp, auth }) => {
  const { experiments, proceedExp, sortedExperiments, isSortedByPrice} = exp;
  const { id }= auth;
  console.log(experiments);
  //console.log(exp.proceedExp);
  //console.log(auth.id);
  return {experiments, proceedExp, id, sortedExperiments, isSortedByPrice};
}
export default connect(mapStateToProps, {viewExperiments, sortExperiments, logOutUser})(ExperimentList);
