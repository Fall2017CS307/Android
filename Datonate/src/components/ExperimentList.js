import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ListView, View, Text, DrawerLayoutAndroid, TouchableOpacity} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import ExperimentItem from './ExperimentItem';
import {viewExperiments, sortExperimentsByPrice, sortExperimentsByTime, logOutUser, filterExperiments} from '../actions';
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
  onSortSelect(text) { // Add a parameter and check for type of sort
    const {experiments} = this.props;
    const {id} = this.props;
    if(text == "Price")
      this.props.sortExperimentsByPrice(experiments);
    else if(text == "Time")
      this.props.sortExperimentsByTime(id, experiments);
    else {
      this.props.viewExperiments(id);
    }
  }
  onFilterSelect(text) { // Add a parameter and check for type of sort
    const {experiments} = this.props;
    const {id} = this.props;
    if(text == "High school" || text == "Bachelors" || text=="Masters" || text=="PHD")
      this.props.filterExperiments(id, text);
    else {
      this.props.viewExperiments(id);
    }
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
    }
    if(this.props.experiments !== null){
      //console.log("Printing 55");
      if(this.props.isSortedByPrice === 'yes')
        this.dataSource = ds.cloneWithRows(this.props.sortedExperimentsByPrice);
      else if(this.props.isSortedByTime === 'yes') {
        console.log(this.props.isSortedByTime);
        this.dataSource = ds.cloneWithRows(this.props.sortedExperimentsByTime);
      }
      else if(this.props.isFilteredLevel1 === 'yes') {
        this.dataSource = ds.cloneWithRows(this.props.filterExperimentsLevel1);
      }
      else if(this.props.isFilteredLevel2 === 'yes') {
        this.dataSource = ds.cloneWithRows(this.props.filterExperimentsLevel2);
      }
      else if(this.props.isFilteredLevel3 === 'yes') {
        this.dataSource = ds.cloneWithRows(this.props.filterExperimentsLevel3);
      }
      else if(this.props.isFilteredLevel4 === 'yes') {
        this.dataSource = ds.cloneWithRows(this.props.filterExperimentsLevel4);
      }
      else {
        this.dataSource = ds.cloneWithRows(this.props.experiments);
      }
      var navigationView = (
        <View style={{flex: 1, backgroundColor: '#fff'}}>
          <Text style={{margin: 10, fontSize: 20, textAlign: 'left'}} onPress={this.onSelectView.bind(this)}>Experiments</Text>
          <Text style={{margin: 10, fontSize: 20, textAlign: 'left'}} onPress={this.onSelectDash.bind(this)}>My Experiments</Text>
          <Text style={{margin: 10, fontSize: 20, textAlign: 'left'}} onPress={this.onSelectPast.bind(this)}>Completed Experiments</Text>
          <Text style={{margin: 10, fontSize: 20, textAlign: 'left'}} onPress={this.onSelectLogOut.bind(this)}>Log out</Text>
        </View>
      );

      let sortData = [{
      value: 'Price',
    }, {
      value: 'Time',
    }, {
      value: 'None',
    }];
    let filterData = [{
      value: 'No preference',
    }, {
      value: 'High school',
    }, {
      value: 'Bachelors',
    }, {
      value: 'Masters',
    }, {
      value: 'PHD',
    }];

      return(
    <DrawerLayoutAndroid
     drawerWidth={300}
     drawerPosition={DrawerLayoutAndroid.positions.Left}
     renderNavigationView={() => navigationView}>
      <View style={{ backgroundColor: '#263238', paddingBottom: '80%' }}>
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
          label='Filter by'
          data={filterData}
          containerStyle={{ width: 80 }}
          baseColor="white"
          pickerStyle={{ marginTop: 22 }}
          textColor="black"
          onChangeText={this.onFilterSelect.bind(this)}
          />
          <Dropdown
          label='Sort by'
          data={sortData}
          containerStyle={{ width: 80 }}
          baseColor="white"
          pickerStyle={{ marginTop: 22 }}
          textColor="black"
          onChangeText={this.onSortSelect.bind(this)}
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
  const { experiments, proceedExp, sortedExperimentsByPrice, sortedExperimentsByTime, isSortedByPrice, isSortedByTime, isFilteredLevel1, isFilteredLevel2, isFilteredLevel3, isFilteredLevel4, filterExperimentsLevel1, filterExperimentsLevel2, filterExperimentsLevel3, filterExperimentsLevel4} = exp;
  const { id }= auth;
  console.log(experiments);
  //console.log(exp.proceedExp);
  //console.log(auth.id);
  return {experiments, proceedExp, id, sortedExperimentsByPrice, sortedExperimentsByTime, isSortedByPrice, isSortedByTime, isFilteredLevel1, isFilteredLevel2, isFilteredLevel3, isFilteredLevel4,  filterExperimentsLevel2, filterExperimentsLevel3, filterExperimentsLevel4, filterExperimentsLevel1};
}
export default connect(mapStateToProps, {viewExperiments, sortExperimentsByPrice, sortExperimentsByTime, logOutUser, filterExperiments})(ExperimentList);
