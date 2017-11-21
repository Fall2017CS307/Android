import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginPage from './components/LoginPage';
import Registration from './components/Registration';
import ExperimentList from './components/ExperimentList';
import ViewExperiment from './components/ViewExperiment';
import Dashboard from './components/Dashboard';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar = {true}>
        <Scene key="auth">
          <Scene key="login" component={LoginPage} titleStyle={{alignSelf: 'center'}}  title="Please Login" />
          <Scene key="register" component={Registration} titleStyle={{alignSelf: 'center'}} title="Please Register" />
        </Scene>
        <Scene key="main">
          <Scene key="experimentList"
          component={ExperimentList}
          titleStyle={{alignSelf: 'center'}}
          title="Experiments available"
          hideNavBar= {true}
          />
          <Scene key="viewExperiment"
          component={ViewExperiment}
          titleStyle={{alignSelf: 'center'}}
          title="Experiment Details"
          />
          <Scene key="userList"
          component={Dashboard}
          titleStyle={{alignSelf: 'center'}}
          title="My Tasks"
          />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
