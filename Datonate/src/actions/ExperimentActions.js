import {
  PASS_EXPERIMENTS,
  VIEW_EXPERIMENT,
  SORT_EXPERIMENTS_PAY,
  SORT_EXPERIMENTS_TIME,
  FILTER_EXPERIMENTS_LEVEL1,
  FILTER_EXPERIMENTS_LEVEL2,
  FILTER_EXPERIMENTS_LEVEL3,
  FILTER_EXPERIMENTS_LEVEL4,
  STORE_BALANCE,
  CLEAR_EXPERIMENTS
} from '../actions/types';
import { Actions } from 'react-native-router-flux';

export const viewExperiments = (id) => {
  return(dispatch) => {
    //console.log(id);
  var qur = "http://datonate.com:5000/api/getExperiments/" + id;
  console.log(qur);

  fetch(qur)
  .then(function(response){
    response.text().then(function(responseText){
      console.log(responseText);
      //console.log("Error ke Pehle");
      passExperiments(dispatch, JSON.parse(responseText).experiments);
      //console.log("Error ke baad");
    })
  }).catch(function(error){
    console.log(error);
  });
  };
};

export const getBalance = (id) => {
    return (dispatch) => {
      var qur = "http://datonate.com:5000/api/userBalance/" + id;
      fetch(qur).
        then(function(response){
          response.text().then(function(responseText){
            var balance = JSON.parse(responseText).balance;
            storeBalance(dispatch, balance);
          })
        })
        .catch(function(response){

        });
    }
};

const storeBalance = (dispatch, balance) => {
  dispatch ({
    type: STORE_BALANCE,
    payload: balance
  })
}

export const sortExperimentsByPrice = (experiments) => {
  return(dispatch) => {
    function compare(a,b) {
      if (a.price < b.price)
        return 1;
      if (a.price > b.price)
        return -1;
      return 0;
    }

    experiments.sort(compare);
    console.log(experiments);
    sortExpsByPrice(dispatch, experiments);
  };
};

const sortExpsByPrice = (dispatch, experiments) => {
  console.log(experiments);
  dispatch ( {
    type: SORT_EXPERIMENTS_PAY,
    payload: experiments
  });
}

export const sortExperimentsByTime = (id, experiments) => {
  return (dispatch) => {
    var request = new Request('http://datonate.com:5000/api/getExperiments/' + id, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sort: 'time'
      })
    });
    fetch(request)
    .then(function(response){
      response.text().then(function(responseText){
        var exps = JSON.parse(responseText).experiments;
        sortExpsByTime(dispatch, exps);
      })
    })
    .catch(function(error){
      console.log(error);
    });
  };
};

const sortExpsByTime = (dispatch, exps) => {
  dispatch({
    type: SORT_EXPERIMENTS_TIME,
    payload: exps
  });
};

export const filterExperiments = (id, text) => {
  return (dispatch) => {
    var bodyToSend = {};
    if(text == "High school")
      bodyToSend.education = 1;
    else if(text == "Bachelors")
      bodyToSend.education = 2;
    else if(text == "Masters")
      bodyToSend.education = 3;
    else if(text == "PHD")
      bodyToSend.education = 4;
    var request = new Request('http://datonate.com:5000/api/getExperiments/' + id, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bodyToSend)
    });
    fetch(request)
    .then(function(response){
      response.text().then(function(responseText){
        console.log()
        var exps = JSON.parse(responseText).experiments;
        if(text=="High school")
          filterLevel1(dispatch, exps);
        else if(text == "Bachelors")
          filterLevel2(dispatch, exps);
        else if(text == "Masters")
          filterLevel3(dispatch, exps);
        else if(text == "PHD")
          filterLevel4(dispatch, exps);
      })
    }).catch(function(error){
      console.log(error);
    });
  };
};

const filterLevel1 = (dispatch, exps) => {
  dispatch({
    type: FILTER_EXPERIMENTS_LEVEL1,
    payload: exps
  });
};
const filterLevel2 = (dispatch, exps) => {
  dispatch({
    type: FILTER_EXPERIMENTS_LEVEL2,
    payload: exps
  });
};
const filterLevel3 = (dispatch, exps) => {
  dispatch({
    type: FILTER_EXPERIMENTS_LEVEL3,
    payload: exps
  });
};
const filterLevel4 = (dispatch, exps) => {
  dispatch({
    type: FILTER_EXPERIMENTS_LEVEL4,
    payload: exps
  });
};

const passExperiments = (dispatch, response) => {
  //console.log(response);
  dispatch( {
    type: PASS_EXPERIMENTS,
    payload: response
  });
};

export const selectExperiment = (experiment) => {
  console.log(experiment);
  return(dispatch)=> {
    console.log("SE");
    addExpToState(dispatch, experiment);
    Actions.viewExperiment();
  };
};

export const clearExperiments = () => {
    return {
      type: CLEAR_EXPERIMENTS,
    }
}

const addExpToState = (dispatch, experiment) => {
  console.log("AETS");
  console.log(experiment);
  dispatch({
    type: VIEW_EXPERIMENT,
    payload: experiment
  });
};
