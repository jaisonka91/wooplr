import { combineReducers } from 'redux';
import { apiData } from './reducers/apiData';

const allReducers = combineReducers({
  apiData
});

export default allReducers;
