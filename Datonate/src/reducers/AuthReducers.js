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
  REG_FAILURE,
  LOG_OUT_USER,
  EMAIL_CHANGED_RESET,
  REG_COUNTRY_CHANGED,
  REG_GENDER_CHANGED,
  REG_SKILL_CHANGED,
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  error: '',
  firstName: '',
  id: '',
  regCountry: '',
  regSkill: '',
  regGender: ''
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
    case LOG_OUT_USER:
      return {...state, password:'', id:' '}
    case EMAIL_CHANGED_RESET:
      return {...state, userEmail:action.payload}
    case REG_COUNTRY_CHANGED:
      return {...state, regCountry:action.payload}
    case REG_GENDER_CHANGED:
      return {...state, regGender:action.payload}
    case REG_SKILL_CHANGED:
      return {...state, regSkill:action.payload}
    default:
      return state;
  }
}
