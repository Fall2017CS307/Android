import {
  STORE_FILES,
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
            //console.log(res);
            var batchID = res.batch_id;
            console.log(batchID);
            var qur1 = "http://datonate.com:5000/api/" + batchID + "/getBatch";
            fetch(qur1)
            .then(function(response){
                response.text().then(function(resText){
                  var res1 = JSON.parse(resText);
                  console.log(res1);
                  var files = res1.files;
                  console.log(files);
                  storeFiles(dispatch, files);
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
