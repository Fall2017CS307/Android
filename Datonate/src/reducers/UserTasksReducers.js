import {
  GET_BATCHES,
} from '../actions/types';

const INITIAL_STATE = {
  taskList: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_BATCHES:{
      console.log("IN LOL");
      return {...state, taskList: action.payload};
    }
    default:{
      //console.log("DEFAULT");
      return state;
    }
  }
}
