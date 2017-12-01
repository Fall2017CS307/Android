import { Actions } from 'react-native-router-flux';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  FIRST_NAME_CHANGED,
  LAST_NAME_CHANGED,
  NUMBER_CHANGED,
  REG_PASSWORD_CHANGED,
  REG_EMAIL_CHANGED,
  REG_SUCCESS,
  REG_FAILURE,
  LOG_OUT_USER,
  EMAIL_CHANGED_RESET,
  REG_COUNTRY_CHANGED,
  REG_GENDER_CHANGED,
  REG_SKILL_CHANGED
} from './types';

var country = '';
var gender;
var skill;
export const emailChanged = (text) => {
    return {
      type: EMAIL_CHANGED,
      payload: text
    };
};

export const firstNameChanged = (text) => {
  return {
    type: FIRST_NAME_CHANGED,
    payload: text
  };
};

export const lastNameChanged = (text) => {
  return {
    type: LAST_NAME_CHANGED,
    payload: text
  };
}

export const numberChanged = (text) => {
  return(dispatch)=>{
  let newText = '';
  let numbers = '0123456789';

  for (var i=0; i < text.length; i++) {
      if(numbers.indexOf(text[i]) > -1 ) {
            newText = newText + text[i];
        }
        else {
           // your call back function
            alert("Please enter numbers only");
          }
          changeNumber(dispatch, newText);
     // console.log(this.state);
   }
 };
};


const changeNumber = (dispatch, newText) => {
  dispatch({
    type: NUMBER_CHANGED,
    payload: newText
  });
}

export const regEmailChanged = (text) => {
  return {
    type: REG_EMAIL_CHANGED,
    payload: text
  };
};

export const regPassWordChanged = (text) => {
  return {
    type: REG_PASSWORD_CHANGED,
    payload: text
  };
};

export const registerUser = ({firstName, lastName, number, regEmail, regPassword, regCountry, regGender, regSkill}) => {
  return(dispatch) => {
    var bodyToSend = {
      firstname: firstName,
      lastname: lastName,
      email: regEmail,
      password: regPassword,
      phone: number,
    }
    getGender(regGender);
    if(gender != 2)
      bodyToSend.gender = gender;
    getSkill(regSkill);
    if(skill != -1)
      bodyToSend.skill = skill;
    console.log(regGender);
    console.log(regSkill);
    console.log(gender);
    console.log(skill);
    console.log(bodyToSend);

    var request = new Request('http://datonate.com:5000/api/register', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bodyToSend)
    });
    fetch(request)
    .then(function(response) {


      // if(response.status == 200) {
      //   var responseString = response._bodyText.toString();
      //   if (responseString.includes('200')) {
      //     Actions.experimentList();
      //     registrationSucess(dispatch, regEmail);
      //     alert("Registration Successful");
      //   }
      //   else {
      //     alert("Registration Failed");
      //   }
      // }
      // else throw new Error('API fault detected.');
      if(response.status == 200){
        console.log(response);
      response.text().then(function(responseText){
         var toCheck = JSON.parse(responseText);
         if(toCheck.status == 200){
           Actions.experimentList();
                console.log(toCheck);
               registrationSucess(dispatch, regEmail);
                alert("Registration Successful");
         }
         else {
           alert("Registration Failed");
           registrationFailure(dispatch);
         }

       }).catch(function(error){
         alert("Error");
       });
      }else {
        throw new Error('API fault detected.');
      }
  })
    .catch(function(error){
      //console.log(this.state.firstName);
      alert("Error caught");
      console.log(error);
    });
  };
};
function getGender(regGender) {
  // switch(regGender) {
  //   case "Male":
  //     gender = 0;
  //   case "Female":
  //     gender = 1;
  //   default:
  //     gender = 2;
  // }
  if(regGender == "Male")
    gender = 0;
  else if(regGender == "Female")
    gender = 1;
  else
    gender = 2;
}

