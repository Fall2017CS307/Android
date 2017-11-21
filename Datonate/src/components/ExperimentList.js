import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ListView, View, Text, DrawerLayoutAndroid} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import ExperimentItem from './ExperimentItem';
import {viewExperiments} from '../actions';
import { Actions } from 'react-native-router-flux';

class ExperimentList extends Component{

  componentDidMount() {
    const {id} = this.props;
    console.log(this.props);
    this.props.viewExperiments(id);
    console.log("After Fetch");
  }

  renderRow(experiment) {
    return <ExperimentItem experiment={experiment}/>;
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
      //console.log(this.props.experiments.api);
      this.dataSource = ds.cloneWithRows(this.props.experiments);
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
      <View style={{ backgroundColor: '#263238' }}>
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
            <Button transparent>
              <Icon name='funnel' /><Text style={{ fontSize: 15, color: 'white' }}>  Filter</Text>
            </Button>
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
  //console.log(exp.experiments);
  //console.log(exp.proceedExp);
  //console.log(auth.id);
  return {experiments, proceedExp, id};
}
export default connect(mapStateToProps, {viewExperiments})(ExperimentList);
