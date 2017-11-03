import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  REG_EMAIL_CHANGED,
  REG_PASSWORD_CHANGED,
  NUMBER_CHANGED,
  FIRST_NAME_CHANGED,
  LAST_NAME_CHANGED,
  REG_SUCCESS,
  REG_FAILURE
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  error: '',
  firstName: '',
  id: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN_USER_SUCCESS:
      return { ...state, password: '', id:action.payload};
    case LOGIN_USER_FAILURE:
      return { ...state, error: 'Authentication Failed.', password: '', loading: false };
    case FIRST_NAME_CHANGED:
      return { ...state, firstName: action.payload };
    case LAST_NAME_CHANGED:
      return { ...state, lastName: action.payload };
    case NUMBER_CHANGED:
      return { ...state, number: action.payload };
    case REG_EMAIL_CHANGED:
      return { ...state, regEmail: action.payload };
    case REG_PASSWORD_CHANGED:
      return {...state, regPassword: action.payload}
    case REG_SUCCESS:
      return {...staate, email: action.payload, password:'', regPassword:'', number:'', regEmail: '', regPassword: ''}
    case REG_FAILURE:
      return {...state, password:''}
    default:
      return state;
  }
}
