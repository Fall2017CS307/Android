import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginPage from './components/LoginPage';
import Registration from './components/Registration';
import ExperimentList from './components/ExperimentList';
import ViewExperiment from './components/ViewExperiment';
import Dashboard from './components/Dashboard';
import PastExperimentList from './components/PastExperimentList';
import TextAnnotation from './components/TextAnnotation';
import ImageAnnotation from './components/ImageAnnotation';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar = {true}>
        <Scene key="auth">
          <Scene key="login" component={LoginPage} titleStyle={{alignSelf: 'center'}}  title="Please Login" />
          <Scene key="register" component={Registration} titleStyle={{marginLeft: 80}} title="Please Register" />
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
          titleStyle={{marginLeft: 70}}
          title="Experiment Details"
          />
          <Scene key="userList"
          component={Dashboard}
          titleStyle={{marginLeft: 80}}
          title="My Experiments"
          />
          <Scene key="pastUserList"
          component={PastExperimentList}
          titleStyle={{marginLeft: 45}}
          title="Completed Experiments"
          />
          <Scene key="textAnnotation"
          component={TextAnnotation}
          titleStyle={{marginLeft: 75}}
          title="Text Annotation"
          />
          <Scene key="imageAnnotation"
          component={ImageAnnotation}
          titleStyle={{marginLeft: 75}}
          title="Image Annotation"
          />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
