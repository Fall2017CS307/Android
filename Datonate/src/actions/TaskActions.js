import {
  STORE_FILES,
  DESC_CHANGED,
  UPDATE_FILES
} from '../actions/types';
import { Actions } from 'react-native-router-flux';

export const assignExperiment = (userID, experimentID) => {
  console.log("IN 1");
  return (dispatch) => {
    var qur = "http://datonate.com:5000/api/" + userID + "/assign/" + experimentID;
    fetch(qur)
    .then(function(response){
        response.text().then(function(responseText){
          var res = JSON.parse(responseText);
          if(res.status == 200){
            console.log(res);
            var batchID = res.batch_id;
            console.log(batchID);
            var qur1 = "http://datonate.com:5000/api/" + batchID + "/getBatch";
            console.log(qur1);
            fetch(qur1)
            .then(function(response){
                response.text().then(function(resText){
                  var res1 = JSON.parse(resText);
                  console.log(res1);
                  var files = res1.files;
                  console.log(files);
                  storeFiles(dispatch, files);
                  Actions.imageAnnotation();
                  alert("Files stored in state!")
                })
            }).catch(function(error){
              console.log(error);
            });
          }

        })
    }).catch(function(error){
      console.log(error);
    });
  };
};

const storeFiles = (dispatch, files) => {
  dispatch ({
    type: STORE_FILES,
    payload: files
  });
};

export const descChanged = (text) => {
  return {
    type: DESC_CHANGED,
    payload: text
  };
};

export const changeFiles = (files) => {
  return (dispatch) => {
    files.splice(0, 1);
    updateFiles(dispatch, files);
  };
};

const updateFiles = (dispatch, files) => {
  console.log(files);
  dispatch ({
    type: UPDATE_FILES,
    payload: files
  });
};