function getSkill(regSkill) {
  console.log(regSkill);

  if(regSkill ==  "No preference")
    skill = 0;
  else if(regSkill == "High school")
    skill = 1;
  else if(regSkill == "Bachelors")
    skill = 2;
  else if(regSkill == "Masters")
    skill = 3;
  else if(regSkill == "PHD")
    skill = 4;
  else {
    skill = -1;
  }
}

function getCountry(regCountry) {
  switch (regCountry) {
    case 'Afghanistan':
      country = 'AF';
    case 'Åland Islands':
      country = 'AX';
    case 'Albania':
      country = 'Algeria';
    default:
      country = '';
  }
}

const registrationSucess = (dispatch, regEmail) => {
    return {
      type: REG_SUCCESS,
      payload: regEmail
    }
};

const registrationFailure = (dispatch) => {
    return {
      type: REG_FAILURE,
    }
};

export const passwordChanged = (text) => {
    return {
      type: PASSWORD_CHANGED,
      payload: text,
    };
};

export const loginUser = ({email, password}) => {
  return(dispatch) => {
    var myRequest = new Request('http://datonate.com:5000/api/login', {method: 'POST', body: JSON.stringify({
        email: email,
        password: password
        })
      });
      console.log(myRequest);
      // fetch(myRequest)
      // .then(function(response) {
      //     console.log(response);
      //     if(response.status == 200) {
      //       var responseString = response._bodyText.toString();
      //       if (responseString.includes('200')){
      //         Actions.experimentList();
      //         loginUserSuccess(dispatch);
      //
      //       }
      //       else{
      //         alert("Failure");
      //         loginUserFailure(dispatch);
      //       }
      //     }
      //     else throw new Error('API fault detected.');
      //   })
      // .then(function(response) {
      //     console.debug(response);
      //   })
      // .catch(function(error) {
      //     console.log(error);
      //   });
      fetch(myRequest)
      .then(function(response) {

        console.log(response);
        // if(response.status == 200) {
        //   var responseString = response._bodyText.toString();
        //   if (responseString.includes('200')) {
        //     Actions.experimentList();
        //     registrationSucess(dispatch, regEmail);
        //     alert("Registration Successful");
        //   }
        //   else {
        //     alert("Registration Failed");
        //   }
        // }
        // else throw new Error('API fault detected.');
        if(response.status == 200){
          //console.log(response);
        response.text().then(function(responseText){
           var toCheck = JSON.parse(responseText);
           console.log(toCheck);
           if(toCheck.status == 200){
             Actions.experimentList();
                  //console.log(toCheck);
                  var id = toCheck.id;
                 loginUserSuccess(dispatch, id);
                  alert("Login Successful");
           }
           else {
             alert("Username or password is incorrect.");
             loginUserFailure(dispatch);
           }

         }).catch(function(error){
           console.log(error);
           alert("Error");
         });
        }else {
          throw new Error('API fault detected.');
        }
    })
      .catch(function(error){
        //console.log(this.state.firstName);
        alert("Error caught");
        console.log(error);
      });
  };
};

const loginUserSuccess = (dispatch, id) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: id
  });
}

const loginUserFailure = (dispatch) => {
  dispatch({
    type: LOGIN_USER_FAILURE
  });
}

export const logOutUser = () => {
  return {
    type: LOG_OUT_USER,
  };
}

export const emailChangedReset = (text) => {
  return {
    type: EMAIL_CHANGED_RESET,
    payload: text
  };
}

export const regCountryChanged = (text) => {
    return {
      type: REG_COUNTRY_CHANGED,
      payload: text
    };
};

export const regGenderChanged = (text) => {
    console.log(text);
    return {
      type: REG_GENDER_CHANGED,
      payload: text
    };
};

export const regSkillChanged = (text) => {
    return {
      type: REG_SKILL_CHANGED,
      payload: text
    };
};
